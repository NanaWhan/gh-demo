<template>
  <div class="font-sans antialiased text-gray-800">
    <!-- Navbar -->
    <NavBar />

    <!-- Hero Section -->
    <section class="relative h-screen pt-16 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2774&auto=format&fit=crop');
        "
      ></div>

      <div
        class="relative z-10 h-full flex items-center justify-center text-center text-white px-4"
      >
        <div class="max-w-4xl mx-auto">
          <div
            class="mb-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
          >
            <span class="text-sm font-medium">🌍 Global Visa Services</span>
          </div>
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Your Gateway to the World
          </h1>
          <p class="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Expert visa assistance for tourist, student, work, and business
            travel. We handle the complexity, you enjoy the journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#visa-types"
              class="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Explore Visa Types
            </a>
            <a
              href="#application-form"
              class="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 hover:transform hover:scale-105 border border-white/30"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Visa Types Section -->
    <section id="visa-types" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Visa Services We Offer
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional assistance for all types of visas with personalized
            guidance and support throughout the process.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Tourist Visa -->
          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors"
              >
                <svg
                  class="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">
                Tourist Visa
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Perfect for vacation, sightseeing, and visiting friends &
                family. Short-term stays up to 90 days.
              </p>
              <div class="space-y-2 mb-6 text-sm text-gray-500">
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>5-15 days processing</span>
                </div>
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Multiple entry options</span>
                </div>
              </div>
              <button
                class="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          <!-- Student Visa -->
          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors"
              >
                <svg
                  class="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">
                Student Visa
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Study abroad programs, university admissions, and academic
                exchange programs worldwide.
              </p>
              <div class="space-y-2 mb-6 text-sm text-gray-500">
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>University placement help</span>
                </div>
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Scholarship guidance</span>
                </div>
              </div>
              <button
                class="w-full px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          <!-- Work Visa -->
          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors"
              >
                <svg
                  class="w-10 h-10 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">Work Visa</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Employment opportunities abroad with proper work authorization
                and permit documentation.
              </p>
              <div class="space-y-2 mb-6 text-sm text-gray-500">
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Job placement support</span>
                </div>
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Work permit assistance</span>
                </div>
              </div>
              <button
                class="w-full px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>

          <!-- Business Visa -->
          <div
            class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group"
          >
            <div class="text-center">
              <div
                class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors"
              >
                <svg
                  class="w-10 h-10 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-gray-800">
                Business Visa
              </h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Corporate travel, conferences, meetings, and business expansion
                opportunities worldwide.
              </p>
              <div class="space-y-2 mb-6 text-sm text-gray-500">
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Corporate packages</span>
                </div>
                <div class="flex items-center justify-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Fast-track processing</span>
                </div>
              </div>
              <button
                class="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Popular Visa Destinations
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in visa processing for the world's most sought-after
            destinations.
          </p>
        </div>

        <div
          class="visa-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- USA -->
          <div
            class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop"
                alt="USA"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute top-4 left-4">
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="USA Flag"
                  class="w-8 h-6 rounded"
                />
              </div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">United States</h3>
                <p class="text-white/90">B1/B2 Tourist & Business</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold text-accent">From $299</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
                  >10-15 days</span
                >
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Interview preparation included
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Document verification
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Embassy appointment booking
                </li>
              </ul>
              <button
                class="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>

          <!-- UK -->
          <div
            class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
                alt="UK"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute top-4 left-4">
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="UK Flag"
                  class="w-8 h-6 rounded"
                />
              </div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">United Kingdom</h3>
                <p class="text-white/90">Standard Visitor Visa</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold text-accent">From $249</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
                  >7-10 days</span
                >
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  No interview required
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Online application support
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Biometric appointment
                </li>
              </ul>
              <button
                class="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>

          <!-- Schengen -->
          <div
            class="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative h-64">
              <img
                src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop"
                alt="Europe"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute top-4 left-4">
                <img
                  src="https://flagcdn.com/eu.svg"
                  alt="EU Flag"
                  class="w-8 h-6 rounded"
                />
              </div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold">Schengen Europe</h3>
                <p class="text-white/90">26 European Countries</p>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold text-accent">From $199</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full"
                  >5-10 days</span
                >
              </div>
              <ul class="space-y-2 text-sm text-gray-600 mb-6">
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Travel 26 countries
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  90 days validity
                </li>
                <li class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Travel insurance included
                </li>
              </ul>
              <button
                class="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Simple Application Process
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes visa applications easy and
            stress-free. We guide you every step of the way.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div
              class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform"
            >
              1
            </div>
            <h3 class="text-xl font-bold mb-4">Consultation</h3>
            <p class="text-gray-600">
              Free consultation to understand your travel needs and choose the
              right visa type.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform"
            >
              2
            </div>
            <h3 class="text-xl font-bold mb-4">Documentation</h3>
            <p class="text-gray-600">
              We help you gather and prepare all required documents with our
              detailed checklist.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform"
            >
              3
            </div>
            <h3 class="text-xl font-bold mb-4">Application</h3>
            <p class="text-gray-600">
              We submit your application and schedule appointments on your
              behalf.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform"
            >
              4
            </div>
            <h3 class="text-xl font-bold mb-4">Approval</h3>
            <p class="text-gray-600">
              Receive your approved visa and start planning your amazing
              journey!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Form -->
    <section id="application-form" class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Start Your Visa Application
          </h2>
          <p class="text-xl text-gray-600">
            Ready to begin? Fill out this form and we'll get back to you within
            24 hours.
          </p>
        </div>

        <div class="bg-gray-50 rounded-3xl p-8 md:p-12">
          <form class="space-y-6" @submit.prevent="handleFormSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Full Name *</label
                >
                <input
                  v-model="form.fullName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Email Address *</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Phone Number *</label
                >
                <input
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Nationality *</label
                >
                <select
                  v-model="form.nationality"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select your nationality</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="nigerian">Nigerian</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Destination Country *</label
                >
                <select
                  v-model="form.destination"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select destination</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="schengen">Schengen Europe</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Visa Type *</label
                >
                <select
                  v-model="form.visaType"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select visa type</option>
                  <option value="tourist">Tourist/Visitor</option>
                  <option value="student">Student</option>
                  <option value="work">Work</option>
                  <option value="business">Business</option>
                  <option value="transit">Transit</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >Travel Date</label
              >
              <input
                v-model="form.travelDate"
                type="date"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2"
                >Additional Information</label
              >
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="Tell us about your travel plans, any specific requirements, or questions you have..."
              ></textarea>
            </div>

            <div class="text-center">
              <button
                type="submit"
                class="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
              >
                Submit Application
              </button>
              <p class="text-sm text-gray-500 mt-4">
                We'll review your application and contact you within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p class="text-xl text-gray-600">
            Join thousands of satisfied travelers who achieved their visa dreams
            with us.
          </p>
        </div>

        <div class="visa-card-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Sarah K."
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">Sarah K.</h4>
                <p class="text-sm text-gray-600">USA Tourist Visa</p>
                <div class="flex text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Amazing service! They handled everything perfectly and I got my
              US visa approved in just 12 days. Highly recommended!"
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="James M."
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">James M.</h4>
                <p class="text-sm text-gray-600">UK Student Visa</p>
                <div class="flex text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Professional team that guided me through my student visa
              application. Now I'm studying at Oxford University!"
            </p>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-center mb-6">
              <img
                src="https://images.unsplash.com/photo-1626814559338-e4721e75494b?q=80&w=1750&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Grace A."
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">Grace A.</h4>
                <p class="text-sm text-gray-600">Schengen Visa</p>
                <div class="flex text-yellow-400 mt-1">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p class="text-gray-600 italic">
              "Excellent support throughout the process. Visited 8 European
              countries with the Schengen visa they helped me get!"
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-xl text-gray-600">
            Get answers to the most common visa-related questions.
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold mb-3">
              How long does visa processing take?
            </h3>
            <p class="text-gray-600">
              Processing times vary by country and visa type. Tourist visas
              typically take 5-15 business days, while student and work visas
              may take 2-8 weeks. We'll provide exact timelines during
              consultation.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold mb-3">What documents do I need?</h3>
            <p class="text-gray-600">
              Required documents vary by destination and visa type. Common
              requirements include passport, photos, financial statements,
              travel itinerary, and supporting letters. We provide a detailed
              checklist for your specific application.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold mb-3">
              Can you guarantee visa approval?
            </h3>
            <p class="text-gray-600">
              While we can't guarantee approval (as the final decision rests
              with embassy officials), we have a 98% success rate due to our
              thorough preparation and expert guidance throughout the process.
            </p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <h3 class="text-xl font-bold mb-3">What if my visa is rejected?</h3>
            <p class="text-gray-600">
              In the rare case of rejection, we analyze the reasons and help you
              reapply with improved documentation. We also offer consultation on
              appeal processes where applicable.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form data
const form = ref({
  fullName: "",
  email: "",
  phone: "",
  nationality: "",
  destination: "",
  visaType: "",
  travelDate: "",
  message: "",
});

// Form submission handler
const handleFormSubmit = async () => {
  try {
    const { api } = useApi();

    const bookingData = {
      serviceType: "Visa",
      customerInfo: {
        fullName: form.value.fullName,
        email: form.value.email,
        phone: form.value.phone,
        nationality: form.value.nationality,
      },
      serviceDetails: {
        destinationCountry: form.value.destination,
        visaType: form.value.visaType,
        intendedEntryDate: form.value.travelDate,
        specialRequirements: form.value.message,
      },
    };

    const response = await api.booking.submit(bookingData);

    alert(
      `Thank you for your application! Your reference number is ${response.referenceNumber}. We will contact you within 24 hours.`
    );

    // Reset form
    Object.keys(form.value).forEach((key) => {
      form.value[key] = "";
    });
  } catch (error) {
    console.error("Visa application submission failed:", error);
    alert("There was an error submitting your application. Please try again.");
  }
};

// Meta data for SEO
useHead({
  title: "Visa Services - Global Horizons Travel",
  meta: [
    {
      name: "description",
      content:
        "Professional visa services for tourist, student, work, and business travel. Expert assistance for USA, UK, Schengen, and worldwide destinations.",
    },
    {
      name: "keywords",
      content:
        "visa services, tourist visa, student visa, work visa, business visa, visa application, travel documents",
    },
  ],
});
</script>
