<template>
  <div class="font-sans antialiased text-gray-800">

    <!-- Page Header with Gradient Background -->
    <section class="relative pt-28 lg:pt-32 pb-16 bg-gradient-brand">
      <div class="relative z-10 text-center text-white px-4">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
        >
          Flight Booking Assistance
        </h1>
        <p class="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Expert flight booking service with guaranteed best prices and
          personalized travel assistance
        </p>
        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span class="text-sm font-medium">Best Price Guarantee</span>
          </div>
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
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
            <span class="text-sm font-medium">24/7 Expert Support</span>
          </div>
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
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
            <span class="text-sm font-medium">Complete Travel Solutions</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Flight Booking Request Form -->
    <section class="py-12 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 deep-blue">
            Get Your Flight Quote
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Submit your travel details and our expert team will find you the
            best flight deals. We handle everything from booking to travel
            insurance.
          </p>
        </div>

        <div
          class="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          <!-- Tab Navigation -->
          <div
            class="relative bg-gradient-to-r from-gray-50 to-white p-1 m-6 rounded-2xl border border-gray-200"
          >
            <div class="flex relative">
              <button
                :class="[
                  'tab-button flex-1 px-6 py-3 text-center font-semibold text-sm rounded-xl transition-all duration-300 relative z-10',
                  currentTab === 'return' ? 'active' : '',
                ]"
                @click="switchTab('return')"
              >
                <span class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                  Return Trip
                </span>
              </button>
              <button
                :class="[
                  'tab-button flex-1 px-6 py-3 text-center font-semibold text-sm rounded-xl transition-all duration-300 relative z-10',
                  currentTab === 'oneway' ? 'active' : '',
                ]"
                @click="switchTab('oneway')"
              >
                <span class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                  One Way
                </span>
              </button>
              <button
                :class="[
                  'tab-button flex-1 px-6 py-3 text-center font-semibold text-sm rounded-xl transition-all duration-300 relative z-10',
                  currentTab === 'multicity' ? 'active' : '',
                ]"
                @click="switchTab('multicity')"
              >
                <span class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 6-3v15l-6 3-6-3z"
                    />
                  </svg>
                  Multi-City
                </span>
              </button>
              <div
                class="tab-indicator absolute top-0 left-0 h-full bg-accent rounded-xl transition-all duration-300 ease-out shadow-lg"
                :style="{ width: '33.333%', left: tabIndicatorPosition }"
              ></div>
            </div>
          </div>

          <!-- Booking Request Form -->
          <form class="p-6 pt-0" @submit.prevent="submitForm">
            <!-- Personal Information Section -->
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4 deep-blue flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Contact Information
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Full Name -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      v-model="formData.fullName"
                      required
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                      placeholder="Enter your full name"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Full Name *
                    </label>
                  </div>
                </div>

                <!-- Email -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="email"
                      v-model="formData.email"
                      required
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                      placeholder="Enter your email address"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Email Address *
                    </label>
                  </div>
                </div>

                <!-- Phone -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 001.21-.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      v-model="formData.phone"
                      required
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                      placeholder="Enter your phone number"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Phone Number *
                    </label>
                  </div>
                </div>

                <!-- WhatsApp -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="tel"
                      v-model="formData.whatsapp"
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                      placeholder="WhatsApp number (optional)"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      WhatsApp Number
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Travel Details Section -->
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4 deep-blue flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Travel Details
              </h3>

              <!-- Location Selection Row -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <!-- From Field -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </div>
                    </div>
                    <select
                      v-model="formData.from"
                      required
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="">Select departure city/airport</option>
                      <option value="ACC">Accra, Ghana (ACC)</option>
                      <option value="LOS">Lagos, Nigeria (LOS)</option>
                      <option value="ABJ">Abidjan, Ivory Coast (ABJ)</option>
                      <option value="JNB">
                        Johannesburg, South Africa (JNB)
                      </option>
                      <option value="NBO">Nairobi, Kenya (NBO)</option>
                      <option value="CAI">Cairo, Egypt (CAI)</option>
                      <option value="other">
                        Other (please specify in comments)
                      </option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Departure From *
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- To Field -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-deep-blue/10 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-deep-blue"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                    <select
                      v-model="formData.to"
                      required
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="">Select destination city/airport</option>
                      <option value="LHR">London, UK (LHR/LGW)</option>
                      <option value="JFK">New York, USA (JFK/LGA)</option>
                      <option value="DXB">Dubai, UAE (DXB)</option>
                      <option value="CDG">Paris, France (CDG)</option>
                      <option value="IST">Istanbul, Turkey (IST)</option>
                      <option value="FRA">Frankfurt, Germany (FRA)</option>
                      <option value="AMS">Amsterdam, Netherlands (AMS)</option>
                      <option value="DOH">Doha, Qatar (DOH)</option>
                      <option value="YYZ">Toronto, Canada (YYZ)</option>
                      <option value="other">
                        Other destination (please specify)
                      </option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Destination To *
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Date and Passenger Selection -->
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              >
                <!-- Departure Date -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="date"
                      v-model="formData.departure"
                      required
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Departure Date *
                    </label>
                  </div>
                </div>

                <!-- Return Date -->
                <div
                  v-show="currentTab === 'return'"
                  class="relative group return-date-field"
                >
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="date"
                      v-model="formData.return"
                      class="modern-input w-full pl-16 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium"
                    />
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Return Date
                    </label>
                  </div>
                </div>

                <!-- Passengers -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-purple-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <select
                      v-model="formData.passengers"
                      required
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="">Select passengers</option>
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5+ Adults</option>
                      <option value="family">2 Adults + Children</option>
                      <option value="group">Group Booking (6+)</option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Passengers *
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Class -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-yellow-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                          />
                        </svg>
                      </div>
                    </div>
                    <select
                      v-model="formData.class"
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="economy">Economy Class</option>
                      <option value="premium">Premium Economy</option>
                      <option value="business">Business Class</option>
                      <option value="first">First Class</option>
                      <option value="any">Best Available</option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Preferred Class
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Preferences & Additional Services -->
            <div class="mb-8">
              <h3
                class="text-lg font-semibold mb-4 deep-blue flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Preferences & Additional Services
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <!-- Preferred Airline -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                    </div>
                    <select
                      v-model="formData.airline"
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="">No preference</option>
                      <option value="emirates">Emirates</option>
                      <option value="british">British Airways</option>
                      <option value="delta">Delta Airlines</option>
                      <option value="turkish">Turkish Airlines</option>
                      <option value="ethiopian">Ethiopian Airlines</option>
                      <option value="lufthansa">Lufthansa</option>
                      <option value="klm">KLM</option>
                      <option value="qatar">Qatar Airways</option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Preferred Airline
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Budget Range -->
                <div class="relative group">
                  <div class="modern-input-group">
                    <div
                      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
                    >
                      <div
                        class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4 text-green-600"
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
                    </div>
                    <select
                      v-model="formData.budget"
                      class="modern-select w-full pl-16 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 appearance-none bg-white text-gray-900 font-medium"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-3000">$2,000 - $3,000</option>
                      <option value="3000-plus">$3,000+</option>
                      <option value="flexible">Flexible/Best Value</option>
                    </select>
                    <label
                      class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                    >
                      Budget Range
                    </label>
                    <div class="dropdown-arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Services Checkboxes -->
              <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
              >
                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700"
                    >Travel Insurance</span
                  >
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.services"
                      value="insurance"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700"
                    >Direct Flights Only</span
                  >
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.preferences"
                      value="direct"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700">Hotel Booking</span>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.services"
                      value="hotel"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700"
                    >Airport Transfers</span
                  >
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.services"
                      value="transfers"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700">Visa Assistance</span>
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.services"
                      value="visa"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>

                <div
                  class="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-accent transition-all duration-300"
                >
                  <span class="font-medium text-gray-700"
                    >Special Assistance</span
                  >
                  <label
                    class="relative inline-flex items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      v-model="formData.services"
                      value="assistance"
                    />
                    <div
                      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"
                    ></div>
                  </label>
                </div>
              </div>

              <!-- Comments/Special Requests -->
              <div class="relative group">
                <div class="modern-input-group">
                  <div class="absolute left-4 top-4 z-10">
                    <div
                      class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <textarea
                    v-model="formData.comments"
                    rows="4"
                    class="modern-input w-full pl-16 pr-4 py-4 pt-6 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all duration-300 bg-white text-gray-900 font-medium resize-none"
                    placeholder="Tell us about any special requirements, dietary needs, accessibility needs, or other preferences..."
                  ></textarea>
                  <label
                    class="modern-label absolute left-16 top-1 text-xs text-gray-500 font-medium"
                  >
                    Comments & Special Requests
                  </label>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="request-quote-btn group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-64 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style="
                  background: linear-gradient(
                    45deg,
                    #2563eb,
                    #f97316
                  ) !important;
                  color: white !important;
                "
              >
                <div class="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-3 group-hover:animate-bounce"
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
                  <span v-if="isSubmitting">Submitting Quote...</span>
                  <span v-else>Get My Flight Quote</span>
                  <div
                    class="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
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
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>

        <!-- Trust & Service Promise Section -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div
              class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2 deep-blue">
              Best Price Guarantee
            </h3>
            <p class="text-gray-600 text-sm">
              Find a lower price elsewhere? We'll match it and give you an
              additional discount.
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div
              class="w-16 h-16 bg-deep-blue/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-deep-blue"
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
            <h3 class="font-semibold text-lg mb-2 deep-blue">Quick Response</h3>
            <p class="text-gray-600 text-sm">
              Get your personalized flight quote within 2 hours during business
              hours.
            </p>
          </div>

          <div
            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
          >
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-lg mb-2 deep-blue">
              Complete Service
            </h3>
            <p class="text-gray-600 text-sm">
              From booking to boarding - we handle all the details so you can
              focus on your trip.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Flight Deals -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-2 deep-blue">
          Popular Route Examples
        </h2>
        <p class="text-gray-600 mb-8">
          Sample pricing for popular destinations. Get your personalized quote
          with current rates and best available deals.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Deal 1 -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-accent transition duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="London"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-sm font-semibold rounded-full"
              >
                Popular Route
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold deep-blue">Accra to London</h3>
                <div class="flex items-center space-x-1">
                  <span
                    class="text-xs text-white bg-deep-blue px-2 py-1 rounded"
                    >Return</span
                  >
                </div>
              </div>
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1584084807193-bed442df7a75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="British Airways"
                    class="w-8 h-8 mr-2 rounded-full"
                  />
                  <span class="text-gray-600 text-sm">Multiple Airlines</span>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting From</p>
                  <p class="text-2xl font-bold accent">$750</p>
                </div>
              </div>
              <div class="border-t border-gray-200 pt-4 mt-4">
                <div class="flex justify-between text-sm text-gray-600 mb-4">
                  <div>
                    <p>Peak Season</p>
                    <p class="font-semibold">Jun - Aug</p>
                  </div>
                  <div class="text-right">
                    <p>Off Season</p>
                    <p class="font-semibold">Oct - Mar</p>
                  </div>
                </div>
                <button
                  @click="scrollToForm"
                  class="block w-full px-4 py-2 bg-deep-blue text-white text-center rounded-lg hover:bg-accent transition"
                >
                  Get Current Quote
                </button>
              </div>
            </div>
          </div>

          <!-- Deal 2 -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-accent transition duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dubai"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-sm font-semibold rounded-full"
              >
                Best Value
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold deep-blue">Accra to Dubai</h3>
                <div class="flex items-center space-x-1">
                  <span
                    class="text-xs text-white bg-deep-blue px-2 py-1 rounded"
                    >Return</span
                  >
                </div>
              </div>
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1627501691850-db08eb81199a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Emirates"
                    class="w-8 h-8 mr-2 rounded-full"
                  />
                  <span class="text-gray-600 text-sm">Multiple Airlines</span>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting From</p>
                  <p class="text-2xl font-bold accent">$620</p>
                </div>
              </div>
              <div class="border-t border-gray-200 pt-4 mt-4">
                <div class="flex justify-between text-sm text-gray-600 mb-4">
                  <div>
                    <p>Peak Season</p>
                    <p class="font-semibold">Dec - Mar</p>
                  </div>
                  <div class="text-right">
                    <p>Off Season</p>
                    <p class="font-semibold">Jun - Sep</p>
                  </div>
                </div>
                <button
                  @click="scrollToForm"
                  class="block w-full px-4 py-2 bg-deep-blue text-white text-center rounded-lg hover:bg-accent transition"
                >
                  Get Current Quote
                </button>
              </div>
            </div>
          </div>

          <!-- Deal 3 -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-accent transition duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="New York"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-sm font-semibold rounded-full"
              >
                Premium Route
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold deep-blue">
                  Accra to New York
                </h3>
                <div class="flex items-center space-x-1">
                  <span
                    class="text-xs text-white bg-deep-blue px-2 py-1 rounded"
                    >Return</span
                  >
                </div>
              </div>
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1629065843950-982dfdc9784f?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Delta"
                    class="w-8 h-8 mr-2 rounded-full"
                  />
                  <span class="text-gray-600 text-sm">Multiple Airlines</span>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting From</p>
                  <p class="text-2xl font-bold accent">$890</p>
                </div>
              </div>
              <div class="border-t border-gray-200 pt-4 mt-4">
                <div class="flex justify-between text-sm text-gray-600 mb-4">
                  <div>
                    <p>Peak Season</p>
                    <p class="font-semibold">Jun - Aug</p>
                  </div>
                  <div class="text-right">
                    <p>Off Season</p>
                    <p class="font-semibold">Jan - Mar</p>
                  </div>
                </div>
                <button
                  @click="scrollToForm"
                  class="block w-full px-4 py-2 bg-deep-blue text-white text-center rounded-lg hover:bg-accent transition"
                >
                  Get Current Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <div
            class="bg-gradient-to-r from-accent/5 to-deep-blue/5 rounded-2xl p-6 border border-accent/20"
          >
            <h3 class="text-xl font-semibold mb-2 deep-blue">
              Need a Different Route?
            </h3>
            <p class="text-gray-600 mb-4">
              We handle bookings to any destination worldwide. Get your
              personalized quote today!
            </p>
            <button
              @click="scrollToForm"
              class="inline-block px-6 py-3 border border-deep-blue text-deep-blue rounded-lg hover:bg-deep-blue hover:text-white transition"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Destinations -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-2 deep-blue">
          Popular Flight Destinations
        </h2>
        <p class="text-gray-600 mb-8">
          Explore these trending destinations with direct flights from Accra.
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <!-- Destination 1 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="London"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">London</h3>
                <p class="text-sm">from $750</p>
              </div>
            </div>
          </div>

          <!-- Destination 2 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1546412414-e1885259563a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dubai"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">Dubai</h3>
                <p class="text-sm">from $620</p>
              </div>
            </div>
          </div>

          <!-- Destination 3 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="New York"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">New York</h3>
                <p class="text-sm">from $890</p>
              </div>
            </div>
          </div>

          <!-- Destination 4 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Istanbul"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">Istanbul</h3>
                <p class="text-sm">from $580</p>
              </div>
            </div>
          </div>

          <!-- Destination 5 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Paris"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">Paris</h3>
                <p class="text-sm">from $720</p>
              </div>
            </div>
          </div>

          <!-- Destination 6 -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            <img
              src="https://images.unsplash.com/photo-1558551649-e44c8f992010?q=80&w=2668&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Amsterdam"
              class="w-full h-40 object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end"
            >
              <div class="p-4 text-white">
                <h3 class="font-semibold">Amsterdam</h3>
                <p class="text-sm">from $760</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Flight Services -->
    <section class="py-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-2 deep-blue">
            Our Flight Services
          </h2>
          <p class="text-gray-600 text-sm md:text-base">
            Comprehensive air travel solutions to meet your needs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Service 1 -->
          <div
            class="group bg-white p-5 rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-accent/30 transition-all duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold mb-1 deep-blue">
                  Ticket Booking
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Seamless flight booking with best price guarantee and group
                  discounts.
                </p>
                <div class="flex items-center text-xs text-gray-500 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3 w-3 mr-1 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Group & family discounts
                </div>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-medium text-deep-blue hover:text-accent transition-colors duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                </a>
              </div>
            </div>
          </div>

          <!-- Service 2 -->
          <div
            class="group bg-white p-5 rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-accent/30 transition-all duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold mb-1 deep-blue">
                  Travel Insurance
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Comprehensive protection for medical, trip cancellation, and
                  baggage coverage.
                </p>
                <div class="space-y-1 mb-3">
                  <div class="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Medical & trip coverage
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Baggage protection
                  </div>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-medium text-deep-blue hover:text-accent transition-colors duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                </a>
              </div>
            </div>
          </div>

          <!-- Service 3 -->
          <div
            class="group bg-white p-5 rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-accent/30 transition-all duration-300"
          >
            <div class="flex items-start space-x-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-accent"
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
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-semibold mb-1 deep-blue">
                  24/7 Support
                </h3>
                <p class="text-gray-600 text-sm mb-3 leading-relaxed">
                  Round-the-clock travel assistance with multilingual customer
                  service.
                </p>
                <div class="space-y-1 mb-3">
                  <div class="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Flight rebooking assistance
                  </div>
                  <div class="flex items-center text-xs text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 mr-1 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Emergency arrangements
                  </div>
                </div>
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-medium text-deep-blue hover:text-accent transition-colors duration-300"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-2 deep-blue">Flight Booking FAQ</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Common questions about our expert flight booking service and how we
            help you travel better.
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="(faq, index) in faqItems"
            :key="index"
            class="faq-item bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/30"
          >
            <button
              @click="toggleFAQ(index)"
              class="faq-button flex items-center justify-between w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-300"
            >
              <span class="text-lg font-semibold text-gray-800 pr-4">{{
                faq.question
              }}</span>
              <div
                class="faq-icon flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-accent transition-transform duration-300"
                  :class="{ 'rotate-45': openFaqIndex === index }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </button>
            <div
              class="faq-content overflow-hidden transition-all duration-500 ease-in-out"
              :class="{
                'max-h-96': openFaqIndex === index,
                'max-h-0': openFaqIndex !== index,
              }"
            >
              <div class="px-6 pb-6 text-gray-600 leading-relaxed">
                <div
                  class="bg-gradient-to-r from-accent/5 to-transparent p-4 rounded-lg border-l-4 border-accent"
                >
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gradient-brand relative overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 text-center text-white relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready for Expert Flight Booking?
        </h2>
        <p class="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Let our travel specialists find you the best deals and handle all the
          booking details for a seamless journey.
        </p>
        <div
          class="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <!-- Primary CTA Button -->
          <button
            @click="scrollToForm"
            class="group relative px-8 py-4 bg-accent hover:bg-orange-500 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            ></div>
            <div class="relative z-10 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-3 group-hover:animate-bounce"
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
              <span class="text-lg">Get Flight Quote</span>
              <div
                class="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
              </div>
            </div>
          </button>

          <!-- Secondary CTA Button -->
          <nuxt-link
            to="/contact"
            class="group relative px-8 py-4 border-2 border-accent text-white font-bold rounded-2xl hover:bg-accent hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-accent/10"
          >
            <div
              class="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
            ></div>
            <div class="relative z-10 flex items-center">
              <div
                class="w-8 h-8 bg-accent/30 group-hover:bg-white/20 rounded-full flex items-center justify-center mr-3 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <span class="text-lg">Speak to an Expert</span>
              <div
                class="ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
              </div>
            </div>
          </nuxt-link>
        </div>

        <!-- Flight Booking Link -->
        <div class="mt-8 text-center">
          <p class="text-white/80 text-lg mb-4">
            Or go directly to our comprehensive flight booking request:
          </p>
          <nuxt-link
            to="/flight-booking"
            class="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            Complete Flight Booking Request
          </nuxt-link>
        </div>

        <!-- Additional interactive elements -->
        <div
          class="mt-12 flex justify-center items-center space-x-8 opacity-75"
        >
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span class="text-sm">Best Price Guarantee</span>
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-2 h-2 bg-white rounded-full animate-pulse"
              style="animation-delay: 0.5s"
            ></div>
            <span class="text-sm">Expert Booking Service</span>
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-2 h-2 bg-white rounded-full animate-pulse"
              style="animation-delay: 1s"
            ></div>
            <span class="text-sm">24/7 Travel Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

// Tab state
const currentTab = ref("return");

// FAQ state
const openFaqIndex = ref(-1);

// FAQ data
const faqItems = ref([
  {
    question: "How does your flight booking service work?",
    answer:
      "Simply submit your travel details through our quote form, and our expert team will find you the best flight options available. We search multiple airlines and consolidators to ensure you get the best possible price. Once you approve the booking, we handle all the details including seat selection, special requests, and provide you with your tickets and itinerary. We're with you every step of the way!",
  },
  {
    question: "How quickly will I receive my flight quote?",
    answer:
      "Most quote requests are processed within 2 hours during business hours. For urgent travel (within 48 hours), we prioritize your request and respond within 30 minutes. Complex itineraries or group bookings may take up to 24 hours as we work to secure the best deals and coordinate multiple bookings for your party.",
  },
  {
    question: "Do you really guarantee the best price?",
    answer:
      "Absolutely! If you find a lower published fare for the same flight within 24 hours of our quote, we'll match that price and give you an additional 5% discount. Our access to consolidator fares and bulk purchasing agreements often allows us to offer prices below what you'll find on airline websites or other booking platforms.",
  },
  {
    question: "Can I make changes to my booking after it's confirmed?",
    answer:
      "Yes! We handle all change requests on your behalf. While airline change fees may apply, we never charge additional service fees for processing changes or cancellations. Our team will work with the airline to minimize costs and find the most convenient options for your new travel dates or destinations.",
  },
  {
    question: "What payment methods do you accept and when do I pay?",
    answer:
      "We accept all major credit cards, debit cards, bank transfers, and mobile money. Payment is only required after you approve our quote and are satisfied with the flight options. For bookings over $1,000, we offer payment plans with a small deposit to secure your booking and the balance due before travel. All transactions are secured with 256-bit SSL encryption.",
  },
  {
    question: "Do you provide support during my travel?",
    answer:
      "Yes! Our 24/7 emergency support line is available throughout your journey. Whether you face flight delays, cancellations, or need to make emergency changes, we're here to help. We also provide WhatsApp support for quick communications and can assist with rebooking, accommodation if needed, and coordination with airlines for any issues that arise during travel.",
  },
]);

// Form data
const formData = reactive({
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  from: "",
  to: "",
  departure: "",
  return: "",
  passengers: "",
  class: "economy",
  airline: "",
  budget: "",
  services: [],
  preferences: [],
  comments: "",
});

// Form submission state
const isSubmitting = ref(false);

// Tab indicator position
const tabIndicatorPosition = computed(() => {
  switch (currentTab.value) {
    case "return":
      return "0%";
    case "oneway":
      return "33.333%";
    case "multicity":
      return "66.666%";
    default:
      return "0%";
  }
});

// Switch tab function
const switchTab = (tabType) => {
  currentTab.value = tabType;
};

// Toggle FAQ function
const toggleFAQ = (index) => {
  openFaqIndex.value = openFaqIndex.value === index ? -1 : index;
};

// Scroll to form function
const scrollToForm = () => {
  const form = document.querySelector("form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const firstInput = form.querySelector("input, select");
      if (firstInput) {
        firstInput.focus();
      }
    }, 800);
  }
};

// Submit form function - submit flight quote directly
const submitForm = async () => {
  console.log("🛫 Submitting flight quote from flights page...");
  
  const { notifyQuoteSuccess, notifyQuoteError, notifyError } = useNotifications();
  
  // Validate required fields
  const errors = [];
  if (!formData.fullName.trim()) errors.push('Full name is required');
  if (!formData.email.trim()) errors.push('Email is required');
  if (!formData.phone.trim()) errors.push('Phone number is required');
  if (!formData.from.trim()) errors.push('Departure city is required');
  if (!formData.to.trim()) errors.push('Destination city is required');
  if (!formData.departure) errors.push('Departure date is required');
  if (currentTab.value === 'return' && !formData.return) errors.push('Return date is required for round trip');

  if (errors.length > 0) {
    notifyError('Validation Error', 'Please fill in all required fields: ' + errors.join(', '));
    return;
  }

  isSubmitting.value = true;

  try {
    // Import the booking service - use dynamic imports safely
    const [bookingServiceModule, typesModule] = await Promise.all([
      import('~/services/BookingService'),
      import('~/types/booking-api-types')
    ]);
    const bookingService = bookingServiceModule.default;

    // Map currentTab to tripType
    const tripTypeMap = {
      'return': 'round-trip',
      'oneway': 'one-way', 
      'multicity': 'multi-city'
    };

    // Build special requests from comments and preferences
    const specialRequestsParts = [];
    if (formData.comments) specialRequestsParts.push(formData.comments);
    if (formData.budget) specialRequestsParts.push(`Budget: ${formData.budget}`);
    if (formData.airline) specialRequestsParts.push(`Preferred airline: ${formData.airline}`);
    if (formData.services && formData.services.length > 0) {
      specialRequestsParts.push(`Services: ${formData.services.join(', ')}`);
    }

    // Prepare flight booking data
    const flightDetails = {
      tripType: tripTypeMap[currentTab.value] || 'round-trip',
      departureCity: formData.from,
      arrivalCity: formData.to,
      departureDate: formData.departure + "T00:00:00Z",
      returnDate: currentTab.value === 'return' && formData.return ? formData.return + "T00:00:00Z" : undefined,
      adultPassengers: parseInt(formData.passengers) || 1,
      childPassengers: 0,
      infantPassengers: 0,
      preferredClass: formData.class || 'economy',
      preferredAirline: formData.airline || undefined,
      passengers: []
    };

    const submissionData = {
      flightDetails,
      contactEmail: formData.email,
      contactPhone: formData.phone,
      contactName: formData.fullName,
      specialRequests: specialRequestsParts.length > 0 ? specialRequestsParts.join('; ') : undefined,
      urgency: 1 // Normal priority
    };

    console.log('📤 Submitting flight quote:', submissionData);

    // Submit to API with timeout protection
    const response = await Promise.race([
      bookingService.submitFlightBooking(submissionData),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout after 30 seconds')), 30000)
      )
    ]);

    console.log('✅ Flight quote submitted successfully:', response);

    // Show success notification with actions (user can click to navigate)
    notifyQuoteSuccess(response.referenceNumber, 'Flight');
    
    // Clear form immediately
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'string') {
        formData[key] = '';
      } else if (Array.isArray(formData[key])) {
        formData[key] = [];
      }
    });
    formData.class = 'economy'; // Reset to default
    
    // No auto-redirect - user can choose via notification buttons

  } catch (error) {
    console.error('❌ Flight quote submission failed:', error);
    const errorMsg = error.message || 'Failed to submit flight quote. Please try again.';
    notifyQuoteError('Flight', errorMsg);
  } finally {
    // Always ensure the form is not stuck in submitting state
    isSubmitting.value = false;
  }
};

// Meta data for SEO
useHead({
  title: "Flight Booking - Global Horizons Travel",
  meta: [
    {
      name: "description",
      content:
        "Expert flight booking service with guaranteed best prices and personalized travel assistance. Get your flight quote today!",
    },
    {
      name: "keywords",
      content:
        "flight booking, cheap flights, airline tickets, travel assistance, best price guarantee",
    },
  ],
});
</script>

<style scoped>
/* Custom colors and styles to match original */
.deep-blue {
  color: #1a365d;
}

.bg-deep-blue {
  background-color: #1a365d;
}

.bg-gradient-brand {
  background-image: linear-gradient(135deg, #1a365d, #ff7a59);
}

/* Tab styles */
.tab-button {
  color: #6b7280;
  background: transparent;
}

.tab-button.active {
  color: #ffffff;
  background: transparent;
}

.tab-indicator {
  background: linear-gradient(135deg, #ff7a59, #f97316);
  box-shadow: 0 4px 15px rgba(255, 122, 89, 0.3);
}

/* Modern input styles */
.modern-input-group {
  position: relative;
}

.modern-select,
.modern-input {
  padding-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
}

.modern-select:focus + .modern-label,
.modern-input:focus + .modern-label,
.modern-select:not(:placeholder-shown) + .modern-label,
.modern-input:not(:placeholder-shown) + .modern-label {
  transform: translateY(-0.125rem);
  font-size: 0.75rem;
  color: #ff7a59;
}

.modern-select:focus,
.modern-input:focus {
  border-color: #ff7a59;
  box-shadow: 0 0 0 4px rgba(255, 122, 89, 0.1);
}

.modern-input-group:hover .modern-select,
.modern-input-group:hover .modern-input {
  border-color: #ff7a59;
}
</style>
