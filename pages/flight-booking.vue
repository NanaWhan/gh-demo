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
            Flight Booking Request
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Let our travel experts find you the perfect flight
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

    <!-- Booking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Success Message -->
          <div
            v-if="bookingSubmitted"
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
                  Booking Request Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    team will contact you within 2-4 hours with your flight
                    options.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your booking:</strong> Visit our
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >booking tracker</nuxt-link
                    >
                    anytime to check your status using reference number
                    {{ referenceNumber }}.
                  </p>
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
                      v-model="bookingData.departure"
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
                      v-model="bookingData.destination"
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
                      v-model="bookingData.adults"
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
                      v-model="bookingData.children"
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
                      v-model="bookingData.infants"
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
                      v-model="bookingData.class"
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
                      v-model="bookingData.fullName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Email Address *</label
                    >
                    <input
                      v-model="bookingData.email"
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
                      v-model="bookingData.phone"
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

<script setup>
import { ref, reactive } from "vue";
import emailjs from "@emailjs/browser";

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
const referenceNumber = ref("");

// Form data
const bookingData = reactive({
  tripType: "round-trip",
  departure: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  multiCityDetails: "",
  flexibility: "exact",
  adults: 1,
  children: 0,
  infants: 0,
  class: "economy",
  budget: "500-1000",
  airlinePreferences: "",
  specialRequirements: {
    wheelchair: false,
    dietary: false,
    extraLegroom: false,
    petTravel: false,
  },
  additionalRequirements: "",
  fullName: "",
  email: "",
  phone: "",
  contactMethod: "email",
  urgency: "normal",
});

// Generate reference number
const generateReferenceNumber = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `FL${timestamp}${random}`.slice(-10).toUpperCase();
};

// Format special requirements for email
const formatSpecialRequirements = () => {
  const requirements = [];
  if (bookingData.specialRequirements.wheelchair)
    requirements.push("Wheelchair assistance");
  if (bookingData.specialRequirements.dietary)
    requirements.push("Special dietary requirements");
  if (bookingData.specialRequirements.extraLegroom)
    requirements.push("Extra legroom seats");
  if (bookingData.specialRequirements.petTravel)
    requirements.push("Pet travel");

  let formatted = requirements.join(", ");
  if (bookingData.additionalRequirements) {
    formatted += (formatted ? "; " : "") + bookingData.additionalRequirements;
  }

  return formatted || "None";
};

// Submit booking
const submitBooking = async () => {
  isSubmitting.value = true;
  referenceNumber.value = generateReferenceNumber();

  try {
    // Prepare email template data
    const emailData = {
      reference_number: referenceNumber.value,
      customer_name: bookingData.fullName,
      customer_email: bookingData.email,
      customer_phone: bookingData.phone,
      trip_type: bookingData.tripType,
      departure: bookingData.departure,
      destination: bookingData.destination,
      departure_date: bookingData.departureDate,
      return_date: bookingData.returnDate || "N/A",
      multi_city_details: bookingData.multiCityDetails || "N/A",
      flexibility: bookingData.flexibility,
      passengers: `${bookingData.adults} Adults, ${bookingData.children} Children, ${bookingData.infants} Infants`,
      preferred_class: bookingData.class,
      budget_range: bookingData.budget,
      airline_preferences: bookingData.airlinePreferences || "No preference",
      special_requirements: formatSpecialRequirements(),
      contact_method: bookingData.contactMethod,
      urgency: bookingData.urgency,
      submission_time: new Date().toLocaleString(),
    };

    // Send customer confirmation email
    await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "customer_flight_confirmation", // Replace with your customer template ID
      emailData,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    );

    // Send admin notification email
    await emailjs.send(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "admin_flight_notification", // Replace with your admin template ID
      emailData,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    );

    bookingSubmitted.value = true;
  } catch (error) {
    console.error("Error submitting booking:", error);
    alert(
      "There was an error submitting your request. Please try again or contact us directly."
    );
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
 