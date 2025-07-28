<template>
  <!-- Newsletter -->
  <section class="py-16 bg-accent">
    <div class="max-w-4xl mx-auto px-4 text-center text-white">
      <h2 class="text-3xl font-bold mb-2">Stay Updated</h2>
      <p class="mb-6">
        Subscribe to our newsletter for travel deals, visa updates, and expert
        tips.
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

        <div class="flex flex-col md:flex-row gap-2">
          <input
            v-model="contactInput"
            :type="contactMethod"
            :placeholder="
              contactMethod === 'email'
                ? 'Your email address'
                : 'Your phone number'
            "
            class="px-4 py-3 rounded-lg flex-grow text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            class="px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:transform hover:scale-105"
            style="background-color: #1a365d; color: white"
            @mouseover="hoverButton"
            @mouseleave="leaveButton"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const contactMethod = ref("email");
const contactInput = ref("");

const toggleContactMethod = (method) => {
  contactMethod.value = method;
  contactInput.value = "";
};

const hoverButton = (event) => {
  event.target.style.backgroundColor = "#2A4A6B";
};

const leaveButton = (event) => {
  event.target.style.backgroundColor = "#1A365D";
};

const handleSubmit = () => {
  // Handle form submission
  if (contactInput.value) {
    alert(
      `Thank you for subscribing with your ${contactMethod.value}: ${contactInput.value}`
    );
    contactInput.value = "";
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
