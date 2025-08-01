<template>
  <div>
    <!-- SEO Meta Tags -->
    <Head>
      <title>Hotel Booking - Global Horizons Travel Services</title>
      <meta
        name="description"
        content="Worldwide hotel booking service with guaranteed best rates and personalized accommodation assistance across all continents"
      />
    </Head>

    <!-- Navigation -->
    <NavBar current-page="hotels" />

    <!-- Page Header with Gradient Background -->
    <section class="relative pt-24 pb-16 bg-gradient-brand">
      <div class="relative z-10 text-center text-white px-4">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight"
        >
          Global Hotel Booking Assistance
        </h1>
        <p class="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Worldwide hotel booking service with guaranteed best rates and
          personalized accommodation assistance across all continents
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
            <span class="text-sm font-medium">Best Rate Guarantee</span>
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
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
              />
            </svg>
            <span class="text-sm font-medium">Global Hotel Network</span>
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
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <span class="text-sm font-medium">24/7 Booking Support</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Hotel Quote Request Form -->
      <section class="mb-16">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Get Your Hotel Quote
          </h2>
          <p class="text-lg text-gray-600">
            Tell us about your accommodation needs and we'll find the perfect
            hotel for you
          </p>
        </div>

        <form
          @submit.prevent="handleFormSubmit"
          class="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-100"
          ref="hotelQuoteForm"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Personal Information -->
            <div class="md:col-span-2">
              <h3
                class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"
              >
                Personal Information
              </h3>
            </div>

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
                v-model="formData.fullName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                v-model="formData.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
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
                v-model="formData.phone"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="+233 XX XXX XXXX"
              />
            </div>

            <div>
              <label
                for="guests"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Number of Guests *
              </label>
              <select
                id="guests"
                v-model="formData.guests"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6+">6+ Guests</option>
              </select>
            </div>

            <!-- Accommodation Details -->
            <div class="md:col-span-2 mt-6">
              <h3
                class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"
              >
                Accommodation Details
              </h3>
            </div>

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
                v-model="formData.destination"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="City or specific area"
              />
            </div>

            <div>
              <label
                for="dates"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Check-in & Check-out Dates *
              </label>
              <input
                type="text"
                id="dates"
                v-model="formData.dates"
                required
                readonly
                @click="handleDateSelection"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors cursor-pointer"
                placeholder="Select your dates"
              />
            </div>

            <div>
              <label
                for="rooms"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Room Configuration *
              </label>
              <select
                id="rooms"
                v-model="formData.rooms"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">Select room type</option>
                <option value="single">1 Single Room</option>
                <option value="double">1 Double Room</option>
                <option value="twin">1 Twin Room</option>
                <option value="family">1 Family Room</option>
                <option value="suite">1 Suite</option>
                <option value="multiple">Multiple Rooms</option>
              </select>
            </div>

            <div>
              <label
                for="budget"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Budget Range (per night) *
              </label>
              <select
                id="budget"
                v-model="formData.budget"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="budget">Under GH₵200 - Budget Hotels</option>
                <option value="mid-range">
                  GH₵200 - GH₵500 - Mid-range Hotels
                </option>
                <option value="upscale">
                  GH₵500 - GH₵1000 - Upscale Hotels
                </option>
                <option value="luxury">GH₵1000+ - Luxury Hotels</option>
                <option value="flexible">Flexible - Find best value</option>
              </select>
            </div>

            <!-- Preferences -->
            <div class="md:col-span-2 mt-6">
              <h3
                class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"
              >
                Preferences & Requirements
              </h3>
            </div>

            <div>
              <label
                for="starRating"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Star Rating
              </label>
              <select
                id="starRating"
                v-model="formData.starRating"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">No preference</option>
                <option value="3">3-Star Hotels</option>
                <option value="4">4-Star Hotels</option>
                <option value="5">5-Star Hotels</option>
                <option value="boutique">Boutique Hotels</option>
              </select>
            </div>

            <div>
              <label
                for="amenities"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Important Amenities
              </label>
              <select
                id="amenities"
                v-model="formData.amenities"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
              >
                <option value="">No specific requirements</option>
                <option value="wifi">Free Wi-Fi</option>
                <option value="pool">Swimming Pool</option>
                <option value="spa">Spa & Wellness</option>
                <option value="business">Business Center</option>
                <option value="fitness">Fitness Center</option>
                <option value="restaurant">On-site Restaurant</option>
                <option value="accessibility">Accessibility Features</option>
              </select>
            </div>

            <!-- Additional Services -->
            <div class="md:col-span-2 mt-6">
              <h3
                class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2"
              >
                Additional Services
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.services"
                    value="airport-transfer"
                    class="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <span class="ml-2 text-gray-700">Airport Transfer</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.services"
                    value="tours"
                    class="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <span class="ml-2 text-gray-700">Local Tours</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.services"
                    value="car-rental"
                    class="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <span class="ml-2 text-gray-700">Car Rental</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="checkbox"
                    v-model="formData.services"
                    value="travel-insurance"
                    class="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <span class="ml-2 text-gray-700">Travel Insurance</span>
                </label>
              </div>
            </div>

            <!-- Special Requirements -->
            <div class="md:col-span-2 mt-6">
              <label
                for="requirements"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Special Requirements or Comments
              </label>
              <textarea
                id="requirements"
                v-model="formData.requirements"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                placeholder="Any special requests, accessibility needs, dietary requirements, or other important details..."
              ></textarea>
            </div>
          </div>

          <div class="mt-8 text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-accent hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg disabled:opacity-50"
            >
              {{ isSubmitting ? "Sending..." : "Get Hotel Quote" }}
            </button>
            <p class="text-sm text-gray-600 mt-2">
              We'll respond within 2 hours with personalized hotel
              recommendations
            </p>
          </div>
        </form>

        <!-- Success Message -->
        <div
          v-if="showSuccess"
          class="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg"
        >
          <div class="flex items-center">
            <svg
              class="h-6 w-6 text-green-600 mr-3"
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
            <div>
              <h3 class="text-lg font-medium text-green-800">
                Hotel Quote Request Sent!
              </h3>
              <p class="text-green-700 mt-1">
                Thank you for your hotel quote request! We'll respond within 2
                hours with personalized recommendations. Reference:
                {{ referenceNumber }}
              </p>
              <nuxt-link
                to="/track-booking"
                class="inline-block mt-3 text-green-600 hover:text-green-500 underline"
              >
                Track your request →
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Hotel Examples -->
      <section class="mb-16" id="popular-hotels">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Global Destination Examples
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore hotels worldwide from bustling cities to exotic
            destinations. Our global network ensures best rates everywhere - get
            your personalized quote today!
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Dubai Hotels -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 class="text-xl font-bold">Dubai Luxury Hotels</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">
                    Ultra-Luxury Experience
                  </h4>
                  <p class="text-sm text-gray-600">Downtown & Palm Jumeirah</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">$400/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• World-class spa & infinity pools</li>
                <li>• Michelin-starred restaurants</li>
                <li>• Private beach access</li>
                <li>• Burj Khalifa & Mall proximity</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>

          <!-- London Hotels -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-green-500 to-teal-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"
                  />
                </svg>
                <h3 class="text-xl font-bold">London Historic Hotels</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">
                    Classic British Elegance
                  </h4>
                  <p class="text-sm text-gray-600">Mayfair & Covent Garden</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">£280/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Historic architecture & modern luxury</li>
                <li>• West End theatre district access</li>
                <li>• Traditional afternoon tea</li>
                <li>• Royal attraction proximity</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>

          <!-- Tokyo Hotels -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-orange-500 to-red-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h3 class="text-xl font-bold">Tokyo Modern Hotels</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">High-Tech Luxury</h4>
                  <p class="text-sm text-gray-600">Shibuya & Shinjuku</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">¥35,000/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Robot concierge & smart rooms</li>
                <li>• Traditional onsen & modern spa</li>
                <li>• Authentic kaiseki dining</li>
                <li>• Temple & culture district access</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>

          <!-- New York City Hotels -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-yellow-500 to-orange-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 class="text-xl font-bold">New York City Hotels</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">Manhattan Luxury</h4>
                  <p class="text-sm text-gray-600">
                    Times Square & Central Park
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">$350/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Broadway show packages</li>
                <li>• Rooftop bars & skyline views</li>
                <li>• World-class shopping access</li>
                <li>• 24/7 concierge services</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>

          <!-- Thailand Beach Resorts -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-cyan-500 to-blue-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
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
                <h3 class="text-xl font-bold">Thailand Beach Resorts</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">Tropical Paradise</h4>
                  <p class="text-sm text-gray-600">Phuket & Koh Samui</p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">฿3,500/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Private beach villas</li>
                <li>• Infinity pools & spa treatments</li>
                <li>• Traditional Thai massage</li>
                <li>• Island hopping tours</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>

          <!-- Boutique Hotels -->
          <div
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div
              class="bg-gradient-to-r from-purple-500 to-pink-600 h-48 flex items-center justify-center"
            >
              <div class="text-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <h3 class="text-xl font-bold">Boutique & Unique</h3>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-semibold text-gray-800">
                    Global Boutique Collection
                  </h4>
                  <p class="text-sm text-gray-600">
                    Worldwide Unique Properties
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Starting from</p>
                  <p class="text-xl font-bold text-accent">$200/night</p>
                </div>
              </div>
              <ul class="text-sm text-gray-600 mb-4 space-y-1">
                <li>• Castle hotels & treehouses</li>
                <li>• Ice hotels & underwater suites</li>
                <li>• Historic palaces & monasteries</li>
                <li>• Celebrity & designer properties</li>
              </ul>
              <button
                @click="scrollToForm"
                class="w-full bg-deep-blue hover:bg-blue-800 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Get Current Quote
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <p class="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            <strong>Note:</strong> Prices shown are examples in local currencies
            and vary by season, availability, exchange rates, and booking dates.
            Our global experts will find the best current rates worldwide for
            your specific travel needs.
          </p>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p class="text-lg text-gray-600">
            Everything you need to know about our hotel booking service
          </p>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              How does your hotel booking service work?
            </h3>
            <p class="text-gray-600">
              Simply fill out our quote form with your accommodation needs and
              preferences. Our travel experts will research the best options for
              you, negotiate rates with our hotel partners, and present you with
              personalized recommendations within 2 hours. Once you approve, we
              handle all the booking details for you.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              How quickly will I receive my hotel recommendations?
            </h3>
            <p class="text-gray-600">
              We typically respond within 2 hours during business hours with a
              curated list of hotel options that match your criteria and budget.
              For urgent bookings, you can call us directly and we'll prioritize
              your request.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Do you really guarantee the best rates?
            </h3>
            <p class="text-gray-600">
              Yes! Thanks to our partnerships with hotels and our local
              expertise, we often secure rates that aren't available to the
              public. If you find a lower rate elsewhere for the same hotel and
              dates, we'll match it and provide additional value through our
              service.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Can I make changes to my booking after it's confirmed?
            </h3>
            <p class="text-gray-600">
              Yes, we handle all booking modifications for you. Whether you need
              to change dates, room types, or other preferences, just contact us
              and we'll work with the hotel to accommodate your changes (subject
              to hotel policies and availability).
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              What payment methods do you accept and when do I pay?
            </h3>
            <p class="text-gray-600">
              We accept bank transfers, mobile money, and cash payments. Payment
              is typically required upon booking confirmation, though we can
              arrange payment plans for longer stays or group bookings. No
              payment is required for the initial quote request.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Do you provide support during my stay?
            </h3>
            <p class="text-gray-600">
              Absolutely! We provide 24/7 support during your stay. If any
              issues arise with your accommodation, just contact us and we'll
              work directly with the hotel to resolve them. We're your advocate
              throughout your entire travel experience.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">
              Can you help with other travel arrangements?
            </h3>
            <p class="text-gray-600">
              Yes! We can arrange airport transfers, local tours, car rentals,
              and travel insurance as part of your accommodation package. Our
              goal is to provide a complete travel solution that saves you time
              and ensures a seamless experience.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup>
import { ref } from "vue";

// Form data
const formData = ref({
  fullName: "",
  email: "",
  phone: "",
  guests: "",
  destination: "",
  dates: "",
  rooms: "",
  budget: "",
  starRating: "",
  amenities: "",
  services: [],
  requirements: "",
});

// Form states
const isSubmitting = ref(false);
const showSuccess = ref(false);
const referenceNumber = ref("");

// Generate reference number
const generateReferenceNumber = () => {
  const prefix = "HTL";
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");
  return `${prefix}${timestamp}${random}`;
};

// Handle date selection - redirect to dedicated booking page
const handleDateSelection = () => {
  console.log("Redirecting to dedicated hotel booking page...");
  // Redirect to the proper hotel booking page instead of showing prompt
  navigateTo('/hotel-booking');
};

// Handle form submission - redirect to dedicated booking page
const handleFormSubmit = async () => {
  console.log("Redirecting to dedicated hotel booking page...");
  // Redirect to the proper hotel booking page instead of simulating
  navigateTo('/hotel-booking');
};

// Scroll to form
const scrollToForm = () => {
  const form = document.querySelector("form");
  if (form) {
    form.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
</script>
 