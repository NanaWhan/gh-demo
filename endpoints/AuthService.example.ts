// ============================================================
// 🎯 GloHorizon Auth Service - Copy to Frontend Project
// ============================================================

import {
    RegisterRequest,
    LoginRequest,
    OtpRequest,
    VerifyOtpRequest,
    AuthResponse,
    OtpResponse,
    UserProfile,
    BookingHistoryResponse,
    createAuthHeaders,
    handleApiError
} from './auth-api-types';

export class AuthService {
    private baseUrl: string;
    private tokenKey = 'glohorizon_auth_token';

    constructor(baseUrl = 'http://localhost:5080/api') {
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
            const response = await fetch(`${this.baseUrl}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Registration failed');
            }

            // Auto-store token on successful registration
            this.setToken(result.token);

            return result;
        } catch (error) {
            throw handleApiError(error);
        }
    }

    /**
     * Login with email and password
     */
    async login(data: LoginRequest): Promise<AuthResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Login failed');
            }

            // Auto-store token on successful login
            this.setToken(result.token);

            return result;
        } catch (error) {
            throw handleApiError(error);
        }
    }

    /**
     * Request OTP for existing user
     * Returns 404 if phone number not registered
     */
    async requestOtp(data: OtpRequest): Promise<OtpResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/auth/request-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.status === 404) {
                throw new Error('Phone number not registered. Please create an account first.');
            }

            if (!response.ok) {
                throw new Error(result.message || 'Failed to send OTP');
            }

            return result;
        } catch (error) {
            throw handleApiError(error);
        }
    }

    /**
     * Verify OTP and login
     */
    async verifyOtp(data: VerifyOtpRequest): Promise<AuthResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/auth/verify-otp`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.status === 404) {
                throw new Error('Phone number not found. Please register first.');
            }

            if (!response.ok) {
                throw new Error(result.message || 'OTP verification failed');
            }

            // Auto-store token on successful verification
            this.setToken(result.token);

            return result;
        } catch (error) {
            throw handleApiError(error);
        }
    }

    /**
     * Logout user
     */
    async logout(): Promise<void> {
        try {
            const token = this.getToken();

            if (token) {
                await fetch(`${this.baseUrl}/auth/logout`, {
                    method: 'POST',
                    headers: createAuthHeaders(token)
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

            const response = await fetch(`${this.baseUrl}/user/profile`, {
                headers: createAuthHeaders(token)
            });

            const result = await response.json();

            if (response.status === 401) {
                this.clearToken();
                throw new Error('Session expired. Please login again.');
            }

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch profile');
            }

            return result;
        } catch (error) {
            throw handleApiError(error);
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

            const response = await fetch(`${this.baseUrl}/user/booking-history`, {
                headers: createAuthHeaders(token)
            });

            const result = await response.json();

            if (response.status === 401) {
                this.clearToken();
                throw new Error('Session expired. Please login again.');
            }

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch booking history');
            }

            return result;
        } catch (error) {
            throw handleApiError(error);
        }
    }

    // ============================================================
    // 🔧 TOKEN MANAGEMENT
    // ============================================================

    setToken(token: string): void {
        if (typeof window !== 'undefined') {
            localStorage.setItem(this.tokenKey, token);
        }
    }

    getToken(): string | null {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(this.tokenKey);
        }
        return null;
    }

    clearToken(): void {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(this.tokenKey);
        }
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
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
}

export default AuthService; 