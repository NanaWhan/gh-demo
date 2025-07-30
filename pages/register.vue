<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50"
  >
    <NavBar current-page="register" />

    <div class="pt-20 pb-16">
      <div class="max-w-md mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p class="text-gray-600">
            Join Global Horizons to track your bookings and more
          </p>
        </div>

        <!-- Error/Success Messages -->
        <div
          v-if="errorMessage"
          class="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl"
        >
          <p class="text-red-600 text-sm">{{ errorMessage }}</p>
        </div>

        <div
          v-if="successMessage"
          class="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
        >
          <p class="text-green-600 text-sm">{{ successMessage }}</p>
        </div>

        <!-- Registration Form Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <form @submit.prevent="register" class="space-y-4">
            <!-- Personal Information -->
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >First Name</label
                >
                <input
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Last Name</label
                >
                <input
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <!-- Contact Information -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Email Address</label
              >
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Phone Number</label
              >
              <input
                v-model="form.phoneNumber"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+233 XX XXX XXXX"
              />
            </div>

            <!-- Password -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Password</label
              >
              <div class="relative">
                <input
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  minlength="8"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    v-if="!showPassword"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                </button>
              </div>
              <p class="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Confirm Password</label
              >
              <div class="relative">
                <input
                  v-model="form.confirmPassword"
                  :type="showConfirmPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  :class="
                    passwordsMatch === false
                      ? 'border-red-300 focus:ring-red-500'
                      : ''
                  "
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  @click="showConfirmPassword = !showConfirmPassword"
                  class="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    v-if="!showConfirmPassword"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg
                    v-else
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                </button>
              </div>
              <p
                v-if="passwordsMatch === false"
                class="text-xs text-red-500 mt-1"
              >
                Passwords do not match
              </p>
            </div>

            <!-- Optional Information -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Date of Birth (Optional)</label
              >
              <input
                v-model="form.dateOfBirth"
                type="date"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-start">
              <input
                v-model="form.acceptTerms"
                type="checkbox"
                required
                class="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div class="ml-3">
                <p class="text-sm text-gray-600">
                  I agree to the
                  <nuxt-link
                    to="/terms"
                    class="text-blue-600 hover:text-blue-800"
                    >Terms of Service</nuxt-link
                  >
                  and
                  <nuxt-link
                    to="/privacy"
                    class="text-blue-600 hover:text-blue-800"
                    >Privacy Policy</nuxt-link
                  >
                </p>
              </div>
            </div>

            <!-- Marketing Consent -->
            <div class="flex items-start">
              <input
                v-model="form.acceptMarketing"
                type="checkbox"
                class="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div class="ml-3">
                <p class="text-sm text-gray-600">
                  I'd like to receive travel deals and updates via email and SMS
                </p>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading || !passwordsMatch"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!loading">Create Account</span>
              <span v-else class="flex items-center justify-center">
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            </button>
          </form>

          <!-- Divider -->
          <div class="my-6 flex items-center">
            <div class="flex-1 border-t border-gray-300"></div>
            <span class="px-4 text-sm text-gray-500">or</span>
            <div class="flex-1 border-t border-gray-300"></div>
          </div>

          <!-- Login Link -->
          <div class="text-center">
            <p class="text-gray-600">
              Already have an account?
              <nuxt-link
                to="/login"
                class="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Sign in here
              </nuxt-link>
            </p>
          </div>
        </div>

        <!-- Guest Access -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-500 mb-2">Just want to make a booking?</p>
          <nuxt-link
            to="/booking"
            class="inline-block px-6 py-2 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Continue as Guest
          </nuxt-link>
        </div>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: "Register - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Create your Global Horizons account to track bookings and manage your travel.",
    },
  ],
});

// Reactive data
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const loading = ref(false);

// Message states
const errorMessage = ref("");
const successMessage = ref("");

// Registration form
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: "",
  acceptTerms: false,
  acceptMarketing: false,
});

// Computed properties
const passwordsMatch = computed(() => {
  if (!form.password || !form.confirmPassword) return null;
  return form.password === form.confirmPassword;
});

// Methods
const register = async () => {
  if (!passwordsMatch.value) {
    errorMessage.value = "Passwords do not match";
    return;
  }

  loading.value = true;
  errorMessage.value = "";

  try {
    const { api, setToken } = useApi();

    const response = await api.auth.register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phoneNumber: form.phoneNumber,
      password: form.password,
      dateOfBirth: form.dateOfBirth || null,
      acceptMarketing: form.acceptMarketing,
    });

    // Store token and redirect
    setToken(response.token);

    successMessage.value = "Account created successfully! Redirecting...";

    await navigateTo("/dashboard");
  } catch (error) {
    console.error("Registration failed:", error);

    // Show user-friendly error messages
    if (error.status === 422) {
      if (error.data?.errors?.email) {
        errorMessage.value = "Email address is already registered";
      } else if (error.data?.errors?.phoneNumber) {
        errorMessage.value = "Phone number is already registered";
      } else {
        errorMessage.value = "Please check your information and try again";
      }
    } else if (error.status === 400) {
      errorMessage.value = "Invalid registration data. Please check all fields";
    } else {
      errorMessage.value = "Registration failed. Please try again later";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-gradient-to-br {
  animation: fadeInUp 0.6s ease-out;
}
</style>
