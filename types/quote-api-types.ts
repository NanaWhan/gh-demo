// ====================================================
// 🎯 GloHorizon Quote API Types - Exact API Mapping
// ====================================================

// 🚀 URGENCY & SERVICE TYPES (matching API exactly)
export type UrgencyLevel = 0 | 1 | 2;  // Standard, Urgent, Emergency
export type ServiceType = 1 | 2 | 3 | 4 | 5;  // Flight, Hotel, Tour, Visa, Package

// 🔤 TRAVEL CLASS & TRIP TYPES
export type TravelClass = "Economy" | "Premium Economy" | "Business" | "First";
export type TripType = "OneWay" | "RoundTrip";
export type RoomType = "Standard" | "Deluxe" | "Suite" | "Presidential";
export type VisaType = "Tourist Visa" | "Business Visa" | "Student Visa" | "Work Visa" | "Transit Visa";
export type ProcessingTime = "standard" | "express" | "super-express";
export type TourType = "Cultural" | "Adventure" | "Safari" | "Historical" | "Beach" | "City";
export type AccommodationType = "Hotel" | "Resort" | "Guesthouse" | "Camping";
export type TransportationType = "Bus" | "Van" | "Car" | "Flight";
export type PackageType = "Honeymoon" | "Family" | "Business" | "Group" | "Solo";

// ====================================================
// 📋 BASE QUOTE REQUEST (shared by all quote types)
// ====================================================

export interface BaseQuoteRequest {
  contactEmail: string;        // Required, valid email
  contactPhone: string;        // Required, phone number
  contactName: string;         // Required, full name
  specialRequests?: string;    // Optional, max 1000 chars
  urgency: UrgencyLevel;       // Required: 0=Standard, 1=Urgent, 2=Emergency
}

// ====================================================
// ✈️ FLIGHT QUOTE TYPES
// ====================================================

export interface PassengerInfo {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  passportNumber?: string;
  nationality?: string;
}

export interface FlightDetails {
  departureCity: string;       // Required, e.g., "Accra"
  arrivalCity: string;         // Required, e.g., "Dubai"
  departureDate: string;       // Required, ISO format: "2025-09-01T08:00:00Z"
  returnDate?: string;         // Optional for one-way, required for round-trip
  adultPassengers: number;     // Required, min 1, max 50
  childPassengers: number;     // Optional, default 0
  infantPassengers: number;    // Optional, default 0
  travelClass: TravelClass;    // Required
  tripType: TripType;          // Required
  preferredAirline?: string;   // Optional
  passengers?: PassengerInfo[]; // Optional passenger details
}

export interface FlightQuoteRequest extends BaseQuoteRequest {
  flightDetails: FlightDetails;
}

// ====================================================
// 🏨 HOTEL QUOTE TYPES
// ====================================================

export interface HotelDetails {
  destination: string;         // Required, e.g., "Dubai" 
  checkInDate: string;         // Required, ISO format: "2025-09-01T14:00:00Z"
  checkOutDate: string;        // Required, ISO format: "2025-09-05T12:00:00Z"
  rooms: number;               // Required, min 1
  adultGuests: number;         // Required, min 1
  childGuests?: number;        // Optional, default 0
  roomType: string;            // Required, e.g., "suite", "deluxe"
  starRating?: string;         // Optional, e.g., "5-star"
  amenities?: string[];        // Optional, e.g., ["pool", "spa"]
  preferredHotel?: string;     // Optional
}

export interface HotelQuoteRequest extends BaseQuoteRequest {
  hotelDetails: HotelDetails;
}

// ====================================================
// 📄 VISA QUOTE TYPES
// ====================================================

export interface VisaDetails {
  destinationCountry: string;        // Required, e.g., "Canada"
  visaType: VisaType;               // Required
  intendedTravelDate: string;        // Required, ISO format
  processingType: ProcessingTime;    // Required
  passportNumber: string;            // Required
  nationality: string;               // Required, e.g., "Ghanaian"
  durationOfStay: number;            // Required, days (1-365)
  purposeOfVisit: string;            // Required, e.g., "Tourism"
}

export interface VisaQuoteRequest extends BaseQuoteRequest {
  visaDetails: VisaDetails;
}

// ====================================================
// 🗺️ TOUR QUOTE TYPES
// ====================================================

export interface TourDetails {
  destination: string;               // Required, e.g., "Egypt"
  startDate: string;                 // Required, ISO format
  endDate: string;                   // Required, ISO format  
  groupSize: number;                 // Required, min 1
  tourType: TourType;                // Required
  accommodationType: AccommodationType; // Required
  transportationType: TransportationType; // Required
  tourPackage: string;               // Required, e.g., "Premium Egypt Cultural Tour"
}

export interface TourQuoteRequest extends BaseQuoteRequest {
  tourDetails: TourDetails;
}

// ====================================================
// 📦 COMPLETE PACKAGE QUOTE TYPES
// ====================================================

export interface PackageDetails {
  packageType: PackageType;
  flightDetails: FlightDetails;
  hotelDetails: HotelDetails;
  visaDetails?: VisaDetails;  // Optional
}

export interface CompletePackageRequest extends BaseQuoteRequest {
  packageDetails: PackageDetails;
}

// ====================================================
// 📋 RESPONSE TYPES
// ====================================================

export interface StatusHistory {
  fromStatus: number;
  toStatus: number;
  notes: string;
  changedAt: string;
  changedBy: string;
}

export interface Quote {
  id: number;
  referenceNumber: string;
  serviceType: ServiceType;       // 1=Flight, 2=Hotel, 3=Tour, 4=Visa, 5=Package
  status: number;                 // 1=Submitted, 2=UnderReview, 3=QuoteProvided
  destination: string;
  quotedAmount: number | null;
  currency: string;               // "GHS"
  createdAt: string;              // ISO date
  travelDate: string;             // ISO date
  quoteProvidedAt: string | null;
  quoteExpiresAt: string | null;
  contactEmail: string;
  contactPhone: string;
  contactName: string;
  specialRequests: string | null;
  adminNotes: string | null;
  urgency: UrgencyLevel;
  paymentLinkUrl: string | null;
  statusHistory: StatusHistory[];
}

export interface QuoteResponse {
  success: boolean;
  message: string;
  referenceNumber: string;        // Track quote with this
  quote: Quote;
}

export interface QuoteTrackingResponse {
  success: boolean;
  message: string;
  quote: Quote;
}

export interface QuoteListResponse {
  success: boolean;
  message: string;
  quotes: Quote[];
  totalCount: number;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: {
    [field: string]: string[];    // Validation errors
  };
}

// ====================================================
// 🛠️ UTILITY TYPES & CONSTANTS
// ====================================================

export interface UrgencyOption {
  value: UrgencyLevel;
  label: string;
  description: string;
  icon: string;
}

export const URGENCY_OPTIONS: UrgencyOption[] = [
  {
    value: 0,
    label: 'Standard',
    description: '3-5 business days response',
    icon: '🕐'
  },
  {
    value: 1,
    label: 'Urgent', 
    description: '24-48 hours response',
    icon: '⚡'
  },
  {
    value: 2,
    label: 'Emergency',
    description: 'Same day response',
    icon: '🚨'
  }
];

export const SERVICE_TYPE_MAP = {
  1: 'Flight',
  2: 'Hotel', 
  3: 'Tour',
  4: 'Visa',
  5: 'Complete Package'
} as const;

export const QUOTE_STATUS_MAP = {
  1: 'Submitted',
  2: 'Under Review', 
  3: 'Quote Provided',
  4: 'Payment Pending',
  5: 'Processing',
  6: 'Confirmed',
  7: 'Completed',
  8: 'Cancelled'
} as const;

// ====================================================
// 🔤 VALIDATION HELPERS
// ====================================================

export const validateQuoteRequest = (request: BaseQuoteRequest): string[] => {
  const errors: string[] = [];

  if (!request.contactEmail?.trim()) errors.push('Contact email is required');
  if (!request.contactPhone?.trim()) errors.push('Contact phone is required');
  if (!request.contactName?.trim()) errors.push('Contact name is required');
  if (request.urgency === undefined || request.urgency === null) errors.push('Urgency level is required');

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (request.contactEmail && !emailRegex.test(request.contactEmail)) {
    errors.push('Invalid email format');
  }

  // Phone validation (Ghana format - accept both +233xxxxxxxxx and 0xxxxxxxxx)
  const phoneRegex = /^(\+233\d{9}|0\d{9})$/;
  if (request.contactPhone && !phoneRegex.test(request.contactPhone)) {
    errors.push('Phone must be in Ghana format (+233xxxxxxxxx or 0xxxxxxxxx)');
  }

  // Urgency validation
  if (![0, 1, 2].includes(request.urgency)) {
    errors.push('Urgency must be 0 (Standard), 1 (Urgent), or 2 (Emergency)');
  }

  return errors;
};

export const validateFlightDetails = (details: FlightDetails): string[] => {
  const errors: string[] = [];

  if (!details.departureCity?.trim()) errors.push('Departure city is required');
  if (!details.arrivalCity?.trim()) errors.push('Arrival city is required');
  if (!details.departureDate?.trim()) errors.push('Departure date is required');
  if (!details.adultPassengers || details.adultPassengers < 1) errors.push('At least 1 adult passenger required');
  
  const totalPassengers = details.adultPassengers + details.childPassengers + details.infantPassengers;
  if (totalPassengers > 50) errors.push('Maximum 50 passengers allowed');

  // Round trip validation
  if (details.tripType === 'RoundTrip' && !details.returnDate?.trim()) {
    errors.push('Return date is required for round trip');
  }

  // Date format validation (basic check for ISO format)
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
  if (details.departureDate && !isoDateRegex.test(details.departureDate)) {
    errors.push('Departure date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }
  if (details.returnDate && !isoDateRegex.test(details.returnDate)) {
    errors.push('Return date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }

  return errors;
};

export const validateHotelDetails = (details: HotelDetails): string[] => {
  const errors: string[] = [];

  if (!details.destination?.trim()) errors.push('Destination is required');
  if (!details.checkInDate?.trim()) errors.push('Check-in date is required');
  if (!details.checkOutDate?.trim()) errors.push('Check-out date is required');
  if (!details.rooms || details.rooms < 1) errors.push('At least 1 room required');
  if (!details.adultGuests || details.adultGuests < 1) errors.push('At least 1 adult guest required');
  if (!details.roomType?.trim()) errors.push('Room type is required');

  // Date format validation
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
  if (details.checkInDate && !isoDateRegex.test(details.checkInDate)) {
    errors.push('Check-in date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }
  if (details.checkOutDate && !isoDateRegex.test(details.checkOutDate)) {
    errors.push('Check-out date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }

  return errors;
};

export const validateVisaDetails = (details: VisaDetails): string[] => {
  const errors: string[] = [];

  if (!details.destinationCountry?.trim()) errors.push('Destination country is required');
  if (!details.intendedTravelDate?.trim()) errors.push('Intended travel date is required');
  if (!details.passportNumber?.trim()) errors.push('Passport number is required');
  if (!details.nationality?.trim()) errors.push('Nationality is required');
  if (!details.purposeOfVisit?.trim()) errors.push('Purpose of visit is required');
  if (!details.durationOfStay || details.durationOfStay < 1 || details.durationOfStay > 365) {
    errors.push('Duration of stay must be between 1 and 365 days');
  }

  // Date format validation
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
  if (details.intendedTravelDate && !isoDateRegex.test(details.intendedTravelDate)) {
    errors.push('Travel date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }

  return errors;
};

export const validateTourDetails = (details: TourDetails): string[] => {
  const errors: string[] = [];

  if (!details.destination?.trim()) errors.push('Destination is required');
  if (!details.startDate?.trim()) errors.push('Start date is required');
  if (!details.endDate?.trim()) errors.push('End date is required');
  if (!details.groupSize || details.groupSize < 1) errors.push('At least 1 person required');
  if (!details.tourPackage?.trim()) errors.push('Tour package is required');

  // Date format validation
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;
  if (details.startDate && !isoDateRegex.test(details.startDate)) {
    errors.push('Start date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }
  if (details.endDate && !isoDateRegex.test(details.endDate)) {
    errors.push('End date must be in ISO format (YYYY-MM-DDTHH:mm:ssZ)');
  }

  return errors;
};

// ====================================================
// 🎯 RESPONSE UNION TYPES
// ====================================================

export type QuoteResult = QuoteResponse | ErrorResponse;
export type TrackingResult = QuoteTrackingResponse | ErrorResponse;