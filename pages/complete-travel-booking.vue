<template>
  <div>
    <!-- SEO Meta Tags -->
    <Head>
      <title>
        Complete Travel Package Booking - Global Horizons Travel Services
      </title>
      <meta
        name="description"
        content="Book your complete travel package including flights, hotels, tours, and visa assistance. All-in-one travel solution with personalized service."
      />
    </Head>

    <!-- Navigation -->
    <NavBar current-page="booking" />

    <!-- Hero Section -->
    <section
      class="relative pt-24 pb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500"
    >
      <div class="relative z-10 text-center text-white px-4">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
        >
          Complete Travel Package
        </h1>
        <p class="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-6">
          Everything you need for your perfect trip - flights, hotels, tours,
          and visa assistance all in one package
        </p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
              class="h-5 w-5 mr-2"
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
            <span>Best Price Guarantee</span>
          </div>
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
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
            <span>24/7 Support</span>
          </div>
          <div
            class="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
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
            <span>All-Inclusive Planning</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 py-12">
      <!-- Package Selection -->
      <section class="mb-12">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Package
          </h2>
          <p class="text-lg text-gray-600">
            Select the package that best fits your travel needs
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Essential Package -->
          <div
            @click="selectPackage('essential')"
            :class="[
              'cursor-pointer border-2 rounded-xl p-6 transition-all',
              selectedPackage === 'essential'
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300',
            ]"
          >
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2">Essential Package</h3>
              <div class="text-3xl font-bold text-blue-600 mb-4">$1,299</div>
              <ul class="text-sm text-gray-600 space-y-2 mb-4">
                <li>✈️ Round-trip flights</li>
                <li>🏨 3-star hotel accommodation</li>
                <li>🎯 City tour (1 day)</li>
                <li>📋 Visa assistance</li>
                <li>📞 Basic support</li>
              </ul>
              <div class="text-xs text-gray-500">
                Perfect for budget-conscious travelers
              </div>
            </div>
          </div>

          <!-- Premium Package -->
          <div
            @click="selectPackage('premium')"
            :class="[
              'cursor-pointer border-2 rounded-xl p-6 transition-all',
              selectedPackage === 'premium'
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-gray-300',
            ]"
          >
            <div class="text-center">
              <div
                class="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2"
              >
                MOST POPULAR
              </div>
              <h3 class="text-xl font-bold mb-2">Premium Package</h3>
              <div class="text-3xl font-bold text-purple-600 mb-4">$2,499</div>
              <ul class="text-sm text-gray-600 space-y-2 mb-4">
                <li>✈️ Round-trip flights (preferred times)</li>
                <li>🏨 4-star hotel accommodation</li>
                <li>🎯 Multiple tours (3 days)</li>
                <li>📋 Fast-track visa processing</li>
                <li>🚗 Airport transfers</li>
                <li>📞 Priority support</li>
              </ul>
              <div class="text-xs text-gray-500">
                Great balance of comfort and value
              </div>
            </div>
          </div>

          <!-- Luxury Package -->
          <div
            @click="selectPackage('luxury')"
            :class="[
              'cursor-pointer border-2 rounded-xl p-6 transition-all',
              selectedPackage === 'luxury'
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-gray-300',
            ]"
          >
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2">Luxury Package</h3>
              <div class="text-3xl font-bold text-orange-600 mb-4">$4,999</div>
              <ul class="text-sm text-gray-600 space-y-2 mb-4">
                <li>✈️ Business class flights</li>
                <li>🏨 5-star luxury hotels</li>
                <li>🎯 Private guided tours (5 days)</li>
                <li>📋 VIP visa processing</li>
                <li>🚗 Private transfers</li>
                <li>🍽️ Fine dining experiences</li>
                <li>📞 24/7 concierge service</li>
              </ul>
              <div class="text-xs text-gray-500">
                Ultimate luxury travel experience
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Package Option -->
        <div class="text-center">
          <button
            @click="selectPackage('custom')"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-all',
              selectedPackage === 'custom'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
            ]"
          >
            Or Create Custom Package
          </button>
        </div>
      </section>

      <!-- Booking Form -->
      <form
        @submit.prevent="handleFormSubmit"
        class="bg-white rounded-xl shadow-lg p-8"
      >
        <!-- Personal Information -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Personal Information
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="fullName"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                v-model="formData.personalInfo.fullName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.personalInfo.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                v-model="formData.personalInfo.phone"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="+233 XX XXX XXXX"
              />
            </div>
            <div>
              <label
                for="nationality"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Nationality *
              </label>
              <input
                type="text"
                id="nationality"
                v-model="formData.personalInfo.nationality"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your nationality"
              />
            </div>
          </div>
        </section>

        <!-- Travel Details -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Travel Details
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="destination"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Destination *
              </label>
              <input
                type="text"
                id="destination"
                v-model="formData.travelDetails.destination"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Where would you like to go?"
              />
            </div>
            <div>
              <label
                for="travelers"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Number of Travelers *
              </label>
              <select
                id="travelers"
                v-model="formData.travelDetails.travelers"
                @change="updatePricing"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select number of travelers</option>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4 Travelers</option>
                <option value="5">5 Travelers</option>
                <option value="6+">6+ Travelers</option>
              </select>
            </div>
            <div>
              <label
                for="departureDate"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Departure Date *
              </label>
              <input
                type="date"
                id="departureDate"
                v-model="formData.travelDetails.departureDate"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="returnDate"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Return Date *
              </label>
              <input
                type="date"
                id="returnDate"
                v-model="formData.travelDetails.returnDate"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </section>

        <!-- Flight Preferences -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Flight Preferences
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="departureCity"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Departure City *
              </label>
              <input
                type="text"
                id="departureCity"
                v-model="formData.flightPreferences.departureCity"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="City you're flying from"
              />
            </div>
            <div>
              <label
                for="classPreference"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Class Preference
              </label>
              <select
                id="classPreference"
                v-model="formData.flightPreferences.classPreference"
                @change="updatePricing"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="economy">Economy Class</option>
                <option value="premium-economy">Premium Economy</option>
                <option value="business">Business Class</option>
                <option value="first">First Class</option>
              </select>
            </div>
            <div>
              <label
                for="timePreference"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Time Preference
              </label>
              <select
                id="timePreference"
                v-model="formData.flightPreferences.timePreference"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="flexible">Flexible</option>
                <option value="morning">Morning (6AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 6PM)</option>
                <option value="evening">Evening (6PM - 12AM)</option>
              </select>
            </div>
            <div>
              <label
                for="airlinePreference"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Airline Preference
              </label>
              <input
                type="text"
                id="airlinePreference"
                v-model="formData.flightPreferences.airlinePreference"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any preferred airline (optional)"
              />
            </div>
          </div>
        </section>

        <!-- Hotel Preferences -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Hotel Preferences
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="hotelCategory"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Hotel Category
              </label>
              <select
                id="hotelCategory"
                v-model="formData.hotelPreferences.category"
                @change="updatePricing"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="3-star">3-Star Hotel</option>
                <option value="4-star">4-Star Hotel</option>
                <option value="5-star">5-Star Luxury Hotel</option>
                <option value="boutique">Boutique Hotel</option>
                <option value="resort">Resort</option>
              </select>
            </div>
            <div>
              <label
                for="roomType"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Room Type
              </label>
              <select
                id="roomType"
                v-model="formData.hotelPreferences.roomType"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
                <option value="family">Family Room</option>
                <option value="connecting">Connecting Rooms</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Important Amenities
              </label>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.hotelPreferences.amenities"
                    value="wifi"
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">Free Wi-Fi</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.hotelPreferences.amenities"
                    value="pool"
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">Swimming Pool</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.hotelPreferences.amenities"
                    value="spa"
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">Spa & Wellness</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.hotelPreferences.amenities"
                    value="gym"
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span class="ml-2 text-sm">Fitness Center</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        <!-- Tour Preferences -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Tour Preferences
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="tourType"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Tour Type
              </label>
              <select
                id="tourType"
                v-model="formData.tourPreferences.type"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="city">City Tours</option>
                <option value="cultural">Cultural & Historical</option>
                <option value="adventure">Adventure & Outdoor</option>
                <option value="food">Food & Culinary</option>
                <option value="nature">Nature & Wildlife</option>
                <option value="mixed">Mixed Activities</option>
              </select>
            </div>
            <div>
              <label
                for="tourStyle"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Tour Style
              </label>
              <select
                id="tourStyle"
                v-model="formData.tourPreferences.style"
                @change="updatePricing"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="group">Group Tours</option>
                <option value="private">Private Tours</option>
                <option value="self-guided">Self-Guided</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label
                for="tourInterests"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Specific Interests
              </label>
              <textarea
                id="tourInterests"
                v-model="formData.tourPreferences.interests"
                rows="3"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us what you'd like to see and do..."
              ></textarea>
            </div>
          </div>
        </section>

        <!-- Visa Requirements -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Visa Requirements
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="passportCountry"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Passport Country *
              </label>
              <input
                type="text"
                id="passportCountry"
                v-model="formData.visaRequirements.passportCountry"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Country that issued your passport"
              />
            </div>
            <div>
              <label
                for="urgency"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Processing Urgency
              </label>
              <select
                id="urgency"
                v-model="formData.visaRequirements.urgency"
                @change="updatePricing"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="standard">Standard (2-3 weeks)</option>
                <option value="expedited">Expedited (1 week)</option>
                <option value="rush">Rush (3-5 days)</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  v-model="formData.visaRequirements.hasValidPassport"
                  class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm"
                  >I have a valid passport (6+ months remaining)</span
                >
              </label>
            </div>
          </div>
        </section>

        <!-- Dynamic Pricing Display -->
        <section class="mb-8 bg-gray-50 rounded-xl p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-6">
            Package Summary & Pricing
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-700 mb-3">
                Selected Package: {{ getPackageName() }}
              </h4>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span>Base Package:</span>
                  <span>${{ getBasePrice() }}</span>
                </div>
                <div
                  v-if="getTravelersMultiplier() > 1"
                  class="flex justify-between"
                >
                  <span
                    >Additional Travelers ({{
                      formData.travelDetails.travelers - 1
                    }}x):</span
                  >
                  <span
                    >${{
                      (
                        (getTravelersMultiplier() - 1) *
                        getBasePrice()
                      ).toLocaleString()
                    }}</span
                  >
                </div>
                <div v-if="getFlightUpgrade() > 0" class="flex justify-between">
                  <span>Flight Upgrade:</span>
                  <span>${{ getFlightUpgrade().toLocaleString() }}</span>
                </div>
                <div v-if="getHotelUpgrade() > 0" class="flex justify-between">
                  <span>Hotel Upgrade:</span>
                  <span>${{ getHotelUpgrade().toLocaleString() }}</span>
                </div>
                <div v-if="getTourUpgrade() > 0" class="flex justify-between">
                  <span>Tour Upgrade:</span>
                  <span>${{ getTourUpgrade().toLocaleString() }}</span>
                </div>
                <div v-if="getVisaUpgrade() > 0" class="flex justify-between">
                  <span>Visa Upgrade:</span>
                  <span>${{ getVisaUpgrade().toLocaleString() }}</span>
                </div>
                <hr class="my-2" />
                <div class="flex justify-between font-bold text-lg">
                  <span>Total Price:</span>
                  <span class="text-blue-600"
                    >${{ getTotalPrice().toLocaleString() }}</span
                  >
                </div>
              </div>
            </div>
            <div>
              <h4 class="font-semibold text-gray-700 mb-3">What's Included:</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li>
                  ✈️ Round-trip flights ({{
                    formData.flightPreferences.classPreference || "Economy"
                  }})
                </li>
                <li>
                  🏨 Hotel accommodation ({{
                    formData.hotelPreferences.category || "3-star"
                  }})
                </li>
                <li>
                  🎯 Tours ({{ formData.tourPreferences.style || "Group" }})
                </li>
                <li>
                  📋 Visa assistance ({{
                    formData.visaRequirements.urgency || "Standard"
                  }}
                  processing)
                </li>
                <li>📞 24/7 support</li>
                <li v-if="selectedPackage !== 'essential'">
                  🚗 Airport transfers
                </li>
                <li v-if="selectedPackage === 'luxury'">
                  🍽️ Fine dining experiences
                </li>
                <li v-if="selectedPackage === 'luxury'">
                  👨‍💼 Personal concierge
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Special Requirements -->
        <section class="mb-8">
          <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
            Special Requirements
          </h3>
          <div class="space-y-4">
            <div>
              <label
                for="dietaryRestrictions"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Dietary Restrictions
              </label>
              <input
                type="text"
                id="dietaryRestrictions"
                v-model="formData.specialRequirements.dietaryRestrictions"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any dietary restrictions or preferences"
              />
            </div>
            <div>
              <label
                for="accessibilityNeeds"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Accessibility Needs
              </label>
              <input
                type="text"
                id="accessibilityNeeds"
                v-model="formData.specialRequirements.accessibilityNeeds"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any accessibility requirements"
              />
            </div>
            <div>
              <label
                for="additionalRequests"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Requests
              </label>
              <textarea
                id="additionalRequests"
                v-model="formData.specialRequirements.additionalRequests"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Any other special requests or important information..."
              ></textarea>
            </div>
          </div>
        </section>

        <!-- Submit Button -->
        <div class="text-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{
              isSubmitting
                ? "Processing Your Package..."
                : `Book Complete Package - $${getTotalPrice().toLocaleString()}`
            }}
          </button>
          <p class="text-sm text-gray-600 mt-4">
            We'll contact you within 2 hours to confirm details and finalize
            your booking
          </p>
        </div>
      </form>

      <!-- Success Message -->
      <div
        v-if="showSuccess"
        class="mt-8 p-8 bg-green-50 border border-green-200 rounded-xl"
      >
        <div class="text-center">
          <div
            class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="h-8 w-8 text-green-600"
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
          </div>
          <h3 class="text-2xl font-bold text-green-800 mb-4">
            Complete Travel Package Booked!
          </h3>
          <p class="text-green-700 mb-4">
            Your complete travel package request has been submitted
            successfully!
          </p>
          <div class="bg-white p-4 rounded-lg mb-4">
            <p class="font-semibold text-gray-800">
              Booking Reference: {{ referenceNumber }}
            </p>
            <p class="text-gray-600">Package: {{ getPackageName() }}</p>
            <p class="text-gray-600">
              Total Value: ${{ getTotalPrice().toLocaleString() }}
            </p>
          </div>
          <div class="space-y-2 text-sm text-green-700">
            <p>✅ Our travel experts will contact you within 2 hours</p>
            <p>✅ We'll send detailed itinerary and payment options</p>
            <p>✅ All bookings will be confirmed before final payment</p>
          </div>
          <nuxt-link
            to="/track-booking"
            class="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Track Your Booking →
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Form data structure
const formData = ref({
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
  },
  travelDetails: {
    destination: "",
    travelers: "",
    departureDate: "",
    returnDate: "",
  },
  flightPreferences: {
    departureCity: "",
    classPreference: "economy",
    timePreference: "flexible",
    airlinePreference: "",
  },
  hotelPreferences: {
    category: "3-star",
    roomType: "standard",
    amenities: [],
  },
  tourPreferences: {
    type: "city",
    style: "group",
    interests: "",
  },
  visaRequirements: {
    passportCountry: "",
    urgency: "standard",
    hasValidPassport: false,
  },
  specialRequirements: {
    dietaryRestrictions: "",
    accessibilityNeeds: "",
    additionalRequests: "",
  },
});

// Form states
const selectedPackage = ref("premium");
const isSubmitting = ref(false);
const showSuccess = ref(false);
const referenceNumber = ref("");

// Package selection
const selectPackage = (packageType) => {
  selectedPackage.value = packageType;
  updatePricing();
};

// Pricing calculations
const getPackageName = () => {
  const names = {
    essential: "Essential Package",
    premium: "Premium Package",
    luxury: "Luxury Package",
    custom: "Custom Package",
  };
  return names[selectedPackage.value] || "Premium Package";
};

const getBasePrice = () => {
  const prices = {
    essential: 1299,
    premium: 2499,
    luxury: 4999,
    custom: 2499,
  };
  return prices[selectedPackage.value] || 2499;
};

const getTravelersMultiplier = () => {
  const travelers = parseInt(formData.value.travelDetails.travelers) || 1;
  return travelers === "6+" ? 6 : travelers;
};

const getFlightUpgrade = () => {
  const upgrades = {
    "premium-economy": 500,
    business: 2000,
    first: 5000,
  };
  return (
    (upgrades[formData.value.flightPreferences.classPreference] || 0) *
    getTravelersMultiplier()
  );
};

const getHotelUpgrade = () => {
  const baseCategory =
    selectedPackage.value === "essential"
      ? "3-star"
      : selectedPackage.value === "premium"
      ? "4-star"
      : "5-star";

  if (formData.value.hotelPreferences.category === baseCategory) return 0;

  const upgrades = {
    "4-star": selectedPackage.value === "essential" ? 300 : 0,
    "5-star":
      selectedPackage.value === "essential"
        ? 800
        : selectedPackage.value === "premium"
        ? 500
        : 0,
    boutique: 600,
    resort: 1000,
  };
  return (
    (upgrades[formData.value.hotelPreferences.category] || 0) *
    getTravelersMultiplier()
  );
};

const getTourUpgrade = () => {
  if (formData.value.tourPreferences.style === "private") {
    return 800 * getTravelersMultiplier();
  }
  return 0;
};

const getVisaUpgrade = () => {
  const upgrades = {
    expedited: 150,
    rush: 300,
  };
  return (
    (upgrades[formData.value.visaRequirements.urgency] || 0) *
    getTravelersMultiplier()
  );
};

const getTotalPrice = () => {
  return (
    getBasePrice() * getTravelersMultiplier() +
    getFlightUpgrade() +
    getHotelUpgrade() +
    getTourUpgrade() +
    getVisaUpgrade()
  );
};

// Update pricing when selections change
const updatePricing = () => {
  // This will trigger reactivity
};

// Generate reference number
const generateReferenceNumber = () => {
  const prefix = "CTP"; // Complete Travel Package
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}${timestamp}${random}`;
};

// Handle form submission
const handleFormSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Generate reference number
    referenceNumber.value = generateReferenceNumber();

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    showSuccess.value = true;

    // Scroll to success message
    setTimeout(() => {
      const successElement = document.querySelector(".bg-green-50");
      if (successElement) {
        successElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("There was an error submitting your booking. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Custom styles for the complete travel package form */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
