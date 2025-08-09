<template>
  <!-- Featured Travel Packages -->
  <section class="py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-gray-900">Featured Travel Packages</h2>
        </div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our carefully curated travel packages designed for unforgettable experiences around the world
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div class="animate-spin w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full mx-auto mb-4"></div>
        <p class="text-gray-600">Loading featured packages...</p>
      </div>

      <!-- Desktop Slider -->
      <div v-if="!loading" class="hidden md:block relative">
        <div class="overflow-hidden rounded-3xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            ref="packagesTrack"
            :style="{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }"
          >
            <!-- Package Cards -->
            <div
              v-for="(pkg, index) in packages"
              :key="pkg.id || index"
              :class="[
                'flex-shrink-0 px-3',
                visibleCount === 1 ? 'w-full' : visibleCount === 2 ? 'w-1/2' : 'w-1/3'
              ]"
            >
              <div class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50">
                <!-- Image Section -->
                <div class="relative overflow-hidden">
                  <img
                    :src="pkg.image"
                    :alt="pkg.title"
                    class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  <!-- Badge -->
                  <div class="absolute top-4 left-4">
                    <span :class="pkg.badgeClass" class="px-3 py-1 rounded-full text-sm font-semibold text-white backdrop-blur-sm">
                      <span v-html="pkg.badgeIcon"></span>
                      {{ pkg.badge }}
                    </span>
                  </div>
                  
                  <!-- Date -->
                  <div class="absolute top-4 right-4">
                    <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {{ pkg.dates }}
                    </span>
                  </div>
                </div>

                <!-- Content Section -->
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                    {{ pkg.title }}
                  </h3>
                  <p class="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                    {{ pkg.description }}
                  </p>
                  
                  <!-- Price and Duration -->
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-baseline gap-2">
                      <span class="text-3xl font-bold text-orange-600">${{ pkg.price.toLocaleString() }}</span>
                      <span v-if="pkg.originalPrice" class="text-sm text-gray-500 line-through">${{ pkg.originalPrice.toLocaleString() }}</span>
                    </div>
                    <span class="text-sm text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                      {{ pkg.duration }} Days | {{ pkg.type }}
                    </span>
                  </div>
                  
                  <!-- Bottom Section -->
                  <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="text-sm text-gray-500 flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      {{ pkg.spotsRemaining }} spots left
                    </span>
                    <button
                      @click="bookPackage(pkg)"
                      class="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          v-if="canGoPrev"
          @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50"
        >
          <svg class="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          v-if="canGoNext"
          @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50"
        >
          <svg class="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Grid -->
      <div v-if="!loading" class="block md:hidden">
        <div class="grid grid-cols-1 gap-6">
          <div
            v-for="(pkg, index) in packages.slice(0, 3)"
            :key="pkg.id || index"
            class="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100/50"
          >
            <!-- Image Section -->
            <div class="relative overflow-hidden">
              <img
                :src="pkg.image"
                :alt="pkg.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <!-- Badge -->
              <div class="absolute top-3 left-3">
                <span :class="pkg.badgeClass" class="px-2 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
                  <span v-html="pkg.badgeIcon"></span>
                  {{ pkg.badge }}
                </span>
              </div>
              
              <!-- Date -->
              <div class="absolute top-3 right-3">
                <span class="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-full text-xs font-semibold">
                  {{ pkg.dates }}
                </span>
              </div>
            </div>

            <!-- Content Section -->
            <div class="p-5">
              <h3 class="text-lg font-bold mb-2 text-gray-900">
                {{ pkg.title }}
              </h3>
              <p class="text-gray-600 mb-3 text-sm line-clamp-2">
                {{ pkg.description }}
              </p>
              
              <!-- Price and Duration -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-baseline gap-2">
                  <span class="text-2xl font-bold text-orange-600">${{ pkg.price.toLocaleString() }}</span>
                  <span v-if="pkg.originalPrice" class="text-xs text-gray-500 line-through">${{ pkg.originalPrice.toLocaleString() }}</span>
                </div>
                <span class="text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
                  {{ pkg.duration }} Days
                </span>
              </div>
              
              <!-- Bottom Section -->
              <div class="flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xs text-gray-500">{{ pkg.spotsRemaining }} spots left</span>
                <button
                  @click="bookPackage(pkg)"
                  class="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 font-semibold text-sm shadow-lg"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-16">
        <div class="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
          <div class="mb-6">
            <h3 class="text-2xl font-bold mb-3">Don't See Your Dream Destination?</h3>
            <p class="text-orange-100 text-lg max-w-2xl mx-auto">
              We create custom travel packages tailored to your preferences and budget. Let our experts design your perfect journey.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <nuxt-link
              to="/tours"
              class="px-8 py-4 bg-white text-orange-600 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:transform hover:scale-105 font-bold shadow-lg"
            >
              View All Packages
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 hover:transform hover:scale-105 font-bold backdrop-blur-sm"
            >
              Request Custom Package
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const loading = ref(true);
const currentIndex = ref(0);
const packagesTrack = ref(null);

// Mock data with proper structure
const packages = ref([
  {
    id: 1,
    title: "Dubai New Year Extravaganza",
    description: "Ring in 2025 with fireworks at Burj Khalifa, desert safari, and luxury shopping experience.",
    price: 1899,
    originalPrice: 2399,
    duration: 6,
    type: "All Inclusive",
    spotsRemaining: 8,
    dates: "Dec 28 - Jan 2",
    badge: "Hot Deal",
    badgeIcon: `<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/></svg>`,
    badgeClass: "bg-red-500",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Turkey Cultural Heritage",
    description: "Explore Istanbul's historic sites, Cappadocia's fairy chimneys, and Pamukkale's thermal pools.",
    price: 1299,
    duration: 8,
    type: "Half Board",
    spotsRemaining: 12,
    dates: "Jan 15 - 22",
    badge: "Popular",
    badgeIcon: `<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    badgeClass: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Europe Grand Tour",
    description: "Paris, Rome, Barcelona, and Amsterdam. Experience Europe's finest cities in one amazing journey.",
    price: 3299,
    duration: 14,
    type: "Luxury",
    spotsRemaining: 4,
    dates: "Feb 10 - 24",
    badge: "Premium",
    badgeIcon: `<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    badgeClass: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    title: "USA East Coast Discovery",
    description: "New York, Washington DC, Philadelphia, and Boston. Discover America's historic heart.",
    price: 2799,
    duration: 10,
    type: "Full Board",
    spotsRemaining: 15,
    dates: "Mar 5 - 15",
    badge: "New",
    badgeIcon: `<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    badgeClass: "bg-green-500",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Singapore & Malaysia Twin",
    description: "Modern Singapore and vibrant Kuala Lumpur. Two amazing cultures in one fantastic journey.",
    price: 1599,
    duration: 7,
    type: "Half Board",
    spotsRemaining: 20,
    dates: "Apr 12 - 19",
    badge: "Best Value",
    badgeIcon: `<svg class="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/></svg>`,
    badgeClass: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600&auto=format&fit=crop"
  }
]);

// Responsive logic
const visibleCount = ref(3);
const updateVisibleCount = () => {
  if (process.client) {
    const width = window.innerWidth;
    visibleCount.value = width >= 1024 ? 3 : width >= 768 ? 2 : 1;
  }
};

// Navigation logic
const maxIndex = computed(() => Math.max(0, packages.value.length - visibleCount.value));
const canGoPrev = computed(() => currentIndex.value > 0);
const canGoNext = computed(() => currentIndex.value < maxIndex.value);

const nextSlide = () => {
  if (canGoNext.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (canGoPrev.value) {
    currentIndex.value--;
  }
};

// Book package handler
const bookPackage = (pkg) => {
  // Navigate to booking page with package info
  navigateTo('/tours', { 
    query: { 
      package: pkg.id,
      title: pkg.title 
    }
  });
};

// Load packages
const loadPackages = async () => {
  console.log("🚀 Loading packages - START");
  loading.value = true;
  
  try {
    // Try to load from API first
    // const { api } = useApi();
    // const result = await api.packages.getFeatured();
    // packages.value = result.data || result;
    
    // For now, use mock data
    console.log("📦 Packages data:", packages.value.length, "packages");
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
    console.log("✅ Packages loaded successfully");
    
  } catch (error) {
    console.error("❌ Failed to load packages:", error);
    // packages.value already contains fallback data
  } finally {
    loading.value = false;
    console.log("🏁 Loading complete - loading state:", loading.value);
  }
};

// Setup resize listener
let resizeListener;

onMounted(async () => {
  await loadPackages();
  updateVisibleCount();
  
  // Setup resize listener
  if (process.client) {
    resizeListener = () => {
      updateVisibleCount();
      // Reset to valid index if needed
      if (currentIndex.value > maxIndex.value) {
        currentIndex.value = maxIndex.value;
      }
    };
    window.addEventListener('resize', resizeListener);
  }
});

onUnmounted(() => {
  if (resizeListener && process.client) {
    window.removeEventListener('resize', resizeListener);
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Smooth transitions */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Ensure proper flex behavior */
.flex-shrink-0 {
  flex-shrink: 0;
}
</style>