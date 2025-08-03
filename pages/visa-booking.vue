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
            Get Visa Service Quote
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Get instant pricing for expert visa application assistance
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
                  Visa Service Quote Request Submitted!
                </h3>
                <div class="mt-2 text-sm text-green-700">
                  <p>
                    Your reference number is:
                    <strong>{{ referenceNumber }}</strong>
                  </p>
                  <p>
                    We've sent confirmation details to your email and SMS. Our
                    visa specialists will contact you within 24 hours with
                    your personalized quote and service pricing.
                  </p>
                  <p
                    class="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700"
                  >
                    💡 <strong>Track your quote:</strong> Visit our
                    <nuxt-link
                      to="/track-booking"
                      class="underline font-medium hover:text-blue-800"
                      >quote tracker</nuxt-link
                    >
                    anytime to check your quote status using reference number
                    {{ referenceNumber }}.
                  </p>
                  <div class="mt-4 flex space-x-3">
                    <nuxt-link
                      to="/"
                      class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      🏠 Return Home
                    </nuxt-link>
                    <nuxt-link
                      to="/track-booking"
                      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      📋 Track Quote
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Wizard -->
          <BookingWizard
            v-else
            title="Visa Service Quote Request"
            :steps="wizardSteps"
            :form-data="formData"
            :is-submitting="isSubmitting"
            :submit-text="{ default: '💰 Get My Quote', loading: 'Getting Quote...' }"
            storage-key="visa-booking-progress"
            @submit="submitVisaRequest"
            @update-form-data="updateFormData"
          >
            <!-- Step 0: Personal Information -->
            <template #step-0>
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
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Current Country</label
                  >
                  <input
                    v-model="formData.country"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Ghana"
                  />
                </div>
              </div>
            </template>

            <!-- Step 1: Passport Information -->
            <template #step-1>
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
            </template>

            <!-- Step 2: Visa Details -->
            <template #step-2>
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
            </template>

            <!-- Step 3: Processing & Final Details -->
            <template #step-3>
              <div class="space-y-6">
                <!-- Processing Speed -->
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

                <!-- Employment Status -->
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

                <!-- Previous Visit -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Have you previously visited the destination country?</label
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

                <!-- Special Circumstances -->
                <div>
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

                <!-- Terms -->
                <div class="border-t pt-6">
                  <div class="flex items-start">
                    <input
                      v-model="formData.agreeToTerms"
                      type="checkbox"
                      required
                      class="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label class="ml-3 text-sm text-gray-600">
                      I agree to the
                      <a href="#" class="text-indigo-600 hover:text-indigo-800 underline">Terms of Service</a>
                      and
                      <a href="#" class="text-indigo-600 hover:text-indigo-800 underline">Privacy Policy</a>.
                      I understand that this is a visa consultation request and Global Horizons will provide guidance on the application process. I acknowledge that visa approval is at the discretion of the embassy/consulate.
                    </label>
                  </div>
                </div>
              </div>
            </template>

          </BookingWizard>
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
  title: "Get Visa Service Quote - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Get instant quotes for expert visa assistance. Professional guidance and document support pricing for all countries.",
    },
  ],
});

// Form state
const isSubmitting = ref(false);
const isSubmitted = ref(false);
const referenceNumber = ref("");
const availableVisaTypes = ref([]);

// Today's date for minimum date validation
const today = computed(() => {
  return new Date().toISOString().split("T")[0];
});

// Wizard steps configuration
const wizardSteps = [
  {
    id: 'personal',
    title: 'Personal Info',
    description: 'Your personal information',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.fullName?.trim()) errors.push('Full name is required');
      if (!data.email?.trim()) errors.push('Email is required');
      if (!data.phone?.trim()) errors.push('Phone number is required');
      if (!data.nationality?.trim()) errors.push('Nationality is required');
      if (!data.dateOfBirth) errors.push('Date of birth is required');
      return errors;
    }
  },
  {
    id: 'passport',
    title: 'Passport Info',
    description: 'Your passport details',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.passportNumber?.trim()) errors.push('Passport number is required');
      if (!data.passportExpiryDate) errors.push('Passport expiry date is required');
      if (!data.passportIssueDate) errors.push('Passport issue date is required');
      if (!data.passportPlaceOfIssue?.trim()) errors.push('Place of issue is required');
      return errors;
    }
  },
  {
    id: 'visa',
    title: 'Visa Details',
    description: 'Destination and visa information',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.destinationCountry) errors.push('Destination country is required');
      if (!data.visaType) errors.push('Visa type is required');
      if (!data.purposeOfTravel) errors.push('Purpose of travel is required');
      if (!data.intendedEntryDate) errors.push('Intended entry date is required');
      return errors;
    }
  },
  {
    id: 'processing',
    title: 'Processing',
    description: 'Processing preferences and final details',
    required: true,
    validation: (data: any) => {
      const errors: string[] = [];
      if (!data.processingSpeed) errors.push('Processing speed is required');
      if (!data.urgency) errors.push('Urgency level is required');
      if (!data.employmentStatus) errors.push('Employment status is required');
      if (!data.agreeToTerms) errors.push('You must agree to the terms');
      return errors;
    }
  }
];

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

// Update form data from wizard
const updateFormData = (newData: Record<string, any>) => {
  Object.assign(formData, newData);
};

// Submit visa request using new Quote API
const submitVisaRequest = async () => {
  console.log('📄 Starting visa quote submission...');

  isSubmitting.value = true;

  try {
    // Auto-format phone number for Ghana
    let phoneNumber = formData.phone || formData.contactPhone;
    if (phoneNumber && !phoneNumber.startsWith('+233')) {
      if (phoneNumber.startsWith('0')) {
        phoneNumber = '+233' + phoneNumber.substring(1);
      } else if (phoneNumber.match(/^\d{9}$/)) {
        phoneNumber = '+233' + phoneNumber;
      } else if (!phoneNumber.startsWith('+')) {
        phoneNumber = '+233' + phoneNumber.replace(/\D/g, '').substring(-9);
      }
    }

    // Format dates to ISO format (API expects YYYY-MM-DDTHH:mm:ssZ)
    const formatDateToISO = (dateStr: string) => {
      if (!dateStr) return '';
      try {
        // If dateStr is already in YYYY-MM-DD format, append time
        if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
          return dateStr + 'T08:00:00Z';
        }
        // Otherwise try to parse as Date and format
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return '';
        return date.toISOString();
      } catch (error) {
        console.error('Date formatting error:', error);
        return '';
      }
    };

    // Get contact name from fullName field
    const contactName = formData.fullName || `${formData.email?.split('@')[0] || 'Applicant'}`;
    
    // Map urgency correctly (0=Standard, 1=Urgent, 2=Emergency)
    let urgencyLevel = 0;
    if (formData.urgency === "urgent") urgencyLevel = 1;
    else if (formData.urgency === "emergency") urgencyLevel = 2;

    // Map processing type correctly (API expects lowercase)
    let processingType = "standard";
    if (formData.processingSpeed === "expedited") processingType = "express";
    else if (formData.processingSpeed === "rush") processingType = "super-express";

    // Map visa type correctly (API expects "Tourist Visa" format)
    let visaType = "Tourist Visa";
    const visaTypeMap: Record<string, string> = {
      "tourist": "Tourist Visa",
      "business": "Business Visa", 
      "student": "Student Visa",
      "work": "Work Visa",
      "transit": "Transit Visa",
      "visitor": "Tourist Visa",
      "b1-b2": "Tourist Visa",
      "standard-visitor": "Tourist Visa",
      "f1": "Student Visa",
      "h1b": "Work Visa",
      "m-business": "Business Visa"
    };
    if (formData.visaType && visaTypeMap[formData.visaType]) {
      visaType = visaTypeMap[formData.visaType];
    }

    // Handle destination country mapping
    let destinationCountry = formData.destinationCountry;
    if (destinationCountry === "other" && formData.otherCountry) {
      destinationCountry = formData.otherCountry;
    }
    
    // Map country codes to full names
    const countryMap: Record<string, string> = {
      "usa": "United States",
      "uk": "United Kingdom", 
      "canada": "Canada",
      "schengen": "Germany", // Use Germany as representative for Schengen
      "australia": "Australia",
      "dubai": "United Arab Emirates",
      "south-africa": "South Africa",
      "china": "China",
      "india": "India"
    };
    if (countryMap[destinationCountry]) {
      destinationCountry = countryMap[destinationCountry];
    }

    // Convert duration to days
    let durationDays = 30;
    const durationStr = formData.durationOfStay?.toString() || "30";
    if (durationStr.includes('1-7')) durationDays = 7;
    else if (durationStr.includes('8-14')) durationDays = 14;
    else if (durationStr.includes('15-30')) durationDays = 30;
    else if (durationStr.includes('1-3months')) durationDays = 90;
    else if (durationStr.includes('3-6months')) durationDays = 180;
    else if (durationStr.includes('6months+')) durationDays = 365;
    else if (!isNaN(Number(durationStr))) durationDays = Number(durationStr);

    // Create quote request matching API exactly
    const quoteRequest = {
      contactEmail: formData.email || formData.contactEmail,
      contactPhone: phoneNumber,
      contactName: contactName,
      specialRequests: formData.specialCircumstances || formData.documentNotes || undefined,
      urgency: urgencyLevel,
      visaDetails: {
        destinationCountry: destinationCountry,
        visaType: visaType,
        intendedTravelDate: formatDateToISO(formData.intendedTravelDate || formData.intendedEntryDate),
        processingType: processingType,
        passportNumber: formData.passportNumber,
        nationality: formData.nationality || "Ghanaian",
        durationOfStay: durationDays,
        purposeOfVisit: formData.purposeOfTravel || formData.purposeOfVisit || "Tourism"
      }
    };

    console.log('📤 Submitting visa quote request:', quoteRequest);

    // Validate required fields
    if (!quoteRequest.contactEmail) {
      throw new Error('Email address is required');
    }
    if (!quoteRequest.contactPhone) {
      throw new Error('Phone number is required');
    }
    if (!quoteRequest.contactName || quoteRequest.contactName.length < 2) {
      throw new Error('Full name is required');
    }
    if (!quoteRequest.visaDetails.destinationCountry) {
      throw new Error('Destination country is required');
    }
    if (!quoteRequest.visaDetails.intendedTravelDate) {
      throw new Error('Intended travel date is required');
    }
    if (!quoteRequest.visaDetails.passportNumber) {
      throw new Error('Passport number is required');
    }
    if (!quoteRequest.visaDetails.nationality) {
      throw new Error('Nationality is required');
    }

    // Use QuoteService directly
    const { quoteService } = await import('~/services/QuoteService');
    const response = await quoteService.requestVisaQuote(quoteRequest);

    console.log('✅ Visa quote submitted successfully:', response);

    if (response.success && response.referenceNumber) {
      // Update UI with success
      referenceNumber.value = response.referenceNumber;
      isSubmitted.value = true;
    } else {
      throw new Error(response.message || 'Quote submission failed');
    }

  } catch (error: any) {
    console.error('❌ Visa quote submission failed:', error);
    let errorMsg = error.message || 'Failed to submit visa application. Please try again.';
    
    // Handle specific validation errors
    if (errorMsg.includes('Phone must be in Ghana format')) {
      errorMsg = 'Please enter a valid Ghana phone number (e.g., 0123456789 or +233123456789)';
    }
    if (errorMsg.includes('contactName') || errorMsg.includes('Contact name')) {
      errorMsg = 'Please enter your full name';
    }
    if (errorMsg.includes('400')) {
      errorMsg = 'Please check all required fields are filled correctly and try again.';
    }
    
    throw new Error(errorMsg);
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