<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50"
  >
    <NavBar current-page="my-bookings" />

    <div class="pt-20 pb-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p class="text-gray-600">Track and manage all your travel bookings</p>

          <!-- Emergency Reset (only show if having issues) -->
          <div
            class="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
            v-if="error"
          >
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-medium text-red-800">
                  Having navigation issues?
                </h3>
                <p class="text-sm text-red-600">
                  If the page seems stuck, try these options:
                </p>
              </div>
              <div class="flex gap-2">
                <button
                  @click="handleSafeLogout"
                  class="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                >
                  Safe Logout
                </button>
                <button
                  @click="handleEmergencyReset"
                  class="px-3 py-1 bg-red-800 text-white text-sm rounded-lg hover:bg-red-900"
                >
                  Emergency Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Search -->
        <div
          class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8"
        >
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Search by Reference Number</label
              >
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Enter reference number (e.g., GH-FL-001)"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div class="md:w-48">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Filter by Status</label
              >
              <select
                v-model="statusFilter"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="Submitted">Submitted</option>
                <option value="Processing">Processing</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div class="md:w-48">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Service Type</label
              >
              <select
                v-model="serviceFilter"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Services</option>
                <option value="Flight">Flights</option>
                <option value="Hotel">Hotels</option>
                <option value="Tour">Tours</option>
                <option value="Visa">Visas</option>
                <option value="Complete">Complete Package</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Bookings List -->
        <div class="space-y-6">
          <!-- No bookings state -->
          <div
            v-if="filteredBookings.length === 0 && !loading"
            class="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center"
          >
            <svg
              class="w-20 h-20 text-gray-300 mx-auto mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              No bookings found
            </h3>
            <p class="text-gray-600 mb-6">
              {{
                searchQuery || statusFilter || serviceFilter
                  ? "Try adjusting your search filters"
                  : "You haven't made any bookings yet"
              }}
            </p>
            <nuxt-link
              to="/booking"
              class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Make Your First Booking
            </nuxt-link>
          </div>

          <!-- Loading state -->
          <div
            v-if="loading"
            class="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center"
          >
            <div
              class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
            ></div>
            <p class="text-gray-600">Loading your bookings...</p>
          </div>

          <!-- Booking Cards -->
          <div
            v-for="booking in filteredBookings"
            :key="booking.id"
            class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <!-- Booking Header -->
            <div class="p-6 border-b border-gray-100">
              <div
                class="flex flex-col md:flex-row md:items-center justify-between"
              >
                <div class="flex items-center mb-4 md:mb-0">
                  <div
                    class="p-3 rounded-xl mr-4"
                    :class="getServiceBgColor(booking.serviceType)"
                  >
                    <component
                      :is="getServiceIcon(booking.serviceType)"
                      class="w-8 h-8"
                      :class="getServiceTextColor(booking.serviceType)"
                    />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">
                      {{ booking.serviceType }} Booking
                    </h3>
                    <p class="text-sm text-gray-600">
                      Reference: {{ booking.referenceNumber }}
                    </p>
                    <p class="text-xs text-gray-500">
                      {{ formatDate(booking.createdAt) }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <span
                    :class="getStatusColor(booking.status)"
                    class="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {{ booking.status }}
                  </span>
                  <button
                    @click="toggleBookingDetails(booking.id)"
                    class="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      class="w-6 h-6 transition-transform duration-200"
                      :class="{
                        'rotate-180': expandedBookings.includes(booking.id),
                      }"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Booking Summary -->
            <div class="p-6">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div v-if="booking.destination">
                  <p class="text-sm text-gray-600">Destination</p>
                  <p class="font-semibold text-gray-900">
                    {{ booking.destination }}
                  </p>
                </div>
                <div v-if="booking.travelDate">
                  <p class="text-sm text-gray-600">Travel Date</p>
                  <p class="font-semibold text-gray-900">
                    {{ formatDate(booking.travelDate) }}
                  </p>
                </div>
                <div v-if="booking.totalAmount">
                  <p class="text-sm text-gray-600">Amount</p>
                  <p class="font-semibold text-gray-900">
                    ${{ booking.totalAmount.toLocaleString() }}
                  </p>
                </div>
              </div>

              <!-- Status Timeline -->
              <div class="mb-6">
                <h4 class="text-sm font-medium text-gray-700 mb-3">
                  Status Timeline
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="(status, index) in booking.statusHistory"
                    :key="index"
                    class="flex items-center"
                  >
                    <div
                      class="w-3 h-3 rounded-full mr-3"
                      :class="getTimelineColor(status.status, booking.status)"
                    ></div>
                    <div class="flex-1 flex justify-between items-center">
                      <span class="text-sm font-medium text-gray-900">{{
                        status.status
                      }}</span>
                      <span class="text-xs text-gray-500">{{
                        formatDateTime(status.timestamp)
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap gap-3">
                <button
                  @click="viewBookingDetails(booking)"
                  class="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                >
                  View Details
                </button>
                <button
                  v-if="booking.status === 'Confirmed'"
                  @click="downloadTicket(booking)"
                  class="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors"
                >
                  Download Ticket
                </button>
                <button
                  v-if="['Submitted', 'Processing'].includes(booking.status)"
                  @click="cancelBooking(booking)"
                  class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                >
                  Cancel Booking
                </button>
                <button
                  @click="contactSupport(booking)"
                  class="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg transition-colors"
                >
                  Contact Support
                </button>
              </div>
            </div>

            <!-- Expanded Details -->
            <div
              v-if="expandedBookings.includes(booking.id)"
              class="border-t border-gray-100 bg-gray-50 p-6"
            >
              <h4 class="font-semibold text-gray-900 mb-4">Booking Details</h4>
              <div class="bg-white rounded-lg p-4">
                <pre class="text-sm text-gray-600 whitespace-pre-wrap">{{
                  JSON.stringify(booking.details, null, 2)
                }}</pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div v-if="hasMoreBookings" class="text-center mt-8">
          <button
            @click="loadMoreBookings"
            :disabled="loadingMore"
            class="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors disabled:opacity-50"
          >
            {{ loadingMore ? "Loading..." : "Load More Bookings" }}
          </button>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// Import AuthService and types
import authService from '~/services/AuthService'
import type { BookingHistory, BookingStats } from '~/types/auth-api-types'
import { emergencyReset, safeLogout } from '~/utils/navigation'

// Authentication middleware
definePageMeta({
  middleware: (to, from) => {
    if (!authService.isAuthenticated()) {
      return navigateTo('/login')
    }
  }
});

// Page meta
useHead({
  title: "My Bookings - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Track and manage all your travel bookings with Global Horizons.",
    },
  ],
});

// Reactive data
const searchQuery = ref("");
const statusFilter = ref("");
const serviceFilter = ref("");
const loading = ref(false);
const loadingMore = ref(false);
const hasMoreBookings = ref(true);
const expandedBookings = ref<number[]>([]);

// Booking data with proper typing
const bookings = ref<BookingHistory[]>([]);
const stats = ref<BookingStats | null>(null);
const error = ref("");

// Mock data for fallback when API fails
const mockBookings: BookingHistory[] = [
  {
    id: 1,
    serviceType: "Flight",
    referenceNumber: "GH-FL-001",
    status: "Confirmed",
    totalAmount: 1200,
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    serviceType: "Hotel",
    referenceNumber: "GH-HT-002",
    status: "Processing",
    totalAmount: 800,
    createdAt: "2024-01-12T15:45:00Z",
  },
];

const mockStats: BookingStats = {
  totalBookings: 2,
  pendingBookings: 1,
  confirmedBookings: 1,
  totalSpent: 2000,
};

// Computed properties
const filteredBookings = computed(() => {
  let filtered = bookings.value;

  if (searchQuery.value) {
    filtered = filtered.filter((booking) =>
      booking.referenceNumber
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
    );
  }

  if (statusFilter.value) {
    filtered = filtered.filter(
      (booking) => booking.status === statusFilter.value
    );
  }

  if (serviceFilter.value) {
    filtered = filtered.filter(
      (booking) => booking.serviceType === serviceFilter.value
    );
  }

  return filtered;
});

// Methods
const getServiceIcon = (serviceType: string): string => {
  // Return appropriate SVG component based on service type
  return "svg";
};

const getServiceBgColor = (serviceType: string): string => {
  const colors: Record<string, string> = {
    Flight: "bg-blue-100",
    Hotel: "bg-green-100",
    Tour: "bg-orange-100",
    Visa: "bg-purple-100",
    Complete: "bg-indigo-100",
    TravelPackage: "bg-indigo-100",
    CarRental: "bg-yellow-100",
    Insurance: "bg-pink-100",
  };
  return colors[serviceType] || "bg-gray-100";
};

const getServiceTextColor = (serviceType: string): string => {
  const colors: Record<string, string> = {
    Flight: "text-blue-600",
    Hotel: "text-green-600",
    Tour: "text-orange-600",
    Visa: "text-purple-600",
    Complete: "text-indigo-600",
    TravelPackage: "text-indigo-600",
    CarRental: "text-yellow-600",
    Insurance: "text-pink-600",
  };
  return colors[serviceType] || "text-gray-600";
};

const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    Pending: "bg-blue-100 text-blue-800",
    UnderReview: "bg-yellow-100 text-yellow-800",
    Processing: "bg-orange-100 text-orange-800",
    Confirmed: "bg-green-100 text-green-800",
    Completed: "bg-purple-100 text-purple-800",
    Cancelled: "bg-red-100 text-red-800",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
};

const getTimelineColor = (status, currentStatus) => {
  const statusOrder = ["Submitted", "Processing", "Confirmed", "Completed"];
  const currentIndex = statusOrder.indexOf(currentStatus);
  const statusIndex = statusOrder.indexOf(status);

  if (statusIndex <= currentIndex) {
    return "bg-green-500";
  } else {
    return "bg-gray-300";
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const toggleBookingDetails = (bookingId) => {
  const index = expandedBookings.value.indexOf(bookingId);
  if (index > -1) {
    expandedBookings.value.splice(index, 1);
  } else {
    expandedBookings.value.push(bookingId);
  }
};

const viewBookingDetails = (booking) => {
  // Navigate to detailed booking view
  navigateTo(`/booking-details/${booking.id}`);
};

const downloadTicket = (booking) => {
  // Download ticket/confirmation
  console.log("Downloading ticket for:", booking.referenceNumber);
};

const cancelBooking = (booking) => {
  // Cancel booking
  console.log("Cancelling booking:", booking.referenceNumber);
};

const contactSupport = (booking) => {
  // Contact support with booking reference
  navigateTo(`/contact?ref=${booking.referenceNumber}`);
};

const loadMoreBookings = async () => {
  loadingMore.value = true;
  try {
    // TODO: Load more bookings from API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    hasMoreBookings.value = false;
  } catch (error) {
    console.error("Failed to load more bookings:", error);
  } finally {
    loadingMore.value = false;
  }
};

// Emergency navigation methods
const handleEmergencyReset = () => {
  console.log('🚨 User triggered emergency reset from My Bookings');
  emergencyReset();
};

const handleSafeLogout = () => {
  console.log('🚪 User triggered safe logout from My Bookings');
  safeLogout();
};

// Load bookings on mount
onMounted(async () => {
  loading.value = true;
  error.value = "";

  try {
    console.log('🔍 Attempting to fetch user bookings...');
    
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      throw new Error('User not authenticated');
    }
    
    console.log('✅ User is authenticated, fetching bookings...');
    
    // Fetch real booking history from API
    const response = await authService.getBookingHistory();
    
    console.log('📊 Booking history response:', response);
    
    bookings.value = response.bookings || [];
    stats.value = response.stats || { totalBookings: 0, pendingBookings: 0, completedBookings: 0 };
    
    console.log(`📋 Loaded ${bookings.value.length} bookings`);
    
  } catch (err: any) {
    console.error("❌ Failed to load bookings:", err);
    error.value = err.message || "Failed to load your bookings";

    // Don't use mock data in production - user should see empty state
    bookings.value = [];
    stats.value = { totalBookings: 0, pendingBookings: 0, completedBookings: 0 };
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-gradient-to-br {
  animation: fadeInUp 0.6s ease-out;
}
</style>
 