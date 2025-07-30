export const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie("auth-token", {
    default: () => null,
    secure: true,
    sameSite: "strict",
  });

  // Create base API instance
  const $api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      "Content-Type": "application/json",
    },
    onRequest({ request, options }) {
      // Add auth token to requests
      if (token.value) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        };
      }
    },
    onResponseError({ response }) {
      // Handle auth errors globally
      if (response.status === 401) {
        // Clear invalid token
        token.value = null;
        // Redirect to login
        navigateTo("/login");
      }
    },
  });

  // API methods
  const api = {
    // Authentication
    auth: {
      login: (credentials) =>
        $api("/auth/login", {
          method: "POST",
          body: credentials,
        }),

      register: (userData) =>
        $api("/auth/register", {
          method: "POST",
          body: userData,
        }),

      requestOtp: (phoneNumber) =>
        $api("/auth/otp-login", {
          method: "POST",
          body: { phoneNumber, action: "request" },
        }),

      verifyOtp: (phoneNumber, otpCode) =>
        $api("/auth/otp-login", {
          method: "POST",
          body: { phoneNumber, otpCode, action: "verify" },
        }),

      logout: () =>
        $api("/auth/logout", {
          method: "POST",
        }),
    },

    // User management
    user: {
      getProfile: () => $api("/user/profile"),

      updateProfile: (profileData) =>
        $api("/user/profile", {
          method: "PUT",
          body: profileData,
        }),

      changePassword: (passwordData) =>
        $api("/user/change-password", {
          method: "POST",
          body: passwordData,
        }),

      getBookings: (params = {}) =>
        $api("/user/bookings", {
          query: params,
        }),

      deleteAccount: (reason) =>
        $api("/user/account", {
          method: "DELETE",
          body: { reason },
        }),
    },

    // Booking management
    booking: {
      submit: (bookingData) =>
        $api("/booking/submit", {
          method: "POST",
          body: bookingData,
        }),

      track: (referenceNumber) => $api(`/booking/track/${referenceNumber}`),

      getById: (id) => $api(`/booking/${id}`),

      getHistory: (params = {}) =>
        $api("/booking/history", {
          query: params,
        }),
    },

    // Travel packages
    packages: {
      getFeatured: () => $api("/travelpackage/featured"),

      getAll: (params = {}) =>
        $api("/travelpackage", {
          query: params,
        }),

      getById: (id) => $api(`/travelpackage/${id}`),

      getDestinations: () => $api("/travelpackage/destinations"),

      search: (searchParams) =>
        $api("/travelpackage/search", {
          query: searchParams,
        }),
    },

    // Admin endpoints (if needed)
    admin: {
      login: (credentials) =>
        $api("/admin/login", {
          method: "POST",
          body: credentials,
        }),

      getDashboard: () => $api("/admin/dashboard"),

      getBookings: (params = {}) =>
        $api("/admin/bookings", {
          query: params,
        }),

      updateBookingStatus: (id, statusData) =>
        $api(`/admin/bookings/${id}/status`, {
          method: "PUT",
          body: statusData,
        }),
    },
  };

  // Helper methods
  const setToken = (newToken) => {
    token.value = newToken;
  };

  const clearToken = () => {
    token.value = null;
  };

  const isAuthenticated = computed(() => !!token.value);

  return {
    api,
    setToken,
    clearToken,
    isAuthenticated,
    $api, // Raw API instance for custom calls
  };
};
 