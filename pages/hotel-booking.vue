<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Hotel Booking Request
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Tell us your accommodation needs and we'll find the perfect stay
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🏨 Best Rates</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⭐ Quality Properties</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >💎 Exclusive Deals</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Form -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Error Message -->
          <div
            v-if="errorMessage"
            class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8"
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
              </div>
            </div>
          </div>

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
                  Hotel Request Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    hotel specialists will contact you within 2-4 hours with
                    personalized recommendations.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your booking:</strong> Visit our
                    <nuxt-link
                      to="/my-bookings"
                      class="underline font-medium hover:text-blue-800"
                      >My Bookings</nuxt-link
                    >
                    or
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >booking tracker</nuxt-link
                    >
                    anytime using reference number {{ referenceNumber }}.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Form -->
          <form
            v-else
            @submit.prevent="submitHotelRequest"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <!-- Form Header -->
            <div
              class="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 text-white"
            >
              <h2 class="text-2xl font-bold mb-2">
                Hotel Accommodation Request
              </h2>
              <p class="text-purple-100">
                Fill out this form and our experts will find the perfect hotel
                for your stay
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
                    class="h-5 w-5 mr-2 text-purple-600"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Ghana"
                    />
                  </div>
                </div>
              </div>

              <!-- Accommodation Details -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Accommodation Details
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Destination City/Location *</label
                    >
                    <input
                      v-model="formData.destination"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Accra, Ghana"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Preferred Area/District</label
                    >
                    <input
                      v-model="formData.area"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Airport Area, East Legon, etc."
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Check-in Date *</label
                    >
                    <input
                      v-model="formData.checkInDate"
                      type="date"
                      required
                      :min="today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Check-out Date *</label
                    >
                    <input
                      v-model="formData.checkOutDate"
                      type="date"
                      required
                      :min="formData.checkInDate || today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Number of Rooms *</label
                    >
                    <select
                      v-model="formData.numberOfRooms"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select rooms</option>
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                      <option value="4">4 Rooms</option>
                      <option value="5+">5+ Rooms</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Total Guests *</label
                    >
                    <select
                      v-model="formData.totalGuests"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6+">6+ Guests</option>
                    </select>
                  </div>
                </div>

                <!-- Room Configuration -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Room Configuration Details</label
                  >
                  <textarea
                    v-model="formData.roomConfiguration"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., 1 double room for 2 adults, 1 twin room for 2 children, etc."
                  ></textarea>
                </div>
              </div>

              <!-- Preferences & Budget -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-purple-600"
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
                  Preferences & Budget
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Hotel Star Rating *</label
                    >
                    <select
                      v-model="formData.starRating"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select rating</option>
                      <option value="3-star">3-Star Hotels</option>
                      <option value="4-star">4-Star Hotels</option>
                      <option value="5-star">5-Star Hotels</option>
                      <option value="luxury">Luxury/Boutique</option>
                      <option value="any">No Preference</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Budget Range per Night *</label
                    >
                    <select
                      v-model="formData.budgetRange"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      <option value="budget">Under $100</option>
                      <option value="mid-range">$100 - $250</option>
                      <option value="premium">$250 - $500</option>
                      <option value="luxury">$500+</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Meal Plan Preference</label
                    >
                    <select
                      v-model="formData.mealPlan"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      <option value="room-only">Room Only</option>
                      <option value="breakfast">Breakfast Included</option>
                      <option value="half-board">
                        Half Board (Breakfast + Dinner)
                      </option>
                      <option value="full-board">Full Board (All Meals)</option>
                      <option value="all-inclusive">All Inclusive</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Preferred Hotel Chain</label
                    >
                    <input
                      v-model="formData.hotelChain"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Marriott, Hilton, Kempinski, etc."
                    />
                  </div>
                </div>
              </div>

              <!-- Amenities & Services -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-purple-600"
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
                  Important Amenities & Services
                </h3>

                <!-- Amenities Checkboxes -->
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="wifi"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">Free WiFi</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="parking"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">Parking</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="pool"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Swimming Pool</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="gym"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Fitness Center</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="spa"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">Spa/Wellness</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="restaurant"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">Restaurant</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="business"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Business Center</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="beach"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700">Beach Access</span>
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.amenities"
                      type="checkbox"
                      value="airport-shuttle"
                      class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Airport Shuttle</span
                    >
                  </label>
                </div>

                <!-- Additional Services -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Services Needed</label
                  >
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <label class="flex items-center">
                      <input
                        v-model="formData.additionalServices"
                        type="checkbox"
                        value="airport-transfer"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Airport Transfer</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.additionalServices"
                        type="checkbox"
                        value="tour-booking"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700"
                        >Tour Booking</span
                      >
                    </label>
                    <label class="flex items-center">
                      <input
                        v-model="formData.additionalServices"
                        type="checkbox"
                        value="car-rental"
                        class="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">Car Rental</span>
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
                    class="h-5 w-5 mr-2 text-purple-600"
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
                      >Special Requests</label
                    >
                    <textarea
                      v-model="formData.specialRequests"
                      rows="4"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Any special accommodations, dietary requirements, accessibility needs, celebration arrangements, etc."
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Purpose of Stay</label
                    >
                    <select
                      v-model="formData.purposeOfStay"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select purpose</option>
                      <option value="leisure">Leisure/Vacation</option>
                      <option value="business">Business Travel</option>
                      <option value="conference">Conference/Event</option>
                      <option value="wedding">Wedding/Celebration</option>
                      <option value="family">Family Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Urgency Level *</label
                    >
                    <select
                      v-model="formData.urgency"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    class="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <label class="ml-3 text-sm text-gray-600">
                    I agree to the
                    <a
                      href="#"
                      class="text-purple-600 hover:text-purple-800 underline"
                      >Terms of Service</a
                    >
                    and
                    <a
                      href="#"
                      class="text-purple-600 hover:text-purple-800 underline"
                      >Privacy Policy</a
                    >. I understand this is a booking request and final
                    confirmation will come from Global Horizons staff.
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span v-if="isSubmitting">Submitting Request...</span>
                  <span v-else>Submit Hotel Request</span>
                </button>

                <p class="text-center text-sm text-gray-500 mt-4">
                  🔒 Your information is secure and will only be used to process
                  your hotel booking request.
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

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from "vue";
import bookingService from '~/services/BookingService';
import authService from '~/services/AuthService';
import {
  HotelBookingSubmissionDto,
  HotelBookingDetails,
  URGENCY_OPTIONS,
  BookingSubmissionResponse
} from '~/types/booking-api-types';
import { forceRedirect } from '~/utils/navigation';

// SEO Meta
useHead({
  title: "Hotel Booking Request - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Request hotel accommodation with Global Horizons. Get personalized recommendations and exclusive rates.",
    },
  ],
});

// Form state
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const referenceNumber = ref("");
const errorMessage = ref("");
const successMessage = ref("");

// Today's date for minimum date validation
const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

// Form data with proper TypeScript typing
const formData = reactive({
  // Contact information
  contactEmail: "",
  contactPhone: "",
  
  // Hotel details
  destination: "",
  checkInDate: "",
  checkOutDate: "",
  rooms: 1,
  adultGuests: 1,
  childGuests: 0,
  roomType: "standard" as 'standard' | 'deluxe' | 'suite',
  preferredHotel: "",
  starRating: "4-star" as '3-star' | '4-star' | '5-star',
  amenities: [] as string[],
  
  // Additional details
  specialRequests: "",
  urgency: 1,
  
  // Legacy fields for UI compatibility
  fullName: "",
  email: "",
  phone: "",
  country: "",
  area: "",
  numberOfRooms: "1",
  totalGuests: "1",
  roomConfiguration: "",
  budgetRange: "",
  mealPlan: "",
  hotelChain: "",
  additionalServices: [],
  purposeOfStay: "",
  agreeToTerms: false,
});

// Auto-fill user contact information
onMounted(() => {
  const defaultContact = bookingService.getDefaultContactInfo();
  if (defaultContact.contactEmail) {
    formData.contactEmail = defaultContact.contactEmail;
    formData.email = defaultContact.contactEmail; // For UI compatibility
  }
  if (defaultContact.contactPhone) {
    formData.contactPhone = defaultContact.contactPhone;
    formData.phone = defaultContact.contactPhone; // For UI compatibility
  }
  if (defaultContact.urgency) {
    formData.urgency = defaultContact.urgency;
  }
});

// Helper functions
const showMessage = (message: string, type: 'success' | 'error' = 'error') => {
  if (type === 'success') {
    successMessage.value = message;
    errorMessage.value = '';
  } else {
    errorMessage.value = message;
    successMessage.value = '';
  }
};

const validateForm = (): string[] => {
  const errors: string[] = [];

  if (!formData.destination.trim()) errors.push('Destination is required');
  if (!formData.checkInDate) errors.push('Check-in date is required');
  if (!formData.checkOutDate) errors.push('Check-out date is required');
  if (!formData.contactEmail.trim()) errors.push('Contact email is required');
  if (!formData.contactPhone.trim()) errors.push('Contact phone is required');
  if (formData.rooms < 1) errors.push('At least 1 room is required');
  if (formData.adultGuests < 1) errors.push('At least 1 adult guest is required');

  return errors;
};

// Submit hotel booking using new API
const submitHotelRequest = async () => {
  console.log('🏨 Starting hotel booking submission...');

  // Note: Quote requests don't require authentication
  console.log('📤 Submitting hotel quote request (no auth required)');

  // Sync UI fields to API fields
  formData.contactEmail = formData.email || formData.contactEmail;
  formData.contactPhone = formData.phone || formData.contactPhone;
  formData.destination = formData.destination;
  formData.rooms = parseInt(formData.numberOfRooms) || 1;
  formData.adultGuests = parseInt(formData.totalGuests) || 1;
  formData.preferredHotel = formData.hotelChain;

  // Map star rating
  if (formData.starRating === "luxury") formData.starRating = "5-star";
  if (formData.starRating === "any") formData.starRating = "4-star";

  // Map urgency
  if (formData.urgency === "standard") formData.urgency = 1;
  else if (formData.urgency === "urgent") formData.urgency = 2;
  else if (formData.urgency === "asap") formData.urgency = 3;

  // Validate form
  const validationErrors = validateForm();
  if (validationErrors.length > 0) {
    showMessage('Please fix the following errors: ' + validationErrors.join(', '));
    return;
  }

  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    // Prepare hotel booking data
    const hotelDetails: HotelBookingDetails = {
      destination: formData.destination,
      checkInDate: formData.checkInDate,
      checkOutDate: formData.checkOutDate,
      rooms: formData.rooms,
      adultGuests: formData.adultGuests,
      childGuests: formData.childGuests,
      roomType: formData.roomType,
      preferredHotel: formData.preferredHotel || undefined,
      starRating: formData.starRating,
      amenities: formData.amenities
    };

    const submissionData: HotelBookingSubmissionDto = {
      hotelDetails,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      specialRequests: formData.specialRequests || undefined,
      urgency: formData.urgency
    };

    console.log('📤 Submitting hotel booking data:', submissionData);

    // Submit to API
    const response: BookingSubmissionResponse = await bookingService.submitHotelBooking(submissionData);

    console.log('✅ Hotel booking submitted successfully:', response);

    // Update UI with success
    referenceNumber.value = response.referenceNumber;
    isSubmitted.value = true;
    showMessage(`Hotel booking submitted successfully! Your reference number is ${response.referenceNumber}`, 'success');

  } catch (error: any) {
    console.error('❌ Hotel booking submission failed:', error);
    showMessage(error.message || 'Failed to submit hotel booking. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
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
}

/* Smooth transitions */
.transform.hover\\:scale-105:hover {
  transform: scale(1.02);
}

/* Custom checkbox styling */
input[type="checkbox"]:checked {
  background-color: #7c3aed;
  border-color: #7c3aed;
}
</style>
