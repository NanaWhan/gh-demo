<template>
  <div>
    <!-- Navigation -->
    <NavBar />

    <!-- Page Header -->
    <section
      class="relative pt-32 pb-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Visa Application Service
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Get expert assistance with your visa application process
          </p>
          <div class="flex justify-center items-center space-x-4">
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >🛂 Expert Guidance</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >⚡ Fast Processing</span
            >
            <span class="bg-white bg-opacity-20 px-4 py-2 rounded-full"
              >📋 Document Support</span
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
                  Visa Application Submitted Successfully!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    visa specialists will contact you within 24 hours with
                    document requirements and next steps.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your application:</strong> Visit our
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >application tracker</nuxt-link
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
            @submit.prevent="submitVisaRequest"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <!-- Form Header -->
            <div
              class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white"
            >
              <h2 class="text-2xl font-bold mb-2">Visa Application Request</h2>
              <p class="text-indigo-100">
                Provide your details and we'll guide you through the visa
                process
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
                    class="h-5 w-5 mr-2 text-indigo-600"
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
                      >Full Name (as on passport) *</label
                    >
                    <input
                      v-model="formData.fullName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Date of Birth *</label
                    >
                    <input
                      v-model="formData.dateOfBirth"
                      type="date"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Gender *</label
                    >
                    <select
                      v-model="formData.gender"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Nationality *</label
                    >
                    <input
                      v-model="formData.nationality"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Ghanaian"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="+233 123 456 789"
                    />
                  </div>
                </div>

                <!-- Address Information -->
                <div class="mt-6">
                  <h4 class="text-md font-semibold text-gray-800 mb-4">
                    Current Address
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="md:col-span-2">
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                        >Street Address *</label
                      >
                      <input
                        v-model="formData.streetAddress"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="123 Main Street, Accra"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                        >City *</label
                      >
                      <input
                        v-model="formData.city"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Accra"
                      />
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-2"
                        >Country *</label
                      >
                      <input
                        v-model="formData.country"
                        type="text"
                        required
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        placeholder="Ghana"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Passport Information -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
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
                  Passport Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Passport Number *</label
                    >
                    <input
                      v-model="formData.passportNumber"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="G1234567"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Passport Issue Date *</label
                    >
                    <input
                      v-model="formData.passportIssueDate"
                      type="date"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Passport Expiry Date *</label
                    >
                    <input
                      v-model="formData.passportExpiryDate"
                      type="date"
                      required
                      :min="today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Place of Issue *</label
                    >
                    <input
                      v-model="formData.passportPlaceOfIssue"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Accra, Ghana"
                    />
                  </div>
                </div>
              </div>

              <!-- Visa Details -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
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
                  Visa Application Details
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Destination Country *</label
                    >
                    <select
                      v-model="formData.destinationCountry"
                      required
                      @change="updateVisaTypes"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select destination</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="schengen">Schengen Area (Europe)</option>
                      <option value="australia">Australia</option>
                      <option value="dubai">UAE (Dubai)</option>
                      <option value="south-africa">South Africa</option>
                      <option value="china">China</option>
                      <option value="india">India</option>
                      <option value="other">Other Country</option>
                    </select>
                  </div>
                  <div v-if="formData.destinationCountry === 'other'">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Specify Country *</label
                    >
                    <input
                      v-model="formData.otherCountry"
                      type="text"
                      :required="formData.destinationCountry === 'other'"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter country name"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Visa Type *</label
                    >
                    <select
                      v-model="formData.visaType"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select visa type</option>
                      <option
                        v-for="type in availableVisaTypes"
                        :key="type.value"
                        :value="type.value"
                      >
                        {{ type.label }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Purpose of Travel *</label
                    >
                    <select
                      v-model="formData.purposeOfTravel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select purpose</option>
                      <option value="tourism">Tourism/Leisure</option>
                      <option value="business">Business</option>
                      <option value="education">Education/Study</option>
                      <option value="medical">Medical Treatment</option>
                      <option value="family">Family Visit</option>
                      <option value="conference">Conference/Event</option>
                      <option value="transit">Transit</option>
                      <option value="work">Work/Employment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Intended Entry Date *</label
                    >
                    <input
                      v-model="formData.intendedEntryDate"
                      type="date"
                      required
                      :min="today"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Duration of Stay</label
                    >
                    <select
                      v-model="formData.durationOfStay"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select duration</option>
                      <option value="1-7">1-7 days</option>
                      <option value="8-14">8-14 days</option>
                      <option value="15-30">15-30 days</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6months+">6+ months</option>
                    </select>
                  </div>
                </div>

                <!-- Additional Travel Details -->
                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Travel Information</label
                  >
                  <textarea
                    v-model="formData.travelDetails"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Accommodation details, itinerary, sponsor information, etc."
                  ></textarea>
                </div>
              </div>

              <!-- Employment & Financial Information -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2v0"
                    />
                  </svg>
                  Employment & Financial Information
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Employment Status *</label
                    >
                    <select
                      v-model="formData.employmentStatus"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="student">Student</option>
                      <option value="retired">Retired</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="homemaker">Homemaker</option>
                    </select>
                  </div>
                  <div
                    v-if="
                      formData.employmentStatus === 'employed' ||
                      formData.employmentStatus === 'self-employed'
                    "
                  >
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Employer/Company Name</label
                    >
                    <input
                      v-model="formData.employerName"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="ABC Company Ltd."
                    />
                  </div>
                  <div
                    v-if="
                      formData.employmentStatus === 'employed' ||
                      formData.employmentStatus === 'self-employed'
                    "
                  >
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Job Title/Occupation</label
                    >
                    <input
                      v-model="formData.jobTitle"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Software Engineer"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Monthly Income Range</label
                    >
                    <select
                      v-model="formData.monthlyIncome"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Supporting Documents -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
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
                  Supporting Documents Available
                </h3>

                <div class="mb-4">
                  <p class="text-sm text-gray-600 mb-4">
                    Please indicate which documents you currently have
                    available. Our team will provide guidance on any additional
                    documents needed.
                  </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="passport-copy"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Passport Copy</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="passport-photos"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Passport Photos</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="bank-statements"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Bank Statements</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="employment-letter"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Employment Letter</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="hotel-bookings"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Hotel Bookings</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="flight-tickets"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Flight Tickets</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="invitation-letter"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Invitation Letter</span
                    >
                  </label>
                  <label class="flex items-center">
                    <input
                      v-model="formData.availableDocuments"
                      type="checkbox"
                      value="travel-insurance"
                      class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span class="ml-2 text-sm text-gray-700"
                      >Travel Insurance</span
                    >
                  </label>
                </div>

                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Notes about Documents</label
                  >
                  <textarea
                    v-model="formData.documentNotes"
                    rows="3"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Any specific questions about required documents or special circumstances..."
                  ></textarea>
                </div>
              </div>

              <!-- Previous Travel History -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
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
                  Previous Travel History
                </h3>

                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Have you previously visited the destination
                      country?</label
                    >
                    <div class="flex space-x-4">
                      <label class="flex items-center">
                        <input
                          v-model="formData.previouslyVisited"
                          type="radio"
                          value="yes"
                          class="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span class="ml-2 text-sm text-gray-700">Yes</span>
                      </label>
                      <label class="flex items-center">
                        <input
                          v-model="formData.previouslyVisited"
                          type="radio"
                          value="no"
                          class="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span class="ml-2 text-sm text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div v-if="formData.previouslyVisited === 'yes'">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Previous Visit Details</label
                    >
                    <textarea
                      v-model="formData.previousVisitDetails"
                      rows="3"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="When did you visit? Duration of stay? Purpose of visit?"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Have you ever been refused a visa to any country?</label
                    >
                    <div class="flex space-x-4">
                      <label class="flex items-center">
                        <input
                          v-model="formData.visaRefused"
                          type="radio"
                          value="yes"
                          class="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span class="ml-2 text-sm text-gray-700">Yes</span>
                      </label>
                      <label class="flex items-center">
                        <input
                          v-model="formData.visaRefused"
                          type="radio"
                          value="no"
                          class="text-indigo-600 focus:ring-indigo-500"
                        />
                        <span class="ml-2 text-sm text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div v-if="formData.visaRefused === 'yes'">
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Visa Refusal Details</label
                    >
                    <textarea
                      v-model="formData.visaRefusalDetails"
                      rows="3"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Which country? When? Reason for refusal?"
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Processing Preferences -->
              <div>
                <h3
                  class="text-lg font-bold text-gray-800 mb-4 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Processing Preferences
                </h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Processing Speed *</label
                    >
                    <select
                      v-model="formData.processingSpeed"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select processing speed</option>
                      <option value="standard">
                        Standard Processing (2-4 weeks)
                      </option>
                      <option value="expedited">
                        Expedited Processing (1-2 weeks) +$100
                      </option>
                      <option value="rush">
                        Rush Processing (3-7 days) +$200
                      </option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2"
                      >Urgency Level *</label
                    >
                    <select
                      v-model="formData.urgency"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      <option value="planning">
                        Just planning (Flexible timing)
                      </option>
                      <option value="standard">
                        Standard (Travel in 1-2 months)
                      </option>
                      <option value="urgent">
                        Urgent (Travel in 2-4 weeks)
                      </option>
                      <option value="emergency">
                        Emergency (Travel within 2 weeks)
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mt-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Additional Requirements or Special Circumstances</label
                  >
                  <textarea
                    v-model="formData.specialCircumstances"
                    rows="4"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Any special circumstances, medical conditions, family emergencies, business requirements, etc."
                  ></textarea>
                </div>
              </div>

              <!-- Terms and Submit -->
              <div class="border-t pt-6">
                <div class="flex items-start mb-6">
                  <input
                    v-model="formData.agreeToTerms"
                    type="checkbox"
                    required
                    class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label class="ml-3 text-sm text-gray-600">
                    I agree to the
                    <a
                      href="#"
                      class="text-indigo-600 hover:text-indigo-800 underline"
                      >Terms of Service</a
                    >
                    and
                    <a
                      href="#"
                      class="text-indigo-600 hover:text-indigo-800 underline"
                      >Privacy Policy</a
                    >. I understand that this is a visa consultation request and
                    Global Horizons will provide guidance on the application
                    process. I acknowledge that visa approval is at the
                    discretion of the embassy/consulate.
                  </label>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span v-if="isSubmitting"
                    >Submitting Visa Application...</span
                  >
                  <span v-else>Submit Visa Application Request</span>
                </button>

                <p class="text-center text-sm text-gray-500 mt-4">
                  🔒 Your personal information is secure and will only be used
                  for visa consultation purposes.
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
  VisaBookingSubmissionDto,
  VisaBookingDetails,
  VisaDocument,
  URGENCY_OPTIONS,
  BookingSubmissionResponse
} from '~/types/booking-api-types';
import { forceRedirect } from '~/utils/navigation';

// SEO Meta
useHead({
  title: "Visa Application Service - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Get expert assistance with your visa application. Professional guidance and document support for all countries.",
    },
  ],
});

// Form state
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const referenceNumber = ref("");
const errorMessage = ref("");
const successMessage = ref("");
const availableVisaTypes = ref([]);

// Today's date for minimum date validation
const today = computed(() => {
  return new Date().toISOString().split("T")[0];
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

  if (!formData.destinationCountry.trim()) errors.push('Destination country is required');
  if (!formData.visaType.trim()) errors.push('Visa type is required');
  if (!formData.passportNumber.trim()) errors.push('Passport number is required');
  if (!formData.passportExpiryDate) errors.push('Passport expiry date is required');
  if (!formData.intendedTravelDate) errors.push('Intended travel date is required');
  if (!formData.contactEmail.trim()) errors.push('Contact email is required');
  if (!formData.contactPhone.trim()) errors.push('Contact phone is required');
  if (!formData.nationality.trim()) errors.push('Nationality is required');

  return errors;
};

// Form data with proper TypeScript typing
const formData = reactive({
  // Contact information
  contactEmail: "",
  contactPhone: "",
  
  // Visa details
  visaType: "",
  destinationCountry: "",
  processingType: "standard" as 'standard' | 'express' | 'super-express',
  intendedTravelDate: "",
  durationOfStay: 30,
  purposeOfVisit: "",
  passportNumber: "",
  passportExpiryDate: "",
  nationality: "",
  hasPreviousVisa: false,
  requiredDocuments: [] as VisaDocument[],
  
  // Additional details
  specialRequests: "",
  urgency: 1,
  
  // Legacy fields for UI compatibility
  // Personal Information
  fullName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  phone: "",
  streetAddress: "",
  city: "",
  country: "",

  // Passport Information
  passportIssueDate: "",
  passportPlaceOfIssue: "",

  // Visa Details
  otherCountry: "",
  purposeOfTravel: "",
  intendedEntryDate: "",
  travelDetails: "",

  // Employment & Financial
  employmentStatus: "",
  employerName: "",
  jobTitle: "",
  monthlyIncome: "",

  // Supporting Documents
  availableDocuments: [],
  documentNotes: "",

  // Travel History
  previouslyVisited: "",
  previousVisitDetails: "",
  visaRefused: "",
  visaRefusalDetails: "",

  // Processing Preferences
  processingSpeed: "",
  specialCircumstances: "",

  agreeToTerms: false,
});

// Visa types based on destination country
const visaTypesByCountry = {
  usa: [
    { value: "b1-b2", label: "B1/B2 (Tourist/Business)" },
    { value: "f1", label: "F1 (Student)" },
    { value: "h1b", label: "H1B (Work)" },
    { value: "j1", label: "J1 (Exchange)" },
    { value: "o1", label: "O1 (Extraordinary Ability)" },
  ],
  uk: [
    { value: "standard-visitor", label: "Standard Visitor" },
    { value: "student", label: "Student Visa" },
    { value: "work", label: "Work Visa" },
    { value: "family", label: "Family Visa" },
    { value: "transit", label: "Transit Visa" },
  ],
  canada: [
    { value: "visitor", label: "Visitor Visa" },
    { value: "study-permit", label: "Study Permit" },
    { value: "work-permit", label: "Work Permit" },
    { value: "transit", label: "Transit Visa" },
  ],
  schengen: [
    { value: "short-stay", label: "Short Stay (Tourism/Business)" },
    { value: "long-stay", label: "Long Stay" },
    { value: "transit", label: "Airport Transit" },
  ],
  australia: [
    { value: "visitor", label: "Visitor Visa (600)" },
    { value: "student", label: "Student Visa (500)" },
    { value: "work", label: "Work Visa" },
    { value: "transit", label: "Transit Visa" },
  ],
  dubai: [
    { value: "tourist", label: "Tourist Visa" },
    { value: "business", label: "Business Visa" },
    { value: "transit", label: "Transit Visa" },
    { value: "residence", label: "Residence Visa" },
  ],
  "south-africa": [
    { value: "visitor", label: "Visitor Visa" },
    { value: "business", label: "Business Visa" },
    { value: "study", label: "Study Visa" },
    { value: "work", label: "Work Visa" },
  ],
  china: [
    { value: "l-tourist", label: "L (Tourist)" },
    { value: "m-business", label: "M (Business)" },
    { value: "f-exchange", label: "F (Exchange)" },
    { value: "x-study", label: "X (Study)" },
  ],
  india: [
    { value: "e-tourist", label: "e-Tourist Visa" },
    { value: "e-business", label: "e-Business Visa" },
    { value: "e-medical", label: "e-Medical Visa" },
    { value: "regular-tourist", label: "Regular Tourist Visa" },
  ],
  other: [
    { value: "tourist", label: "Tourist/Visitor" },
    { value: "business", label: "Business" },
    { value: "student", label: "Student" },
    { value: "work", label: "Work" },
    { value: "transit", label: "Transit" },
    { value: "family", label: "Family/Visit" },
  ],
};

// Update visa types when destination country changes
const updateVisaTypes = () => {
  const country = formData.destinationCountry;
  availableVisaTypes.value = visaTypesByCountry[country] || [];
  formData.visaType = ""; // Reset visa type selection
};

// Generate reference number
const generateReferenceNumber = () => {
  const prefix = "VS";
  const timestamp = Date.now().toString();
  return prefix + timestamp.slice(-10);
};

// Submit visa request
// Submit visa booking using new API
const submitVisaRequest = async () => {
  console.log('📄 Starting visa booking submission...');

  // Note: Quote requests don't require authentication
  console.log('📤 Submitting visa quote request (no auth required)');

  // Sync UI fields to API fields
  formData.contactEmail = formData.email || formData.contactEmail;
  formData.contactPhone = formData.phone || formData.contactPhone;
  formData.intendedTravelDate = formData.intendedEntryDate || formData.intendedTravelDate;
  formData.purposeOfVisit = formData.purposeOfTravel || formData.purposeOfVisit;

  // Handle destination country
  if (formData.destinationCountry === "other" && formData.otherCountry) {
    formData.destinationCountry = formData.otherCountry;
  }

  // Map processing speed to processing type
  if (formData.processingSpeed === "standard") formData.processingType = "standard";
  else if (formData.processingSpeed === "express") formData.processingType = "express";
  else if (formData.processingSpeed === "super-express") formData.processingType = "super-express";

  // Map urgency
  if (formData.urgency === "standard") formData.urgency = 1;
  else if (formData.urgency === "urgent") formData.urgency = 2;
  else if (formData.urgency === "asap") formData.urgency = 3;

  // Set duration of stay as number
  formData.durationOfStay = parseInt(formData.durationOfStay) || 30;

  // Set up required documents
  if (formData.availableDocuments && formData.availableDocuments.length > 0) {
    formData.requiredDocuments = formData.availableDocuments.map((doc: string) => ({
      documentType: doc,
      fileName: "",
      isRequired: true,
      isUploaded: false
    }));
  }

  // Set previous visa status
  formData.hasPreviousVisa = formData.previouslyVisited === "yes";

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
    // Convert duration string to number
    let durationDays = 30; // default
    const durationStr = formData.durationOfStay.toString();
    if (durationStr.includes('1-7')) durationDays = 7;
    else if (durationStr.includes('8-14')) durationDays = 14;
    else if (durationStr.includes('15-30')) durationDays = 30;
    else if (durationStr.includes('1-3months')) durationDays = 90;
    else if (durationStr.includes('3-6months')) durationDays = 180;
    else if (durationStr.includes('6months+')) durationDays = 365;
    else if (!isNaN(Number(durationStr))) durationDays = Number(durationStr);

    // Prepare visa booking data
    const visaDetails: VisaBookingDetails = {
      visaType: formData.visaType,
      destinationCountry: formData.destinationCountry,
      processingType: formData.processingType,
      intendedTravelDate: formData.intendedTravelDate + "T00:00:00Z",
      durationOfStay: durationDays,
      purposeOfVisit: formData.purposeOfVisit || "Tourism",
      passportNumber: formData.passportNumber,
      passportExpiryDate: formData.passportExpiryDate + "T00:00:00Z",
      nationality: formData.nationality,
      hasPreviousVisa: formData.hasPreviousVisa,
      requiredDocuments: formData.requiredDocuments
    };

    const submissionData: VisaBookingSubmissionDto = {
      visaDetails,
      contactEmail: formData.contactEmail,
      contactPhone: formData.contactPhone,
      contactName: formData.fullName || "Applicant",
      specialRequests: formData.specialRequests || undefined,
      urgency: formData.urgency
    };

    console.log('📤 Submitting visa booking data:', submissionData);

    // Submit to API
    const response: BookingSubmissionResponse = await bookingService.submitVisaBooking(submissionData);

    console.log('✅ Visa booking submitted successfully:', response);

    // Update UI with success
    referenceNumber.value = response.referenceNumber;
    isSubmitted.value = true;
    showMessage(`Visa booking submitted successfully! Your reference number is ${response.referenceNumber}`, 'success');

  } catch (error: any) {
    console.error('❌ Visa booking submission failed:', error);
    showMessage(error.message || 'Failed to submit visa booking. Please try again.');
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

/* Custom styling */
input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background-color: #4f46e5;
  border-color: #4f46e5;
}
</style>
