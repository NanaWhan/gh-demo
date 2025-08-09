<template>
  <div>

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Track Your Quote
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Check the status of your quote request and see pricing updates
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💰 Live Pricing</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >📈 Status Updates</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Instant Tracking</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Tracking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
              Enter Your Quote Reference Number
            </h2>
            
            <form @submit.prevent="trackQuote" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Quote Reference Number *
                </label>
                <input
                  v-model="referenceNumber"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., QFL240315ABC, QHT240315XYZ"
                />
                <p class="text-sm text-gray-500 mt-2">
                  Found in your confirmation email or SMS
                </p>
              </div>

              <button
                type="submit"
                :disabled="isLoading || !referenceNumber.trim()"
                class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
              >
                <span v-if="isLoading">🔍 Tracking Quote...</span>
                <span v-else>🔍 Track My Quote</span>
              </button>
            </form>

            <!-- Error Message -->
            <div
              v-if="errorMessage"
              class="mt-6 bg-red-50 border border-red-200 rounded-lg p-4"
            >
              <div class="flex items-center">
                <svg class="h-5 w-5 text-red-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Details -->
    <section v-if="quoteData" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Quote Header -->
          <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">
                  {{ getServiceTypeName(quoteData.serviceType) }} Quote
                </h3>
                <p class="text-gray-600">
                  Reference: <span class="font-mono font-bold">{{ quoteData.referenceNumber }}</span>
                </p>
                <p class="text-gray-600">
                  Destination: <span class="font-semibold">{{ quoteData.destination }}</span>
                </p>
              </div>
              <div class="text-right">
                <span
                  class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  :class="getStatusColor(quoteData.status)"
                >
                  {{ getStatusName(quoteData.status) }}
                </span>
                <p class="text-sm text-gray-500 mt-2">
                  {{ formatDate(quoteData.createdAt) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Quote Pricing -->
          <div v-if="quoteData.quotedAmount" class="bg-white border rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">💰 Quote Details</h4>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-gray-600">Quoted Price</p>
                <p class="text-3xl font-bold text-green-600">
                  {{ quoteData.currency }} {{ formatPrice(quoteData.quotedAmount) }}
                </p>
                <p class="text-sm text-gray-500">
                  Travel Date: {{ formatDate(quoteData.travelDate) }}
                </p>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-500">Quote Expires:</p>
                <p class="text-lg font-semibold text-orange-600">
                  {{ formatDate(quoteData.quoteExpiresAt) }}
                </p>
              </div>
            </div>

            <!-- Book Now Button -->
            <div class="mt-6 pt-6 border-t">
              <button
                @click="proceedToBooking"
                class="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300"
              >
                ✅ Book This Quote Now
              </button>
              <p class="text-center text-sm text-gray-500 mt-2">
                Secure payment • Instant confirmation • Full support
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">📞 Contact Information</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="text-sm text-gray-500">Email</p>
                <p class="font-medium">{{ quoteData.contactEmail }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Phone</p>
                <p class="font-medium">{{ quoteData.contactPhone }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Contact Name</p>
                <p class="font-medium">{{ quoteData.contactName }}</p>
              </div>
              <div>
                <p class="text-sm text-gray-500">Urgency Level</p>
                <p class="font-medium">{{ getUrgencyName(quoteData.urgency) }}</p>
              </div>
            </div>
          </div>

          <!-- Special Requests -->
          <div v-if="quoteData.specialRequests" class="bg-yellow-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-2">📝 Special Requests</h4>
            <p class="text-gray-700">{{ quoteData.specialRequests }}</p>
          </div>

          <!-- Admin Notes -->
          <div v-if="quoteData.adminNotes" class="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-2">📋 Notes from Our Team</h4>
            <p class="text-gray-700">{{ quoteData.adminNotes }}</p>
          </div>

          <!-- Status History -->
          <div v-if="quoteData.statusHistory && quoteData.statusHistory.length > 0" class="bg-white border rounded-lg p-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">📈 Status History</h4>
            <div class="space-y-4">
              <div
                v-for="(history, index) in quoteData.statusHistory"
                :key="index"
                class="flex items-start space-x-4 pb-4 border-b border-gray-200 last:border-b-0"
              >
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-blue-600 font-semibold">{{ index + 1 }}</span>
                </div>
                <div class="flex-1">
                  <p class="font-medium text-gray-800">
                    Status changed to: {{ getStatusName(history.toStatus) }}
                  </p>
                  <p class="text-sm text-gray-600">{{ history.notes }}</p>
                  <p class="text-xs text-gray-500 mt-1">
                    {{ formatDate(history.changedAt) }} by {{ history.changedBy }}
                  </p>
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

<script setup lang="ts">
import { ref } from 'vue';
import { QuoteTrackingResponse, QUOTE_STATUS_MAP, SERVICE_TYPE_MAP, URGENCY_OPTIONS } from '~/types/quote-api-types';
import quoteService from '~/services/QuoteService';

// SEO Meta
useHead({
  title: "Track Your Quote - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content: "Track your travel quote request status, view pricing, and proceed to booking with Global Horizons."
    }
  ]
});

// State
const referenceNumber = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const quoteData = ref(null);

// Track quote method
const trackQuote = async () => {
  if (!referenceNumber.value.trim()) {
    errorMessage.value = 'Please enter a reference number';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';
  quoteData.value = null;

  try {
    const result = await quoteService.trackQuote(referenceNumber.value.trim());
    
    if (result.success) {
      quoteData.value = result.quote;
    } else {
      errorMessage.value = result.message || 'Failed to track quote';
    }
  } catch (error: any) {
    console.error('Quote tracking error:', error);
    errorMessage.value = error.message || 'Failed to track quote. Please check your reference number.';
  } finally {
    isLoading.value = false;
  }
};

// Utility methods
const getServiceTypeName = (serviceType: number): string => {
  return SERVICE_TYPE_MAP[serviceType] || 'Travel Service';
};

const getStatusName = (status: number): string => {
  return QUOTE_STATUS_MAP[status] || 'Unknown';
};

const getStatusColor = (status: number): string => {
  const colorMap = {
    1: 'bg-blue-100 text-blue-800',    // Submitted
    2: 'bg-yellow-100 text-yellow-800', // Under Review
    3: 'bg-green-100 text-green-800',   // Quote Provided
    4: 'bg-orange-100 text-orange-800', // Payment Pending
    5: 'bg-purple-100 text-purple-800', // Processing
    6: 'bg-emerald-100 text-emerald-800', // Confirmed
    7: 'bg-teal-100 text-teal-800',     // Completed
    8: 'bg-red-100 text-red-800'       // Cancelled
  };
  return colorMap[status] || 'bg-gray-100 text-gray-800';
};

const getUrgencyName = (urgency: number): string => {
  const urgencyOption = URGENCY_OPTIONS.find(opt => opt.value === urgency);
  return urgencyOption ? urgencyOption.label : 'Standard';
};

const formatDate = (dateString: string): string => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const proceedToBooking = () => {
  // This would redirect to actual booking system (requires auth)
  alert('This would redirect to secure booking system (requires login). Feature coming soon!');
};
</script>

<style scoped>
/* Custom styling for quote tracking */
.font-mono {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }
  
  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }
}
</style>