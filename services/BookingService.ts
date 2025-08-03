// ============================================================
// 🎯 GloHorizon Booking Service - Updated for Quote API
// ============================================================

import {
    FlightQuoteRequest,
    HotelQuoteRequest,
    TourQuoteRequest,
    VisaQuoteRequest,
    CompletePackageRequest,
    QuoteResponse,
    QuoteResult,
    BaseQuoteRequest
} from '~/types/quote-api-types';

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
import quoteService from '~/services/QuoteService';

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
    // ✈️ FLIGHT BOOKING (Uses Quote API)
    // ============================================================

    async submitFlightBooking(data: FlightBookingSubmissionDto | FlightQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('🛫 Submitting flight booking via quote API:', data);

            // Convert old booking format to new quote format if needed
            let quoteRequest: FlightQuoteRequest;
            
            if ('flightDetails' in data && 'contactEmail' in data) {
                // New format - use directly
                quoteRequest = data as FlightQuoteRequest;
            } else {
                // Legacy format - convert
                const legacyData = data as FlightBookingSubmissionDto;
                quoteRequest = {
                    contactEmail: legacyData.contactEmail,
                    contactPhone: legacyData.contactPhone,
                    contactName: legacyData.contactName,
                    specialRequests: legacyData.specialRequests,
                    urgency: Math.max(0, (legacyData.urgency || 1) - 1) as 0 | 1 | 2, // Convert 1,2,3 to 0,1,2
                    flightDetails: {
                        departureCity: legacyData.flightDetails.departureCity,
                        arrivalCity: legacyData.flightDetails.arrivalCity,
                        departureDate: this.formatDateToISO(legacyData.flightDetails.departureDate),
                        returnDate: legacyData.flightDetails.returnDate ? this.formatDateToISO(legacyData.flightDetails.returnDate) : undefined,
                        passengerCount: legacyData.flightDetails.adultPassengers + (legacyData.flightDetails.childPassengers || 0) + (legacyData.flightDetails.infantPassengers || 0),
                        travelClass: this.mapTravelClass(legacyData.flightDetails.preferredClass),
                        tripType: legacyData.flightDetails.tripType === 'round-trip' ? 'RoundTrip' : 'OneWay'
                    }
                };
            }

            return await quoteService.requestFlightQuote(quoteRequest);
        } catch (error: any) {
            console.error('❌ Flight booking submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 🏨 HOTEL BOOKING
    // ============================================================

    async submitHotelBooking(data: HotelBookingSubmissionDto | HotelQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('🏨 Submitting hotel booking via quote API:', data);

            // Convert old booking format to new quote format if needed
            let quoteRequest: HotelQuoteRequest;
            
            if ('hotelDetails' in data && 'contactEmail' in data) {
                // New format - use directly
                quoteRequest = data as HotelQuoteRequest;
            } else {
                // Legacy format - convert
                const legacyData = data as HotelBookingSubmissionDto;
                quoteRequest = {
                    contactEmail: legacyData.contactEmail,
                    contactPhone: legacyData.contactPhone,
                    contactName: legacyData.contactName,
                    specialRequests: legacyData.specialRequests,
                    urgency: Math.max(0, (legacyData.urgency || 1) - 1) as 0 | 1 | 2,
                    hotelDetails: {
                        destination: legacyData.hotelDetails.destination,
                        checkInDate: this.formatDateToISO(legacyData.hotelDetails.checkInDate),
                        checkOutDate: this.formatDateToISO(legacyData.hotelDetails.checkOutDate),
                        rooms: legacyData.hotelDetails.rooms,
                        adultGuests: legacyData.hotelDetails.adultGuests,
                        childGuests: legacyData.hotelDetails.childGuests || 0,
                        roomType: this.mapRoomType(legacyData.hotelDetails.roomType),
                        starRating: legacyData.hotelDetails.starRating,
                        amenities: legacyData.hotelDetails.amenities,
                        preferredHotel: legacyData.hotelDetails.preferredHotel
                    }
                };
            }

            return await quoteService.requestHotelQuote(quoteRequest);
        } catch (error: any) {
            console.error('❌ Hotel booking submission failed:', error);
            throw error;
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

            // Use quote endpoint for tour requests (as per API guide)
            const response = await this.makePublicRequest<BookingSubmissionResponse>('/quote/tour', {
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

            // Use quote endpoint for visa requests (as per API guide)
            const response = await this.makePublicRequest<BookingSubmissionResponse>('/quote/visa', {
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

            // Use quote endpoint for complete package requests (as per API guide)
            const response = await this.makePublicRequest<BookingSubmissionResponse>('/quote/complete-package', {
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

    // ============================================================
    // 🔄 FORMAT CONVERSION HELPERS
    // ============================================================

    /**
     * Convert date to ISO format required by API
     */
    private formatDateToISO(dateInput: string): string {
        try {
            // If already in ISO format, return as-is
            if (dateInput.includes('T') && dateInput.includes('Z')) {
                return dateInput;
            }

            // If in YYYY-MM-DD format, convert to ISO
            if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
                return `${dateInput}T08:00:00Z`;
            }

            // Try to parse and convert
            const date = new Date(dateInput);
            if (isNaN(date.getTime())) {
                throw new Error(`Invalid date format: ${dateInput}`);
            }
            
            return date.toISOString();
        } catch (error) {
            console.error('Date conversion error:', error);
            throw new Error(`Failed to convert date to ISO format: ${dateInput}`);
        }
    }

    /**
     * Map legacy travel class to API format
     */
    private mapTravelClass(legacyClass: string): "Economy" | "Premium Economy" | "Business" | "First" {
        const classMap: Record<string, "Economy" | "Premium Economy" | "Business" | "First"> = {
            'economy': 'Economy',
            'business': 'Business',
            'first': 'First',
            'premium': 'Premium Economy',
            'premium economy': 'Premium Economy'
        };

        return classMap[legacyClass.toLowerCase()] || 'Economy';
    }

    /**
     * Map legacy room type to API format
     */
    private mapRoomType(legacyType: string): "Standard" | "Deluxe" | "Suite" | "Presidential" {
        const roomMap: Record<string, "Standard" | "Deluxe" | "Suite" | "Presidential"> = {
            'standard': 'Standard',
            'deluxe': 'Deluxe',
            'suite': 'Suite',
            'presidential': 'Presidential',
            'luxury': 'Suite',
            'premium': 'Deluxe'
        };

        return roomMap[legacyType.toLowerCase()] || 'Standard';
    }

    /**
     * Map legacy visa type to API format
     */
    private mapVisaType(legacyType: string): "Tourist" | "Business" | "Student" | "Work" | "Transit" {
        const visaMap: Record<string, "Tourist" | "Business" | "Student" | "Work" | "Transit"> = {
            'tourist': 'Tourist',
            'tourism': 'Tourist',
            'business': 'Business',
            'student': 'Student',
            'work': 'Work',
            'employment': 'Work',
            'transit': 'Transit'
        };

        return visaMap[legacyType.toLowerCase()] || 'Tourist';
    }

    /**
     * Map legacy processing time to API format
     */
    private mapProcessingTime(legacyTime: string): "Standard" | "Express" | "Emergency" {
        const timeMap: Record<string, "Standard" | "Express" | "Emergency"> = {
            'standard': 'Standard',
            'express': 'Express',
            'super-express': 'Emergency',
            'emergency': 'Emergency',
            'urgent': 'Express',
            'fast': 'Express'
        };

        return timeMap[legacyTime.toLowerCase()] || 'Standard';
    }
}

// Export singleton instance
export const bookingService = new BookingService();
export default bookingService; 