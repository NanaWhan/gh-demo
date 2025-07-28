<template>
  <!-- Upcoming Travel Packages Slider -->
  <section class="mobile-section-padding py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto mobile-container px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-2">Upcoming Travel Packages</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Join our upcoming group tours and experience amazing destinations with
          fellow travelers.
        </p>
      </div>

      <!-- Package Slider Container -->
      <div class="relative">
        <div class="packages-slider overflow-hidden">
          <div
            class="packages-track flex transition-transform duration-500 ease-in-out"
            ref="packagesTrack"
          >
            <!-- Package 1 - Dubai New Year -->
            <div
              class="package-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="package-card-mobile bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop"
                    alt="Dubai New Year Package"
                    class="w-full h-56 object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      🔥 Hot Deal
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      Dec 28 - Jan 2
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">
                    Dubai New Year Extravaganza
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Ring in 2025 with fireworks at Burj Khalifa, desert safari,
                    and luxury shopping experience.
                  </p>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span
                        class="package-price-mobile text-2xl font-bold text-accent"
                        >$1,899</span
                      >
                      <span class="text-sm text-gray-500 line-through ml-2"
                        >$2,399</span
                      >
                    </div>
                    <span class="text-sm text-green-600 font-semibold"
                      >6 Days | All Inclusive</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">8 spots remaining</span>
                    <nuxt-link
                      to="/tours"
                      class="package-button-mobile bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
                    >
                      Book Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Package 2 - Turkey Cultural -->
            <div
              class="package-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600&auto=format&fit=crop"
                    alt="Turkey Cultural Tour"
                    class="w-full h-56 object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      ⭐ Popular
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      Jan 15 - 22
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">
                    Turkey Cultural Heritage
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Explore Istanbul's historic sites, Cappadocia's fairy
                    chimneys, and Pamukkale's thermal pools.
                  </p>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-accent">$1,299</span>
                    </div>
                    <span class="text-sm text-green-600 font-semibold"
                      >8 Days | Half Board</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500"
                      >12 spots remaining</span
                    >
                    <nuxt-link
                      to="/tours"
                      class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
                    >
                      Book Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Package 3 - Europe Grand Tour -->
            <div
              class="package-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Europe Grand Tour"
                    class="w-full h-56 object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      🌟 Premium
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      Feb 10 - 24
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">Europe Grand Tour</h3>
                  <p class="text-gray-600 mb-4">
                    Paris, Rome, Barcelona, and Amsterdam. Experience Europe's
                    finest cities in one amazing journey.
                  </p>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-accent">$3,299</span>
                    </div>
                    <span class="text-sm text-green-600 font-semibold"
                      >14 Days | Luxury</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500">4 spots remaining</span>
                    <nuxt-link
                      to="/tours"
                      class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
                    >
                      Book Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Package 4 - USA East Coast -->
            <div
              class="package-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop"
                    alt="USA East Coast"
                    class="w-full h-56 object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      🆕 New
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      Mar 5 - 15
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">
                    USA East Coast Discovery
                  </h3>
                  <p class="text-gray-600 mb-4">
                    New York, Washington DC, Philadelphia, and Boston. Discover
                    America's historic heart.
                  </p>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-accent">$2,799</span>
                    </div>
                    <span class="text-sm text-green-600 font-semibold"
                      >10 Days | Full Board</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500"
                      >15 spots remaining</span
                    >
                    <nuxt-link
                      to="/tours"
                      class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
                    >
                      Book Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Package 5 - Singapore Malaysia -->
            <div
              class="package-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
            >
              <div
                class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div class="relative">
                  <img
                    src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop"
                    alt="Singapore Malaysia"
                    class="w-full h-56 object-cover"
                  />
                  <div class="absolute top-4 left-4">
                    <span
                      class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      💰 Best Value
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      Apr 12 - 19
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">
                    Singapore & Malaysia Twin
                  </h3>
                  <p class="text-gray-600 mb-4">
                    Modern Singapore and vibrant Kuala Lumpur. Two amazing
                    cultures in one fantastic journey.
                  </p>
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <span class="text-2xl font-bold text-accent">$1,599</span>
                    </div>
                    <span class="text-sm text-green-600 font-semibold"
                      >7 Days | Half Board</span
                    >
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500"
                      >20 spots remaining</span
                    >
                    <nuxt-link
                      to="/tours"
                      class="bg-accent text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold"
                    >
                      Book Now
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Package Slider Navigation -->
        <button
          @click="prevPackage"
          class="packages-nav absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover-light-orange-bg transition-colors"
        >
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextPackage"
          class="packages-nav absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white shadow-lg rounded-full hover-light-orange-bg transition-colors"
        >
          <svg
            class="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12">
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">
            Don't See Your Dream Destination?
          </h3>
          <p class="text-gray-600">
            We create custom travel packages tailored to your preferences.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <nuxt-link
            to="/tours"
            class="px-8 py-4 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 font-semibold shadow-lg"
          >
            View All Packages
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 hover:transform hover:scale-105 font-semibold"
          >
            Request Custom Package
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const packagesTrack = ref(null);
let packagesCurrentIndex = 0;

const nextPackage = () => {
  const visiblePackages = getVisiblePackages();
  const totalPackages = 5; // Total number of packages

  if (packagesCurrentIndex < totalPackages - visiblePackages) {
    packagesCurrentIndex++;
    updatePackagePosition();
  }
};

const prevPackage = () => {
  if (packagesCurrentIndex > 0) {
    packagesCurrentIndex--;
    updatePackagePosition();
  }
};

const updatePackagePosition = () => {
  if (packagesTrack.value) {
    const slideWidth = 100 / getVisiblePackages();
    packagesTrack.value.style.transform = `translateX(-${
      packagesCurrentIndex * slideWidth
    }%)`;
  }
};

const getVisiblePackages = () => {
  if (process.client) {
    return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  }
  return 3;
};

onMounted(() => {
  updatePackagePosition();

  // Handle window resize
  window.addEventListener("resize", () => {
    setTimeout(() => {
      updatePackagePosition();
    }, 100);
  });
});
</script>

<style scoped>
.packages-track {
  transition: transform 500ms ease-in-out;
}
</style>
