<template>
  <nav class="w-full glass-nav fixed top-0 z-50">
    <div
      class="max-w-7xl mx-auto px-4 py-1 flex items-center justify-between overflow-visible"
    >
      <nuxt-link to="/" class="flex items-center py-0 -my-2 overflow-visible">
        <img src="/glo.png" alt="Global Horizons" class="h-14 md:h-16" />
      </nuxt-link>
      <ul class="hidden md:flex space-x-8">
        <li>
          <nuxt-link to="/" class="font-medium text-accent nav-link"
            >HOME</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/visas" class="hover:text-accent font-medium nav-link"
            >VISAS</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/tours" class="hover:text-accent font-medium nav-link"
            >TOUR PACKAGES</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/flights"
            class="hover:text-accent font-medium nav-link"
            >FLIGHTS</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/hotels" class="hover:text-accent font-medium nav-link"
            >HOTELS</nuxt-link
          >
        </li>
      </ul>

      <!-- Auth-based Navigation -->
      <div v-if="isAuthenticated" class="hidden md:flex items-center space-x-4">
        <nuxt-link
          to="/dashboard"
          class="hover:text-accent font-medium nav-link"
          >DASHBOARD</nuxt-link
        >
        <nuxt-link
          to="/my-bookings"
          class="hover:text-accent font-medium nav-link"
          >MY BOOKINGS</nuxt-link
        >
        <button
          @click="logout"
          class="px-4 py-2 text-red-600 hover:text-red-800 font-medium"
        >
          LOGOUT
        </button>
      </div>
      <div v-else class="hidden md:flex items-center space-x-4">
        <nuxt-link
          v-if="!isOnAuthPage"
          to="/login"
          class="hover:text-accent font-medium nav-link"
          >LOGIN</nuxt-link
        >
        <nuxt-link
          to="/booking"
          class="px-5 py-2.5 text-white rounded-lg book-now-btn"
          >Book Now</nuxt-link
        >
      </div>
      <div
        class="md:hidden hamburger-icon"
        @click="toggleMobileMenu"
        :class="{ open: mobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- Mobile menu, hidden by default -->
    <div
      class="md:hidden bg-white/90 backdrop-blur-md w-full pb-4 px-4"
      :class="{ hidden: !mobileMenuOpen }"
    >
      <ul class="space-y-2 py-2">
        <li class="mobile-nav-item">
          <nuxt-link
            to="/"
            class="mobile-nav-link block py-2 text-accent nav-link"
            >HOME</nuxt-link
          >
        </li>
        <li class="mobile-nav-item">
          <nuxt-link
            to="/visas"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >VISAS</nuxt-link
          >
        </li>
        <li class="mobile-nav-item">
          <nuxt-link
            to="/tours"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >TOUR PACKAGES</nuxt-link
          >
        </li>
        <li class="mobile-nav-item">
          <nuxt-link
            to="/flights"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >FLIGHTS</nuxt-link
          >
        </li>
        <li class="mobile-nav-item">
          <nuxt-link
            to="/hotels"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >HOTELS</nuxt-link
          >
        </li>

        <!-- Mobile Auth Section -->
        <li v-if="isAuthenticated" class="mobile-nav-item">
          <nuxt-link
            to="/dashboard"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >DASHBOARD</nuxt-link
          >
        </li>
        <li v-if="isAuthenticated" class="mobile-nav-item">
          <nuxt-link
            to="/my-bookings"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >MY BOOKINGS</nuxt-link
          >
        </li>
        <li v-if="isAuthenticated" class="mobile-nav-item">
          <button
            @click="logout"
            class="mobile-nav-link block py-2 text-red-600 hover:text-red-800 w-full text-left"
          >
            LOGOUT
          </button>
        </li>
        <li v-if="!isAuthenticated && !isOnAuthPage" class="mobile-nav-item">
          <nuxt-link
            to="/login"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >LOGIN</nuxt-link
          >
        </li>
        <li class="mobile-nav-item">
          <nuxt-link
            to="/booking"
            class="mobile-book-button block py-2.5 mt-4 text-center text-white rounded-lg book-now-btn"
            >Book Now</nuxt-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Props
const props = defineProps({
  currentPage: {
    type: String,
    default: "home",
  },
});

const mobileMenuOpen = ref(false);

// Auth state using API composable
const { isAuthenticated, clearToken } = useApi();

// Check if we're on auth pages (login/register)
const route = useRoute();
const isOnAuthPage = computed(() => {
  return ["/login", "/register"].includes(route.path);
});

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const logout = async () => {
  try {
    const { api } = useApi();

    // Call logout endpoint
    await api.auth.logout();
  } catch (error) {
    console.error("Logout failed:", error);
    // Continue with local logout even if API fails
  }

  // Clear auth token locally
  clearToken();

  // Close mobile menu if open
  mobileMenuOpen.value = false;

  // Redirect to home
  await navigateTo("/");
};

onMounted(() => {
  // Add scroll effect for navbar
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
