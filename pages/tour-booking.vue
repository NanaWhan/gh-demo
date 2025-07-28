<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-orange-900 via-red-800 to-pink-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Tour Package Booking
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing destinations with our curated tour packages
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🎒 Custom Tours</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💰 Dynamic Pricing</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🌍 Expert Guides</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Success Message -->
          <div
            v-if="isSubmitted"
            class="bg-green-50 border border-green-200 rounded-lg p-8 mb-8"
          >
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg
                  class="h-8 w-8 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div class="ml-4">
                <h3 class="text-lg font-medium text-green-800">
                  Tour Request Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    tour specialists will contact you within 2-4 hours with your
                    customized itinerary.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your booking:</strong> Visit our
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >booking tracker</nuxt-link
                    >
                    anytime to check your status using reference number
                    {{ referenceNumber }}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Form -->
          <form
            v-else
            @submit.prevent="submitTourRequest"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <!-- Form Header -->
            <div
              class="bg-gradient-to-r from-orange-500 to-red-600 p-6 text-white"
            >
              <h2 class="text-2xl font-bold mb-2">Tour Package Request</h2>
              <p class="text-orange-100">
                Select your preferences and see instant pricing with our dynamic
                calculator
              </p>
            </div>

            <div class="p-8 space-y-8">
              <!-- Personal Information -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-orange-600"
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
                  Personal Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Full Name *</label
                    >
                    <input
                      v-model="formData.fullName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Email Address *</label
                    >
                    <input
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Phone Number *</label
                    >
                    <input
                      v-model="formData.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="+233 123 456 789"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Country of Residence</label
                    >
                    <input
                      v-model="formData.country"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Ghana"
                    />
                  </div>
                </div>
              </div>

              <!-- Tour Preferences -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Tour Preferences
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Destination/Package *</label
                    >
                    <select
                      v-model="formData.destination"
                      required
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select destination</option>
                      <option value="dubai-5days">
                        Dubai Explorer (5 Days) - $1,200
                      </option>
                      <option value="london-7days">
                        London Heritage (7 Days) - $1,800
                      </option>
                      <option value="turkey-6days">
                        Turkey Adventure (6 Days) - $1,400
                      </option>
                      <option value="south-africa-8days">
                        South Africa Safari (8 Days) - $2,200
                      </option>
                      <option value="egypt-7days">
                        Egypt Ancient Wonders (7 Days) - $1,600
                      </option>
                      <option value="morocco-5days">
                        Morocco Imperial Cities (5 Days) - $1,100
                      </option>
                      <option value="kenya-6days">
                        Kenya Wildlife Safari (6 Days) - $1,900
                      </option>
                      <option value="custom">Custom Tour Package</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Preferred Travel Dates *</label
                    >
                    <input
                      v-model="formData.travelDate"
                      type="date"
                      required
                      :min="today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Tour Duration (if custom)</label
                    >
                    <select
                      v-model="formData.duration"
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select duration</option>
                      <option value="3">3 Days</option>
                      <option value="4">4 Days</option>
                      <option value="5">5 Days</option>
                      <option value="6">6 Days</option>
                      <option value="7">7 Days</option>
                      <option value="8">8 Days</option>
                      <option value="10">10 Days</option>
                      <option value="14">14 Days</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Tour Type *</label
                    >
                    <select
                      v-model="formData.tourType"
                      required
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select tour type</option>
                      <option value="group">Group Tour (Shared)</option>
                      <option value="private">Private Tour (+30%)</option>
                      <option value="luxury">Luxury Tour (+50%)</option>
                      <option value="budget">Budget Tour (-20%)</option>
                    </select>
                  </div>
                </div>

                <!-- Custom Tour Details (if custom selected) -->
                <div v-if="formData.destination === 'custom'" class="mt-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                        >Custom Destination *</label
                      >
                      <input
                        v-model="formData.customDestination"
                        type="text"
                        :required="formData.destination === 'custom'"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., Japan, Brazil, etc."
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                        >Estimated Budget Range</label
                      >
                      <select
                        v-model="formData.customBudget"
                        @change="calculatePrice"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select budget range</option>
                        <option value="800">$800 - $1,200</option>
                        <option value="1200">$1,200 - $1,800</option>
                        <option value="1800">$1,800 - $2,500</option>
                        <option value="2500">$2,500+</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Custom Tour Requirements</label
                    >
                    <textarea
                      v-model="formData.customRequirements"
                      rows="3"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Describe your ideal tour: activities, accommodation level, must-see places, etc."
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Group Details & Dynamic Pricing -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-orange-600"
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
                  Group Details & Pricing
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Number of Adults *</label
                    >
                    <select
                      v-model="formData.adults"
                      required
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select adults</option>
                      <option v-for="n in 10" :key="n" :value="n">
                        {{ n }} Adult{{ n > 1 ? "s" : "" }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Number of Children (2-12 years)</label
                    >
                    <select
                      v-model="formData.children"
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="0">No Children</option>
                      <option v-for="n in 6" :key="n" :value="n">
                        {{ n }} Child{{ n > 1 ? "ren" : "" }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Number of Infants (Under 2)</label
                    >
                    <select
                      v-model="formData.infants"
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="0">No Infants</option>
                      <option v-for="n in 4" :key="n" :value="n">
                        {{ n }} Infant{{ n > 1 ? "s" : "" }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Accommodation Level</label
                    >
                    <select
                      v-model="formData.accommodationLevel"
                      @change="calculatePrice"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="standard">Standard Hotels</option>
                      <option value="deluxe">Deluxe Hotels (+20%)</option>
                      <option value="luxury">Luxury Hotels (+40%)</option>
                    </select>
                  </div>
                </div>

                <!-- Dynamic Pricing Display -->
                <div
                  v-if="calculatedPrice > 0"
                  class="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6"
                >
                  <h4
                    class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2 text-green-600"
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
                    💰 Estimated Package Price
                  </h4>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div class="space-y-2">
                      <div class="flex justify-between">
                        <span
                          >Base Price ({{ formData.adults }} adult{{
                            formData.adults > 1 ? "s" : ""
                          }}):</span
                        >
                        <span class="font-medium"
                          >${{ basePrice.toLocaleString() }}</span
                        >
                      </div>
                      <div
                        v-if="formData.children > 0"
                        class="flex justify-between"
                      >
                        <span>Children ({{ formData.children }} × 75%):</span>
                        <span class="font-medium"
                          >${{ childrenPrice.toLocaleString() }}</span
                        >
                      </div>
                      <div
                        v-if="formData.infants > 0"
                        class="flex justify-between"
                      >
                        <span>Infants ({{ formData.infants }} × 10%):</span>
                        <span class="font-medium"
                          >${{ infantsPrice.toLocaleString() }}</span
                        >
                      </div>
                      <div
                        v-if="tourTypeMultiplier !== 1"
                        class="flex justify-between"
                      >
                        <span>{{ getTourTypeLabel() }}:</span>
                        <span class="font-medium"
                          >{{ tourTypeMultiplier > 1 ? "+" : ""
                          }}{{
                            ((tourTypeMultiplier - 1) * 100).toFixed(0)
                          }}%</span
                        >
                      </div>
                      <div
                        v-if="accommodationMultiplier !== 1"
                        class="flex justify-between"
                      >
                        <span>{{ getAccommodationLabel() }}:</span>
                        <span class="font-medium"
                          >+{{
                            ((accommodationMultiplier - 1) * 100).toFixed(0)
                          }}%</span
                        >
                      </div>
                    </div>

                    <div class="md:text-right">
                      <div class="text-2xl font-bold text-green-600 mb-2">
                        ${{ calculatedPrice.toLocaleString() }}
                      </div>
                      <div class="text-sm text-gray-600">
                        Total for {{ totalTravelers }} traveler{{
                          totalTravelers > 1 ? "s" : ""
                        }}
                      </div>
                      <div class="text-xs text-gray-500 mt-1">
                        *Prices are estimates and may vary
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Travel Preferences -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Travel Preferences
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Activity Level Preference</label
                    >
                    <select
                      v-model="formData.activityLevel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      <option value="relaxed">
                        Relaxed (Light walking, cultural)
                      </option>
                      <option value="moderate">
                        Moderate (Some walking, mixed activities)
                      </option>
                      <option value="active">
                        Active (Lots of walking, adventure)
                      </option>
                      <option value="adventurous">
                        Adventurous (Extreme activities)
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Meal Preferences</label
                    >
                    <select
                      v-model="formData.mealPreferences"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      <option value="all-inclusive">All meals included</option>
                      <option value="breakfast-only">Breakfast only</option>
                      <option value="half-board">
                        Half board (Breakfast + Dinner)
                      </option>
                      <option value="flexible">Flexible dining</option>
                    </select>
                  </div>
                </div>

                <!-- Interests & Activities -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-3"
                    >Interests & Activities (Select all that apply)</label
                  >
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="cultural-sites"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Cultural Sites</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="museums"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Museums</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="adventure-sports"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Adventure Sports</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="wildlife"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Wildlife Safari</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="beaches"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Beaches</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="shopping"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Shopping</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="nightlife"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Nightlife</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="photography"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Photography</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.interests"
                        type="checkbox"
                        value="food-tours"
                        class="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Food Tours</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Special Requirements -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-orange-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Special Requirements & Notes
                </h3>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Special Requests or Accessibility Needs</label
                    >
                    <textarea
                      v-model="formData.specialRequests"
                      rows="4"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Dietary restrictions, mobility assistance, celebration arrangements, medical needs, etc."
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Urgency Level *</label
                    >
                    <select
                      v-model="formData.urgency"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      <option value="standard">Standard (48-72 hours)</option>
                      <option value="urgent">Urgent (24 hours)</option>
                      <option value="asap">ASAP (Same day)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Terms and Submit -->
              <div class="border-t pt-6">
                <div class="flex items-start mb-6">
                  <input
                    v-model="formData.agreeToTerms"
                    type="checkbox"
                    required
                    class="mt-1 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <label class="ml-3 text-sm text-gray-600">
                    I agree to the
                    <a
                      href="#"
                      class="text-orange-600 hover:text-orange-800 underline"
                      >Terms of Service</a
                    >
                    and
                    <a
                      href="#"
                      class="text-orange-600 hover:text-orange-800 underline"
                      >Privacy Policy</a
                    >. I understand this is a booking request and final
                    confirmation will come from Global Horizons staff.
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span v-if="isSubmitting">Submitting Tour Request...</span>
                  <span v-else>Submit Tour Request</span>
                </button>

                <p class="text-center text-sm text-gray-500 mt-4">
                  🔒 Your information is secure and will only be used to process
                  your tour booking request.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import emailjs from "@emailjs/browser";

// SEO Meta
useHead({
  title: "Tour Package Booking - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Book amazing tour packages with Global Horizons. Dynamic pricing calculator and custom itineraries available.",
    },
  ],
});

// Form state
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const referenceNumber = ref("");

// Today's date for minimum date validation
const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

// Form data
const formData = reactive({
  fullName: "",
  email: "",
  phone: "",
  country: "",
  destination: "",
  customDestination: "",
  customBudget: "",
  customRequirements: "",
  travelDate: "",
  duration: "",
  tourType: "",
  adults: "",
  children: 0,
  infants: 0,
  accommodationLevel: "standard",
  activityLevel: "",
  mealPreferences: "",
  interests: [],
  specialRequests: "",
  urgency: "",
  agreeToTerms: false,
});

// Pre-defined tour packages with base prices
const tourPackages = {
  "dubai-5days": { name: "Dubai Explorer", price: 1200, days: 5 },
  "london-7days": { name: "London Heritage", price: 1800, days: 7 },
  "turkey-6days": { name: "Turkey Adventure", price: 1400, days: 6 },
  "south-africa-8days": { name: "South Africa Safari", price: 2200, days: 8 },
  "egypt-7days": { name: "Egypt Ancient Wonders", price: 1600, days: 7 },
  "morocco-5days": { name: "Morocco Imperial Cities", price: 1100, days: 5 },
  "kenya-6days": { name: "Kenya Wildlife Safari", price: 1900, days: 6 },
  custom: { name: "Custom Tour", price: 1000, days: 5 },
};

// Pricing calculations
const basePrice = computed(() => {
  if (!formData.destination || !formData.adults) return 0;

  let price = 0;

  if (formData.destination === "custom") {
    price = parseInt(formData.customBudget) || 1000;
  } else {
    price = tourPackages[formData.destination]?.price || 0;
  }

  return price * parseInt(formData.adults);
});

const childrenPrice = computed(() => {
  if (!formData.destination || formData.children === 0) return 0;

  let baseChildPrice = 0;
  if (formData.destination === "custom") {
    baseChildPrice = parseInt(formData.customBudget) || 1000;
  } else {
    baseChildPrice = tourPackages[formData.destination]?.price || 0;
  }

  return Math.round(baseChildPrice * 0.75 * parseInt(formData.children));
});

const infantsPrice = computed(() => {
  if (!formData.destination || formData.infants === 0) return 0;

  let baseInfantPrice = 0;
  if (formData.destination === "custom") {
    baseInfantPrice = parseInt(formData.customBudget) || 1000;
  } else {
    baseInfantPrice = tourPackages[formData.destination]?.price || 0;
  }

  return Math.round(baseInfantPrice * 0.1 * parseInt(formData.infants));
});

const tourTypeMultiplier = computed(() => {
  switch (formData.tourType) {
    case "private":
      return 1.3;
    case "luxury":
      return 1.5;
    case "budget":
      return 0.8;
    default:
      return 1;
  }
});

const accommodationMultiplier = computed(() => {
  switch (formData.accommodationLevel) {
    case "deluxe":
      return 1.2;
    case "luxury":
      return 1.4;
    default:
      return 1;
  }
});

const calculatedPrice = computed(() => {
  const subtotal = basePrice.value + childrenPrice.value + infantsPrice.value;
  return Math.round(
    subtotal * tourTypeMultiplier.value * accommodationMultiplier.value
  );
});

const totalTravelers = computed(() => {
  return (
    parseInt(formData.adults || 0) +
    parseInt(formData.children || 0) +
    parseInt(formData.infants || 0)
  );
});

// Helper functions for pricing display
const getTourTypeLabel = () => {
  switch (formData.tourType) {
    case "private":
      return "Private Tour";
    case "luxury":
      return "Luxury Tour";
    case "budget":
      return "Budget Tour";
    default:
      return "Standard Tour";
  }
};

const getAccommodationLabel = () => {
  switch (formData.accommodationLevel) {
    case "deluxe":
      return "Deluxe Hotels";
    case "luxury":
      return "Luxury Hotels";
    default:
      return "Standard Hotels";
  }
};

// Calculate price when form changes
const calculatePrice = () => {
  // Price calculation is reactive through computed properties
  // This function can be used for any additional logic if needed
};

// Generate reference number
const generateReferenceNumber = () => {
  const prefix = "TR";
  const timestamp = Date.now().toString();
  return prefix + timestamp.slice(-10);
};

// Submit tour request
const submitTourRequest = async () => {
  isSubmitting.value = true;

  try {
    // Generate reference number
    referenceNumber.value = generateReferenceNumber();

    // Prepare email template parameters
    const templateParams = {
      // Customer Info
      to_email: formData.email,
      customer_name: formData.fullName,
      reference_number: referenceNumber.value,

      // Tour Details
      destination:
        formData.destination === "custom"
          ? formData.customDestination
          : tourPackages[formData.destination]?.name || formData.destination,
      travel_date: formData.travelDate,
      duration:
        formData.duration || tourPackages[formData.destination]?.days || "N/A",
      tour_type: formData.tourType,

      // Group Details
      adults: formData.adults,
      children: formData.children,
      infants: formData.infants,
      total_travelers: totalTravelers.value,
      accommodation_level: formData.accommodationLevel,

      // Preferences
      activity_level: formData.activityLevel || "Not specified",
      meal_preferences: formData.mealPreferences || "Not specified",
      interests:
        formData.interests.length > 0
          ? formData.interests.join(", ")
          : "None specified",

      // Pricing
      estimated_price: calculatedPrice.value,

      // Custom Tour (if applicable)
      custom_destination: formData.customDestination || "N/A",
      custom_budget: formData.customBudget || "N/A",
      custom_requirements: formData.customRequirements || "N/A",

      // Special Requirements
      special_requests: formData.specialRequests || "None",
      urgency: formData.urgency,

      // Contact
      phone: formData.phone,
      country: formData.country || "Not specified",

      // Current date/time
      submission_date: new Date().toLocaleString(),
    };

    // Send customer confirmation email
    await emailjs.send(
      "service_j123abc", // Replace with your EmailJS service ID
      "template_tour_customer", // Replace with your customer template ID
      templateParams,
      "your_public_key" // Replace with your EmailJS public key
    );

    // Send admin notification email
    const adminParams = {
      ...templateParams,
      to_email: "bookings@globalhorizons.com", // Your admin email
    };

    await emailjs.send(
      "service_j123abc", // Replace with your EmailJS service ID
      "template_tour_admin", // Replace with your admin template ID
      adminParams,
      "your_public_key" // Replace with your EmailJS public key
    );

    // Show success state
    isSubmitted.value = true;

    // Store in session storage (for admin retrieval)
    sessionStorage.setItem(
      `tour_booking_${referenceNumber.value}`,
      JSON.stringify({
        ...formData,
        referenceNumber: referenceNumber.value,
        estimatedPrice: calculatedPrice.value,
        submissionDate: new Date().toISOString(),
        serviceType: "tour",
      })
    );
  } catch (error) {
    console.error("Error submitting tour request:", error);
    alert(
      "There was an error submitting your request. Please try again or contact us directly."
    );
  }

  isSubmitting.value = false;
};
</script>

<style scoped>
/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .grid.grid-cols-1.md\\:grid-cols-2 {
    grid-template-columns: 1fr;
  }

  .grid.grid-cols-2.md\\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }

  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }

  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }

  .px-8 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  input,
  select,
  textarea {
    font-size: 16px; /* Prevents zoom on iOS */
  }

  .text-2xl {
    font-size: 1.5rem;
  }
}

/* Smooth transitions */
.transform.hover\\:scale-105:hover {
  transform: scale(1.02);
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #ea580c;
  border-color: #ea580c;
}

/* Pricing section styling */
.bg-gradient-to-r.from-green-50.to-blue-50 {
  background: linear-gradient(to right, #f0fdf4, #eff6ff);
}
</style>
