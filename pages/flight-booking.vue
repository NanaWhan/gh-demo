<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Detailed Flight Booking Request
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Need more options? Fill out this detailed form for personalized flight assistance
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >✈️ Expert Assistance</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💰 Best Prices</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Quick Response</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Quote Alternative -->
    <section class="py-8 bg-blue-50 border-b border-blue-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="bg-white rounded-lg p-6 shadow-sm border border-blue-200">
            <div class="flex items-center justify-center mb-4">
              <svg class="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-lg font-semibold text-blue-900">Looking for a Quick Quote?</h3>
            </div>
            <p class="text-gray-600 mb-4">
              For a faster experience, try our <strong>simplified flight quote form</strong> that takes just 2 minutes to complete.
            </p>
            <nuxt-link to="/flights" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Get Quick Flight Quote
            </nuxt-link>
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
            v-if="successMessage"
            class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-green-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-800">
                  Flight Booking Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p v-if="referenceNumber">
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    Your flight booking request has been submitted to our travel
                    experts. We'll contact you within 2-4 hours with flight
                    options and pricing.
                  </p>
                  <p
                    v-if="referenceNumber"
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your booking:</strong> Visit your
                    <nuxt-link
                      to="/my-bookings"
                      class="underline font-medium hover:text-blue-800"
                      >My Bookings</nuxt-link
                    >
                    page anytime to check status and updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">
                  Booking Submission Failed
                </h3>
                <div class="mt-2 text-sm text-red-700">
                  <p>{{ errorMessage }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div v-else class="bg-white rounded-lg shadow-lg p-8">
            <form @submit.prevent="submitBooking">
              <!-- Trip Type -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">Trip Type</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.tripType"
                      type="radio"
                      value="one-way"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.tripType === 'one-way'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">✈️</div>
                      <div class="font-medium">One Way</div>
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.tripType"
                      type="radio"
                      value="round-trip"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.tripType === 'round-trip'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">🔄</div>
                      <div class="font-medium">Round Trip</div>
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.tripType"
                      type="radio"
                      value="multi-city"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.tripType === 'multi-city'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">🌍</div>
                      <div class="font-medium">Multi-City</div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Flight Details -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Flight Details
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >From (Departure City/Airport)</label
                    >
                    <input
                      v-model="bookingData.departureCity"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Accra (ACC), Lagos (LOS)"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >To (Destination City/Airport)</label
                    >
                    <input
                      v-model="bookingData.arrivalCity"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., London (LHR), New York (JFK)"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Departure Date</label
                    >
                    <input
                      v-model="bookingData.departureDate"
                      type="date"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div v-if="bookingData.tripType === 'round-trip'">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Return Date</label
                    >
                    <input
                      v-model="bookingData.returnDate"
                      type="date"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <!-- Multi-city additional fields -->
                <div v-if="bookingData.tripType === 'multi-city'" class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Cities & Dates</label
                  >
                  <textarea
                    v-model="bookingData.multiCityDetails"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your multi-city itinerary: cities and preferred dates"
                  ></textarea>
                </div>

                <!-- Flexibility -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Date Flexibility</label
                  >
                  <select
                    v-model="bookingData.flexibility"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="exact">Exact dates only</option>
                    <option value="1-2-days">±1-2 days flexible</option>
                    <option value="3-5-days">±3-5 days flexible</option>
                    <option value="1-week">±1 week flexible</option>
                    <option value="very-flexible">
                      Very flexible (best price)
                    </option>
                  </select>
                </div>
              </div>

              <!-- Passenger Information -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Passenger Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Adults (12+ years)</label
                    >
                    <select
                      v-model="bookingData.adultPassengers"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option v-for="n in 9" :key="n" :value="n">
                        {{ n }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Children (2-11 years)</label
                    >
                    <select
                      v-model="bookingData.childPassengers"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option v-for="n in 8" :key="n" :value="n - 1">
                        {{ n - 1 }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Infants (under 2)</label
                    >
                    <select
                      v-model="bookingData.infantPassengers"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option v-for="n in 5" :key="n" :value="n - 1">
                        {{ n - 1 }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Flight Preferences -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Flight Preferences
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Preferred Class</label
                    >
                    <select
                      v-model="bookingData.preferredClass"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="economy">Economy</option>
                      <option value="premium-economy">Premium Economy</option>
                      <option value="business">Business Class</option>
                      <option value="first">First Class</option>
                      <option value="any">Show me all options</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Budget Range (USD)</label
                    >
                    <select
                      v-model="bookingData.budget"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-plus">$5,000+</option>
                      <option value="no-limit">
                        Best option regardless of price
                      </option>
                    </select>
                  </div>
                </div>

                <!-- Airline Preferences -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Airline Preferences (Optional)</label
                  >
                  <input
                    v-model="bookingData.airlinePreferences"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Emirates, British Airways, Turkish Airlines"
                  />
                </div>
              </div>

              <!-- Special Requirements -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Special Requirements
                </h3>

                <!-- Checkboxes for common requirements -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <label class="flex items-center">
                    <input
                      v-model="bookingData.specialRequirements.wheelchair"
                      type="checkbox"
                      class="mr-2"
                    />
                    Wheelchair assistance
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="bookingData.specialRequirements.dietary"
                      type="checkbox"
                      class="mr-2"
                    />
                    Special dietary requirements
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="bookingData.specialRequirements.extraLegroom"
                      type="checkbox"
                      class="mr-2"
                    />
                    Extra legroom seats
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="bookingData.specialRequirements.petTravel"
                      type="checkbox"
                      class="mr-2"
                    />
                    Pet travel
                  </label>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Requirements</label
                  >
                  <textarea
                    v-model="bookingData.additionalRequirements"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any other special requests or requirements..."
                  ></textarea>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Contact Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Full Name *</label
                    >
                    <input
                      v-model="bookingData.contactName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., John Doe"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Email Address *</label
                    >
                    <input
                      v-model="bookingData.contactEmail"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Phone Number *</label
                    >
                    <input
                      v-model="bookingData.contactPhone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Preferred Contact Method</label
                    >
                    <select
                      v-model="bookingData.contactMethod"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="any">Any method</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Urgency -->
              <div class="mb-8">
                <h3 class="text-xl font-bold text-gray-800 mb-4">
                  Request Urgency
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.urgency"
                      type="radio"
                      value="urgent"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.urgency === 'urgent'
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">🚨</div>
                      <div class="font-medium">Urgent</div>
                      <div class="text-sm text-gray-600">
                        Need response within 2 hours
                      </div>
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.urgency"
                      type="radio"
                      value="normal"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.urgency === 'normal'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">⏰</div>
                      <div class="font-medium">Normal</div>
                      <div class="text-sm text-gray-600">
                        Response within 4-6 hours
                      </div>
                    </div>
                  </label>
                  <label class="cursor-pointer">
                    <input
                      v-model="bookingData.urgency"
                      type="radio"
                      value="flexible"
                      class="sr-only"
                    />
                    <div
                      class="border-2 rounded-lg p-4 text-center transition-all"
                      :class="
                        bookingData.urgency === 'flexible'
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      "
                    >
                      <div class="text-2xl mb-2">🌱</div>
                      <div class="font-medium">Flexible</div>
                      <div class="text-sm text-gray-600">
                        Response within 24 hours
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="text-center">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="flight-submit-btn"
                  style="
                    background: linear-gradient(
                      45deg,
                      #2563eb,
                      #1d4ed8
                    ) !important;
                    color: white !important;
                    width: 100%;
                    padding: 16px 24px;
                    font-weight: bold;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    font-size: 16px;
                  "
                  @mouseover="$event.target.style.transform = 'scale(1.05)'"
                  @mouseout="$event.target.style.transform = 'scale(1)'"
                >
                  <span v-if="isSubmitting">Submitting...</span>
                  <span v-else>Get Flight Quote ✈️</span>
                </button>
                <p class="text-sm text-gray-600 mt-4">
                  Your request will be processed immediately. We'll contact you
                  within the timeframe selected above.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import bookingService from '~/services/BookingService';
import authService from '~/services/AuthService';
import {
  FlightBookingSubmissionDto,
  FlightBookingDetails,
  PassengerInfo,
  URGENCY_OPTIONS,
  BookingSubmissionResponse
} from '~/types/booking-api-types';
import { forceRedirect } from '~/utils/navigation';

// SEO Meta
useHead({
  title: "Flight Booking Request - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Submit your flight booking request and let our travel experts find you the best deals and options for your journey.",
    },
  ],
});

// Form state
const bookingSubmitted = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const referenceNumber = ref("");

// Form data with proper TypeScript typing
const bookingData = reactive({
  // Flight details
  tripType: "round-trip" as 'one-way' | 'round-trip' | 'multi-city',
  departureCity: "",
  arrivalCity: "",
  departureDate: "",
  returnDate: "",
  adultPassengers: 1,
  childPassengers: 0,
  infantPassengers: 0,
  preferredClass: "economy" as 'economy' | 'business' | 'first',
  preferredAirline: "",

  // Contact information
  contactEmail: "",
  contactPhone: "",
  contactName: "",
  specialRequests: "",
  urgency: "normal" as 'urgent' | 'normal' | 'flexible',

  // Passenger information
  passengers: [] as PassengerInfo[],

  // Additional fields from form
  multiCityDetails: "",
  flexibility: "exact",
  budget: "1000-2000",
  airlinePreferences: "",
  specialRequirements: {
    wheelchair: false,
    dietary: false,
    extraLegroom: false,
    petTravel: false
  },
  additionalRequirements: "",
  contactMethod: "email"
});

// Auto-fill user contact information
onMounted(() => {
  const defaultContact = bookingService.getDefaultContactInfo();
  if (defaultContact.contactEmail) {
    bookingData.contactEmail = defaultContact.contactEmail;
  }
  if (defaultContact.contactPhone) {
    bookingData.contactPhone = defaultContact.contactPhone;
  }
  
  // Set contact name from current user if available
  const currentUser = authService.getCurrentUser();
  if (currentUser && currentUser.fullName) {
    bookingData.contactName = currentUser.fullName;
  }
});

// Helper functions
const showMessage = (message: string, type: 'success' | 'error' = 'error') => {
  if (type === 'success') {
    successMessage.value = message;
    errorMessage.value = '';
  } else {
    errorMessage.value = message;
    successMessage.value = '';
  }
};

const addPassenger = () => {
  const newPassenger: PassengerInfo = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    passportNumber: "",
    nationality: ""
  };
  bookingData.passengers.push(newPassenger);
};

const removePassenger = (index: number) => {
  bookingData.passengers.splice(index, 1);
};

const validateForm = (): string[] => {
  const errors: string[] = [];

  if (!bookingData.departureCity.trim()) errors.push('Departure city is required');
  if (!bookingData.arrivalCity.trim()) errors.push('Arrival city is required');
  if (!bookingData.departureDate) errors.push('Departure date is required');
  if (bookingData.tripType === 'round-trip' && !bookingData.returnDate) {
    errors.push('Return date is required for round-trip flights');
  }
  if (!bookingData.contactName.trim()) errors.push('Contact name is required');
  if (!bookingData.contactEmail.trim()) errors.push('Contact email is required');
  if (!bookingData.contactPhone.trim()) errors.push('Contact phone is required');
  if (bookingData.adultPassengers < 1) errors.push('At least 1 adult passenger is required');

  return errors;
};

// Submit booking using new API
const submitBooking = async () => {
  console.log('🛫 Starting flight booking submission...');

  const { notifyQuoteSuccess, notifyQuoteError, notifyError } = useNotifications();

  // Validate form
  const validationErrors = validateForm();
  if (validationErrors.length > 0) {
    notifyError('Validation Error', 'Please fix the following errors: ' + validationErrors.join(', '));
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Map urgency from string to number
    const urgencyMap = {
      'urgent': 2,
      'normal': 1, 
      'flexible': 1
    };
    
    // Build special requests string from various form fields
    const specialRequestsParts = [];
    if (bookingData.specialRequests) specialRequestsParts.push(bookingData.specialRequests);
    if (bookingData.additionalRequirements) specialRequestsParts.push(bookingData.additionalRequirements);
    if (bookingData.multiCityDetails) specialRequestsParts.push(`Multi-city details: ${bookingData.multiCityDetails}`);
    if (bookingData.flexibility !== 'exact') specialRequestsParts.push(`Date flexibility: ${bookingData.flexibility}`);
    if (bookingData.budget) specialRequestsParts.push(`Budget: ${bookingData.budget}`);
    if (bookingData.airlinePreferences) specialRequestsParts.push(`Airline preferences: ${bookingData.airlinePreferences}`);
    
    // Add special requirements checkboxes
    const checkedRequirements = Object.entries(bookingData.specialRequirements)
      .filter(([key, value]) => value)
      .map(([key, value]) => key.replace(/([A-Z])/g, ' $1').toLowerCase());
    if (checkedRequirements.length > 0) {
      specialRequestsParts.push(`Special requirements: ${checkedRequirements.join(', ')}`);
    }

    // Prepare flight booking data according to API specification
    const flightDetails: FlightBookingDetails = {
      tripType: bookingData.tripType,
      departureCity: bookingData.departureCity,
      arrivalCity: bookingData.arrivalCity,
      departureDate: bookingData.departureDate + "T00:00:00Z",
      returnDate: bookingData.tripType === 'round-trip' && bookingData.returnDate ? bookingData.returnDate + "T00:00:00Z" : undefined,
      adultPassengers: bookingData.adultPassengers,
      childPassengers: bookingData.childPassengers,
      infantPassengers: bookingData.infantPassengers,
      preferredClass: bookingData.preferredClass,
      preferredAirline: bookingData.preferredAirline || undefined,
      passengers: bookingData.passengers.length > 0 ? bookingData.passengers : []
    };

    const submissionData: FlightBookingSubmissionDto = {
      flightDetails,
      contactEmail: bookingData.contactEmail,
      contactPhone: bookingData.contactPhone,
      contactName: bookingData.contactName || (bookingData.passengers.length > 0 ? `${bookingData.passengers[0].firstName} ${bookingData.passengers[0].lastName}` : "Traveler").trim(),
      specialRequests: specialRequestsParts.length > 0 ? specialRequestsParts.join('; ') : undefined,
      urgency: urgencyMap[bookingData.urgency] || 1
    };

    console.log('📤 Submitting flight booking data:', submissionData);

    // Submit to API
    const response: BookingSubmissionResponse = await bookingService.submitFlightBooking(submissionData);

    console.log('✅ Flight booking submitted successfully:', response);

    // Update UI with success
    referenceNumber.value = response.referenceNumber;
    bookingSubmitted.value = true;
    
    // Show success notification
    notifyQuoteSuccess(response.referenceNumber, 'Flight');
    
    // Also update the page UI for users who don't see notifications
    showMessage(`Flight booking submitted successfully! Your reference number is ${response.referenceNumber}`, 'success');

  } catch (error: any) {
    console.error('❌ Flight booking submission failed:', error);
    const errorMsg = error.message || error.data?.message || 'Failed to submit flight booking. Please try again.';
    
    // Show notification and page message
    notifyQuoteError('Flight', errorMsg);
    showMessage(errorMsg);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Flight Submit Button - Force Visibility */
.flight-submit-btn {
  background: linear-gradient(45deg, #2563eb, #1d4ed8) !important;
  color: white !important;
  border: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  display: block !important;
}

.flight-submit-btn:hover {
  background: linear-gradient(45deg, #1d4ed8, #1e40af) !important;
  transform: scale(1.05) !important;
}

.flight-submit-btn:disabled {
  background: linear-gradient(45deg, #9ca3af, #6b7280) !important;
  transform: none !important;
  cursor: not-allowed !important;
}

/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .bg-white.rounded-lg {
    padding: 1.5rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-2 {
    gap: 1rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-3 {
    gap: 1rem;
  }

  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }

  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }
}
</style>
