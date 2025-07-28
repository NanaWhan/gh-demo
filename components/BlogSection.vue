<template>
  <!-- Blog -->
  <section
    id="blog"
    class="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden"
  >
    <!-- Background decorative elements -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="absolute top-32 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute bottom-32 right-20 w-80 h-80 bg-accent rounded-full blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative">
      <div class="text-center mb-16">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-accent bg-opacity-10 rounded-full mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
        <h2
          class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          Travel Updates & Tips
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Stay ahead with the latest travel insights, visa updates, and
          destination guides from our experts
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <!-- Article 1 -->
        <article
          class="group bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden hover-light-orange-bg"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop&auto=format"
              alt="USA Attractions"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute top-4 left-4">
              <span
                class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >Destinations</span
              >
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <div class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                May 10, 2025
              </div>
              <div class="ml-auto flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                5 min read
              </div>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent transition-colors duration-300"
            >
              Top 10 Must-See Attractions in the USA
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Discover the most iconic landmarks and hidden gems across the
              United States for your next adventure.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p class="text-sm font-medium text-gray-800">Sarah Johnson</p>
                  <p class="text-xs text-gray-500">Travel Writer</p>
                </div>
              </div>
              <a
                href="#"
                class="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors duration-300 group"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <!-- Article 2 -->
        <article
          class="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105 hover-light-blue-bg"
        >
          <div
            class="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200"
          >
            <img
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=400&fit=crop&auto=format"
              alt="Schengen Visa"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute top-4 left-4">
              <span
                class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >Visa Guide</span
              >
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <div class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                May 5, 2025
              </div>
              <div class="ml-auto flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                8 min read
              </div>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent transition-colors duration-300"
            >
              Schengen Visa: Latest Travel Regulations
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Stay up to date on the newest Schengen visa requirements and
              changes to ensure smooth travel planning.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p class="text-sm font-medium text-gray-800">Emma Wilson</p>
                  <p class="text-xs text-gray-500">Visa Expert</p>
                </div>
              </div>
              <a
                href="#"
                class="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors duration-300 group"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>

        <!-- Article 3 -->
        <article
          class="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:transform hover:scale-105 hover-light-orange-bg"
        >
          <div
            class="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200"
          >
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=400&fit=crop&auto=format"
              alt="Japan Work Visa"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute top-4 left-4">
              <span
                class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                >Work Abroad</span
              >
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <div class="flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                April 28, 2025
              </div>
              <div class="ml-auto flex items-center text-sm text-gray-500">
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                12 min read
              </div>
            </div>
            <h3
              class="text-xl font-bold mb-3 text-gray-800 group-hover:text-accent transition-colors duration-300"
            >
              Working Abroad in Japan: How to Apply
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              A step-by-step guide for securing a work visa in Japan with all
              documentation requirements explained.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <div>
                  <p class="text-sm font-medium text-gray-800">David Chen</p>
                  <p class="text-xs text-gray-500">Career Consultant</p>
                </div>
              </div>
              <a
                href="#"
                class="inline-flex items-center text-accent font-semibold hover:text-accent-dark transition-colors duration-300 group"
              >
                Read More
                <svg
                  class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- View All Articles Button -->
      <div class="text-center">
        <a
          href="#"
          class="inline-flex items-center px-8 py-4 bg-white border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
          View All Articles
        </a>
      </div>
    </div>
  </section>
</template>
