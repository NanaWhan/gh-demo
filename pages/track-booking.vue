<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-green-900 via-green-800 to-teal-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Track Your Booking
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Enter your reference number to check your booking status
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >📋 Real-time Updates</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Instant Status</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >📞 Direct Contact</span
            >
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
                Track Your Request
              </h2>
              <p class="text-gray-600">
                Enter the reference number from your booking confirmation
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
                  placeholder="e.g., FL1234567890"
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
                  Your reference number was sent via email and SMS when you
                  submitted your booking
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
                  @click="referenceNumber = 'FL1234567890'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  FL1234567890 (Flight)
                </button>
                <button
                  @click="referenceNumber = 'HT9876543210'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  HT9876543210 (Hotel)
                </button>
                <button
                  @click="referenceNumber = 'TR5555666677'"
                  class="text-xs bg-white border border-gray-200 hover:border-green-300 px-3 py-1 rounded-full transition-colors"
                >
                  TR5555666677 (Tour)
                </button>
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
import { ref, reactive } from "vue";

// SEO Meta
useHead({
  title: "Track Your Booking - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Track the status of your travel booking request in real-time. Enter your reference number to get instant updates.",
    },
  ],
});

// Form state
const referenceNumber = ref("");
const isTracking = ref(false);
const trackingResult = ref(null);

// Status steps configuration
const statusSteps = [
  {
    status: 1,
    title: "Request Received",
    description:
      "Your booking request has been received and logged in our system",
    timestamp: null,
  },
  {
    status: 2,
    title: "Processing",
    description:
      "Our travel experts are working on your request and finding the best options",
    timestamp: null,
  },
  {
    status: 3,
    title: "Quote Ready",
    description:
      "We have prepared your options and will contact you with details",
    timestamp: null,
  },
  {
    status: 4,
    title: "Completed",
    description:
      "Your booking has been confirmed and travel documents are being prepared",
    timestamp: null,
  },
];

// Mock tracking data (in real app, this would come from your admin API)
const mockTrackingData = {
  FL1234567890: {
    reference: "FL1234567890",
    serviceType: "Flight",
    currentStatus: 3,
    statusMessage: "Great news! We've found excellent flight options for you.",
    estimatedTime:
      "Our agent will call you within the next 2 hours with your personalized flight options.",
    timestamps: {
      1: "2024-01-15 10:30 AM",
      2: "2024-01-15 10:45 AM",
      3: "2024-01-15 12:15 PM",
    },
  },
  HT9876543210: {
    reference: "HT9876543210",
    serviceType: "Hotel",
    currentStatus: 2,
    statusMessage:
      "We're currently researching the best hotel options for your stay.",
    estimatedTime:
      "Expected completion in 3-4 hours. We'll have multiple options ready for you.",
    timestamps: {
      1: "2024-01-15 09:15 AM",
      2: "2024-01-15 09:30 AM",
    },
  },
  TR5555666677: {
    reference: "TR5555666677",
    serviceType: "Tour Package",
    currentStatus: 4,
    statusMessage: "Congratulations! Your tour package has been confirmed.",
    estimatedTime:
      "All documents have been sent to your email. Have an amazing trip!",
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
  isTracking.value = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const result = mockTrackingData[referenceNumber.value];

  if (result) {
    // Add timestamps to status steps
    statusSteps.forEach((step, index) => {
      if (result.timestamps[step.status]) {
        step.timestamp = result.timestamps[step.status];
      }
    });

    trackingResult.value = result;
  } else {
    // Handle not found
    alert(
      "Booking reference not found. Please check your reference number and try again."
    );
  }

  isTracking.value = false;
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
