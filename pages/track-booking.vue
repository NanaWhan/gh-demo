<template>
  <div>
    <!-- Navigation -->
    <NavBar current-page="track-booking" />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-green-900 via-green-800 to-teal-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            My Confirmed Bookings
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Track your confirmed reservations and payments (login required)
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🔒 Secure Access</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Real-time Updates</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >📞 Direct Support</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- User Welcome Section -->
    <section class="py-8 bg-blue-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4"
            >
              <span class="text-lg font-bold text-white"
                >{{ firstName[0] }}{{ lastName[0] }}</span
              >
            </div>
            <div class="text-left">
              <p class="text-lg font-semibold text-gray-900">
                Welcome, {{ firstName }}!
              </p>
              <p class="text-sm text-gray-600">
                Your bookings are secure and private
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tracking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <!-- Search Form -->
          <div v-if="!trackingResult" class="bg-white rounded-lg shadow-lg p-8">
            <div class="text-center mb-8">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">
                Track Your Confirmed Booking
              </h2>
              <p class="text-gray-600">
                Enter the reference number from your confirmed booking (payments completed)
              </p>
            </div>

            <form @submit.prevent="trackBooking">
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Reference Number</label
                >
                <input
                  v-model="referenceNumber"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-lg font-mono tracking-wider"
                  placeholder="e.g., BFL1234567890, BHT1234567890"
                  @input="formatReferenceNumber"
                />
                <p class="text-sm text-gray-500 mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 inline mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Your booking reference was sent when you completed payment for your confirmed reservation
                </p>
              </div>

              <button
                type="submit"
                :disabled="isTracking || !referenceNumber"
                class="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                <span v-if="isTracking">Tracking...</span>
                <span v-else>Track Booking</span>
              </button>
            </form>

            <!-- Quick Examples -->
            <div class="mt-8 p-4 bg-gray-50 rounded-lg">
              <p class="text-sm text-gray-600 mb-2">
                <strong>Reference Number Examples:</strong>
              </p>
              <div class="flex flex-wrap gap-2">
                <button
                  @click="referenceNumber = 'BFL1234567890'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  BFL1234567890 (Flight Booking)
                </button>
                <button
                  @click="referenceNumber = 'BHT9876543210'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  BHT9876543210 (Hotel Booking)
                </button>
                <button
                  @click="referenceNumber = 'BTR5555666677'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  BTR5555666677 (Tour Booking)
                </button>
              </div>
            </div>
            
            <!-- Help distinguish quotes vs bookings -->
            <div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 class="text-sm font-semibold text-blue-800 mb-2">ℹ️ Need help finding your reference?</h4>
              <div class="text-sm text-blue-700 space-y-1">
                <p>• <strong>Quote references</strong> start with Q (QFL, QHT, etc.) - <nuxt-link to="/track-quote" class="text-blue-600 underline hover:text-blue-800">track quotes here</nuxt-link></p>
                <p>• <strong>Booking references</strong> start with B (BFL, BHT, etc.) - track confirmed bookings here</p>
                <p>• Only paid and confirmed reservations have booking references</p>
              </div>
            </div>
          </div>

          <!-- Tracking Result -->
          <div v-else class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Header -->
            <div
              class="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white"
            >
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-xl font-bold">
                    {{ trackingResult.serviceType }} Booking
                  </h2>
                  <p class="text-green-100">
                    Reference: {{ trackingResult.reference }}
                  </p>
                </div>
                <button
                  @click="resetTracking"
                  class="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Status Timeline -->
            <div class="p-6">
              <div class="mb-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">
                  Booking Status
                </h3>

                <!-- Status Steps -->
                <div class="space-y-4">
                  <div
                    v-for="(step, index) in statusSteps"
                    :key="index"
                    class="flex items-center"
                  >
                    <!-- Status Icon -->
                    <div class="flex-shrink-0 mr-4">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors"
                        :class="
                          getStatusClass(
                            step.status,
                            trackingResult.currentStatus
                          )
                        "
                      >
                        <svg
                          v-if="step.status <= trackingResult.currentStatus"
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span v-else class="text-xs font-bold">
                          {{ step.status }}
                        </span>
                      </div>
                    </div>

                    <!-- Status Content -->
                    <div class="flex-1">
                      <div class="flex items-center justify-between">
                        <div>
                          <h4
                            class="font-medium transition-colors"
                            :class="
                              step.status <= trackingResult.currentStatus
                                ? 'text-green-600'
                                : 'text-gray-500'
                            "
                          >
                            {{ step.title }}
                          </h4>
                          <p
                            class="text-sm transition-colors"
                            :class="
                              step.status <= trackingResult.currentStatus
                                ? 'text-gray-600'
                                : 'text-gray-400'
                            "
                          >
                            {{ step.description }}
                          </p>
                        </div>
                        <div
                          v-if="
                            step.status <= trackingResult.currentStatus &&
                            step.timestamp
                          "
                          class="text-right"
                        >
                          <p class="text-xs text-gray-500">
                            {{ step.timestamp }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Current Status Info -->
              <div
                class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
              >
                <div class="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-blue-500 mr-3 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-medium text-blue-800">
                      {{ trackingResult.statusMessage }}
                    </h4>
                    <p class="text-sm text-blue-600 mt-1">
                      {{ trackingResult.estimatedTime }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Contact Information -->
              <div class="border-t pt-6">
                <h4 class="font-medium text-gray-800 mb-3">
                  Need Immediate Assistance?
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="tel:+233123456789"
                    class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-600 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p class="text-sm font-medium">Call Us</p>
                      <p class="text-xs text-gray-500">+233 123 456 789</p>
                    </div>
                  </a>

                  <nuxt-link
                    to="/contact"
                    class="flex items-center p-3 border border-gray-200 rounded-lg hover:border-green-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-green-600 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <div>
                      <p class="text-sm font-medium">Live Chat</p>
                      <p class="text-xs text-gray-500">Online support</p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// Authentication middleware - PROTECT THIS PAGE
definePageMeta({
  middleware: "auth",
});

// Page meta
useHead({
  title: "My Confirmed Bookings - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Track your confirmed booking reservations and travel documents with Global Horizons Travel Services.",
    },
  ],
});

// Get authenticated user
import authService from '~/services/AuthService';
import bookingService from '~/services/BookingService';

const user = ref(authService.getCurrentUser() || {
  fullName: "Guest User",
  email: "guest@example.com",
});

// Parse name for display
const firstName = computed(() => {
  if (user.value.fullName) {
    return user.value.fullName.split(' ')[0];
  }
  return user.value.firstName || 'Guest';
});
const lastName = computed(() => {
  if (user.value.fullName) {
    const parts = user.value.fullName.split(' ');
    return parts[parts.length - 1];
  }
  return user.value.lastName || 'User';
});

// Form state
const referenceNumber = ref("");
const isTracking = ref(false);
const trackingResult = ref(null);

// Helper functions
const getServiceTypeName = (serviceType) => {
  const types = {
    1: "Flight",
    2: "Hotel", 
    3: "Tour",
    4: "Visa",
    5: "Complete Package"
  };
  return types[serviceType] || "Unknown";
};

const getStatusMessage = (status) => {
  const messages = {
    1: "Your request has been submitted and is in our queue",
    2: "Our team is reviewing your request",
    3: "Quote has been prepared and sent to you",
    4: "Awaiting payment confirmation",
    5: "Payment received successfully",
    6: "Booking confirmed - details will follow",
    7: "Request has expired",
    8: "Request was cancelled"
  };
  return messages[status] || "Status unknown";
};

// Status steps configuration for confirmed bookings
const statusSteps = [
  {
    status: 1,
    title: "Payment Received",
    description:
      "Your payment has been confirmed and booking process initiated",
    timestamp: null,
  },
  {
    status: 2,
    title: "Processing",
    description:
      "Our team is processing your booking and making arrangements",
    timestamp: null,
  },
  {
    status: 3,
    title: "Confirmed",
    description:
      "Your booking is confirmed with providers and documents are being prepared",
    timestamp: null,
  },
  {
    status: 4,
    title: "Complete",
    description:
      "All documents issued - tickets, vouchers, and itinerary sent to you",
    timestamp: null,
  },
];

// Mock tracking data for confirmed bookings (in real app, this would come from your authenticated booking API)
const mockTrackingData = {
  BFL1234567890: {
    reference: "BFL1234567890",
    serviceType: "Flight",
    currentStatus: 6,
    statusMessage: "Your flight booking is confirmed! E-tickets have been issued.",
    estimatedTime:
      "All documents have been sent to your email. Check-in opens 24 hours before departure.",
    timestamps: {
      1: "2024-01-15 10:30 AM",
      2: "2024-01-15 10:45 AM",
      3: "2024-01-15 12:15 PM",
      4: "2024-01-15 03:30 PM",
    },
  },
  BHT9876543210: {
    reference: "BHT9876543210",
    serviceType: "Hotel",
    currentStatus: 6,
    statusMessage:
      "Your hotel reservation is confirmed! Booking voucher has been issued.",
    estimatedTime:
      "Confirmation documents sent to your email. Enjoy your stay!",
    timestamps: {
      1: "2024-01-15 09:15 AM",
      2: "2024-01-15 09:30 AM",
      3: "2024-01-15 11:45 AM",
      4: "2024-01-15 02:15 PM",
    },
  },
  BTR5555666677: {
    reference: "BTR5555666677",
    serviceType: "Tour Package",
    currentStatus: 7,
    statusMessage: "Your tour booking is complete! All arrangements finalized.",
    estimatedTime:
      "Itinerary and vouchers sent to your email. Have an amazing trip!",
    timestamps: {
      1: "2024-01-14 02:00 PM",
      2: "2024-01-14 02:30 PM",
      3: "2024-01-14 04:45 PM",
      4: "2024-01-15 09:00 AM",
    },
  },
};

// Format reference number as user types
const formatReferenceNumber = () => {
  referenceNumber.value = referenceNumber.value.toUpperCase();
};

// Get status class for styling
const getStatusClass = (stepStatus, currentStatus) => {
  if (stepStatus <= currentStatus) {
    return "bg-green-500 border-green-500 text-white";
  }
  return "bg-gray-100 border-gray-300 text-gray-400";
};

// Track booking function
const trackBooking = async () => {
  if (!referenceNumber.value.trim()) {
    alert('Please enter a reference number');
    return;
  }

  isTracking.value = true;

  try {
    // Use the authenticated booking tracking endpoint  
    const response = await $fetch(`https://glohorizonapi.fly.dev/api/booking/track/${referenceNumber.value}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authService.getToken()}`
      }
    });
    
    const result = response;

    if (result) {
      // Map backend response to frontend format
      trackingResult.value = {
        reference: result.referenceNumber,
        serviceType: getServiceTypeName(result.serviceType),
        destination: result.destination,
        createdAt: result.createdAt,
        travelDate: result.travelDate,
        contactEmail: result.contactEmail,
        contactPhone: result.contactPhone,
        contactName: result.contactName,
        specialRequests: result.specialRequests,
        quotedAmount: result.quotedAmount,
        currency: result.currency,
        currentStatus: result.status, // API returns numeric status
        statusMessage: getStatusMessage(result.status),
        estimatedTime: "We will update you within 24-48 hours.",
        timestamps: result.statusHistory?.reduce((acc, hist) => {
          acc[hist.toStatus] = new Date(hist.changedAt).toLocaleString();
          return acc;
        }, {}) || {},
      };

      // Update status steps with timestamps
      statusSteps.forEach((step) => {
        if (trackingResult.value.timestamps[step.status]) {
          step.timestamp = trackingResult.value.timestamps[step.status];
        }
      });
    }
  } catch (error) {
    console.error("Tracking failed:", error);
    alert(
      "Booking reference not found. Please check your reference number and try again."
    );
  }

  isTracking.value = false;
};

// Helper function for default status messages
const getDefaultStatusMessage = (status) => {
  const messages = {
    Submitted: "Your booking request has been received and is being reviewed.",
    Processing: "We are currently processing your booking request.",
    Confirmed: "Great news! Your booking has been confirmed.",
    Completed: "Your booking is complete. Have a wonderful trip!",
  };
  return messages[status] || "Your booking is being processed.";
};

// Reset tracking to search again
const resetTracking = () => {
  trackingResult.value = null;
  referenceNumber.value = "";
  // Reset timestamps
  statusSteps.forEach((step) => {
    step.timestamp = null;
  });
};
</script>

<style scoped>
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
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }

  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }

  .flex.items-center.justify-between {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>
