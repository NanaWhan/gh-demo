<template>
  <nav class="w-full glass-nav fixed top-0 z-50">
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
            class="nav-link font-medium text-accent hover:text-accent-dark transition-colors"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/visas"
            class="nav-link font-medium hover:text-accent transition-colors"
          >
            Visas
          </nuxt-link>
          <nuxt-link
            to="/tours"
            class="nav-link font-medium hover:text-accent transition-colors"
          >
            Tours
          </nuxt-link>
          <nuxt-link
            to="/flights"
            class="nav-link font-medium hover:text-accent transition-colors"
          >
            Flights
          </nuxt-link>
          <nuxt-link
            to="/hotels"
            class="nav-link font-medium hover:text-accent transition-colors"
          >
            Hotels
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
            class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors"
          >
            Login
          </nuxt-link>
          <nuxt-link
            to="/booking"
            class="px-6 py-2.5 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-dark transition-all duration-200 hover:transform hover:scale-105 shadow-md"
          >
            Book Now
          </nuxt-link>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        :class="{ 'bg-gray-100': mobileMenuOpen }"
      >
        <div class="hamburger-icon" :class="{ open: mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenuOpen"
      class="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
    >
      <div class="max-w-7xl mx-auto px-4 py-4">
        <!-- Main Navigation -->
        <div class="space-y-1 mb-6">
          <h3
            class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
          >
            Navigation
          </h3>
          <nuxt-link
            to="/"
            class="flex items-center px-3 py-3 rounded-lg text-accent font-medium transition-colors"
            @click="closeMobileMenu"
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </nuxt-link>
          <nuxt-link
            to="/visas"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Visas
          </nuxt-link>
          <nuxt-link
            to="/tours"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Tours
          </nuxt-link>
          <nuxt-link
            to="/flights"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Flights
          </nuxt-link>
          <nuxt-link
            to="/hotels"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Hotels
          </nuxt-link>
        </div>

        <!-- User Account Section (Mobile) -->
        <div v-if="isAuthenticated" class="space-y-1 mb-6">
          <h3
            class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
          >
            My Account
          </h3>
          <nuxt-link
            to="/dashboard"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            My Bookings
          </nuxt-link>
          <nuxt-link
            to="/my-quotes"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            My Quotes
          </nuxt-link>
          <nuxt-link
            to="/track-quote"
            class="flex items-center px-3 py-3 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
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
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            Track Quote
          </nuxt-link>
        </div>

        <!-- Actions Section -->
        <div class="space-y-3 pt-4 border-t border-gray-200">
          <nuxt-link
            v-if="!isAuthenticated && !isOnAuthPage"
            to="/login"
            class="flex items-center justify-center w-full px-4 py-3 text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            Login
          </nuxt-link>
          <nuxt-link
            to="/booking"
            class="flex items-center justify-center w-full px-4 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            @click="closeMobileMenu"
          >
            Book Now
          </nuxt-link>
          <button
            v-if="isAuthenticated"
            @click="logout"
            class="flex items-center justify-center w-full px-4 py-3 text-red-600 font-medium border border-red-300 rounded-lg hover:bg-red-50 transition-colors"
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
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
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
/* Hamburger icon styles */
.hamburger-icon {
  width: 20px;
  height: 16px;
  position: relative;
  cursor: pointer;
}

.hamburger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #374151;
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.hamburger-icon span:nth-child(1) {
  top: 0;
}

.hamburger-icon span:nth-child(2) {
  top: 7px;
}

.hamburger-icon span:nth-child(3) {
  top: 14px;
}

.hamburger-icon.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 7px;
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 7px;
}

/* Glass effect */
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
</style>
