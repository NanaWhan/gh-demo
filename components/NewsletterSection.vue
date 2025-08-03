<template>
  <!-- Newsletter -->
  <section class="py-16 bg-accent">
    <div class="max-w-4xl mx-auto px-4 text-center text-white">
      <h2 class="text-3xl font-bold mb-2">Stay Updated</h2>
      <p class="mb-6">
        Subscribe to our newsletter for travel deals, visa updates, and expert
        tips via SMS or email.
      </p>
      <form class="max-w-lg mx-auto" @submit.prevent="handleSubmit">
        <!-- Contact Method Toggle -->
        <div class="flex justify-center mb-4">
          <div class="bg-white/20 rounded-lg p-1 inline-flex">
            <button
              type="button"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 contact-method-btn',
                { active: contactMethod === 'email' },
              ]"
              @click="toggleContactMethod('email')"
            >
              Email
            </button>
            <button
              type="button"
              :class="[
                'px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 contact-method-btn',
                { active: contactMethod === 'phone' },
              ]"
              @click="toggleContactMethod('phone')"
            >
              Phone
            </button>
          </div>
        </div>

        <!-- Success/Error Message -->
        <div v-if="message" class="mb-4 max-w-lg mx-auto">
          <div 
            :class="[
              'p-3 rounded-lg text-sm font-medium text-center',
              messageType === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            ]"
          >
            {{ message }}
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-2">
          <input
            v-model="contactInput"
            :type="inputType"
            :placeholder="placeholder"
            :disabled="isLoading"
            class="px-4 py-3 rounded-lg flex-grow text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            :disabled="isLoading"
            class="px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center min-w-[120px]"
            style="background-color: #1a365d; color: white"
            @mouseover="!isLoading && hoverButton($event)"
            @mouseleave="!isLoading && leaveButton($event)"
          >
            <span v-if="!isLoading">Subscribe</span>
            <div v-else class="flex items-center">
              <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Subscribing...</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import newsletterService from '~/services/NewsletterService';

const contactMethod = ref("email");
const contactInput = ref("");
const isLoading = ref(false);
const message = ref("");
const messageType = ref<"success" | "error" | "">("");

const inputType = computed(() => {
  return contactMethod.value === "phone" ? "tel" : "email";
});

const placeholder = computed(() => {
  return contactMethod.value === "email" 
    ? "Your email address" 
    : "Your phone number (e.g., 0541234567)";
});

const toggleContactMethod = (method: "email" | "phone") => {
  contactMethod.value = method;
  contactInput.value = "";
  message.value = "";
  messageType.value = "";
};

const hoverButton = (event: Event) => {
  (event.target as HTMLElement).style.backgroundColor = "#2A4A6B";
};

const leaveButton = (event: Event) => {
  (event.target as HTMLElement).style.backgroundColor = "#1A365D";
};

const showMessage = (msg: string, type: "success" | "error") => {
  message.value = msg;
  messageType.value = type;
  
  // Auto-clear success messages after 5 seconds
  if (type === "success") {
    setTimeout(() => {
      message.value = "";
      messageType.value = "";
    }, 5000);
  }
};

const handleSubmit = async () => {
  if (!contactInput.value.trim()) {
    showMessage(`Please enter your ${contactMethod.value}`, "error");
    return;
  }

  isLoading.value = true;
  message.value = "";
  messageType.value = "";

  try {
    if (contactMethod.value === "phone") {
      // SMS Newsletter Subscription
      const phoneValidation = newsletterService.validateGhanaPhone(contactInput.value);
      
      if (!phoneValidation.isValid) {
        showMessage(phoneValidation.error || "Invalid phone number format", "error");
        return;
      }

      const result = await newsletterService.subscribeToSMSNewsletter(
        phoneValidation.formatted,
        "Website"
      );

      if (result.success) {
        showMessage(
          "🎉 Successfully subscribed to SMS updates! You'll receive travel deals and updates via SMS.",
          "success"
        );
        contactInput.value = "";
      } else {
        showMessage(result.message || "Failed to subscribe. Please try again.", "error");
      }

    } else {
      // Email Newsletter Subscription
      const emailValidation = newsletterService.validateEmail(contactInput.value);
      
      if (!emailValidation.isValid) {
        showMessage(emailValidation.error || "Invalid email address", "error");
        return;
      }

      const result = await newsletterService.subscribeToEmailNewsletter(
        contactInput.value,
        "Website"
      );

      if (result.success) {
        showMessage(result.message, "success");
        contactInput.value = "";
      } else {
        showMessage(result.message, "error");
      }
    }

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    showMessage(
      "Unable to process subscription. Please check your connection and try again.",
      "error"
    );
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.contact-method-btn {
  color: white;
}
.contact-method-btn.active {
  background-color: white;
  color: #ff7a59;
}
</style>
