// ============================================================
// 🎯 GloHorizon Booking Service - Production Ready
// ============================================================

import {
    FlightBookingSubmissionDto,
    HotelBookingSubmissionDto,
    TourBookingSubmissionDto,
    VisaBookingSubmissionDto,
    CompletePackageSubmissionDto,
    BookingSubmissionResponse,
    BookingTrackingDto,
    BookingListResponse,
    validateContactInfo,
    validatePassengerInfo,
    BookingFormData
} from '~/types/booking-api-types';

import authService from '~/services/AuthService';

export class BookingService {
    private baseUrl: string;

    constructor(baseUrl = 'https://glohorizonapi.fly.dev/api') {
        this.baseUrl = baseUrl;
    }

    // ============================================================
    // 🔐 PRIVATE HELPERS
    // ============================================================

    private async makeAuthenticatedRequest<T>(endpoint: string, options: any = {}): Promise<T> {
        const token = authService.getToken();

        const response = await $fetch<T>(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        return response;
    }

    private async makePublicRequest<T>(endpoint: string, options: any = {}): Promise<T> {
        const response = await $fetch<T>(`${this.baseUrl}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        return response;
    }

    // ============================================================
    // ✈️ FLIGHT BOOKING
    // ============================================================

    async submitFlightBooking(data: FlightBookingSubmissionDto): Promise<BookingSubmissionResponse> {
        try {
            console.log('🛫 Submitting flight booking:', data);

            // Validate contact information
            const contactErrors = validateContactInfo(data);
            if (contactErrors.length > 0) {
                throw new Error(`Validation errors: ${contactErrors.join(', ')}`);
            }

            // Validate passenger information
            if (data.flightDetails.passengers && data.flightDetails.passengers.length > 0) {
                for (let i = 0; i < data.flightDetails.passengers.length; i++) {
                    const passenger = data.flightDetails.passengers[i];
                    const passengerErrors = validatePassengerInfo(passenger);
                    if (passengerErrors.length > 0) {
                        throw new Error(`Passenger ${i + 1} errors: ${passengerErrors.join(', ')}`);
                    }
                }
            }

            const response = await this.makeAuthenticatedRequest<BookingSubmissionResponse>('/booking/flight', {
                method: 'POST',
                body: data
            });

            console.log('✅ Flight booking submitted successfully:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Flight booking submission failed:', error);
            throw new Error(error.data?.message || error.message || 'Flight booking submission failed');
        }
    }

    // ============================================================
    // 🏨 HOTEL BOOKING
    // ============================================================

    async submitHotelBooking(data: HotelBookingSubmissionDto): Promise<BookingSubmissionResponse> {
        try {
            console.log('🏨 Submitting hotel booking:', data);

            // Validate contact information
            const contactErrors = validateContactInfo(data);
            if (contactErrors.length > 0) {
                throw new Error(`Validation errors: ${contactErrors.join(', ')}`);
            }

            const response = await this.makeAuthenticatedRequest<BookingSubmissionResponse>('/booking/hotel', {
                method: 'POST',
                body: data
            });

            console.log('✅ Hotel booking submitted successfully:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Hotel booking submission failed:', error);
            throw new Error(error.data?.message || error.message || 'Hotel booking submission failed');
        }
    }

    // ============================================================
    // 🗺️ TOUR BOOKING
    // ============================================================

    async submitTourBooking(data: TourBookingSubmissionDto): Promise<BookingSubmissionResponse> {
        try {
            console.log('🗺️ Submitting tour booking:', data);

            // Validate contact information
            const contactErrors = validateContactInfo(data);
            if (contactErrors.length > 0) {
                throw new Error(`Validation errors: ${contactErrors.join(', ')}`);
            }

            const response = await this.makeAuthenticatedRequest<BookingSubmissionResponse>('/booking/tour', {
                method: 'POST',
                body: data
            });

            console.log('✅ Tour booking submitted successfully:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Tour booking submission failed:', error);
            throw new Error(error.data?.message || error.message || 'Tour booking submission failed');
        }
    }

    // ============================================================
    // 📄 VISA BOOKING
    // ============================================================

    async submitVisaBooking(data: VisaBookingSubmissionDto): Promise<BookingSubmissionResponse> {
        try {
            console.log('📄 Submitting visa booking:', data);

            // Validate contact information
            const contactErrors = validateContactInfo(data);
            if (contactErrors.length > 0) {
                throw new Error(`Validation errors: ${contactErrors.join(', ')}`);
            }

            const response = await this.makeAuthenticatedRequest<BookingSubmissionResponse>('/booking/visa', {
                method: 'POST',
                body: data
            });

            console.log('✅ Visa booking submitted successfully:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Visa booking submission failed:', error);
            throw new Error(error.data?.message || error.message || 'Visa booking submission failed');
        }
    }

    // ============================================================
    // 📦 COMPLETE PACKAGE BOOKING
    // ============================================================

    async submitCompletePackage(data: CompletePackageSubmissionDto): Promise<BookingSubmissionResponse> {
        try {
            console.log('📦 Submitting complete package booking:', data);

            // Validate contact information
            const contactErrors = validateContactInfo(data);
            if (contactErrors.length > 0) {
                throw new Error(`Validation errors: ${contactErrors.join(', ')}`);
            }

            const response = await this.makeAuthenticatedRequest<BookingSubmissionResponse>('/booking/complete-package', {
                method: 'POST',
                body: data
            });

            console.log('✅ Complete package booking submitted successfully:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Complete package booking submission failed:', error);
            throw new Error(error.data?.message || error.message || 'Complete package booking submission failed');
        }
    }

    // ============================================================
    // 📋 BOOKING TRACKING & MANAGEMENT
    // ============================================================

    async trackBooking(referenceNumber: string): Promise<BookingTrackingDto> {
        try {
            console.log('🔍 Tracking booking:', referenceNumber);

            if (!referenceNumber.trim()) {
                throw new Error('Reference number is required');
            }

            const response = await this.makeAuthenticatedRequest<BookingTrackingDto>(`/booking/track/${referenceNumber}`, {
                method: 'GET'
            });

            console.log('✅ Booking tracking data retrieved:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Booking tracking failed:', error);

            if (error.status === 404 || error.statusCode === 404) {
                throw new Error('Booking not found with this reference number');
            }

            throw new Error(error.data?.message || error.message || 'Booking tracking failed');
        }
    }

    async getMyBookings(): Promise<BookingListResponse> {
        try {
            console.log('📋 Fetching user bookings...');

            const response = await this.makeAuthenticatedRequest<BookingListResponse>('/booking/my-bookings', {
                method: 'GET'
            });

            console.log('✅ User bookings retrieved:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Failed to fetch user bookings:', error);

            if (error.status === 401 || error.statusCode === 401) {
                authService.clearToken();
                throw new Error('Session expired. Please login again.');
            }

            throw new Error(error.data?.message || error.message || 'Failed to fetch bookings');
        }
    }

    // ============================================================
    // 🛠️ UTILITY METHODS
    // ============================================================

    /**
     * Get user's contact info from auth service for auto-filling forms
     */
    getDefaultContactInfo(): Partial<BookingFormData> {
        const user = authService.getCurrentUser();

        if (user) {
            return {
                contactEmail: user.email,
                contactPhone: user.phoneNumber,
                urgency: 1 // Default to standard
            };
        }

        return {
            urgency: 1
        };
    }

    /**
     * Generate formatted reference number for display
     */
    formatReferenceNumber(serviceType: string, timestamp: number): string {
        const prefixes = {
            'Flight': 'GHFL',
            'Hotel': 'GHHT',
            'Tour': 'GHTR',
            'Visa': 'GHVS',
            'CompletePackage': 'GHPK'
        };

        const prefix = prefixes[serviceType as keyof typeof prefixes] || 'GHBK';
        const year = new Date().getFullYear();
        const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();

        return `${prefix}${year}${randomSuffix}`;
    }

    /**
     * Check if user is authenticated before making booking requests
     */
    isAuthenticated(): boolean {
        return authService.isAuthenticated();
    }

    /**
     * Require authentication for booking operations
     */
    requireAuth(): void {
        if (!this.isAuthenticated()) {
            throw new Error('Authentication required. Please login to make bookings.');
        }
    }
}

// Export singleton instance
export const bookingService = new BookingService();
export default bookingService; 