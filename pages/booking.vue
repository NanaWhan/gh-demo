<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Start Your Journey
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Choose your travel service and let our experts handle the rest
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🌍 Global Coverage</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Quick Response</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💰 Best Deals</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Services -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What would you like to book?
            </h2>
            <p class="text-lg text-gray-600">
              Select your service and we'll guide you through a personalized
              booking experience
            </p>
          </div>

          <!-- Service Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Flight Booking -->
            <div
              class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div
                class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white"
              >
                <div class="text-4xl mb-4">✈️</div>
                <h3 class="text-xl font-bold mb-2">Flight Booking</h3>
                <p class="text-sm opacity-90">
                  Find the best flights for your journey
                </p>
              </div>
              <div class="p-6">
                <ul class="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• One-way, round-trip, multi-city</li>
                  <li>• All classes available</li>
                  <li>• Flexible date options</li>
                  <li>• Special requirements support</li>
                </ul>
                <nuxt-link
                  to="/flight-booking"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-blue-700"
                >
                  Book Flight
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>

            <!-- Hotel Booking -->
            <div
              class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div
                class="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white"
              >
                <div class="text-4xl mb-4">🏨</div>
                <h3 class="text-xl font-bold mb-2">Hotel Booking</h3>
                <p class="text-sm opacity-90">Comfortable stays worldwide</p>
              </div>
              <div class="p-6">
                <ul class="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Luxury to budget options</li>
                  <li>• Group reservations</li>
                  <li>• Special requirements</li>
                  <li>• Extended stays available</li>
                </ul>
                <nuxt-link
                  to="/hotel-booking"
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-green-700"
                >
                  Book Hotel
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>

            <!-- Tour Booking -->
            <div
              class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div
                class="bg-gradient-to-br from-orange-500 to-red-500 p-6 text-white"
              >
                <div class="text-4xl mb-4">🎒</div>
                <h3 class="text-xl font-bold mb-2">Tour Packages</h3>
                <p class="text-sm opacity-90">Curated travel experiences</p>
              </div>
              <div class="p-6">
                <ul class="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Group and private tours</li>
                  <li>• Custom itineraries</li>
                  <li>• All-inclusive packages</li>
                  <li>• Dynamic pricing calculator</li>
                </ul>
                <nuxt-link
                  to="/tour-booking"
                  class="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-orange-700"
                >
                  Book Tour
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>

            <!-- Visa Services -->
            <div
              class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div
                class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white"
              >
                <div class="text-4xl mb-4">🛂</div>
                <h3 class="text-xl font-bold mb-2">Visa Services</h3>
                <p class="text-sm opacity-90">Hassle-free visa processing</p>
              </div>
              <div class="p-6">
                <ul class="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• Tourist & business visas</li>
                  <li>• Document assistance</li>
                  <li>• Fast-track processing</li>
                  <li>• Application guidance</li>
                </ul>
                <nuxt-link
                  to="/visa-booking"
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-purple-700"
                >
                  Apply for Visa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-Service Booking -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Need Multiple Services?
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            Let us handle your complete travel package with flights, hotels,
            tours, and visas all in one booking
          </p>

          <div
            class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-8"
          >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div class="text-center">
                <div class="text-3xl mb-2">✈️</div>
                <div class="text-sm font-medium">Flights</div>
              </div>
              <div class="text-center">
                <div class="text-3xl mb-2">🏨</div>
                <div class="text-sm font-medium">Hotels</div>
              </div>
              <div class="text-center">
                <div class="text-3xl mb-2">🎒</div>
                <div class="text-sm font-medium">Tours</div>
              </div>
              <div class="text-center">
                <div class="text-3xl mb-2">🛂</div>
                <div class="text-sm font-medium">Visas</div>
              </div>
            </div>

            <nuxt-link
              to="/complete-travel-booking"
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              Complete Travel Package Booking
            </nuxt-link>
          </div>

          <div class="text-sm text-gray-500">
            <p>
              💰 Package discounts available • 🎯 Personalized itineraries • 📞
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Our Booking Service -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Book With Us?
            </h2>
            <p class="text-lg text-gray-600">
              Experience the difference of personalized travel service
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Expert Travel Agents
              </h3>
              <p class="text-gray-600">
                Our experienced team handles all the details so you don't have
                to
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Best Price Guarantee
              </h3>
              <p class="text-gray-600">
                We'll match or beat any comparable price you find elsewhere
              </p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-2">24/7 Support</h3>
              <p class="text-gray-600">
                Round-the-clock assistance throughout your journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: "Book Your Travel - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Book flights, hotels, tours, and visa services all in one place. Get personalized travel assistance from our expert team.",
    },
  ],
});
</script>

<style scoped>
/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-3 {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .text-4xl.md\\:text-6xl {
    font-size: 2.5rem;
  }

  .text-3xl.md\\:text-4xl {
    font-size: 2rem;
  }
}
</style>
