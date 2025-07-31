// ============================================================
// 🎯 GloHorizon Auth Service - Production Ready for Nuxt 3
// ============================================================

import {
    RegisterRequest,
    LoginRequest,
    OtpRequest,
    VerifyOtpRequest,
    AuthResponse,
    OtpResponse,
    UserProfile,
    UserInfo,
    BookingHistoryResponse,
    createAuthHeaders,
    handleApiError,
    formatPhoneNumber,
    validatePhoneNumber
} from '~/types/auth-api-types';

export class AuthService {
    private baseUrl: string;
    private tokenKey = 'auth-token';

    constructor(baseUrl = 'https://glohorizonapi.fly.dev/api') {
        this.baseUrl = baseUrl;
    }

    // ============================================================
    // 🔐 AUTHENTICATION METHODS
    // ============================================================

    /**
     * Register a new user
     */
    async register(data: RegisterRequest): Promise<AuthResponse> {
        try {
            // Validate and format phone number
            const phoneValidation = validatePhoneNumber(data.phoneNumber);
            if (!phoneValidation.isValid) {
                throw new Error('Invalid phone number format. Please use Ghana format (e.g., 0123456789)');
            }

            const payload = {
                ...data,
                phoneNumber: phoneValidation.formatted
            };

            const response = await $fetch<AuthResponse>(`${this.baseUrl}/auth/register`, {
                method: 'POST',
                body: payload
            });

            // Store token on successful registration
            console.log('🎉 Registration successful, storing token...');
            this.setToken(response.token);

            return response;
        } catch (error: any) {
            console.error('Registration error:', error);
            throw new Error(error.data?.message || error.message || 'Registration failed');
        }
    }

    /**
     * Login with email and password
     */
    async login(data: LoginRequest): Promise<AuthResponse> {
        try {
            const response = await $fetch<AuthResponse>(`${this.baseUrl}/auth/login`, {
                method: 'POST',
                body: data
            });

            // Store token on successful login
            console.log('🎉 Login successful, storing token...');
            this.setToken(response.token);

            return response;
        } catch (error: any) {
            console.error('Login error:', error);
            throw new Error(error.data?.message || error.message || 'Login failed');
        }
    }

    /**
     * Request OTP for existing user
     * Returns 404 if phone number not registered
     */
    async requestOtp(phoneNumber: string): Promise<OtpResponse> {
        try {
            // Validate and format phone number
            const phoneValidation = validatePhoneNumber(phoneNumber);
            if (!phoneValidation.isValid) {
                throw new Error('Invalid phone number format. Please use Ghana format (e.g., 0123456789)');
            }

            const response = await $fetch<OtpResponse>(`${this.baseUrl}/auth/request-otp`, {
                method: 'POST',
                body: { phoneNumber: phoneValidation.formatted }
            });

            return response;
        } catch (error: any) {
            console.error('OTP request error:', error);

            if (error.status === 404 || error.statusCode === 404) {
                throw new Error('Phone number not registered. Please create an account first.');
            }

            throw new Error(error.data?.message || error.message || 'Failed to send OTP');
        }
    }

    /**
     * Verify OTP and login
     */
    async verifyOtp(phoneNumber: string, otpCode: string): Promise<AuthResponse> {
        try {
            // Validate and format phone number
            const phoneValidation = validatePhoneNumber(phoneNumber);
            if (!phoneValidation.isValid) {
                throw new Error('Invalid phone number format.');
            }

            const response = await $fetch<AuthResponse>(`${this.baseUrl}/auth/verify-otp`, {
                method: 'POST',
                body: {
                    phoneNumber: phoneValidation.formatted,
                    otpCode
                }
            });

            // Store token on successful verification
            console.log('🎉 OTP verification successful, storing token...');
            this.setToken(response.token);

            return response;
        } catch (error: any) {
            console.error('OTP verification error:', error);

            if (error.status === 404 || error.statusCode === 404) {
                throw new Error('Phone number not found. Please register first.');
            }

            if (error.status === 401 || error.statusCode === 401) {
                throw new Error('Invalid OTP code. Please try again.');
            }

            if (error.status === 422 || error.statusCode === 422) {
                throw new Error('OTP has expired. Please request a new one.');
            }

            throw new Error(error.data?.message || error.message || 'OTP verification failed');
        }
    }

    /**
     * Logout user
     */
    async logout(): Promise<void> {
        try {
            const token = this.getToken();

            if (token) {
                // Try to call logout endpoint
                await $fetch(`${this.baseUrl}/auth/logout`, {
                    method: 'POST',
                    headers: createAuthHeaders(token)
                }).catch(() => {
                    // Ignore logout API errors - just clear token
                    console.warn('Logout API call failed, clearing token locally');
                });
            }
        } catch (error) {
            console.warn('Logout request failed:', error);
        } finally {
            this.clearToken();
        }
    }

    /**
     * Get current user profile
     */
    async getProfile(): Promise<UserProfile> {
        try {
            const token = this.getToken();
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await $fetch<UserProfile>(`${this.baseUrl}/user/profile`, {
                headers: createAuthHeaders(token)
            });

            return response;
        } catch (error: any) {
            console.error('Profile fetch error:', error);

            if (error.status === 401 || error.statusCode === 401) {
                this.clearToken();
                throw new Error('Session expired. Please login again.');
            }

            throw new Error(error.data?.message || error.message || 'Failed to fetch profile');
        }
    }

    /**
     * Get user booking history with stats
     */
    async getBookingHistory(): Promise<BookingHistoryResponse> {
        try {
            const token = this.getToken();
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await $fetch<BookingHistoryResponse>(`${this.baseUrl}/user/booking-history`, {
                headers: createAuthHeaders(token)
            });

            return response;
        } catch (error: any) {
            console.error('Booking history fetch error:', error);

            if (error.status === 401 || error.statusCode === 401) {
                this.clearToken();
                throw new Error('Session expired. Please login again.');
            }

            throw new Error(error.data?.message || error.message || 'Failed to fetch booking history');
        }
    }

    // ============================================================
    // 🔧 TOKEN MANAGEMENT (Nuxt 3 Cookie-based)
    // ============================================================

    setToken(token: string): void {
        try {
            // Use both methods for maximum compatibility
            if (process.client) {
                localStorage.setItem(this.tokenKey, token);
                console.log('✅ Token stored in localStorage');
            }

            // Also store in cookie for SSR
            const tokenCookie = useCookie(this.tokenKey, {
                default: () => null,
                httpOnly: false,
                secure: false, // Allow HTTP for development
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 // 24 hours
            });

            tokenCookie.value = token;
            console.log('✅ Token stored in cookie');
        } catch (error) {
            console.error('❌ Failed to store token:', error);
        }
    }

    getToken(): string | null {
        try {
            // Try localStorage first (most reliable on client)
            if (process.client) {
                const localToken = localStorage.getItem(this.tokenKey);
                if (localToken) {
                    console.log('🔍 Token retrieved from localStorage');
                    return localToken;
                }
            }

            // Fallback to cookie
            const tokenCookie = useCookie(this.tokenKey, {
                default: () => null
            });

            const token = tokenCookie.value;
            console.log('🔍 Token retrieved from cookie:', token ? 'Found' : 'Not found');
            return token;
        } catch (error) {
            console.error('❌ Failed to retrieve token:', error);
            return null;
        }
    }

    clearToken(): void {
        try {
            // Clear both localStorage and cookie
            if (process.client) {
                localStorage.removeItem(this.tokenKey);
                console.log('🗑️ Token cleared from localStorage');
            }

            const tokenCookie = useCookie(this.tokenKey);
            tokenCookie.value = null;
            console.log('🗑️ Token cleared from cookie');
        } catch (error) {
            console.error('❌ Failed to clear token:', error);
        }
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        const isExpired = this.isTokenExpired();
        const isAuth = !!token && !isExpired;

        console.log('🔐 Auth check:', {
            hasToken: !!token,
            isExpired,
            isAuthenticated: isAuth
        });

        return isAuth;
    }

    isTokenExpired(): boolean {
        const token = this.getToken();
        if (!token) return true;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const currentTime = Date.now() / 1000;

            return payload.exp < currentTime;
        } catch {
            return true;
        }
    }

    /**
     * Get current user info from token
     */
    getCurrentUser(): UserInfo | null {
        const token = this.getToken();
        if (!token || this.isTokenExpired()) return null;

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return {
                id: payload.sub || payload.id,
                firstName: payload.given_name || payload.firstName,
                lastName: payload.family_name || payload.lastName,
                email: payload.email,
                phoneNumber: payload.phoneNumber,
                role: payload.role,
                createdAt: payload.createdAt
            };
        } catch {
            return null;
        }
    }
}

// Export singleton instance
export const authService = new AuthService();
export default authService; 