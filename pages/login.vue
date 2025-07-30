<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50"
  >
    <NavBar current-page="login" />

    <div class="pt-20 pb-16">
      <div class="max-w-md mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
          <p class="text-gray-600">
            Access your account to track bookings and manage travel
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

        <!-- Login Form Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <!-- Login Type Toggle -->
          <div class="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              @click="loginType = 'email'"
              :class="
                loginType === 'email'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600'
              "
              class="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200"
            >
              Email/Password
            </button>
            <button
              @click="loginType = 'otp'"
              :class="
                loginType === 'otp'
                  ? 'bg-white shadow-sm text-blue-600'
                  : 'text-gray-600'
              "
              class="flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200"
            >
              Phone/OTP
            </button>
          </div>

          <!-- Email/Password Login -->
          <form
            v-if="loginType === 'email'"
            @submit.prevent="loginWithEmail"
            class="space-y-4"
          >
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Email Address</label
              >
              <input
                v-model="emailForm.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Password</label
              >
              <div class="relative">
                <input
                  v-model="emailForm.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  placeholder="Enter your password"
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
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  v-model="emailForm.rememberMe"
                  type="checkbox"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <nuxt-link
                to="/forgot-password"
                class="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </nuxt-link>
            </div>

            <button
              type="submit"
              :disabled="emailLoading"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!emailLoading">Sign In</span>
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
                Signing in...
              </span>
            </button>
          </form>

          <!-- OTP Login -->
          <form
            v-if="loginType === 'otp'"
            @submit.prevent="requestOtp"
            class="space-y-4"
          >
            <div v-if="!otpSent">
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Phone Number</label
              >
              <input
                v-model="otpForm.phoneNumber"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+233 XX XXX XXXX"
              />

              <button
                type="submit"
                :disabled="otpLoading"
                class="w-full mt-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
              >
                <span v-if="!otpLoading">Send OTP</span>
                <span v-else>Sending...</span>
              </button>
            </div>

            <div v-else>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Enter OTP Code</label
              >
              <p class="text-sm text-gray-600 mb-3">
                We sent a 6-digit code to {{ otpForm.phoneNumber }}
              </p>

              <input
                v-model="otpForm.otpCode"
                type="text"
                maxlength="6"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
                placeholder="000000"
              />

              <div class="flex space-x-3 mt-4">
                <button
                  @click="verifyOtp"
                  :disabled="otpVerifyLoading"
                  class="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200"
                >
                  <span v-if="!otpVerifyLoading">Verify & Sign In</span>
                  <span v-else>Verifying...</span>
                </button>

                <button
                  @click="resetOtp"
                  type="button"
                  class="px-4 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50"
                >
                  Resend
                </button>
              </div>
            </div>
          </form>

          <!-- Divider -->
          <div class="my-6 flex items-center">
            <div class="flex-1 border-t border-gray-300"></div>
            <span class="px-4 text-sm text-gray-500">or</span>
            <div class="flex-1 border-t border-gray-300"></div>
          </div>

          <!-- Register Link -->
          <div class="text-center">
            <p class="text-gray-600">
              Don't have an account?
              <nuxt-link
                to="/register"
                class="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Create one now
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
  title: "Login - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content:
        "Sign in to your Global Horizons account to track bookings and manage your travel.",
    },
  ],
});

// Reactive data
const loginType = ref("email");
const showPassword = ref(false);
const otpSent = ref(false);

// Get route for redirect handling
const route = useRoute();

// Message states
const errorMessage = ref("");
const successMessage = ref("");

// Email login form
const emailForm = reactive({
  email: "",
  password: "",
  rememberMe: false,
});

// OTP login form
const otpForm = reactive({
  phoneNumber: "",
  otpCode: "",
});

// Loading states
const emailLoading = ref(false);
const otpLoading = ref(false);
const otpVerifyLoading = ref(false);

// Methods
const loginWithEmail = async () => {
  emailLoading.value = true;
  errorMessage.value = "";

  try {
    const { api, setToken } = useApi();

    const response = await api.auth.login({
      email: emailForm.email,
      password: emailForm.password,
    });

    // Store token and redirect
    setToken(response.token);

    // Show success message
    successMessage.value = "Login successful! Redirecting...";

    // Redirect to dashboard or return URL
    const redirectTo = route.query.redirect || "/dashboard";
    await navigateTo(redirectTo);
  } catch (error) {
    console.error("Login failed:", error);

    // Show user-friendly error message
    if (error.status === 401) {
      errorMessage.value = "Invalid email or password. Please try again.";
    } else if (error.status === 422) {
      errorMessage.value = "Please check your email and password format.";
    } else {
      errorMessage.value = "Login failed. Please try again later.";
    }
  } finally {
    emailLoading.value = false;
  }
};

const requestOtp = async () => {
  otpLoading.value = true;
  errorMessage.value = "";

  try {
    const { api } = useApi();

    await api.auth.requestOtp(otpForm.phoneNumber);

    otpSent.value = true;
    successMessage.value = "OTP sent successfully! Check your phone.";
  } catch (error) {
    console.error("OTP request failed:", error);

    if (error.status === 422) {
      errorMessage.value =
        "Invalid phone number format. Please use +233XXXXXXXXX";
    } else {
      errorMessage.value = "Failed to send OTP. Please try again.";
    }
  } finally {
    otpLoading.value = false;
  }
};

const verifyOtp = async () => {
  otpVerifyLoading.value = true;
  errorMessage.value = "";

  try {
    const { api, setToken } = useApi();

    const response = await api.auth.verifyOtp(
      otpForm.phoneNumber,
      otpForm.otpCode
    );

    // Store token and redirect
    setToken(response.token);

    successMessage.value = "OTP verified! Redirecting...";

    // Redirect to dashboard or return URL
    const redirectTo = route.query.redirect || "/dashboard";
    await navigateTo(redirectTo);
  } catch (error) {
    console.error("OTP verification failed:", error);

    if (error.status === 401) {
      errorMessage.value = "Invalid OTP code. Please try again.";
    } else if (error.status === 422) {
      errorMessage.value = "OTP code expired. Please request a new one.";
    } else {
      errorMessage.value = "Verification failed. Please try again.";
    }
  } finally {
    otpVerifyLoading.value = false;
  }
};

const resetOtp = () => {
  otpSent.value = false;
  otpForm.otpCode = "";
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
