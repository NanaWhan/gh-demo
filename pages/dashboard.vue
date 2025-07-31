<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50"
  >
    <NavBar current-page="dashboard" />

    <div class="pt-20 pb-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">
            <span v-if="user">Welcome back, {{ user.firstName }}!</span>
            <span v-else>Welcome back!</span>
          </h1>
          <p class="text-gray-600">
            Manage your bookings and travel preferences
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Quick Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div class="flex items-center">
                  <div class="p-3 bg-blue-100 rounded-xl">
                    <svg
                      class="w-8 h-8 text-blue-600"
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
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Total Bookings</p>
                    <p class="text-2xl font-bold text-gray-900">
                      <span v-if="stats">{{ stats.totalBookings }}</span>
                      <span v-else>-</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div class="flex items-center">
                  <div class="p-3 bg-green-100 rounded-xl">
                    <svg
                      class="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
                    <p class="text-sm text-gray-600">Completed</p>
                    <p class="text-2xl font-bold text-gray-900">
                      <span v-if="stats">{{ stats.completedBookings }}</span>
                      <span v-else>-</span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div class="flex items-center">
                  <div class="p-3 bg-orange-100 rounded-xl">
                    <svg
                      class="w-8 h-8 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Pending</p>
                    <p class="text-2xl font-bold text-gray-900">
                      <span v-if="stats">{{ stats.pendingBookings }}</span>
                      <span v-else>-</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Bookings -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div class="p-6 border-b border-gray-100">
                <div class="flex items-center justify-between">
                  <h2 class="text-xl font-bold text-gray-900">
                    Recent Bookings
                  </h2>
                  <nuxt-link
                    to="/my-bookings"
                    class="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View All
                  </nuxt-link>
                </div>
              </div>

              <div class="p-6">
                <div
                  v-if="recentBookings.length === 0"
                  class="text-center py-8"
                >
                  <svg
                    class="w-16 h-16 text-gray-300 mx-auto mb-4"
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
                  <p class="text-gray-500 mb-4">No bookings yet</p>
                  <nuxt-link
                    to="/booking"
                    class="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    Make Your First Booking
                  </nuxt-link>
                </div>

                <div v-else class="space-y-4">
                  <div
                    v-for="booking in recentBookings"
                    :key="booking.id"
                    class="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div class="flex items-center">
                      <div class="p-2 bg-gray-100 rounded-lg mr-4">
                        <component
                          :is="getServiceIcon(booking.serviceType)"
                          class="w-6 h-6 text-gray-600"
                        />
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">
                          {{ booking.serviceType }} Booking
                        </p>
                        <p class="text-sm text-gray-600">
                          {{ booking.referenceNumber }}
                        </p>
                        <p class="text-xs text-gray-500">
                          {{ formatDate(booking.createdAt) }}
                        </p>
                      </div>
                    </div>
                    <div class="text-right">
                      <span
                        :class="getStatusColor(booking.status)"
                        class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {{ booking.status }}
                      </span>
                      <p class="text-sm text-gray-600 mt-1">
                        {{ booking.destination || "N/A" }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-xl font-bold text-gray-900">Quick Actions</h2>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <nuxt-link
                    to="/flight-booking"
                    class="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 hover:border-blue-300"
                  >
                    <div class="p-3 bg-blue-100 rounded-xl mr-4">
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Book Flight</p>
                      <p class="text-sm text-gray-600">Find and book flights</p>
                    </div>
                  </nuxt-link>

                  <nuxt-link
                    to="/hotel-booking"
                    class="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 hover:border-blue-300"
                  >
                    <div class="p-3 bg-green-100 rounded-xl mr-4">
                      <svg
                        class="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Book Hotel</p>
                      <p class="text-sm text-gray-600">Find accommodation</p>
                    </div>
                  </nuxt-link>

                  <nuxt-link
                    to="/tour-booking"
                    class="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 hover:border-blue-300"
                  >
                    <div class="p-3 bg-orange-100 rounded-xl mr-4">
                      <svg
                        class="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Book Tour</p>
                      <p class="text-sm text-gray-600">Explore destinations</p>
                    </div>
                  </nuxt-link>

                  <nuxt-link
                    to="/visa-booking"
                    class="flex items-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 hover:border-blue-300"
                  >
                    <div class="p-3 bg-purple-100 rounded-xl mr-4">
                      <svg
                        class="w-6 h-6 text-purple-600"
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
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">Apply for Visa</p>
                      <p class="text-sm text-gray-600">Visa assistance</p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-6">
            <!-- Profile Card -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div class="p-6">
                <div class="text-center">
                  <div
                    class="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <span v-if="user" class="text-2xl font-bold text-white"
                      >{{ user.firstName[0] }}{{ user.lastName[0] }}</span
                    >
                    <span v-else class="text-2xl font-bold text-white">U</span>
                  </div>
                  <h3 class="text-lg font-bold text-gray-900">
                    <span v-if="user"
                      >{{ user.firstName }} {{ user.lastName }}</span
                    >
                    <span v-else>Loading...</span>
                  </h3>
                  <p class="text-sm text-gray-600 mb-4">
                    <span v-if="user">{{ user.email }}</span>
                    <span v-else>Loading...</span>
                  </p>
                  <nuxt-link
                    to="/profile"
                    class="inline-block px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
                  >
                    Edit Profile
                  </nuxt-link>
                </div>
              </div>
            </div>

            <!-- Support Card -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div class="p-6">
                <h3 class="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                <div class="space-y-3">
                  <nuxt-link
                    to="/contact"
                    class="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    Contact Support
                  </nuxt-link>
                  <a
                    href="tel:+233XXXXXXXXX"
                    class="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </a>
                  <a
                    href="mailto:info@globalhorizonstravel.com"
                    class="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <svg
                      class="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            <!-- Logout -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div class="p-6">
                <button
                  @click="logout"
                  class="w-full flex items-center justify-center px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// Import AuthService and types
import authService from '~/services/AuthService'
import type { UserProfile, BookingHistory, BookingStats } from '~/types/auth-api-types'
import { safeLogout } from '~/utils/navigation'

// Authentication middleware
definePageMeta({
  middleware: "auth",
});

// Page meta
useHead({
  title: "Dashboard - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Manage your bookings and travel preferences with Global Horizons.",
    },
  ],
});

// Reactive data with proper typing
const user = ref<UserProfile | null>(null);
const stats = ref<BookingStats | null>(null);
const recentBookings = ref<BookingHistory[]>([]);
const loading = ref(true);
const error = ref("");

// Mock data for fallback
const mockUser: UserProfile = {
  id: "mock-id",
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phoneNumber: "+233 XX XXX XXXX",
  role: "User",
  acceptMarketing: false,
  createdAt: new Date().toISOString(),
};

const mockStats: BookingStats = {
  totalBookings: 5,
  pendingBookings: 2,
  confirmedBookings: 3,
  totalSpent: 2500,
};

const mockRecentBookings: BookingHistory[] = [
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

// Methods
const getServiceIcon = (serviceType) => {
  const icons = {
    Flight: "svg",
    Hotel: "svg",
    Tour: "svg",
    Visa: "svg",
  };
  return "svg"; // Return SVG component based on service type
};

const getStatusColor = (status) => {
  const colors = {
    Submitted: "bg-blue-100 text-blue-800",
    Processing: "bg-yellow-100 text-yellow-800",
    Confirmed: "bg-green-100 text-green-800",
    Completed: "bg-purple-100 text-purple-800",
    Cancelled: "bg-red-100 text-red-800",
  };
  return colors[status] || "bg-gray-100 text-gray-800";
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const logout = async () => {
  // Use safe logout utility
  await safeLogout();
};

// Load user data on mount
onMounted(async () => {
  console.log('📊 Dashboard: Starting to load...');
  loading.value = true;
  error.value = "";

  try {
    console.log('👤 Dashboard: Loading user profile...');
    // Load user profile
    const userData = await authService.getProfile();
    user.value = userData;
    console.log('✅ Dashboard: User profile loaded:', userData);

    console.log('📋 Dashboard: Loading booking history...');
    // Load user booking history with stats
    const bookingData = await authService.getBookingHistory();
    stats.value = bookingData.stats;
    recentBookings.value = bookingData.bookings.slice(0, 5); // Show recent 5
    console.log('✅ Dashboard: Booking data loaded:', bookingData);
  } catch (err: any) {
    console.error("Failed to load dashboard data:", err);
    error.value = err.message || "Failed to load dashboard data";

    // Use mock data as fallback
    user.value = mockUser;
    stats.value = mockStats;
    recentBookings.value = mockRecentBookings;
  } finally {
    loading.value = false;
    console.log('🎉 Dashboard: Loading complete!');
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
 