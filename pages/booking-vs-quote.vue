<template>
  <div>

    <!-- Page Header -->
    <section class="relative pt-32 pb-16 bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-700">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Quotes vs Bookings
          </h1>
          <p class="text-xl md:text-2xl mb-8 opacity-90">
            Understanding our two-step travel service process
          </p>
        </div>
      </div>
    </section>

    <!-- Explanation Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          
          <!-- Process Flow -->
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-gray-800 mb-8">How Our Travel Service Works</h2>
            <div class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
              
              <!-- Step 1: Quote -->
              <div class="bg-blue-50 rounded-lg p-8 max-w-sm">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-white text-2xl font-bold">1</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">💰 Get Quote</h3>
                <p class="text-gray-600 mb-4">
                  Request pricing information for your travel needs. No payment required, no login needed.
                </p>
                <ul class="text-sm text-gray-500 space-y-1">
                  <li>• Free pricing estimates</li>
                  <li>• No commitment required</li>
                  <li>• Compare options</li>
                  <li>• Valid for 30 days</li>
                </ul>
              </div>

              <!-- Arrow -->
              <div class="hidden md:block">
                <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>

              <!-- Step 2: Book -->
              <div class="bg-green-50 rounded-lg p-8 max-w-sm">
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-white text-2xl font-bold">2</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-4">✅ Confirm Booking</h3>
                <p class="text-gray-600 mb-4">
                  Accept the quote and make a confirmed reservation with payment. Account required.
                </p>
                <ul class="text-sm text-gray-500 space-y-1">
                  <li>• Secured reservations</li>
                  <li>• Payment processing</li>
                  <li>• Confirmation documents</li>
                  <li>• Full customer support</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Comparison Table -->
          <div class="bg-gray-50 rounded-lg p-8 mb-16">
            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">Quick Comparison</h3>
            <div class="overflow-x-auto">
              <table class="w-full table-auto">
                <thead>
                  <tr class="border-b-2 border-gray-200">
                    <th class="text-left py-4 px-4 font-semibold text-gray-800">Feature</th>
                    <th class="text-center py-4 px-4 font-semibold text-blue-600">💰 Quote Request</th>
                    <th class="text-center py-4 px-4 font-semibold text-green-600">✅ Confirmed Booking</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="py-4 px-4 font-medium">Login Required</td>
                    <td class="py-4 px-4 text-center">❌ No</td>
                    <td class="py-4 px-4 text-center">✅ Yes</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium">Payment Required</td>
                    <td class="py-4 px-4 text-center">❌ No</td>
                    <td class="py-4 px-4 text-center">✅ Yes</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium">Purpose</td>
                    <td class="py-4 px-4 text-center">Get pricing info</td>
                    <td class="py-4 px-4 text-center">Secure reservation</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium">Response Time</td>
                    <td class="py-4 px-4 text-center">2-24 hours</td>
                    <td class="py-4 px-4 text-center">Instant confirmation</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium">Tracking</td>
                    <td class="py-4 px-4 text-center">Public quote tracker</td>
                    <td class="py-4 px-4 text-center">Secure booking portal</td>
                  </tr>
                  <tr>
                    <td class="py-4 px-4 font-medium">Database</td>
                    <td class="py-4 px-4 text-center">QuoteRequest table</td>
                    <td class="py-4 px-4 text-center">BookingRequest table</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Action Cards -->
          <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Quote Card -->
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 class="text-xl font-bold text-blue-800 mb-4">💰 Start with a Quote</h3>
              <p class="text-gray-700 mb-6">
                Perfect if you want to compare prices, explore options, or just get an idea of costs before committing.
              </p>
              <div class="space-y-3 mb-6">
                <nuxt-link to="/hotel-booking" class="block bg-white border border-blue-300 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  🏨 Get Hotel Quote
                </nuxt-link>
                <nuxt-link to="/visa-booking" class="block bg-white border border-blue-300 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  🛂 Get Visa Service Quote
                </nuxt-link>
                <nuxt-link to="/flight-booking" class="block bg-white border border-blue-300 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  ✈️ Get Flight Quote
                </nuxt-link>
                <nuxt-link to="/tour-booking" class="block bg-white border border-blue-300 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                  🗺️ Get Tour Quote
                </nuxt-link>
              </div>
              <nuxt-link 
                to="/track-quote"
                class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Track My Quote
              </nuxt-link>
            </div>

            <!-- Booking Card -->
            <div class="bg-green-50 border border-green-200 rounded-lg p-8">
              <h3 class="text-xl font-bold text-green-800 mb-4">✅ Make a Booking</h3>
              <p class="text-gray-700 mb-6">
                Ready to confirm and pay? Access your secured booking portal to manage confirmed reservations.
              </p>
              <div class="space-y-3 mb-6">
                <div class="bg-white border border-green-300 rounded-lg p-3">
                  <p class="text-sm text-gray-600">✅ View confirmed bookings</p>
                </div>
                <div class="bg-white border border-green-300 rounded-lg p-3">
                  <p class="text-sm text-gray-600">✅ Track reservation status</p>
                </div>
                <div class="bg-white border border-green-300 rounded-lg p-3">
                  <p class="text-sm text-gray-600">✅ Download documents</p>
                </div>
                <div class="bg-white border border-green-300 rounded-lg p-3">
                  <p class="text-sm text-gray-600">✅ Manage payments</p>
                </div>
              </div>
              <nuxt-link 
                to="/my-bookings"
                class="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                My Bookings (Login Required)
              </nuxt-link>
            </div>
          </div>

          <!-- FAQ -->
          <div class="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h3>
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Q: Do I need to create an account to get a quote?</h4>
                <p class="text-gray-600">A: No! Quote requests are completely public and don't require any registration. Just provide your contact info and travel details.</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Q: How long are quotes valid?</h4>
                <p class="text-gray-600">A: Most quotes are valid for 30 days. You'll see the expiration date when tracking your quote.</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Q: Can I convert a quote to a booking?</h4>
                <p class="text-gray-600">A: Yes! Once you receive your quote, you can proceed to book it through our secure booking system (account required).</p>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800 mb-2">Q: What's the difference between "Track Quote" and "My Bookings"?</h4>
                <p class="text-gray-600">A: "Track Quote" is public and shows pricing requests. "My Bookings" requires login and shows confirmed reservations with payments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useHead({
  title: "Quotes vs Bookings - Global Horizons Travel Services",
  meta: [
    {
      name: "description",
      content: "Understand the difference between quote requests and confirmed bookings with Global Horizons Travel Services."
    }
  ]
});
</script>

<style scoped>
/* Custom table styling */
table {
  border-collapse: collapse;
}

/* Mobile optimization */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .text-4xl.md\\:text-5xl {
    font-size: 2rem;
  }
  
  .text-xl.md\\:text-2xl {
    font-size: 1.25rem;
  }
  
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
  }
}
</style>