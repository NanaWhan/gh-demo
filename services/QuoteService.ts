// ============================================================
// 🎯 GloHorizon Quote Service - Exact API Implementation
// ============================================================

import {
    FlightQuoteRequest,
    HotelQuoteRequest,
    VisaQuoteRequest,
    TourQuoteRequest,
    CompletePackageRequest,
    QuoteResponse,
    QuoteTrackingResponse,
    QuoteResult,
    TrackingResult,
    validateQuoteRequest,
    validateFlightDetails,
    validateHotelDetails,
    validateVisaDetails,
    validateTourDetails,
    BaseQuoteRequest
} from '~/types/quote-api-types';

import { formatPhoneNumber, validatePhoneNumber } from '~/types/auth-api-types';

export class QuoteService {
    private baseUrl: string;

    constructor(baseUrl = 'https://glohorizonapi.fly.dev/api') {
        this.baseUrl = baseUrl;
    }

    // ============================================================
    // 🔐 PRIVATE HELPERS
    // ============================================================

    private async makePublicRequest<T>(endpoint: string, options: any = {}): Promise<T> {
        try {
            const response = await $fetch<T>(`${this.baseUrl}${endpoint}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            return response;
        } catch (error: any) {
            console.error(`❌ API request failed [${endpoint}]:`, error);
            throw new Error(error.data?.message || error.message || 'API request failed');
        }
    }

    private validateAndFormatBaseRequest(request: BaseQuoteRequest): BaseQuoteRequest {
        // Validate base quote request
        const baseErrors = validateQuoteRequest(request);
        if (baseErrors.length > 0) {
            throw new Error(`Validation errors: ${baseErrors.join(', ')}`);
        }

        // Validate and format phone number
        const phoneValidation = validatePhoneNumber(request.contactPhone);
        if (!phoneValidation.isValid) {
            throw new Error('Invalid phone number format. Please use Ghana format (e.g., 0123456789)');
        }

        return {
            ...request,
            contactPhone: phoneValidation.formatted
        };
    }

    // ============================================================
    // ✈️ FLIGHT QUOTES (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async requestFlightQuote(data: FlightQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('✈️ Submitting flight quote request:', data);

            // Validate base request and format phone
            const validatedBase = this.validateAndFormatBaseRequest(data);

            // Validate flight-specific details
            const flightErrors = validateFlightDetails(data.flightDetails);
            if (flightErrors.length > 0) {
                throw new Error(`Flight validation errors: ${flightErrors.join(', ')}`);
            }

            const payload: FlightQuoteRequest = {
                ...validatedBase,
                flightDetails: data.flightDetails
            };

            const response = await this.makePublicRequest<QuoteResponse>('/quote/flight', {
                method: 'POST',
                body: payload
            });

            console.log('✅ Flight quote submitted successfully:', response.referenceNumber);
            return response;
        } catch (error: any) {
            console.error('❌ Flight quote submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 🏨 HOTEL QUOTES (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async requestHotelQuote(data: HotelQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('🏨 Submitting hotel quote request:', data);

            // Validate base request and format phone
            const validatedBase = this.validateAndFormatBaseRequest(data);

            // Validate hotel-specific details
            const hotelErrors = validateHotelDetails(data.hotelDetails);
            if (hotelErrors.length > 0) {
                throw new Error(`Hotel validation errors: ${hotelErrors.join(', ')}`);
            }

            const payload: HotelQuoteRequest = {
                ...validatedBase,
                hotelDetails: data.hotelDetails
            };

            const response = await this.makePublicRequest<QuoteResponse>('/quote/hotel', {
                method: 'POST',
                body: payload
            });

            console.log('✅ Hotel quote submitted successfully:', response.referenceNumber);
            return response;
        } catch (error: any) {
            console.error('❌ Hotel quote submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 📄 VISA QUOTES (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async requestVisaQuote(data: VisaQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('📄 Submitting visa quote request:', data);

            // Validate base request and format phone
            const validatedBase = this.validateAndFormatBaseRequest(data);

            // Validate visa-specific details
            const visaErrors = validateVisaDetails(data.visaDetails);
            if (visaErrors.length > 0) {
                throw new Error(`Visa validation errors: ${visaErrors.join(', ')}`);
            }

            const payload: VisaQuoteRequest = {
                ...validatedBase,
                visaDetails: data.visaDetails
            };

            const response = await this.makePublicRequest<QuoteResponse>('/quote/visa', {
                method: 'POST',
                body: payload
            });

            console.log('✅ Visa quote submitted successfully:', response.referenceNumber);
            return response;
        } catch (error: any) {
            console.error('❌ Visa quote submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 🗺️ TOUR QUOTES (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async requestTourQuote(data: TourQuoteRequest): Promise<QuoteResult> {
        try {
            console.log('🗺️ Submitting tour quote request:', data);

            // Validate base request and format phone
            const validatedBase = this.validateAndFormatBaseRequest(data);

            // Validate tour-specific details
            const tourErrors = validateTourDetails(data.tourDetails);
            if (tourErrors.length > 0) {
                throw new Error(`Tour validation errors: ${tourErrors.join(', ')}`);
            }

            const payload: TourQuoteRequest = {
                ...validatedBase,
                tourDetails: data.tourDetails
            };

            const response = await this.makePublicRequest<QuoteResponse>('/quote/tour', {
                method: 'POST',
                body: payload
            });

            console.log('✅ Tour quote submitted successfully:', response.referenceNumber);
            return response;
        } catch (error: any) {
            console.error('❌ Tour quote submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 📦 COMPLETE PACKAGE QUOTES (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async requestCompletePackage(data: CompletePackageRequest): Promise<QuoteResult> {
        try {
            console.log('📦 Submitting complete package quote request:', data);

            // Validate base request and format phone
            const validatedBase = this.validateAndFormatBaseRequest(data);

            // Validate package details components
            const flightErrors = validateFlightDetails(data.packageDetails.flightDetails);
            const hotelErrors = validateHotelDetails(data.packageDetails.hotelDetails);
            
            let visaErrors: string[] = [];
            if (data.packageDetails.visaDetails) {
                visaErrors = validateVisaDetails(data.packageDetails.visaDetails);
            }

            const allErrors = [...flightErrors, ...hotelErrors, ...visaErrors];
            if (allErrors.length > 0) {
                throw new Error(`Package validation errors: ${allErrors.join(', ')}`);
            }

            const payload: CompletePackageRequest = {
                ...validatedBase,
                packageDetails: data.packageDetails
            };

            const response = await this.makePublicRequest<QuoteResponse>('/quote/complete-package', {
                method: 'POST',
                body: payload
            });

            console.log('✅ Complete package quote submitted successfully:', response.referenceNumber);
            return response;
        } catch (error: any) {
            console.error('❌ Complete package quote submission failed:', error);
            throw error;
        }
    }

    // ============================================================
    // 📍 QUOTE TRACKING (PUBLIC - NO AUTH REQUIRED)
    // ============================================================

    async trackQuote(referenceNumber: string): Promise<TrackingResult> {
        try {
            console.log('🔍 Tracking quote:', referenceNumber);

            if (!referenceNumber?.trim()) {
                throw new Error('Reference number is required');
            }

            const response = await this.makePublicRequest<QuoteTrackingResponse>(`/quote/track/${referenceNumber}`, {
                method: 'GET'
            });

            console.log('✅ Quote tracking data retrieved:', response);
            return response;
        } catch (error: any) {
            console.error('❌ Quote tracking failed:', error);

            if (error.status === 404 || error.statusCode === 404) {
                throw new Error('Quote not found with this reference number');
            }

            throw error;
        }
    }

    // ============================================================
    // 🧪 API CONNECTIVITY TEST
    // ============================================================

    async testAPI(): Promise<{ success: boolean; message: string }> {
        try {
            console.log('🧪 Testing API connectivity...');

            const response = await this.makePublicRequest<{ success: boolean; message: string }>('/quote/test-minimal', {
                method: 'POST'
            });

            console.log('✅ API test result:', response);
            return response;
        } catch (error: any) {
            console.error('❌ API test failed:', error);
            return {
                success: false,
                message: error.message || 'API test failed'
            };
        }
    }

    // ============================================================
    // 🛠️ UTILITY METHODS
    // ============================================================

    /**
     * Auto-fill contact info from authenticated user
     */
    getDefaultContactInfo(): Partial<BaseQuoteRequest> {
        try {
            // Try to get user info from auth service if available
            const authService = useNuxtApp().$authService;
            const user = authService?.getCurrentUser();

            if (user) {
                return {
                    contactEmail: user.email,
                    contactPhone: user.phoneNumber,
                    contactName: `${user.firstName} ${user.lastName}`,
                    urgency: 0 // Default to standard
                };
            }
        } catch (error) {
            console.log('ℹ️ No authenticated user found, using defaults');
        }

        return {
            urgency: 0 // Default to standard
        };
    }

    /**
     * Format date to API-required ISO format
     */
    formatDateForAPI(date: Date | string): string {
        if (typeof date === 'string') {
            date = new Date(date);
        }
        return date.toISOString();
    }

    /**
     * Format phone number for API submission
     */
    formatPhoneForAPI(phone: string): string {
        const validation = validatePhoneNumber(phone);
        if (!validation.isValid) {
            throw new Error('Invalid phone number format');
        }
        return validation.formatted;
    }

    /**
     * Generate quote reference preview (for UI purposes)
     */
    generateReferencePreview(serviceType: string): string {
        const prefixes = {
            'flight': 'QFL',
            'hotel': 'QHT',
            'tour': 'QTR',
            'visa': 'QVS',
            'package': 'QPK'
        };

        const prefix = prefixes[serviceType.toLowerCase() as keyof typeof prefixes] || 'QUO';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substring(2, 5).toUpperCase();
        
        return `${prefix}${timestamp}${random}`;
    }

    /**
     * Validate all quote form data before submission
     */
    validateQuoteForm(type: string, data: any): { isValid: boolean; errors: string[] } {
        const errors: string[] = [];

        try {
            // Validate base request
            const baseErrors = validateQuoteRequest(data);
            errors.push(...baseErrors);

            // Validate specific type details
            switch (type.toLowerCase()) {
                case 'flight':
                    errors.push(...validateFlightDetails(data.flightDetails));
                    break;
                case 'hotel':
                    errors.push(...validateHotelDetails(data.hotelDetails));
                    break;
                case 'visa':
                    errors.push(...validateVisaDetails(data.visaDetails));
                    break;
                case 'tour':
                    errors.push(...validateTourDetails(data.tourDetails));
                    break;
                case 'package':
                    errors.push(...validateFlightDetails(data.packageDetails.flightDetails));
                    errors.push(...validateHotelDetails(data.packageDetails.hotelDetails));
                    if (data.packageDetails.visaDetails) {
                        errors.push(...validateVisaDetails(data.packageDetails.visaDetails));
                    }
                    break;
            }
        } catch (error: any) {
            errors.push(error.message);
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

// Export singleton instance
export const quoteService = new QuoteService();
export default quoteService;