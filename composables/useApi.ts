// ============================================================
// 🎯 Type-Safe API Composable for GloHorizon
// ============================================================

// ============================================================
// 📝 TYPE DEFINITIONS (from your API documentation)
// ============================================================

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;  // Format: "+233XXXXXXXXX"
    password: string;     // Minimum 8 characters
    dateOfBirth?: string; // Format: "YYYY-MM-DD" or null
    acceptMarketing: boolean;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface OtpRequest {
    phoneNumber: string; // Must be registered user's phone
}

export interface VerifyOtpRequest {
    phoneNumber: string;
    otpCode: string; // 6-digit code
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token: string;
    user: UserInfo;
}

export interface UserInfo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;        // "User" | "Admin"
    createdAt: string;   // ISO date string
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth?: string; // "YYYY-MM-DD" or null
    acceptMarketing: boolean;
    role: string;
    createdAt: string;
    updatedAt?: string;
}

export interface OtpResponse {
    success: boolean;
    message: string;
    otpId?: string; // Session tracking (optional)
}

export interface LogoutResponse {
    success: boolean;
    message: string;
}

export interface BookingHistoryResponse {
    bookings: BookingHistory[];
    stats: BookingStats;
}

export interface BookingHistory {
    id: number;
    referenceNumber: string;
    serviceType: string;
    status: string;
    totalAmount: number;
    createdAt: string;
}

export interface BookingStats {
    totalBookings: number;
    pendingBookings: number;
    confirmedBookings: number;
    totalSpent: number;
}

export interface BookingSubmissionRequest {
    serviceType: string;
    customerInfo: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
    };
    serviceDetails: Record<string, any>;
    totalAmount?: number;
}

export interface BookingSubmissionResponse {
    success: boolean;
    message: string;
    referenceNumber: string;
    bookingId: number;
}

export interface TrackBookingResponse {
    booking: {
        id: number;
        referenceNumber: string;
        serviceType: string;
        status: string;
        customerInfo: {
            firstName: string;
            lastName: string;
            email: string;
            phoneNumber: string;
        };
        serviceDetails: Record<string, any>;
        totalAmount: number;
        createdAt: string;
        updatedAt: string;
    };
    statusHistory: Array<{
        status: string;
        timestamp: string;
        notes?: string;
    }>;
}

export interface ErrorResponse {
    success: boolean;
    message: string;
}

// ============================================================
// 🔧 TYPE-SAFE API COMPOSABLE
// ============================================================

export const useApi = () => {
    const config = useRuntimeConfig();
    const token = useCookie<string | null>("auth-token", {
        default: () => null,
        secure: true,
        sameSite: "strict",
    });

    // Create base API instance with proper typing
    const $api = $fetch.create({
        baseURL: config.public.apiBase as string,
        headers: {
            "Content-Type": "application/json",
        },
        onRequest({ request, options }) {
            // Add auth token to requests
            if (token.value) {
                // @ts-ignore - Nuxt's $fetch headers typing issue
                options.headers = {
                    ...options.headers,
                    // @ts-ignore
                    Authorization: `Bearer ${token.value}`,
                };
            }
        },
        onResponseError({ response }) {
            // Handle auth errors globally
            if (response.status === 401) {
                // Clear invalid token
                token.value = null;
                // Redirect to login
                navigateTo("/login");
            }
        },
    });

    // Type-safe API methods
    const api = {
        // ============================================================
        // 🔐 AUTHENTICATION
        // ============================================================
        auth: {
            login: (credentials: LoginRequest): Promise<AuthResponse> =>
                $api("/auth/login", {
                    method: "POST",
                    body: credentials,
                }),

            register: (userData: RegisterRequest): Promise<AuthResponse> =>
                $api("/auth/register", {
                    method: "POST",
                    body: userData,
                }),

            requestOtp: (data: OtpRequest): Promise<OtpResponse> =>
                $api("/auth/request-otp", {
                    method: "POST",
                    body: data,
                }),

            verifyOtp: (data: VerifyOtpRequest): Promise<AuthResponse> =>
                $api("/auth/verify-otp", {
                    method: "POST",
                    body: data,
                }),

            logout: (): Promise<LogoutResponse> =>
                $api("/auth/logout", {
                    method: "POST",
                }),
        },

        // ============================================================
        // 👤 USER MANAGEMENT
        // ============================================================
        user: {
            getProfile: (): Promise<UserProfile> =>
                $api("/user/profile"),

            updateProfile: (profileData: Partial<UserProfile>): Promise<UserProfile> =>
                $api("/user/profile", {
                    method: "PUT",
                    body: profileData,
                }),

            changePassword: (passwordData: { currentPassword: string; newPassword: string }): Promise<{ success: boolean; message: string }> =>
                $api("/user/change-password", {
                    method: "PUT",
                    body: passwordData,
                }),

            getBookingHistory: (params: Record<string, any> = {}): Promise<BookingHistoryResponse> =>
                $api("/user/booking-history", {
                    query: params,
                }),

            deleteAccount: (reason: string): Promise<{ success: boolean; message: string }> =>
                $api("/user/account", {
                    method: "DELETE",
                    body: { reason },
                }),
        },

        // ============================================================
        // 📋 BOOKING MANAGEMENT
        // ============================================================
        booking: {
            submit: (bookingData: BookingSubmissionRequest): Promise<BookingSubmissionResponse> =>
                $api("/booking/submit", {
                    method: "POST",
                    body: bookingData,
                }),

            track: (referenceNumber: string): Promise<TrackBookingResponse> =>
                $api(`/booking/track/${referenceNumber}`),

            getMyBookings: (params: Record<string, any> = {}): Promise<BookingHistoryResponse> =>
                $api("/booking/my-bookings", {
                    query: params,
                }),
        },

        // ============================================================
        // 📦 TRAVEL PACKAGES
        // ============================================================
        packages: {
            getAll: (params: Record<string, any> = {}): Promise<any[]> =>
                $api("/travelpackage", {
                    query: params,
                }),

            getById: (id: string): Promise<any> =>
                $api(`/travelpackage/${id}`),

            calculatePrice: (packageData: Record<string, any>): Promise<{ totalPrice: number; breakdown: Record<string, number> }> =>
                $api("/travelpackage/calculate-price", {
                    method: "POST",
                    body: packageData,
                }),
        },

        // ============================================================
        // 🔧 ADMIN (if needed)
        // ============================================================
        admin: {
            getAllBookings: (params: Record<string, any> = {}): Promise<any[]> =>
                $api("/admin/bookings", {
                    query: params,
                }),

            updateBookingStatus: (bookingId: number, status: string, notes?: string): Promise<{ success: boolean; message: string }> =>
                $api(`/admin/bookings/${bookingId}/status`, {
                    method: "PUT",
                    body: { status, notes },
                }),
        },

        // ============================================================
        // 🖼️ IMAGE UPLOAD
        // ============================================================
        image: {
            upload: (formData: FormData): Promise<{ url: string; filename: string }> =>
                $api("/image/upload", {
                    method: "POST",
                    body: formData,
                }),
        },

        // ============================================================
        // 💳 PAYMENT
        // ============================================================
        payment: {
            initializePayment: (paymentData: Record<string, any>): Promise<{ paymentUrl: string; reference: string }> =>
                $api("/payment/initialize", {
                    method: "POST",
                    body: paymentData,
                }),

            verifyPayment: (reference: string): Promise<{ success: boolean; status: string; data: Record<string, any> }> =>
                $api(`/payment/verify/${reference}`),
        },
    };

    // ============================================================
    // 🔑 TOKEN MANAGEMENT
    // ============================================================
    const setToken = (newToken: string): void => {
        token.value = newToken;
    };

    const getToken = (): string | null => {
        return token.value;
    };

    const clearToken = (): void => {
        token.value = null;
    };

    const isAuthenticated = (): boolean => {
        return !!token.value;
    };

    // Return everything with proper typing
    return {
        api,
        setToken,
        getToken,
        clearToken,
        isAuthenticated,
    };
}; 