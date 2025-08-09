<template>
  <div>

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Get Hotel Quote
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Tell us your needs and we'll provide instant pricing for your perfect stay
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🏨 Best Rates</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⭐ Quality Properties</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💎 Exclusive Deals</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Success Message -->
          <div
            v-if="isSubmitted"
            class="bg-green-50 border border-green-200 rounded-lg p-8 mb-8"
          >
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-8 w-8 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-green-800">
                  Hotel Quote Request Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    hotel specialists will contact you within 2-4 hours with
                    your personalized quote and pricing.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your quote:</strong> Visit our
                    <nuxt-link
                      to="/my-bookings"
                      class="underline font-medium hover:text-blue-800"
                      >My Quotes</nuxt-link
                    >
                    or
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >quote tracker</nuxt-link
                    >
                    anytime using reference number {{ referenceNumber }}.
                  </p>
                  <div class="mt-4 flex space-x-3">
                    <nuxt-link
                      to="/"
                      class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      🏠 Return Home
                    </nuxt-link>
                    <nuxt-link
                      to="/track-booking"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      📋 Track Quote
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Wizard -->
          <BookingWizard
            v-else
            title="Hotel Quote Request"
            :steps="wizardSteps"
            :form-data="formData"
            :is-submitting="isSubmitting"
            :submit-text="{ default: '💰 Get My Quote', loading: 'Getting Quote...' }"
            storage-key="hotel-booking-progress"
            @submit="submitHotelRequest"
            @update-form-data="updateFormData"
          >
            <!-- Step 0: Personal Information -->
            <template #step-0>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Full Name *</label
                  >
                  <input
                    v-model="formData.fullName"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Email Address *</label
                  >
                  <input
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Phone Number *</label
                  >
                  <input
                    v-model="formData.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="+233 123 456 789"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Country of Residence</label
                  >
                  <input
                    v-model="formData.country"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ghana"
                  />
                </div>
              </div>
            </template>

            <!-- Step 1: Travel Details -->
            <template #step-1>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Destination City/Location *</label
                  >
                  <input
                    v-model="formData.destination"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Accra, Ghana"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Preferred Area/District</label
                  >
                  <input
                    v-model="formData.area"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Airport Area, East Legon, etc."
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Check-in Date *</label
                  >
                  <input
                    v-model="formData.checkInDate"
                    type="date"
                    required
                    :min="today"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Check-out Date *</label
                  >
                  <input
                    v-model="formData.checkOutDate"
                    type="date"
                    required
                    :min="formData.checkInDate || today"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Number of Rooms *</label
                  >
                  <select
                    v-model="formData.numberOfRooms"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select rooms</option>
                    <option value="1">1 Room</option>
                    <option value="2">2 Rooms</option>
                    <option value="3">3 Rooms</option>
                    <option value="4">4 Rooms</option>
                    <option value="5+">5+ Rooms</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Total Guests *</label
                  >
                  <select
                    v-model="formData.totalGuests"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6+">6+ Guests</option>
                  </select>
                </div>
              </div>

              <!-- Room Configuration -->
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Room Configuration Details</label
                >
                <textarea
                  v-model="formData.roomConfiguration"
                  rows="3"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 1 double room for 2 adults, 1 twin room for 2 children, etc."
                ></textarea>
              </div>
            </template>

            <!-- Step 2: Preferences & Budget -->
            <template #step-2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Hotel Star Rating *</label
                  >
                  <select
                    v-model="formData.starRating"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select rating</option>
                    <option value="3-star">3-Star Hotels</option>
                    <option value="4-star">4-Star Hotels</option>
                    <option value="5-star">5-Star Hotels</option>
                    <option value="luxury">Luxury/Boutique</option>
                    <option value="any">No Preference</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Budget Range per Night *</label
                  >
                  <select
                    v-model="formData.budgetRange"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Under $100</option>
                    <option value="mid-range">$100 - $250</option>
                    <option value="premium">$250 - $500</option>
                    <option value="luxury">$500+</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Meal Plan Preference</label
                  >
                  <select
                    v-model="formData.mealPlan"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">No preference</option>
                    <option value="room-only">Room Only</option>
                    <option value="breakfast">Breakfast Included</option>
                    <option value="half-board">
                      Half Board (Breakfast + Dinner)
                    </option>
                    <option value="full-board">Full Board (All Meals)</option>
                    <option value="all-inclusive">All Inclusive</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Preferred Hotel Chain</label
                  >
                  <input
                    v-model="formData.hotelChain"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Marriott, Hilton, Kempinski, etc."
                  />
                </div>
              </div>
            </template>

            <!-- Step 3: Special Requirements & Final Details -->
            <template #step-3>
              <div class="space-y-6">
                <!-- Amenities -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-4">
                    Important Amenities (select all that apply)
                  </label>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="wifi"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Free WiFi</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="parking"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Parking</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="pool"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Swimming Pool</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="gym"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Fitness Center</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="spa"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Spa/Wellness</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.amenities"
                        type="checkbox"
                        value="restaurant"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Restaurant</span>
                    </label>
                  </div>
                </div>

                <!-- Special Requests -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests & Requirements
                  </label>
                  <textarea
                    v-model="formData.specialRequests"
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Any special accommodations, dietary requirements, accessibility needs, celebration arrangements, etc."
                  ></textarea>
                </div>

                <!-- Urgency -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    v-model="formData.urgency"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select urgency</option>
                    <option value="standard">Standard (48-72 hours)</option>
                    <option value="urgent">Urgent (24 hours)</option>
                    <option value="asap">ASAP (Same day)</option>
                  </select>
                </div>

                <!-- Terms -->
                <div class="border-t pt-6">
                  <div class="flex items-start">
                    <input
                      v-model="formData.agreeToTerms"
                      type="checkbox"
                      required
                      class="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label class="ml-3 text-sm text-gray-600">
                      I agree to the
                      <a href="#" class="text-purple-600 hover:text-purple-800 underline">Terms of Service</a>
                      and
                      <a href="#" class="text-purple-600 hover:text-purple-800 underline">Privacy Policy</a>.
                      I understand this is a booking request and final confirmation will come from Global Horizons staff.
                    </label>
                  </div>
                </div>
              </div>
            </template>

          </BookingWizard>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import bookingService from '~/services/BookingService';
import authService from '~/services/AuthService';
import {
  HotelBookingSubmissionDto,
  HotelBookingDetails,
  URGENCY_OPTIONS,
  BookingSubmissionResponse
} from '~/types/booking-api-types';
import { forceRedirect } from '~/utils/navigation';

// SEO Meta
useHead({
  title: "Get Hotel Quote - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Get instant hotel quotes from Global Horizons. Compare prices and get personalized recommendations with exclusive rates.",
    },
  ],
});

// Form state
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const referenceNumber = ref("");

// Today's date for minimum date validation
const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

// Wizard steps configuration
const wizardSteps = [
  {
    id: 'personal',
    title: 'Personal Info',
    description: 'Your contact information',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.fullName?.trim()) errors.push('Full name is required');
      if (!data.email?.trim()) errors.push('Email is required');
      if (!data.phone?.trim()) errors.push('Phone number is required');
      return errors;
    }
  },
  {
    id: 'travel',
    title: 'Travel Details',
    description: 'Where and when you want to stay',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.destination?.trim()) errors.push('Destination is required');
      if (!data.checkInDate) errors.push('Check-in date is required');
      if (!data.checkOutDate) errors.push('Check-out date is required');
      if (!data.numberOfRooms) errors.push('Number of rooms is required');
      if (!data.totalGuests) errors.push('Number of guests is required');
      return errors;
    }
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'Your hotel preferences and budget',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.starRating) errors.push('Star rating preference is required');
      if (!data.budgetRange) errors.push('Budget range is required');
      return errors;
    }
  },
  {
    id: 'requirements',
    title: 'Requirements',
    description: 'Special requests and final details',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.urgency) errors.push('Urgency level is required');
      if (!data.agreeToTerms) errors.push('You must agree to the terms');
      return errors;
    }
  }
];

// Form data with proper TypeScript typing
const formData = reactive({
  // Contact information
  contactEmail: "",
  contactPhone: "",
  
  // Hotel details
  destination: "",
  checkInDate: "",
  checkOutDate: "",
  rooms: 1,
  adultGuests: 1,
  childGuests: 0,
  roomType: "standard" as 'standard' | 'deluxe' | 'suite',
  preferredHotel: "",
  starRating: "4-star" as '3-star' | '4-star' | '5-star',
  amenities: [] as string[],
  
  // Additional details
  specialRequests: "",
  urgency: 1,
  
  // Legacy fields for UI compatibility
  fullName: "",
  email: "",
  phone: "",
  country: "",
  area: "",
  numberOfRooms: "1",
  totalGuests: "1",
  roomConfiguration: "",
  budgetRange: "",
  mealPlan: "",
  hotelChain: "",
  additionalServices: [],
  purposeOfStay: "",
  agreeToTerms: false,
});

// Auto-fill user contact information
onMounted(() => {
  const defaultContact = bookingService.getDefaultContactInfo();
  if (defaultContact.contactEmail) {
    formData.contactEmail = defaultContact.contactEmail;
    formData.email = defaultContact.contactEmail; // For UI compatibility
  }
  if (defaultContact.contactPhone) {
    formData.contactPhone = defaultContact.contactPhone;
    formData.phone = defaultContact.contactPhone; // For UI compatibility
  }
  if (defaultContact.urgency) {
    formData.urgency = defaultContact.urgency;
  }
});

// Update form data from wizard
const updateFormData = (newData: Record<string, any>) => {
  Object.assign(formData, newData);
};

// Submit hotel booking using new Quote API
const submitHotelRequest = async () => {
  console.log('🏨 Starting hotel quote submission...');

  isSubmitting.value = true;

  try {
    // Auto-format phone number for Ghana
    let phoneNumber = formData.phone || formData.contactPhone;
    if (phoneNumber && !phoneNumber.startsWith('+233')) {
      if (phoneNumber.startsWith('0')) {
        phoneNumber = '+233' + phoneNumber.substring(1);
      } else if (phoneNumber.match(/^\d{9}$/)) {
        phoneNumber = '+233' + phoneNumber;
      } else if (!phoneNumber.startsWith('+')) {
        phoneNumber = '+233' + phoneNumber.replace(/\D/g, '').substring(-9);
      }
    }

    // Format dates to ISO format (API expects YYYY-MM-DDTHH:mm:ssZ)
    const formatDateToISO = (dateStr: string) => {
      if (!dateStr) return '';
      try {
        // If dateStr is already in YYYY-MM-DD format, append time
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
          return dateStr + 'T14:00:00Z';
        }
        // Otherwise try to parse as Date and format
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return '';
        return date.toISOString();
      } catch (error) {
        console.error('Date formatting error:', error);
        return '';
      }
    };

    // Get contact name from fullName field
    const contactName = formData.fullName || `${formData.email?.split('@')[0] || 'Customer'}`;
    
    // Map urgency correctly (0=Standard, 1=Urgent, 2=Emergency) 
    let urgencyLevel = 0;
    if (formData.urgency === "urgent") urgencyLevel = 1;
    else if (formData.urgency === "asap") urgencyLevel = 2;

    // Map room type correctly (API expects lowercase)
    let roomType = "standard";
    const budgetMap: Record<string, string> = {
      "budget": "standard",
      "mid-range": "deluxe", 
      "premium": "suite",
      "luxury": "suite"
    };
    if (formData.budgetRange && budgetMap[formData.budgetRange]) {
      roomType = budgetMap[formData.budgetRange];
    }

    // Create quote request matching API exactly
    const quoteRequest = {
      contactEmail: formData.email || formData.contactEmail,
      contactPhone: phoneNumber,
      contactName: contactName,
      specialRequests: formData.specialRequests || formData.roomConfiguration || undefined,
      urgency: urgencyLevel,
      hotelDetails: {
        destination: formData.destination,
        checkInDate: formatDateToISO(formData.checkInDate),
        checkOutDate: formatDateToISO(formData.checkOutDate),
        rooms: parseInt(formData.numberOfRooms) || 1,
        adultGuests: parseInt(formData.totalGuests) || 1,
        childGuests: 0,
        roomType: roomType,
        starRating: formData.hotelCategory || undefined,
        amenities: formData.amenities || [],
        preferredHotel: formData.preferredHotel || undefined
      }
    };

    console.log('📤 Submitting hotel quote request:', quoteRequest);
    console.log('📋 Form data check:', {
      checkInDate: formData.checkInDate,
      checkOutDate: formData.checkOutDate,
      formattedCheckIn: formatDateToISO(formData.checkInDate),
      formattedCheckOut: formatDateToISO(formData.checkOutDate),
      numberOfRooms: formData.numberOfRooms,
      totalGuests: formData.totalGuests
    });

    // Validate required fields before API call
    if (!quoteRequest.contactEmail) {
      throw new Error('Email address is required');
    }
    if (!quoteRequest.contactPhone) {
      throw new Error('Phone number is required');
    }
    if (!quoteRequest.contactName || quoteRequest.contactName.length < 2) {
      throw new Error('Full name is required');
    }
    if (!quoteRequest.hotelDetails.destination) {
      throw new Error('Destination is required');
    }
    if (!quoteRequest.hotelDetails.checkInDate) {
      throw new Error('Check-in date is required');
    }
    if (!quoteRequest.hotelDetails.checkOutDate) {
      throw new Error('Check-out date is required');
    }
    if (!quoteRequest.hotelDetails.rooms || quoteRequest.hotelDetails.rooms < 1) {
      throw new Error('At least 1 room is required');
    }
    if (!quoteRequest.hotelDetails.adultGuests || quoteRequest.hotelDetails.adultGuests < 1) {
      throw new Error('At least 1 adult guest is required');
    }
    if (!quoteRequest.hotelDetails.roomType) {
      throw new Error('Room type is required');
    }

    // Use QuoteService directly
    const { quoteService } = await import('~/services/QuoteService');
    const response = await quoteService.requestHotelQuote(quoteRequest);

    console.log('✅ Hotel quote submitted successfully:', response);

    if (response.success && response.referenceNumber) {
      // Update UI with success
      referenceNumber.value = response.referenceNumber;
      isSubmitted.value = true;
    } else {
      throw new Error(response.message || 'Quote submission failed');
    }

  } catch (error: any) {
    console.error('❌ Hotel quote submission failed:', error);
    let errorMsg = error.message || 'Failed to submit hotel request. Please try again.';
    
    // Handle specific validation errors
    if (errorMsg.includes('Phone must be in Ghana format')) {
      errorMsg = 'Please enter a valid Ghana phone number (e.g., 0123456789 or +233123456789)';
    }
    if (errorMsg.includes('contactName') || errorMsg.includes('Contact name')) {
      errorMsg = 'Please enter your full name';
    }
    
    throw new Error(errorMsg);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .grid.grid-cols-2.md\\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }

  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }

  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  input,
  select,
  textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}

/* Smooth transitions */
.transform.hover\\:scale-105:hover {
  transform: scale(1.02);
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #7c3aed;
  border-color: #7c3aed;
}
</style>