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
        <li>
          <nuxt-link
            to="/track-booking"
            class="hover:text-accent font-medium nav-link"
            >TRACK BOOKING</nuxt-link
          >
        </li>
      </ul>
      <nuxt-link
        to="/booking"
        class="hidden md:inline-block px-5 py-2.5 text-white rounded-lg book-now-btn"
        >Book Now</nuxt-link
      >
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
        <li class="mobile-nav-item">
          <nuxt-link
            to="/track-booking"
            class="mobile-nav-link block py-2 hover:text-accent nav-link"
            >TRACK BOOKING</nuxt-link
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
import { ref, onMounted } from "vue";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
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
 