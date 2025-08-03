<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section class="relative pt-32 pb-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-700">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            My Quote Requests
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Track all your quote requests and their status
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              💰 All Your Quotes
            </span>
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              📈 Live Status
            </span>
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full">
              🔒 Secure Access
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- User Welcome Section -->
    <section class="py-8 bg-blue-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
              <span class="text-lg font-bold text-white">{{ userInitials }}</span>
            </div>
            <div class="text-left">
              <p class="text-lg font-semibold text-gray-900">
                Welcome back, {{ userName }}!
              </p>
              <p class="text-sm text-gray-600">
                {{ totalQuotes }} quote request{{ totalQuotes !== 1 ? 's' : '' }} found
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quotes List Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          
          <!-- Loading State -->
          <div v-if="isLoading" class="text-center py-12">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p class="text-gray-600">Loading your quotes...</p>
          </div>

          <!-- Error State -->
          <div v-else-if="errorMessage" class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <div class="flex items-center">
              <svg class="h-5 w-5 text-red-400 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              <div>
                <h3 class="text-sm font-medium text-red-800">{{ errorMessage }}</h3>
                <button @click="loadQuotes" class="mt-2 text-sm text-red-600 hover:text-red-800 underline">
                  Try Again
                </button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else-if="quotes.length === 0" class="text-center py-12">
            <div class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">No Quote Requests Yet</h3>
            <p class="text-gray-600 mb-6">You haven't submitted any quote requests. Start by requesting a quote for your travel needs!</p>
            <div class="space-y-3">
              <nuxt-link to="/hotel-booking" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors mr-3">
                🏨 Get Hotel Quote
              </nuxt-link>
              <nuxt-link to="/flight-booking" class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors mr-3">
                ✈️ Get Flight Quote
              </nuxt-link>
              <nuxt-link to="/visa-booking" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                🛂 Get Visa Quote
              </nuxt-link>
            </div>
          </div>

          <!-- Quotes Grid -->
          <div v-else class="space-y-6">
            <!-- Filter Bar -->
            <div class="bg-white rounded-lg shadow-sm border p-4 mb-6">
              <div class="flex flex-wrap items-center gap-4">
                <div class="flex items-center space-x-2">
                  <label class="text-sm font-medium text-gray-700">Filter by:</label>
                  <select v-model="selectedFilter" class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Services</option>
                    <option value="1">✈️ Flight</option>
                    <option value="2">🏨 Hotel</option>
                    <option value="3">🗺️ Tour</option>
                    <option value="4">🛂 Visa</option>
                    <option value="5">📦 Package</option>
                  </select>
                </div>
                <div class="flex items-center space-x-2">
                  <label class="text-sm font-medium text-gray-700">Status:</label>
                  <select v-model="selectedStatus" class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="all">All Status</option>
                    <option value="1">📤 Submitted</option>
                    <option value="2">👀 Under Review</option>
                    <option value="3">💰 Quote Provided</option>
                    <option value="4">💳 Payment Pending</option>
                    <option value="6">✅ Confirmed</option>
                    <option value="7">🎉 Completed</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Quote Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div 
                v-for="quote in filteredQuotes" 
                :key="quote.id"
                class="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
              >
                <!-- Quote Header -->
                <div class="p-6 border-b border-gray-100">
                  <div class="flex items-start justify-between">
                    <div>
                      <h3 class="text-lg font-semibold text-gray-800 mb-1">
                        {{ getServiceIcon(quote.serviceType) }} {{ getServiceName(quote.serviceType) }} Quote
                      </h3>
                      <p class="text-sm text-gray-600 mb-2">
                        <span class="font-mono font-bold">{{ quote.referenceNumber }}</span>
                      </p>
                      <p class="text-sm text-gray-600">
                        <strong>Destination:</strong> {{ quote.destination }}
                      </p>
                    </div>
                    <div class="text-right">
                      <span 
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        :class="getStatusColor(quote.status)"
                      >
                        {{ getStatusName(quote.status) }}
                      </span>
                      <p class="text-xs text-gray-500 mt-1">
                        {{ formatDate(quote.createdAt) }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Quote Body -->
                <div class="p-6">
                  <!-- Travel Date -->
                  <div class="mb-4">
                    <p class="text-sm text-gray-600">
                      <strong>Travel Date:</strong> {{ formatDate(quote.travelDate) }}
                    </p>
                  </div>

                  <!-- Quote Amount (if available) -->
                  <div v-if="quote.quotedAmount" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-sm text-green-700 font-medium">Quote Amount</p>
                        <p class="text-2xl font-bold text-green-800">
                          {{ quote.currency }} {{ formatPrice(quote.quotedAmount) }}
                        </p>
                      </div>
                      <div class="text-right">
                        <p class="text-xs text-green-600">
                          Expires: {{ formatDate(quote.quoteExpiresAt) }}
                        </p>
                        <button 
                          v-if="quote.status === 3"
                          @click="proceedToBooking(quote)"
                          class="mt-2 text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md transition-colors"
                        >
                          ✅ Book Now
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Special Requests -->
                  <div v-if="quote.specialRequests" class="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p class="text-sm font-medium text-yellow-800 mb-1">Special Requests:</p>
                    <p class="text-sm text-yellow-700">{{ quote.specialRequests }}</p>
                  </div>

                  <!-- Admin Notes -->
                  <div v-if="quote.adminNotes" class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p class="text-sm font-medium text-blue-800 mb-1">Notes from Our Team:</p>
                    <p class="text-sm text-blue-700">{{ quote.adminNotes }}</p>
                  </div>

                  <!-- Actions -->
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <nuxt-link 
                      :to="`/track-quote?ref=${quote.referenceNumber}`"
                      class="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      👁️ View Details
                    </nuxt-link>
                    <div class="text-xs text-gray-500">
                      Updated {{ getTimeAgo(quote.createdAt) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Refresh Button -->
          <div v-if="!isLoading && quotes.length > 0" class="text-center mt-8">
            <button 
              @click="loadQuotes"
              :disabled="isLoading"
              class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              🔄 Refresh Quotes
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Quote, QuoteListResponse, SERVICE_TYPE_MAP, QUOTE_STATUS_MAP } from '~/types/quote-api-types';
import quoteService from '~/services/QuoteService';
import authService from '~/services/AuthService';

// Authentication middleware - PROTECT THIS PAGE
definePageMeta({
  middleware: 'auth'
});

// SEO Meta
useHead({
  title: 'My Quote Requests - Global Horizons Travel Services',
  meta: [
    {
      name: 'description',
      content: 'View and track all your travel quote requests with Global Horizons Travel Services.'
    }
  ]
});

// ============================================================
// 🔒 USER & STATE MANAGEMENT
// ============================================================

const isLoading = ref(true);
const errorMessage = ref('');
const quotes = ref<Quote[]>([]);
const totalQuotes = ref(0);
const selectedFilter = ref('all');
const selectedStatus = ref('all');

// Get user info
const user = ref(authService.getCurrentUser() || {
  fullName: 'User',
  email: 'user@example.com'
});

const userName = computed(() => {
  if (user.value.fullName) {
    return user.value.fullName.split(' ')[0];
  }
  return 'User';
});

const userInitials = computed(() => {
  if (user.value.fullName) {
    const names = user.value.fullName.split(' ');
    return names[0][0] + (names[1]?.[0] || '');
  }
  return 'U';
});

// ============================================================
// 📋 QUOTES MANAGEMENT
// ============================================================

const filteredQuotes = computed(() => {
  let filtered = quotes.value;

  // Filter by service type
  if (selectedFilter.value !== 'all') {
    filtered = filtered.filter(quote => quote.serviceType.toString() === selectedFilter.value);
  }

  // Filter by status
  if (selectedStatus.value !== 'all') {
    filtered = filtered.filter(quote => quote.status.toString() === selectedStatus.value);
  }

  // Sort by creation date (newest first)
  return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
});

const loadQuotes = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';

    const response = await quoteService.getMyQuotes();

    if (response.success) {
      quotes.value = response.quotes || [];
      totalQuotes.value = response.totalCount || 0;
    } else {
      throw new Error(response.message || 'Failed to load quotes');
    }

  } catch (error: any) {
    console.error('❌ Failed to load quotes:', error);
    errorMessage.value = error.message || 'Failed to load your quotes. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

// ============================================================
// 🎨 DISPLAY HELPERS
// ============================================================

const getServiceName = (serviceType: number): string => {
  return SERVICE_TYPE_MAP[serviceType] || 'Unknown Service';
};

const getServiceIcon = (serviceType: number): string => {
  const icons = {
    1: '✈️',
    2: '🏨',
    3: '🗺️',
    4: '🛂',
    5: '📦'
  };
  return icons[serviceType as keyof typeof icons] || '📋';
};

const getStatusName = (status: number): string => {
  return QUOTE_STATUS_MAP[status] || 'Unknown';
};

const getStatusColor = (status: number): string => {
  const colorMap = {
    1: 'bg-blue-100 text-blue-800',     // Submitted
    2: 'bg-yellow-100 text-yellow-800', // Under Review
    3: 'bg-green-100 text-green-800',   // Quote Provided
    4: 'bg-orange-100 text-orange-800', // Payment Pending
    5: 'bg-purple-100 text-purple-800', // Processing
    6: 'bg-emerald-100 text-emerald-800', // Confirmed
    7: 'bg-teal-100 text-teal-800',     // Completed
    8: 'bg-red-100 text-red-800'       // Cancelled
  };
  return colorMap[status as keyof typeof colorMap] || 'bg-gray-100 text-gray-800';
};

const formatDate = (dateString: string | null): string => {
  if (!dateString) return 'N/A';
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return 'Invalid Date';
  }
};

const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount);
};

const getTimeAgo = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    const diffInWeeks = Math.floor(diffInDays / 7);
    return `${diffInWeeks}w ago`;
  } catch {
    return 'Recently';
  }
};

const proceedToBooking = (quote: Quote) => {
  // This would integrate with the actual booking system
  alert(`Ready to book ${quote.referenceNumber}? This would redirect to the secure booking system (requires additional integration).`);
};

// ============================================================
// 🚀 LIFECYCLE
// ============================================================

onMounted(() => {
  loadQuotes();
});
</script>

<style scoped>
/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-4xl.md\:text-5xl {
    font-size: 2rem;
  }
  
  .text-xl.md\:text-2xl {
    font-size: 1.25rem;
  }
  
  .grid.grid-cols-1.lg\:grid-cols-2 {
    grid-template-columns: 1fr;
  }
}
</style>