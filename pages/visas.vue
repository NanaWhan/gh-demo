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
                @click="openVisaModal('tourist')"
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
                @click="openVisaModal('student')"
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
                @click="openVisaModal('work')"
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
                @click="openVisaModal('business')"
                class="w-full px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors font-semibold"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visa Information Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
        @click.stop
      >
        <div
          class="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                :class="[
                  'w-16 h-16 rounded-full flex items-center justify-center mr-4',
                  modalData.bgColor,
                ]"
              >
                <svg
                  :class="['w-8 h-8', modalData.iconColor]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    :d="modalData.iconPath"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-gray-800">
                  {{ modalData.title }}
                </h2>
                <p class="text-gray-600">{{ modalData.subtitle }}</p>
              </div>
            </div>
            <button
              @click="closeModal"
              class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="p-6 space-y-8">
          <!-- Overview -->
          <div
            class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6"
          >
            <h3 class="text-xl font-bold mb-3 text-gray-800">Overview</h3>
            <p class="text-gray-700 leading-relaxed">
              {{ modalData.overview }}
            </p>
          </div>

          <!-- Requirements Grid -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">
              Requirements & Documents
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 rounded-xl p-6">
                <h4 class="font-semibold text-green-800 mb-3 flex items-center">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Required Documents
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="doc in modalData.requiredDocs"
                    :key="doc"
                    class="text-sm text-green-700 flex items-start"
                  >
                    <span
                      class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    {{ doc }}
                  </li>
                </ul>
              </div>

              <div class="bg-orange-50 rounded-xl p-6">
                <h4
                  class="font-semibold text-orange-800 mb-3 flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Important Notes
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="note in modalData.importantNotes"
                    :key="note"
                    class="text-sm text-orange-700 flex items-start"
                  >
                    <span
                      class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"
                    ></span>
                    {{ note }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Processing Timeline -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">
              Processing Timeline
            </h3>
            <div class="bg-gray-50 rounded-xl p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-2xl font-bold text-accent">{{
                  modalData.processingTime
                }}</span>
                <span
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ modalData.successRate }}% Success Rate
                </span>
              </div>
              <div class="grid md:grid-cols-3 gap-4">
                <div
                  v-for="step in modalData.timeline"
                  :key="step.step"
                  class="text-center"
                >
                  <div
                    class="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold"
                  >
                    {{ step.step }}
                  </div>
                  <h4 class="font-semibold text-gray-800 mb-1">
                    {{ step.title }}
                  </h4>
                  <p class="text-sm text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Popular Destinations -->
          <div>
            <h3 class="text-xl font-bold mb-4 text-gray-800">
              Popular Destinations
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                v-for="destination in modalData.destinations"
                :key="destination.name"
                class="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow"
              >
                <img
                  :src="destination.flag"
                  :alt="destination.name"
                  class="w-8 h-6 mx-auto mb-2 rounded"
                />
                <h4 class="font-medium text-gray-800 text-sm">
                  {{ destination.name }}
                </h4>
                <p class="text-xs text-gray-500">{{ destination.price }}</p>
              </div>
            </div>
          </div>

          <!-- Call to Action -->
          <div
            class="bg-gradient-to-r from-accent to-blue-600 rounded-2xl p-8 text-center text-white"
          >
            <h3 class="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p class="mb-6 opacity-90">
              Get personalized assistance for your
              {{ modalData.title.toLowerCase() }} application
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                @click="startApplication"
                class="px-8 py-3 bg-white text-accent font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Start Application
              </button>
              <button
                @click="scheduleConsultation"
                class="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-colors border border-white/30"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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
                @click="applyForVisa('usa')"
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
                @click="applyForVisa('uk')"
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
                @click="applyForVisa('schengen')"
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

// Modal state
const showModal = ref(false);
const modalData = ref({});

// Open modal
const openVisaModal = (type) => {
  // Define modalData based on type
  switch (type) {
    case "tourist":
      modalData.value = {
        title: "Tourist Visa",
        subtitle:
          "Short-term stays up to 90 days for vacation, sightseeing, and visiting friends & family.",
        overview:
          "The Tourist Visa (B1/B2) is ideal for individuals traveling to the United States for tourism, sightseeing, visiting friends and family, or attending short-term courses or conferences. This visa allows for multiple entries and stays up to 180 days (6 months) in the United States.",
        requiredDocs: [
          "Valid passport with at least 6 months validity from the date of entry.",
          "Proof of travel itinerary (flight tickets, hotel reservations, etc.).",
          "Proof of sufficient funds for travel and stay.",
          "Evidence of ties to the home country (e.g., employment contract, property ownership, etc.).",
          "Evidence of a clear intent to return to the home country.",
          "Application fee payment receipt.",
        ],
        importantNotes: [
          "Visa validity is typically 10 years for B1/B2, but can be shorter depending on the embassy.",
          "Multiple entries are allowed, but the total stay cannot exceed 180 days (6 months) within any 180-day period.",
          "Visa fees and processing times can vary by country and embassy.",
          "Applicants must be in the United States for the duration of the visa.",
        ],
        processingTime: "5-15 days",
        successRate: 98,
        timeline: [
          {
            step: "1",
            title: "Consultation",
            description:
              "Free consultation to understand your travel needs and choose the right visa type.",
          },
          {
            step: "2",
            title: "Documentation",
            description:
              "We help you gather and prepare all required documents with our detailed checklist.",
          },
          {
            step: "3",
            title: "Application",
            description:
              "We submit your application and schedule appointments on your behalf.",
          },
          {
            step: "4",
            title: "Approval",
            description:
              "Receive your approved visa and start planning your amazing journey!",
          },
        ],
        destinations: [
          {
            name: "USA",
            flag: "https://flagcdn.com/us.svg",
            price: "From $299",
          },
          {
            name: "UK",
            flag: "https://flagcdn.com/gb.svg",
            price: "From $249",
          },
          {
            name: "Schengen",
            flag: "https://flagcdn.com/eu.svg",
            price: "From $199",
          },
          {
            name: "Canada",
            flag: "https://flagcdn.com/ca.svg",
            price: "From $350",
          },
        ],
        iconPath:
          "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5",
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
      };
      break;
    case "student":
      modalData.value = {
        title: "Student Visa",
        subtitle:
          "Study abroad programs, university admissions, and academic exchange programs worldwide.",
        overview:
          "The Student Visa (F1) is for individuals coming to the United States to pursue academic studies. This visa is valid for the duration of the student's program, plus 60 days after the program ends. The visa allows for employment on campus and off-campus with specific restrictions.",
        requiredDocs: [
          "Valid passport with at least 6 months validity from the date of entry.",
          "Acceptance letter from a U.S. educational institution.",
          "Proof of financial support (bank statements, scholarships, etc.).",
          "Evidence of ties to the home country (e.g., employment contract, property ownership, etc.).",
          "Evidence of a clear intent to return to the home country.",
          "Application fee payment receipt.",
        ],
        importantNotes: [
          "Visa validity is typically 1 year for F1, but can be longer for certain programs.",
          "Multiple entries are allowed, but the total stay cannot exceed the duration of the program plus 60 days.",
          "Visa fees and processing times can vary by country and embassy.",
          "Applicants must be enrolled in a full-time academic program.",
        ],
        processingTime: "2-8 weeks",
        successRate: 95,
        timeline: [
          {
            step: "1",
            title: "Consultation",
            description:
              "Free consultation to understand your study plans and choose the right program.",
          },
          {
            step: "2",
            title: "Documentation",
            description:
              "We help you gather and prepare all required documents for your university application.",
          },
          {
            step: "3",
            title: "Application",
            description:
              "We submit your application and manage the university admissions process.",
          },
          {
            step: "4",
            title: "Approval",
            description:
              "Receive your approved visa and start your amazing study journey!",
          },
        ],
        destinations: [
          {
            name: "USA",
            flag: "https://flagcdn.com/us.svg",
            price: "From $299",
          },
          {
            name: "UK",
            flag: "https://flagcdn.com/gb.svg",
            price: "From $249",
          },
          {
            name: "Canada",
            flag: "https://flagcdn.com/ca.svg",
            price: "From $350",
          },
          {
            name: "Australia",
            flag: "https://flagcdn.com/au.svg",
            price: "From $400",
          },
        ],
        iconPath:
          "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
      };
      break;
    case "work":
      modalData.value = {
        title: "Work Visa",
        subtitle:
          "Employment opportunities abroad with proper work authorization and permit documentation.",
        overview:
          "The Work Visa (H1B) is for individuals coming to the United States to work on a temporary basis. This visa is valid for up to 3 years, with the possibility of extension. The visa allows for employment in a specific occupation and employer.",
        requiredDocs: [
          "Valid passport with at least 6 months validity from the date of entry.",
          "Employment offer letter from a U.S. employer.",
          "Proof of financial support (bank statements, sponsorship, etc.).",
          "Evidence of ties to the home country (e.g., employment contract, property ownership, etc.).",
          "Evidence of a clear intent to return to the home country.",
          "Application fee payment receipt.",
        ],
        importantNotes: [
          "Visa validity is typically 3 years for H1B, but can be longer for certain roles.",
          "Multiple entries are allowed, but the total stay cannot exceed the duration of the visa.",
          "Visa fees and processing times can vary by country and embassy.",
          "Applicants must be employed by a U.S. employer.",
        ],
        processingTime: "2-8 weeks",
        successRate: 97,
        timeline: [
          {
            step: "1",
            title: "Consultation",
            description:
              "Free consultation to understand your work plans and employer.",
          },
          {
            step: "2",
            title: "Documentation",
            description:
              "We help you gather and prepare all required documents for your employer sponsorship.",
          },
          {
            step: "3",
            title: "Application",
            description:
              "We submit your application and manage the U.S. Department of Labor certification process.",
          },
          {
            step: "4",
            title: "Approval",
            description:
              "Receive your approved visa and start your amazing work journey!",
          },
        ],
        destinations: [
          {
            name: "USA",
            flag: "https://flagcdn.com/us.svg",
            price: "From $299",
          },
          {
            name: "UK",
            flag: "https://flagcdn.com/gb.svg",
            price: "From $249",
          },
          {
            name: "Canada",
            flag: "https://flagcdn.com/ca.svg",
            price: "From $350",
          },
          {
            name: "Australia",
            flag: "https://flagcdn.com/au.svg",
            price: "From $400",
          },
        ],
        iconPath:
          "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
      };
      break;
    case "business":
      modalData.value = {
        title: "Business Visa",
        subtitle:
          "Corporate travel, conferences, meetings, and business expansion opportunities worldwide.",
        overview:
          "The Business Visa (L1) is for individuals coming to the United States to manage or direct an enterprise, branch, subsidiary, or affiliate of an overseas employer. This visa is valid for up to 7 years, with the possibility of extension.",
        requiredDocs: [
          "Valid passport with at least 6 months validity from the date of entry.",
          "Employment offer letter from a U.S. employer (for L1A).",
          "Proof of financial support (bank statements, sponsorship, etc.).",
          "Evidence of ties to the home country (e.g., employment contract, property ownership, etc.).",
          "Evidence of a clear intent to return to the home country.",
          "Application fee payment receipt.",
        ],
        importantNotes: [
          "Visa validity is typically 7 years for L1, but can be longer for certain roles.",
          "Multiple entries are allowed, but the total stay cannot exceed the duration of the visa.",
          "Visa fees and processing times can vary by country and embassy.",
          "Applicants must be employed by a U.S. employer.",
        ],
        processingTime: "5-10 days",
        successRate: 99,
        timeline: [
          {
            step: "1",
            title: "Consultation",
            description:
              "Free consultation to understand your business plans and employer.",
          },
          {
            step: "2",
            title: "Documentation",
            description:
              "We help you gather and prepare all required documents for your employer sponsorship.",
          },
          {
            step: "3",
            title: "Application",
            description:
              "We submit your application and manage the U.S. Department of Labor certification process.",
          },
          {
            step: "4",
            title: "Approval",
            description:
              "Receive your approved visa and start your amazing business journey!",
          },
        ],
        destinations: [
          {
            name: "USA",
            flag: "https://flagcdn.com/us.svg",
            price: "From $299",
          },
          {
            name: "UK",
            flag: "https://flagcdn.com/gb.svg",
            price: "From $249",
          },
          {
            name: "Canada",
            flag: "https://flagcdn.com/ca.svg",
            price: "From $350",
          },
          {
            name: "Australia",
            flag: "https://flagcdn.com/au.svg",
            price: "From $400",
          },
        ],
        iconPath:
          "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100",
      };
      break;
    default:
      modalData.value = {};
  }
  showModal.value = true;
};

// Close modal
const closeModal = () => {
  showModal.value = false;
  modalData.value = {};
};

// Form submission handler
const handleFormSubmit = async () => {
  const { notifyQuoteSuccess, notifyQuoteError, notifyError } =
    useNotifications();

  try {
    // Validate required fields
    if (
      !form.value.fullName ||
      !form.value.email ||
      !form.value.phone ||
      !form.value.destination
    ) {
      notifyError("Validation Error", "Please fill in all required fields.");
      return;
    }

    // Prepare visa booking data in the correct API format
    const visaData = {
      visaDetails: {
        visaType: form.value.visaType || "Tourist Visa",
        destinationCountry: form.value.destination,
        processingType: "standard",
        intendedTravelDate: form.value.travelDate
          ? form.value.travelDate + "T00:00:00Z"
          : "2025-12-31T00:00:00Z",
        durationOfStay: 30,
        purposeOfVisit: "Tourism",
        passportNumber: "TBD", // Will be provided later
        passportExpiryDate: "2030-12-31T00:00:00Z", // Placeholder
        nationality: form.value.nationality || "Not specified",
        hasPreviousVisa: false,
        requiredDocuments: [],
      },
      contactEmail: form.value.email,
      contactPhone: form.value.phone,
      contactName: form.value.fullName,
      specialRequests: form.value.message || "Initial inquiry",
      urgency: 1,
    };

    // Submit to the visa quote API
    const response = await $fetch(
      "https://glohorizonapi.fly.dev/api/quote/visa",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: visaData,
      }
    );

    if (response.success) {
      notifyQuoteSuccess(response.referenceNumber, "Visa");

      // Reset form
      Object.keys(form.value).forEach((key) => {
        form.value[key] = "";
      });
    }
  } catch (error) {
    console.error("Visa application submission failed:", error);
    notifyQuoteError(
      "Visa",
      "There was an error submitting your application. Please try again."
    );
  }
};

// Function to handle visa application from destination cards
const applyForVisa = (destination) => {
  // Pre-fill the form with the selected destination
  form.value.destination = destination;

  // Scroll to the visa application form
  const formElement = document.querySelector("#application-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

// Function to start the application process (redirect to application form)
const startApplication = () => {
  closeModal();
  const formElement = document.querySelector("#application-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

// Function to schedule a consultation
const scheduleConsultation = () => {
  closeModal();
  // Open contact form or redirect to contact page
  const contactForm = document.querySelector("#application-form");
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: "smooth" });
    // Pre-fill form with consultation request
    form.value.message = `I would like to schedule a free consultation for ${modalData.value.title.toLowerCase()} services. Please contact me to discuss my options.`;
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
