// ====================================================
// 🎯 GloHorizon Booking API Types - Production Ready
// ====================================================

// 🚀 ENUMS (matching backend exactly)
export enum BookingType {
    Flight = 1,
    Hotel = 2,
    Tour = 3,
    Visa = 4,
    CompletePackage = 5
}

export enum BookingStatus {
    Submitted = 1,
    UnderReview = 2,
    QuoteProvided = 3,
    PaymentPending = 4,
    Processing = 5,
    Confirmed = 6,
    Completed = 7,
    Cancelled = 8
}

// ✈️ FLIGHT BOOKING TYPES
export interface PassengerInfo {
    firstName: string;
    lastName: string;
    dateOfBirth: string; // YYYY-MM-DD
    passportNumber?: string;
    nationality?: string;
}

export interface FlightBookingDetails {
    tripType: 'one-way' | 'round-trip' | 'multi-city';
    departureCity: string;
    arrivalCity: string;
    departureDate: string; // YYYY-MM-DD
    returnDate?: string; // YYYY-MM-DD
    adultPassengers: number;
    childPassengers: number;
    infantPassengers: number;
    preferredClass: 'economy' | 'business' | 'first';
    preferredAirline?: string;
    passengers: PassengerInfo[];
}

export interface FlightBookingSubmissionDto {
    flightDetails: FlightBookingDetails;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number; // 1=Standard, 2=Urgent, 3=Emergency
}

// 🏨 HOTEL BOOKING TYPES
export interface HotelBookingDetails {
    destination: string;
    checkInDate: string; // YYYY-MM-DD
    checkOutDate: string; // YYYY-MM-DD
    rooms: number;
    adultGuests: number;
    childGuests: number;
    roomType: 'standard' | 'deluxe' | 'suite';
    preferredHotel?: string;
    starRating: '3-star' | '4-star' | '5-star';
    amenities: string[]; // ['pool', 'gym', 'spa', 'wifi']
}

export interface HotelBookingSubmissionDto {
    hotelDetails: HotelBookingDetails;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

// 🗺️ TOUR BOOKING TYPES
export interface TourBookingDetails {
    tourPackage: string;
    destination: string;
    startDate: string; // YYYY-MM-DD
    endDate: string; // YYYY-MM-DD
    travelers: number;
    accommodationType: 'budget' | 'standard' | 'luxury';
    tourType: 'group' | 'private' | 'custom';
    activities: string[];
    mealPlan: 'breakfast' | 'half-board' | 'full-board';
}

export interface TourBookingSubmissionDto {
    tourDetails: TourBookingDetails;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

// 📄 VISA BOOKING TYPES
export interface VisaDocument {
    documentType: string;
    fileName?: string;
    isRequired: boolean;
    isUploaded: boolean;
}

export interface VisaBookingDetails {
    visaType: string;
    destinationCountry: string;
    processingType: 'standard' | 'express' | 'super-express';
    intendedTravelDate: string; // YYYY-MM-DD
    durationOfStay: number; // days
    purposeOfVisit: string;
    passportNumber: string;
    passportExpiryDate: string; // YYYY-MM-DD
    nationality: string;
    hasPreviousVisa: boolean;
    requiredDocuments: VisaDocument[];
}

export interface VisaBookingSubmissionDto {
    visaDetails: VisaBookingDetails;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

// 📦 COMPLETE PACKAGE TYPES
export interface CompletePackageDetails {
    flightDetails?: FlightBookingDetails;
    hotelDetails?: HotelBookingDetails;
    visaDetails?: VisaBookingDetails;
    packageType: 'honeymoon' | 'business' | 'family' | 'adventure' | 'custom';
    estimatedBudget: number;
    additionalServices: string[]; // ['insurance', 'transfers', 'tours']
}

export interface CompletePackageSubmissionDto {
    packageDetails: CompletePackageDetails;
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

// 📋 BOOKING RESPONSE TYPES
export interface BookingSubmissionResponse {
    success: boolean;
    message: string;
    referenceNumber: string;
    booking: {
        id: number;
        referenceNumber: string;
        serviceType: BookingType;
        status: BookingStatus;
        destination?: string;
        createdAt: string;
        travelDate?: string;
    };
}

export interface BookingStatusHistoryDto {
    status: string;
    timestamp: string;
    notes?: string;
}

export interface BookingDocumentDto {
    id: number;
    fileName: string;
    documentType: string;
    uploadedAt: string;
    verificationStatus: string;
}

export interface BookingTrackingDto {
    id: number;
    referenceNumber: string;
    serviceType: string;
    status: string;
    destination?: string;
    quotedAmount?: number;
    finalAmount?: number;
    createdAt: string;
    travelDate?: string;
    contactEmail: string;
    contactPhone: string;
    specialRequests?: string;
    adminNotes?: string;
    statusHistory: BookingStatusHistoryDto[];
    documents: BookingDocumentDto[];
}

export interface BookingListResponse {
    bookings: BookingTrackingDto[];
    totalCount: number;
}

// 🛠️ UTILITY TYPES
export interface BookingFormData {
    contactEmail: string;
    contactPhone: string;
    contactName: string;
    specialRequests?: string;
    urgency: number;
}

export interface UrgencyOption {
    value: number;
    label: string;
    description: string;
    icon: string;
}

export const URGENCY_OPTIONS: UrgencyOption[] = [
    {
        value: 1,
        label: 'Standard',
        description: '3-5 business days response',
        icon: '🕐'
    },
    {
        value: 2,
        label: 'Urgent',
        description: '24-48 hours response',
        icon: '⚡'
    },
    {
        value: 3,
        label: 'Emergency',
        description: 'Same day response',
        icon: '🚨'
    }
];

// 🎯 VALIDATION HELPERS
export const validatePassengerInfo = (passenger: PassengerInfo): string[] => {
    const errors: string[] = [];

    if (!passenger.firstName.trim()) errors.push('First name is required');
    if (!passenger.lastName.trim()) errors.push('Last name is required');
    if (!passenger.dateOfBirth) errors.push('Date of birth is required');

    return errors;
};

export const validateContactInfo = (contact: BookingFormData): string[] => {
    const errors: string[] = [];

    if (!contact.contactEmail.trim()) errors.push('Email is required');
    if (!contact.contactPhone.trim()) errors.push('Phone is required');
    if (!contact.contactName.trim()) errors.push('Contact name is required');
    if (!contact.urgency) errors.push('Urgency level is required');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (contact.contactEmail && !emailRegex.test(contact.contactEmail)) {
        errors.push('Invalid email format');
    }

    return errors;
};

export const formatBookingStatus = (status: BookingStatus): string => {
    const statusMap = {
        [BookingStatus.Submitted]: 'Submitted',
        [BookingStatus.UnderReview]: 'Under Review',
        [BookingStatus.QuoteProvided]: 'Quote Provided',
        [BookingStatus.PaymentPending]: 'Payment Pending',
        [BookingStatus.Processing]: 'Processing',
        [BookingStatus.Confirmed]: 'Confirmed',
        [BookingStatus.Completed]: 'Completed',
        [BookingStatus.Cancelled]: 'Cancelled'
    };

    return statusMap[status] || 'Unknown';
};

export const getStatusColor = (status: BookingStatus): string => {
    const colorMap = {
        [BookingStatus.Submitted]: 'bg-blue-100 text-blue-800',
        [BookingStatus.UnderReview]: 'bg-yellow-100 text-yellow-800',
        [BookingStatus.QuoteProvided]: 'bg-purple-100 text-purple-800',
        [BookingStatus.PaymentPending]: 'bg-orange-100 text-orange-800',
        [BookingStatus.Processing]: 'bg-indigo-100 text-indigo-800',
        [BookingStatus.Confirmed]: 'bg-green-100 text-green-800',
        [BookingStatus.Completed]: 'bg-emerald-100 text-emerald-800',
        [BookingStatus.Cancelled]: 'bg-red-100 text-red-800'
    };

    return colorMap[status] || 'bg-gray-100 text-gray-800';
}; 