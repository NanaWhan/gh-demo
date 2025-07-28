<template>
  <div class="font-sans antialiased text-gray-800">
    <!-- Navbar -->
    <NavBar />

    <!-- Hero Section -->
    <section class="relative h-screen pt-16 overflow-hidden">
      <div
        class="absolute inset-0 bg-cover bg-center"
        style="
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.4)
            ),
            url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2835&auto=format&fit=crop');
        "
      ></div>

      <div
        class="relative z-10 h-full flex items-center justify-center text-center text-white px-4"
      >
        <div class="max-w-5xl mx-auto">
          <div
            class="mb-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full"
          >
            <span class="text-sm font-medium"
              >✈️ Curated Travel Experiences</span
            >
          </div>
          <h1
            class="hero-title-mobile text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
          >
            Discover Your Next Adventure
          </h1>
          <p
            class="hero-subtitle-mobile text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto"
          >
            From exotic beaches to cultural expeditions, luxury escapes to
            adventure tours. Find your perfect journey with our expertly crafted
            travel packages.
          </p>

          <!-- Quick Search Bar -->
          <div
            class="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 max-w-4xl mx-auto mb-8 mobile-container"
          >
            <div
              class="tours-search-grid grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Destination</label
                >
                <select
                  v-model="searchFilters.destination"
                  class="tours-search-select mobile-select mobile-focus w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">All Destinations</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="america">Americas</option>
                  <option value="africa">Africa</option>
                  <option value="oceania">Oceania</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Duration</label
                >
                <select
                  v-model="searchFilters.duration"
                  class="tours-search-select mobile-select mobile-focus w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Any Duration</option>
                  <option value="short">1-3 Days</option>
                  <option value="medium">4-7 Days</option>
                  <option value="long">8+ Days</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Budget</label
                >
                <select
                  v-model="searchFilters.budget"
                  class="tours-search-select mobile-select mobile-focus w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="">Any Budget</option>
                  <option value="budget">Under $1,000</option>
                  <option value="mid">$1,000 - $3,000</option>
                  <option value="luxury">$3,000+</option>
                </select>
              </div>
              <div class="flex items-end">
                <button
                  @click="applyFilters"
                  class="tours-search-button mobile-button mobile-focus w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-all duration-300 font-semibold"
                >
                  Search Tours
                </button>
              </div>
            </div>
          </div>

          <div
            class="hero-buttons-mobile flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#featured-tours"
              class="hero-button-mobile px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              Browse Featured Tours
            </a>
            <a
              href="#tour-categories"
              class="hero-button-mobile px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 hover:transform hover:scale-105 border border-white/30"
            >
              Explore Categories
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tour Categories -->
    <section id="tour-categories" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Tour Categories</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect travel style from our diverse range of expertly
            curated experiences.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Adventure Tours -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                alt="Adventure Tours"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">Adventure Tours</h3>
                <p class="text-white/90 text-sm">Thrilling experiences</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">
                Hiking, trekking, extreme sports, and outdoor adventures for the
                adrenaline seekers.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">15+ Tours Available</span>
                <button class="text-accent font-semibold hover:underline">
                  Explore →
                </button>
              </div>
            </div>
          </div>

          <!-- Cultural Tours -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1660549895667-cb9fae3b3be3?q=80&w=1666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cultural Tours"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">Cultural Tours</h3>
                <p class="text-white/90 text-sm">Rich heritage</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">
                Immerse yourself in local traditions, history, art, and
                authentic cultural experiences.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">22+ Tours Available</span>
                <button class="text-accent font-semibold hover:underline">
                  Explore →
                </button>
              </div>
            </div>
          </div>

          <!-- Luxury Tours -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
                alt="Luxury Tours"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">Luxury Tours</h3>
                <p class="text-white/90 text-sm">Premium comfort</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">
                Five-star accommodations, private guides, and exclusive
                experiences for discerning travelers.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">12+ Tours Available</span>
                <button class="text-accent font-semibold hover:underline">
                  Explore →
                </button>
              </div>
            </div>
          </div>

          <!-- Beach & Island Tours -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div class="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop"
                alt="Beach Tours"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-4 left-4">
                <h3 class="text-xl font-bold text-white">Beach & Islands</h3>
                <p class="text-white/90 text-sm">Tropical paradise</p>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">
                Pristine beaches, crystal waters, water sports, and relaxing
                island getaways.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">18+ Tours Available</span>
                <button class="text-accent font-semibold hover:underline">
                  Explore →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Tours -->
    <section id="featured-tours" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Featured Tour Packages
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular and highly-rated tour packages, carefully selected
            for unforgettable experiences.
          </p>
        </div>

        <div
          class="card-grid-mobile grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <!-- Tour 1: London & Paris -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
                alt="London & Paris Tour"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  🔥 Bestseller
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <span
                  class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  7 Days
                </span>
              </div>
              <div class="absolute bottom-4 left-4">
                <div class="flex items-center space-x-2">
                  <img
                    src="https://flagcdn.com/gb.svg"
                    alt="UK"
                    class="w-6 h-4 rounded"
                  />
                  <img
                    src="https://flagcdn.com/fr.svg"
                    alt="France"
                    class="w-6 h-4 rounded"
                  />
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">London & Paris Classic</h3>
              <p class="text-gray-600 mb-4 text-sm">
                Discover two of Europe's most iconic cities. Experience Big Ben,
                Tower Bridge, Eiffel Tower, and Louvre Museum.
              </p>

              <!-- Pricing Calculator Section -->
              <div class="pricing-calculator bg-gray-50 rounded-xl p-4 mb-4">
                <h4 class="font-semibold mb-3 text-sm">Calculate Your Price</h4>
                <div class="space-y-3">
                  <div class="pricing-grid grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Adults</label
                      >
                      <div class="quantity-selector flex items-center">
                        <div class="quantity-buttons flex items-center">
                          <button
                            @click="
                              updateQuantity('london-paris', 'adults', -1)
                            "
                            class="touch-target w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span
                            class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm font-medium"
                          >
                            {{ tourPricing["london-paris"].adults }}
                          </span>
                          <button
                            @click="updateQuantity('london-paris', 'adults', 1)"
                            class="touch-target w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Children</label
                      >
                      <div class="quantity-selector flex items-center">
                        <div class="quantity-buttons flex items-center">
                          <button
                            @click="
                              updateQuantity('london-paris', 'children', -1)
                            "
                            class="touch-target w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span
                            class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm font-medium"
                          >
                            {{ tourPricing["london-paris"].children }}
                          </span>
                          <button
                            @click="
                              updateQuantity('london-paris', 'children', 1)
                            "
                            class="touch-target w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="total-price flex items-center justify-between pt-2 border-t"
                  >
                    <span class="font-semibold">Total Price:</span>
                    <span
                      class="total-price-text text-xl font-bold text-accent"
                    >
                      ${{ calculateTourPrice("london-paris") }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-500">⭐ 4.9 (127 reviews)</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full"
                  >Available</span
                >
              </div>
              <button
                class="tour-card-button mobile-button mobile-focus w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Book Now - ${{ calculateTourPrice("london-paris") }}
              </button>
            </div>
          </div>

          <!-- Tour 2: Dubai Adventure -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
                alt="Dubai Adventure"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  ⭐ Premium
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <span
                  class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  5 Days
                </span>
              </div>
              <div class="absolute bottom-4 left-4">
                <img
                  src="https://flagcdn.com/ae.svg"
                  alt="UAE"
                  class="w-6 h-4 rounded"
                />
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Dubai Luxury Experience</h3>
              <p class="text-gray-600 mb-4 text-sm">
                Desert safari, Burj Khalifa, luxury shopping, modern
                architecture, and traditional souks.
              </p>

              <!-- Pricing Calculator Section -->
              <div class="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 class="font-semibold mb-3 text-sm">Calculate Your Price</h4>
                <div class="space-y-3">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Adults</label
                      >
                      <div class="flex items-center">
                        <button
                          @click="updateQuantity('dubai', 'adults', -1)"
                          class="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span
                          class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm"
                        >
                          {{ tourPricing["dubai"].adults }}
                        </span>
                        <button
                          @click="updateQuantity('dubai', 'adults', 1)"
                          class="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Children</label
                      >
                      <div class="flex items-center">
                        <button
                          @click="updateQuantity('dubai', 'children', -1)"
                          class="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span
                          class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm"
                        >
                          {{ tourPricing["dubai"].children }}
                        </span>
                        <button
                          @click="updateQuantity('dubai', 'children', 1)"
                          class="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t">
                    <span class="font-semibold">Total Price:</span>
                    <span class="text-xl font-bold text-accent">
                      ${{ calculateTourPrice("dubai") }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-500">⭐ 4.8 (89 reviews)</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full"
                  >Available</span
                >
              </div>
              <button
                class="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Book Now - ${{ calculateTourPrice("dubai") }}
              </button>
            </div>
          </div>

          <!-- Tour 3: Singapore & Malaysia -->
          <div
            class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div class="relative">
              <img
                src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop"
                alt="Singapore Malaysia Tour"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute top-4 left-4">
                <span
                  class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  💰 Best Value
                </span>
              </div>
              <div class="absolute top-4 right-4">
                <span
                  class="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  6 Days
                </span>
              </div>
              <div class="absolute bottom-4 left-4">
                <div class="flex items-center space-x-2">
                  <img
                    src="https://flagcdn.com/sg.svg"
                    alt="Singapore"
                    class="w-6 h-4 rounded"
                  />
                  <img
                    src="https://flagcdn.com/my.svg"
                    alt="Malaysia"
                    class="w-6 h-4 rounded"
                  />
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Singapore & Malaysia Twin</h3>
              <p class="text-gray-600 mb-4 text-sm">
                Modern Singapore skyline, Gardens by the Bay, Kuala Lumpur
                towers, and cultural diversity.
              </p>

              <!-- Pricing Calculator Section -->
              <div class="bg-gray-50 rounded-xl p-4 mb-4">
                <h4 class="font-semibold mb-3 text-sm">Calculate Your Price</h4>
                <div class="space-y-3">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Adults</label
                      >
                      <div class="flex items-center">
                        <button
                          @click="
                            updateQuantity('singapore-malaysia', 'adults', -1)
                          "
                          class="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span
                          class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm"
                        >
                          {{ tourPricing["singapore-malaysia"].adults }}
                        </span>
                        <button
                          @click="
                            updateQuantity('singapore-malaysia', 'adults', 1)
                          "
                          class="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div>
                      <label class="block text-xs text-gray-600 mb-1"
                        >Children</label
                      >
                      <div class="flex items-center">
                        <button
                          @click="
                            updateQuantity('singapore-malaysia', 'children', -1)
                          "
                          class="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span
                          class="w-10 h-8 bg-white border-t border-b flex items-center justify-center text-sm"
                        >
                          {{ tourPricing["singapore-malaysia"].children }}
                        </span>
                        <button
                          @click="
                            updateQuantity('singapore-malaysia', 'children', 1)
                          "
                          class="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t">
                    <span class="font-semibold">Total Price:</span>
                    <span class="text-xl font-bold text-accent">
                      ${{ calculateTourPrice("singapore-malaysia") }}
                    </span>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-500">⭐ 4.7 (156 reviews)</span>
                <span
                  class="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full"
                  >Available</span
                >
              </div>
              <button
                class="w-full px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors font-semibold"
              >
                Book Now - ${{ calculateTourPrice("singapore-malaysia") }}
              </button>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <a
            href="#all-tours"
            class="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
          >
            View All Tour Packages
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Tours?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond the ordinary to create extraordinary travel experiences
            that you'll treasure forever.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div
              class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors"
            >
              <svg
                class="w-10 h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Expert Local Guides</h3>
            <p class="text-gray-600">
              Our certified local guides provide insider knowledge and authentic
              experiences you won't find elsewhere.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors"
            >
              <svg
                class="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Best Price Guarantee</h3>
            <p class="text-gray-600">
              Find the same tour cheaper elsewhere? We'll match the price and
              give you an additional 5% discount.
            </p>
          </div>

          <div class="text-center group">
            <div
              class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors"
            >
              <svg
                class="w-10 h-10 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">24/7 Support</h3>
            <p class="text-gray-600">
              Round-the-clock assistance before, during, and after your trip.
              We're always here when you need us.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p class="text-xl text-gray-600">
            Real experiences from real travelers who chose us for their
            adventures.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-3xl p-8">
            <div class="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 italic mb-6">
              "The London & Paris tour exceeded all expectations! Our guide
              Sarah was amazing, and the itinerary was perfectly balanced
              between must-see sights and local experiences."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b287?w=100&h=100&fit=crop&crop=face"
                alt="Rachel M."
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">Rachel M.</h4>
                <p class="text-sm text-gray-600">London & Paris Classic</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-3xl p-8">
            <div class="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 italic mb-6">
              "Dubai was absolutely incredible! The desert safari was a
              highlight, and staying at the Burj Al Arab made it feel like a
              once-in-a-lifetime experience."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Michael K."
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">Michael K.</h4>
                <p class="text-sm text-gray-600">Dubai Luxury Experience</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-3xl p-8">
            <div class="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-600 italic mb-6">
              "Singapore and Malaysia in one trip was brilliant! Great value for
              money, excellent hotels, and we loved experiencing both cultures
              in such a seamless way."
            </p>
            <div class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="David L."
                class="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 class="font-bold">David L.</h4>
                <p class="text-sm text-gray-600">Singapore & Malaysia Twin</p>
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

<script setup>
import { ref, reactive } from "vue";

// Search filters
const searchFilters = reactive({
  destination: "",
  duration: "",
  budget: "",
});

// Tour pricing data (like Adansi's system!)
const tourPricing = reactive({
  "london-paris": {
    adults: 2,
    children: 0,
    basePrice: { adult: 1299, child: 899 },
  },
  dubai: {
    adults: 2,
    children: 0,
    basePrice: { adult: 1899, child: 1299 },
  },
  "singapore-malaysia": {
    adults: 2,
    children: 0,
    basePrice: { adult: 999, child: 699 },
  },
});

// Update quantity function
const updateQuantity = (tour, type, change) => {
  const current = tourPricing[tour][type];
  const newValue = current + change;

  if (newValue >= 0 && newValue <= 10) {
    tourPricing[tour][type] = newValue;
  }
};

// Calculate total price function
const calculateTourPrice = (tour) => {
  const pricing = tourPricing[tour];
  const adultTotal = pricing.adults * pricing.basePrice.adult;
  const childTotal = pricing.children * pricing.basePrice.child;
  return (adultTotal + childTotal).toLocaleString();
};

// Apply search filters
const applyFilters = () => {
  // Here you would filter the tours based on selected criteria
  alert("Filtering tours based on your preferences...");
  console.log("Applied filters:", searchFilters);
};

// Meta data for SEO
useHead({
  title: "Tour Packages - Global Horizons Travel",
  meta: [
    {
      name: "description",
      content:
        "Discover amazing tour packages and travel experiences worldwide. From cultural tours to luxury getaways, adventure trips to beach vacations.",
    },
    {
      name: "keywords",
      content:
        "tour packages, travel tours, vacation packages, cultural tours, luxury travel, adventure tours, group tours",
    },
  ],
});
</script>
