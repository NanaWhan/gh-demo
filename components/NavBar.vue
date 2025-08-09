<template>
  <!-- Desktop Navigation -->
  <nav class="w-full glass-nav fixed top-0 z-50 hidden lg:block">
    <div
      class="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between overflow-visible"
    >
      <!-- Logo -->
      <nuxt-link to="/" class="flex items-center py-0 -my-2 overflow-visible">
        <img src="/glo.png" alt="Global Horizons" class="h-14 md:h-16" />
      </nuxt-link>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-8">
        <!-- Main Navigation Links -->
        <div class="flex items-center space-x-6">
          <nuxt-link
            to="/"
            class="nav-link font-medium transition-colors"
            style="color: #ff7a59;"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/visas"
            class="nav-link font-medium transition-colors text-gray-700 hover:text-orange-500"
          >
            Visas
          </nuxt-link>
          <nuxt-link
            to="/tours"
            class="nav-link font-medium transition-colors text-gray-700 hover:text-orange-500"
          >
            Tours
          </nuxt-link>
          <nuxt-link
            to="/flights"
            class="nav-link font-medium transition-colors text-gray-700 hover:text-orange-500"
          >
            Flights
          </nuxt-link>
          <nuxt-link
            to="/hotels"
            class="nav-link font-medium transition-colors text-gray-700 hover:text-orange-500"
          >
            Hotels
          </nuxt-link>
          <nuxt-link
            to="/travel-news"
            class="nav-link font-medium transition-colors text-gray-700 hover:text-orange-500"
          >
            Travel News
          </nuxt-link>
        </div>

        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>

        <!-- Auth Section -->
        <div v-if="isAuthenticated" class="flex items-center space-x-4">
          <!-- User Account Dropdown -->
          <div class="relative" ref="userDropdown">
            <button
              @click="toggleUserDropdown"
              class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              :class="{ 'bg-gray-100': userDropdownOpen }"
            >
              <div
                class="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700">Account</span>
              <svg
                class="w-4 h-4 text-gray-500 transition-transform"
                :class="{ 'rotate-180': userDropdownOpen }"
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

            <!-- Dropdown Menu -->
            <div
              v-if="userDropdownOpen"
              class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
            >
              <nuxt-link
                to="/dashboard"
                class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                @click="closeUserDropdown"
              >
                <svg
                  class="w-5 h-5 mr-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 5a2 2 0 012-2h2a2 2 0 012 2v2H8V5z"
                  />
                </svg>
                Dashboard
              </nuxt-link>
              <nuxt-link
                to="/my-bookings"
                class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                @click="closeUserDropdown"
              >
                <svg
                  class="w-5 h-5 mr-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                My Bookings
              </nuxt-link>
              <nuxt-link
                to="/my-quotes"
                class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                @click="closeUserDropdown"
              >
                <svg
                  class="w-5 h-5 mr-3 text-gray-400"
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
                My Quotes
              </nuxt-link>
              <nuxt-link
                to="/track-quote"
                class="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                @click="closeUserDropdown"
              >
                <svg
                  class="w-5 h-5 mr-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Track Quote
              </nuxt-link>
              <hr class="my-2 border-gray-200" />
              <button
                @click="logout"
                class="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg
                  class="w-5 h-5 mr-3 text-red-500"
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
                Logout
              </button>
            </div>
          </div>

          <!-- Quick Track Button -->
          <nuxt-link
            to="/track-quote"
            class="hidden xl:flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-accent bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Track
          </nuxt-link>
        </div>

        <!-- Guest Actions -->
        <div v-else class="flex items-center space-x-3">
          <nuxt-link
            v-if="!isOnAuthPage"
            to="/login"
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
          >
            Login
          </nuxt-link>
          <nuxt-link
            to="/booking"
            class="px-6 py-2.5 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105 shadow-md"
            style="background-color: #ff7a59;"
          >
            Book Now
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile Logo Header -->
  <div
    class="lg:hidden fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-40 px-4 py-3"
  >
    <div class="flex items-center justify-center">
      <nuxt-link to="/" class="flex items-center">
        <img src="/glo.png" alt="Global Horizons" class="h-10" />
      </nuxt-link>
    </div>
  </div>

  <!-- Mobile Bottom Navigation -->
  <nav
    class="lg:hidden fixed bottom-0 w-full bg-white/98 backdrop-blur-lg border-t border-gray-200 z-50 px-2 py-1 mobile-nav-bottom"
  >
    <div class="flex items-center justify-around max-w-md mx-auto">
      <!-- Home -->
      <nuxt-link
        to="/"
        class="mobile-nav-item"
        :class="{ active: isCurrentRoute('/') }"
      >
        <div class="flex flex-col items-center py-2">
          <svg
            class="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span class="text-xs font-medium">Home</span>
        </div>
      </nuxt-link>

      <!-- Tours -->
      <nuxt-link
        to="/tours"
        class="mobile-nav-item"
        :class="{ active: isCurrentRoute('/tours') }"
      >
        <div class="flex flex-col items-center py-2">
          <svg
            class="w-6 h-6 mb-1"
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
          <span class="text-xs font-medium">Tours</span>
        </div>
      </nuxt-link>

      <!-- Flights -->
      <nuxt-link
        to="/flights"
        class="mobile-nav-item"
        :class="{ active: isCurrentRoute('/flights') }"
      >
        <div class="flex flex-col items-center py-2">
          <svg
            class="w-6 h-6 mb-1"
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
          <span class="text-xs font-medium">Flights</span>
        </div>
      </nuxt-link>

      <!-- Travel News -->
      <nuxt-link
        to="/travel-news"
        class="mobile-nav-item"
        :class="{ active: isCurrentRoute('/travel-news') }"
      >
        <div class="flex flex-col items-center py-2">
          <svg
            class="w-6 h-6 mb-1"
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
          <span class="text-xs font-medium">News</span>
        </div>
      </nuxt-link>

      <!-- Account/More -->
      <button
        @click="toggleMobileMenu"
        class="mobile-nav-item"
        :class="{ active: mobileMenuOpen }"
      >
        <div class="flex flex-col items-center py-2">
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6 mb-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span class="text-xs font-medium">{{
            mobileMenuOpen ? "Close" : isAuthenticated ? "Account" : "More"
          }}</span>
        </div>
      </button>
    </div>
  </nav>

  <!-- Mobile Overlay Menu -->
  <div
    v-if="mobileMenuOpen"
    class="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm flex items-end"
    @click="closeMobileMenu"
  >
    <div
      class="w-full bg-white rounded-t-2xl max-h-[70vh] flex flex-col mobile-modal-container"
      @click.stop
    >
      <div class="p-4 border-b border-gray-200 flex-shrink-0">
        <div class="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <h2 class="text-xl font-semibold text-center">
          {{ isAuthenticated ? "My Account" : "Menu" }}
        </h2>
      </div>

      <div class="flex-1 overflow-y-auto mobile-scroll-area">
        <div class="p-4 space-y-6">
        <!-- Services Section -->
        <div class="space-y-2">
          <h3
            class="text-sm font-semibold text-gray-500 uppercase tracking-wider"
          >
            Services
          </h3>
          <nuxt-link
            to="/travel-news"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-indigo-600"
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
              <p class="font-medium text-gray-900">Travel News</p>
              <p class="text-sm text-gray-500">Latest updates & tips</p>
            </div>
          </nuxt-link>
          <nuxt-link
            to="/visas"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-blue-600"
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
              <p class="font-medium text-gray-900">Visas</p>
              <p class="text-sm text-gray-500">Get your travel documents</p>
            </div>
          </nuxt-link>
        </div>

        <!-- Account Section (for authenticated users) -->
        <div v-if="isAuthenticated" class="space-y-2">
          <h3
            class="text-sm font-semibold text-gray-500 uppercase tracking-wider"
          >
            My Account
          </h3>
          <nuxt-link
            to="/dashboard"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 5a2 2 0 012-2h2a2 2 0 012 2v2H8V5z"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-900">Dashboard</p>
          </nuxt-link>

          <nuxt-link
            to="/my-bookings"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-900">My Bookings</p>
          </nuxt-link>

          <nuxt-link
            to="/my-quotes"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-orange-600"
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
            <p class="font-medium text-gray-900">My Quotes</p>
          </nuxt-link>

          <nuxt-link
            to="/track-quote"
            class="flex items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            <div
              class="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mr-3"
            >
              <svg
                class="w-5 h-5 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-900">Track Quote</p>
          </nuxt-link>
        </div>

        <!-- Actions -->
        <div class="space-y-3 pt-4">
          <nuxt-link
            v-if="!isAuthenticated && !isOnAuthPage"
            to="/login"
            class="flex items-center justify-center w-full px-4 py-3 text-gray-700 font-medium border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            Sign In
          </nuxt-link>
          <nuxt-link
            to="/booking"
            class="flex items-center justify-center w-full px-4 py-3 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            style="background-color: #ff7a59;"
            @click="closeMobileMenu"
          >
            Book Now
          </nuxt-link>
          <button
            v-if="isAuthenticated"
            @click="logout"
            class="flex items-center justify-center w-full px-4 py-3 text-red-600 font-medium border-2 border-red-200 rounded-xl hover:bg-red-50 transition-colors"
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import authService from '~/services/AuthService';
import { safeLogout } from '~/utils/navigation';

// Props
const props = defineProps({
  currentPage: {
    type: String,
    default: "home",
  },
});

// State
const mobileMenuOpen = ref(false);
const userDropdownOpen = ref(false);
const userDropdown = ref(null);

// Auth state using new AuthService with reactive updates
const authState = ref(authService.isAuthenticated());
const isAuthenticated = computed(() => authState.value);

// Update auth state periodically to catch changes
onMounted(() => {
  const updateAuthState = () => {
    const newState = authService.isAuthenticated();
    if (newState !== authState.value) {
      console.log('🔄 NavBar auth state changed:', newState);
      authState.value = newState;
    }
  };

  // Check auth state every second
  const authInterval = setInterval(updateAuthState, 1000);

  // Click outside to close dropdown
  const handleClickOutside = (event) => {
    if (userDropdown.value && !userDropdown.value.contains(event.target)) {
      userDropdownOpen.value = false;
    }
  };

  document.addEventListener('click', handleClickOutside);

  // Cleanup on unmount
  onUnmounted(() => {
    clearInterval(authInterval);
    document.removeEventListener('click', handleClickOutside);
  });
});

// Check if we're on auth pages (login/register)
const route = useRoute();
const isOnAuthPage = computed(() => {
  return ["/login", "/register"].includes(route.path);
});

// Helper function to check current route for active state
const isCurrentRoute = (path: string) => {
  return route.path === path;
};

// Mobile menu functions
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Close user dropdown when mobile menu opens
  if (mobileMenuOpen.value) {
    userDropdownOpen.value = false;
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// User dropdown functions
const toggleUserDropdown = () => {
  userDropdownOpen.value = !userDropdownOpen.value;
  // Close mobile menu when user dropdown opens
  if (userDropdownOpen.value) {
    mobileMenuOpen.value = false;
  }
};

const closeUserDropdown = () => {
  userDropdownOpen.value = false;
};

// Logout function
const logout = async () => {
  // Close all menus
  mobileMenuOpen.value = false;
  userDropdownOpen.value = false;

  // Use safe logout utility
  await safeLogout();
};

// Scroll effect for navbar
onMounted(() => {
  const navbar = document.querySelector(".glass-nav");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});
</script>

<style scoped>
/* Glass effect for desktop */
.glass-nav {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.glass-nav.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Navigation link styles */
.nav-link {
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
}

/* Mobile navigation styles */
.mobile-nav-item {
  @apply text-gray-600 transition-all duration-200 transform hover:scale-110 active:scale-95;
  position: relative;
  text-decoration: none;
  min-width: 60px;
  text-align: center;
  color: #6b7280;
}

.mobile-nav-item:hover {
  color: #ff7a59;
}

.mobile-nav-item.active {
  color: #ff7a59;
}

.mobile-nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
}

/* Mobile overlay animation */
.mobile-overlay-enter-active,
.mobile-overlay-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-overlay-enter-from,
.mobile-overlay-leave-to {
  opacity: 0;
}

/* Bottom sheet animation */
.bottom-sheet-enter-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bottom-sheet-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bottom-sheet-enter-from,
.bottom-sheet-leave-to {
  transform: translateY(100%);
}

/* Safe area padding for devices with home indicator */
@supports (padding-bottom: env(safe-area-inset-bottom)) {
  .mobile-nav-bottom {
    padding-bottom: calc(0.25rem + env(safe-area-inset-bottom));
  }
}

/* Mobile layout adjustments */
@media (max-width: 1023px) {
  .mobile-nav-bottom {
    padding-bottom: env(safe-area-inset-bottom, 0);
  }
}

/* Smooth transitions for icons */
.mobile-nav-item svg {
  transition: all 0.2s ease;
}

.mobile-nav-item:hover svg {
  transform: scale(1.1);
}

.mobile-nav-item.active svg {
  transform: scale(1.05);
}

/* Ripple effect for mobile nav items */
.mobile-nav-item {
  position: relative;
  overflow: hidden;
}

.mobile-nav-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(var(--accent-rgb, 59, 130, 246), 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease;
  z-index: -1;
}

.mobile-nav-item:active::before {
  width: 40px;
  height: 40px;
}

/* Fix mobile scrolling in overlay */
.mobile-modal-container {
  position: relative;
  z-index: 50;
}

.mobile-scroll-area {
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  overscroll-behavior: contain;
  position: relative;
}

/* Ensure scroll works on iOS and Android */
@supports (-webkit-appearance: none) {
  .mobile-scroll-area {
    -webkit-overflow-scrolling: touch;
  }
}

/* Additional mobile scroll fixes */
.mobile-scroll-area {
  /* Prevent bounce on scroll */
  overscroll-behavior-y: contain;
  /* Enable hardware acceleration */
  transform: translateZ(0);
  will-change: scroll-position;
}
</style>
