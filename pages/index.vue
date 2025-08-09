<template>
  <div class="font-sans antialiased text-gray-800">
    <!-- Hero Slider -->
    <div class="-mt-20 lg:-mt-24">
      <HeroSlider />
    </div>

    <!-- Services -->
    <section id="services" class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-2">
          Our Services
        </h2>
        <p
          class="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base"
        >
          We offer comprehensive travel solutions to make your journey seamless
          from start to finish.
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div
              class="bg-accent bg-opacity-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-8 sm:w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Visit Visas</h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Tourist & holiday travel permissions for all major destinations.
            </p>
            <nuxt-link
              to="/tours"
              class="inline-block mt-4 text-accent hover:underline text-sm sm:text-base"
              >Learn More</nuxt-link
            >
          </div>
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div
              class="bg-accent bg-opacity-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-8 sm:w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Student Visas</h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Study abroad support & documentation for international education.
            </p>
            <nuxt-link
              to="/tours"
              class="inline-block mt-4 text-accent hover:underline text-sm sm:text-base"
              >Learn More</nuxt-link
            >
          </div>
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div
              class="bg-accent bg-opacity-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-8 sm:w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">Work Visas</h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Permit applications for employment overseas with full guidance.
            </p>
            <nuxt-link
              to="/tours"
              class="inline-block mt-4 text-accent hover:underline text-sm sm:text-base"
              >Learn More</nuxt-link
            >
          </div>
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition"
          >
            <div
              class="bg-accent bg-opacity-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 sm:h-8 sm:w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                />
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">
              Travel Packages
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Custom itineraries & all-inclusive deals for unforgettable
              journeys.
            </p>
            <nuxt-link
              to="/tours"
              class="inline-block mt-4 text-accent hover:underline text-sm sm:text-base"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations -->
    <section id="destinations" class="py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl font-bold text-center mb-2">
          Specialized Destinations
        </h2>
        <p
          class="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Discover the world's most vibrant cities with our expert visa and
          travel assistance.
        </p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          <!-- USA - New York -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="USA Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >New York</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                United States
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">
                B1/B2 Tourist Visa
              </p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- UK - London -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="UK Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >London</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                United Kingdom
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">
                Standard Visitor Visa
              </p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- Germany - Berlin -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/de.svg"
                  alt="Germany Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Berlin</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                Germany
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Schengen Visa</p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- Turkey - Istanbul -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/tr.svg"
                  alt="Turkey Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Istanbul</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                Turkey
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">
                e-Visa Available
              </p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- UAE - Dubai -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/ae.svg"
                  alt="UAE Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Dubai</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                UAE
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">
                Visa-Free Entry
              </p>
              <nuxt-link
                to="/tours"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Book Trip →</nuxt-link
              >
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mt-6"
        >
          <!-- Canada - Toronto -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/ca.svg"
                  alt="Canada Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Toronto</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                Canada
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Visitor Visa</p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- France - Paris -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/fr.svg"
                  alt="France Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Paris</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                France
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Schengen Visa</p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- China - Beijing -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/cn.svg"
                  alt="China Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Beijing</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                China
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">
                Tourist L Visa
              </p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- Singapore -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/sg.svg"
                  alt="Singapore Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Singapore</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                Singapore
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Entry Visa</p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>

          <!-- South Africa - Cape Town -->
          <div
            class="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div
              class="relative h-36 sm:h-32 bg-cover bg-center"
              style="
                background-image: url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=400&auto=format&fit=crop');
              "
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-2 left-2 flex items-center">
                <img
                  src="https://flagcdn.com/za.svg"
                  alt="South Africa Flag"
                  class="w-5 h-3 sm:w-6 sm:h-4 mr-2 rounded"
                />
                <span class="text-white text-xs sm:text-sm font-semibold"
                  >Cape Town</span
                >
              </div>
            </div>
            <div class="p-3 sm:p-4 text-center">
              <h3 class="font-semibold text-gray-800 text-sm sm:text-base">
                South Africa
              </h3>
              <p class="text-xs sm:text-sm text-gray-600 mt-1">Visitor Visa</p>
              <nuxt-link
                to="/visas"
                class="inline-block mt-2 text-accent text-xs sm:text-sm hover:underline"
                >Apply Now →</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="text-center mt-8 sm:mt-12">
          <nuxt-link
            to="/tours"
            class="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 font-semibold shadow-lg text-sm sm:text-base"
            >Explore All Destinations</nuxt-link
          >
        </div>
      </div>
    </section>

    <!-- Upcoming Travel Packages Slider -->
    <TravelPackagesSlider />

    <!-- Trust indicators -->
    <div class="mt-12 sm:mt-16 text-center mb-12 sm:mb-16 px-4 sm:px-6">
      <div
        class="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12"
      >
        <div class="flex items-center">
          <div class="bg-green-100 rounded-full p-2 mr-3">
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">
              15,000+
            </p>
            <p class="text-xs sm:text-sm text-gray-600">Happy Travelers</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-blue-100 rounded-full p-2 mr-3">
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <div>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">
              4.9/5
            </p>
            <p class="text-xs sm:text-sm text-gray-600">Average Rating</p>
          </div>
        </div>
        <div class="flex items-center">
          <div class="bg-yellow-100 rounded-full p-2 mr-3">
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p class="font-semibold text-gray-900 text-sm sm:text-base">98%</p>
            <p class="text-xs sm:text-sm text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 class="text-2xl sm:text-3xl font-bold mb-2">How It Works</h2>
        <p
          class="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base"
        >
          Simple, transparent process for all your travel needs.
        </p>
        <div
          class="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-4 lg:space-x-6"
        >
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-auto"
          >
            <div
              class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-accent text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mb-4"
            >
              1
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">
              Choose Service
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Select your visa or package type from our wide range of offerings.
            </p>
          </div>
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-auto"
          >
            <div
              class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-accent text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mb-4"
            >
              2
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">
              Submit Documents
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Upload your paperwork securely through our streamlined portal.
            </p>
          </div>
          <div
            class="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full sm:w-auto"
          >
            <div
              class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-accent text-white rounded-full flex items-center justify-center text-lg sm:text-2xl font-bold mb-4"
            >
              3
            </div>
            <h3 class="text-lg sm:text-xl font-semibold mb-2">
              Get Ready to Go
            </h3>
            <p class="text-gray-600 text-sm sm:text-base">
              Receive approval and travel with confidence and peace of mind.
            </p>
          </div>
        </div>
        <div class="mt-8 sm:mt-10">
          <nuxt-link
            to="/booking"
            class="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-accent text-white rounded-lg hover:bg-opacity-90 transition text-sm sm:text-base font-semibold"
            >Start Your Journey</nuxt-link
          >
        </div>
      </div>
    </section>

    <!-- Travel News & Tips Section (Upgraded) -->
    <TravelNewsSection />

    <!-- Newsletter -->
    <NewsletterSection />

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
// Meta data for SEO
useHead({
  title: "Global Horizons Travel Services - Your Gateway to the World",
  meta: [
    {
      name: "description",
      content:
        "Expert travel services including visa assistance, flight booking, hotel reservations, and curated tour packages. Start your journey with Global Horizons.",
    },
    {
      name: "keywords",
      content:
        "travel, visa services, flights, hotels, tour packages, global travel, vacation planning",
    },
  ],
});
</script>
