<template>
  <section class="relative h-screen pt-16 overflow-hidden">
    <!-- Hero Slides -->
    <div class="hero-slider relative h-full">
      <!-- Slide 1 - London -->
      <div
        :class="[
          'hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
          { active: currentSlide === 0 },
        ]"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      ></div>

      <!-- Slide 2 - New York -->
      <div
        :class="[
          'hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
          { active: currentSlide === 1 },
        ]"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      ></div>

      <!-- Slide 3 - Dubai -->
      <div
        :class="[
          'hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
          { active: currentSlide === 2 },
        ]"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      ></div>

      <!-- Slide 4 - Paris -->
      <div
        :class="[
          'hero-slide absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
          { active: currentSlide === 3 },
        ]"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url('https://images.unsplash.com/photo-1502602898536-47ad22581b52?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      ></div>
    </div>

    <!-- Hero Content Overlay -->
    <div
      class="absolute inset-0 z-10 flex flex-col justify-between text-center text-white px-4 sm:px-6"
    >
      <!-- Desktop: Slide-specific content at top -->
      <div class="hidden md:block pt-24 lg:pt-32">
        <div class="transition-opacity duration-1000">
          <!-- Content will be dynamically updated by JavaScript -->
          <div
            class="mb-4 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
          >
            <span class="text-sm font-medium">{{
              heroContent[currentSlide].location
            }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            {{ heroContent[currentSlide].title }}
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            {{ heroContent[currentSlide].description }}
          </p>
        </div>
      </div>

      <!-- Bottom: Search form and CTA buttons -->
      <div
        class="flex-1 flex flex-col justify-center md:justify-end pb-4 sm:pb-8 md:pb-24"
      >
        <!-- Mobile Title (only on mobile) -->
        <div class="md:hidden mb-6 sm:mb-8">
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 sm:mb-4 leading-tight"
          >
            Explore the World with Confidence
          </h1>
          <p
            class="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90"
          >
            Visa Assistance · Flight & Hotel Booking · Tailored Packages
          </p>
        </div>

        <!-- Clean Search Bar - Adansi Style -->
        <SearchBar />

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6"
        >
          <nuxt-link
            to="/contact"
            class="px-6 py-3 sm:px-8 sm:py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-xl sm:rounded-2xl font-semibold sm:font-bold text-base sm:text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Get Free Consultation
          </nuxt-link>
          <nuxt-link
            to="/tours"
            class="px-6 py-3 sm:px-8 sm:py-4 bg-accent hover:bg-orange-600 text-white rounded-xl sm:rounded-2xl font-semibold sm:font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Browse Packages
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Hero Navigation Dots -->
    <div
      class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3"
    >
      <button
        v-for="(slide, index) in heroContent"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'hero-dot w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/50 hover-light-orange-bg transition-colors',
          { active: currentSlide === index },
        ]"
      ></button>
    </div>

    <!-- Hero Navigation Arrows -->
    <button
      @click="prevSlide"
      class="hero-nav absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover-light-orange-bg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 sm:h-6 sm:w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <button
      @click="nextSlide"
      class="hero-nav absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-full hover-light-orange-bg transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 sm:h-6 sm:w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentSlide = ref(0);
let slideInterval = null;

const heroContent = [
  {
    location: "London, United Kingdom",
    title: "Discover London's Royal Heritage",
    description:
      "Experience Big Ben, Buckingham Palace & Thames River • UK Visa Assistance Available",
  },
  {
    location: "New York, United States",
    title: "The City That Never Sleeps",
    description:
      "Times Square, Central Park & Statue of Liberty • US Visa Support Included",
  },
  {
    location: "Dubai, United Arab Emirates",
    title: "Where Dreams Meet Reality",
    description:
      "Burj Khalifa, Desert Safari & Luxury Shopping • UAE Visa Processing Available",
  },
  {
    location: "Paris, France",
    title: "City of Love and Light",
    description:
      "Eiffel Tower, Louvre Museum & Seine River • Schengen Visa Assistance",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroContent.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + heroContent.length) % heroContent.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  // Auto-advance slides every 6 seconds
  slideInterval = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
});
</script>
