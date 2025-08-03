// ====================================================
// 🎯 GloHorizon API Types - Frontend Integration
// ====================================================

// 🔐 AUTHENTICATION REQUEST TYPES
export interface RegisterRequest {
    firstName: string;           // Required, max 100 chars
    lastName: string;            // Required, max 100 chars  
    email: string;               // Required, valid email format
    phoneNumber: string;         // Required, Ghanaian format (+233xxxxxxxxx)
    password: string;            // Required, min 8 chars, include special chars
    dateOfBirth: string;         // Required, ISO format: "1990-01-01T00:00:00Z"
    acceptMarketing: boolean;    // Required, true/false
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

// 🔐 AUTHENTICATION RESPONSE TYPES
export interface UserInfo {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;        // "User" | "Admin" 
    createdAt: string;   // ISO date string
}

export interface AuthResponse {
    success: boolean;
    message: string;
    token: string | null;        // JWT token if successful
    user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        role: string;              // "User" or "Admin"
        createdAt: string;         // ISO date string
    } | null;
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

// 👤 USER PROFILE TYPES
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

export interface UpdateProfileRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    dateOfBirth?: string;
    acceptMarketing: boolean;
}

// 📋 BOOKING TYPES
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

// Quote/Booking History Types
export interface BookingHistory {
    id: number;
    referenceNumber: string;
    serviceType: string; // "Flight", "Hotel", "Tour", "Visa"
    status: string; // "Submitted", "Processing", "Confirmed", "Completed", "Cancelled"
    destination: string;
    travelDate: string;
    createdAt: string;
    quotedAmount?: number;
    currency: string;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

export interface BookingHistoryResponse {
    success: boolean;
    message: string;
    quotes: BookingHistory[]; // API returns 'quotes' not 'bookings'
    totalCount: number;
}

// 🚨 ERROR TYPES
export interface ErrorResponse {
    success: boolean;
    message: string;
    errors?: string[]; // Validation errors array
}

export interface ApiError {
    message: string;
    status: number;
    details?: any;
}

// 🔧 API UTILITY TYPES
export interface ApiConfig {
    baseUrl: string;
    timeout?: number;
    defaultHeaders?: Record<string, string>;
}

export interface AuthHeaders {
    'Authorization': string;
    'Content-Type': string;
}

// 📱 PHONE NUMBER VALIDATION
export interface PhoneValidation {
    isValid: boolean;
    formatted: string;
    country?: string;
}

// 🎯 USER ROLES
export type UserRole = 'User' | 'Admin' | 'SuperAdmin';

// 📊 BOOKING STATUS
export type BookingStatus =
    | 'Pending'
    | 'UnderReview'
    | 'Processing'
    | 'Confirmed'
    | 'Cancelled'
    | 'Completed';

// 🚀 SERVICE TYPES
export type ServiceType =
    | 'Flight'
    | 'Hotel'
    | 'CarRental'
    | 'TravelPackage'
    | 'Visa'
    | 'Insurance';

// ====================================================
// 🛠️ UTILITY FUNCTIONS
// ====================================================

/**
 * Format phone number to international format
 */
export const formatPhoneNumber = (phone: string): string => {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');

    // If starts with 0, replace with country code
    if (digits.startsWith('0')) {
        return `+233${digits.substring(1)}`;
    }

    // If doesn't start with +, add it
    if (!phone.startsWith('+')) {
        return `+${digits}`;
    }

    return phone;
};

/**
 * Validate phone number format
 */
export const validatePhoneNumber = (phone: string): PhoneValidation => {
    const formatted = formatPhoneNumber(phone);
    const isValid = /^\+233\d{9}$/.test(formatted);

    return {
        isValid,
        formatted,
        country: isValid ? 'Ghana' : undefined
    };
};

/**
 * Create auth headers with token
 */
export const createAuthHeaders = (token: string): AuthHeaders => ({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
});

/**
 * Handle API errors consistently
 */
export const handleApiError = (error: any): ApiError => {
    if (error.response) {
        return {
            message: error.response.data?.message || 'An error occurred',
            status: error.response.status,
            details: error.response.data
        };
    }

    return {
        message: error.message || 'Network error',
        status: 0,
        details: error
    };
}; 