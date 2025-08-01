<template>
  <div
    class="mb-4 sm:mb-6 md:mb-8 w-full max-w-xs sm:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-2 sm:px-1 lg:px-0"
  >
    <div
      class="hero-search-container bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border border-white/30"
    >
      <div
        class="search-bar grid grid-cols-1 sm:grid-cols-3"
        style="grid-template-rows: 1fr"
      >
        <!-- Destination Input -->
        <div class="destination-input flex-1 relative">
          <div
            class="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-10"
          >
            <div class="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <input
            v-model="destination"
            type="text"
            placeholder="Where do you want to explore?"
            class="w-full pl-7 sm:pl-9 lg:pl-11 pr-2 sm:pr-3 lg:pr-4 py-2.5 sm:py-3 lg:py-4 text-gray-800 placeholder-gray-500 focus:outline-none text-xs sm:text-sm lg:text-base font-medium bg-transparent border-0 border-b sm:border-b-0 sm:border-r border-gray-200 focus:border-accent transition-all duration-300"
            @keypress="handleKeyPress"
          />
          <label
            class="absolute left-7 sm:left-9 lg:left-11 top-0 text-xs text-accent font-semibold pointer-events-none opacity-80"
            >Destination</label
          >
        </div>

        <!-- Date Input -->
        <div class="date-input flex-1 relative">
          <div
            class="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 z-10"
          >
            <div class="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <input
            v-model="travelDate"
            type="date"
            class="w-full pl-7 sm:pl-9 lg:pl-11 pr-2 sm:pr-3 lg:pr-4 py-2.5 sm:py-3 lg:py-4 text-gray-800 placeholder-gray-500 focus:outline-none text-xs sm:text-sm lg:text-base font-medium bg-transparent border-0 focus:border-accent transition-all duration-300"
            @keypress="handleKeyPress"
          />
          <label
            class="absolute left-7 sm:left-9 lg:left-11 top-0 text-xs text-blue-600 font-semibold pointer-events-none opacity-80"
            >Travel Dates</label
          >
        </div>

        <!-- Search Button -->
        <div class="search-btn-container -ml-4 -mr-1">
          <button
            @click="handleSearch"
            class="search-btn w-full h-full px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent to-orange-500 hover:from-orange-500 hover:to-red-500 text-white font-semibold text-xs sm:text-sm lg:text-base rounded-none sm:rounded-r-lg lg:rounded-r-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden flex items-center justify-center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none sm:rounded-r-lg lg:rounded-r-xl"
            ></div>
            <div class="relative z-10 flex items-center space-x-1 sm:space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 group-hover:animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span class="hidden sm:inline">Explore</span>
              <span class="sm:hidden">Search</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const destination = ref("");
const travelDate = ref("");

const handleSearch = () => {
  // Enhanced search functionality with better flow
  console.log("🔍 Search initiated:", {
    destination: destination.value,
    date: travelDate.value,
  });

  // Store comprehensive search data
  if (process.client) {
    const searchData = {
      destination: destination.value,
      travelDate: travelDate.value,
      searchTime: new Date().toISOString(),
      searchSource: "hero",
    };

    sessionStorage.setItem("searchDestination", destination.value);
    sessionStorage.setItem("searchDates", travelDate.value);
    sessionStorage.setItem("searchData", JSON.stringify(searchData));
  }

  // Enhanced routing logic with search parameters
  const dest = destination.value.toLowerCase();
  const baseRoute = getTargetRoute(dest);

  // Add search parameters to URL for better UX
  const searchParams = new URLSearchParams();
  if (destination.value) searchParams.set("destination", destination.value);
  if (travelDate.value) searchParams.set("date", travelDate.value);

  const finalUrl = searchParams.toString()
    ? `${baseRoute}?${searchParams.toString()}`
    : baseRoute;

  console.log("🚀 Navigating to:", finalUrl);

  // Show search feedback
  if (destination.value || travelDate.value) {
    const message = `🎯 Searching for ${destination.value || "destinations"}${
      travelDate.value ? ` on ${travelDate.value}` : ""
    }...`;

    // Create a brief loading state
    const originalButton = document.querySelector(".search-btn");
    if (originalButton) {
      originalButton.innerHTML =
        '<div class="flex items-center justify-center"><div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>Searching...</div>';

      setTimeout(() => {
        navigateTo(finalUrl);
      }, 800);
    } else {
      navigateTo(finalUrl);
    }
  } else {
    navigateTo(baseRoute);
  }
};

const getTargetRoute = (destination) => {
  if (
    destination.includes("visa") ||
    destination.includes("work") ||
    destination.includes("study")
  ) {
    return "/visas";
  } else if (
    destination.includes("flight") ||
    destination.includes("airline")
  ) {
    return "/flights";
  } else if (
    destination.includes("hotel") ||
    destination.includes("accommodation")
  ) {
    return "/hotels";
  } else if (destination.includes("tour") || destination.includes("package")) {
    return "/tours";
  } else {
    // Default to tours for general destinations
    return "/tours";
  }
};

const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
};
</script>
