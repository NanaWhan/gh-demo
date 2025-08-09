<template>
  <section class="py-16 bg-gradient-to-r from-blue-50 via-white to-orange-50">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <div class="flex items-center justify-center gap-4 mb-4">
          <div
            class="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <h2 class="text-4xl font-bold text-gray-900">Travel News & Tips</h2>
          <div
            v-if="!loading"
            class="flex items-center gap-2 px-3 py-1 bg-red-100 rounded-full"
          >
            <div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-red-700">LIVE</span>
          </div>
        </div>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest travel updates, expert tips, and
          destination insights to make your journey amazing
        </p>

        <!-- API Status Indicator -->
        <div class="mt-4 flex justify-center gap-4 text-sm">
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
            ></span>
            <span class="text-gray-600">Real RSS Feeds</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span class="text-gray-600">Live Weather Data</span>
          </div>
          <div class="flex items-center gap-2">
            <span
              class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
            ></span>
            <span class="text-gray-600">Travel Alerts Active</span>
          </div>
        </div>
      </div>

      <!-- News Categories Tabs -->
      <div class="flex flex-wrap justify-center gap-2 mb-8">
        <button
          v-for="category in categories"
          :key="category.value"
          @click="activeCategory = category.value"
          :class="[
            'px-6 py-3 rounded-full font-semibold transition-all duration-200 flex items-center gap-2',
            activeCategory === category.value
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200',
          ]"
        >
          <span v-html="category.icon"></span>
          {{ category.label }}
        </button>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12">
        <div
          class="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
        ></div>
        <p class="text-gray-600">Loading travel updates...</p>
      </div>

      <!-- News Grid -->
      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        <article
          v-for="article in filteredNews"
          :key="article.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
          @click="openArticle(article)"
        >
          <!-- Article Image -->
          <div
            class="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-orange-400"
          >
            <img
              v-if="article.imageUrl"
              :src="article.imageUrl"
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div
              v-else
              class="flex items-center justify-center h-full text-white"
            >
              <div
                class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <svg
                  v-if="article.category === 'news'"
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
                  />
                </svg>
                <svg
                  v-else-if="article.category === 'tips'"
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"
                  />
                </svg>
                <svg
                  v-else-if="article.category === 'destination'"
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <svg
                  v-else-if="article.category === 'safety'"
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"
                  />
                </svg>
                <svg
                  v-else
                  class="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                  />
                </svg>
              </div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 left-4">
              <span
                :class="getCategoryColor(article.category)"
                class="px-3 py-1 rounded-full text-xs font-semibold text-white"
              >
                {{ getCategoryLabel(article.category) }}
              </span>
            </div>

            <!-- Source Badge -->
            <div class="absolute top-4 right-4">
              <span
                class="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs"
              >
                {{ article.source }}
              </span>
            </div>
          </div>

          <!-- Article Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
            >
              {{ article.title }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ article.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in article.tags.slice(0, 3)"
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
              >
                #{{ tag }}
              </span>
            </div>

            <!-- Article Footer -->
            <div
              class="flex items-center justify-between text-sm text-gray-500"
            >
              <span>{{ formatDate(article.publishedAt) }}</span>
              <span
                class="text-blue-600 font-semibold group-hover:text-blue-700"
              >
                Read More →
              </span>
            </div>
          </div>
        </article>
      </div>

      <!-- Travel Tips Quick Cards -->
      <div class="bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 rounded-3xl shadow-xl border border-gray-100/50 p-8 mb-12 backdrop-blur-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900">Quick Travel Tips</h3>
              <p class="text-gray-600 mt-1">Expert advice for smart travelers</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              @click="refreshTips"
              class="px-4 py-2 bg-white/80 hover:bg-white border border-blue-200 text-blue-700 hover:text-blue-800 font-medium rounded-xl flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span class="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="tip in travelTips.slice(0, 4)"
            :key="tip.id"
            class="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 hover:border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <!-- Icon and Category Badge -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-orange-100 group-hover:to-orange-200 transition-colors duration-300">
                  <span v-html="getTipIcon(tip.category)"></span>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-gray-900 text-base leading-tight group-hover:text-orange-700 transition-colors">
                    {{ tip.title }}
                  </h4>
                  <span class="inline-block mt-1 px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 rounded-full text-xs font-medium capitalize">
                    {{ tip.category }}
                  </span>
                </div>
              </div>
            </div>
            
            <p class="text-sm text-gray-700 line-clamp-3 mb-4 leading-relaxed">{{ tip.content }}</p>

            <!-- Enhanced Rating Display -->
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <div class="flex">
                  <svg
                    v-for="star in 5"
                    :key="star"
                    class="w-4 h-4 transition-colors"
                    :class="star <= tip.rating ? 'text-yellow-400' : 'text-gray-300'"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-semibold text-gray-900">{{ tip.rating }}</span>
              </div>
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weather Widget for Popular Destinations -->
      <div class="bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 rounded-3xl shadow-xl border border-gray-100/50 p-8 backdrop-blur-sm">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div class="flex items-center gap-4">
            <div
              class="w-14 h-14 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-3xl font-bold text-gray-900">Destination Weather</h3>
              <p class="text-gray-600 mt-1">Live weather updates worldwide</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              @click="refreshWeather"
              class="px-4 py-2 bg-white/80 hover:bg-white border border-blue-200 text-blue-700 hover:text-blue-800 font-medium rounded-xl flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span class="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="weather in destinationWeather"
            :key="weather.destination"
            class="group relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            <!-- City Name -->
            <h4 class="font-bold text-gray-900 text-lg mb-3 group-hover:text-blue-700 transition-colors">
              {{ weather.destination }}
            </h4>
            
            <!-- Weather Icon -->
            <div class="mb-4 flex justify-center">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-sky-300 transition-colors duration-300">
                <span v-html="getWeatherIcon(weather.condition)"></span>
              </div>
            </div>
            
            <!-- Temperature -->
            <div class="mb-3">
              <div class="text-3xl font-bold text-gray-900 mb-1">
                {{ Math.round(weather.temperature) }}°
              </div>
              <div class="text-sm text-gray-600 capitalize font-medium">
                {{ weather.description }}
              </div>
            </div>
            
            <!-- Additional Info -->
            <div class="pt-3 border-t border-gray-100 flex items-center justify-center">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span class="text-xs text-gray-500 font-medium">Live Update</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <nuxt-link
          to="/travel-news"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <span>View All Travel News</span>
          <svg
            class="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>

    <!-- Article Modal -->
    <div
      v-if="selectedArticle"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click="closeArticle"
    >
      <div
        class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <div>
              <span
                :class="getCategoryColor(selectedArticle.category)"
                class="px-3 py-1 rounded-full text-xs font-semibold text-white"
              >
                {{ getCategoryLabel(selectedArticle.category) }}
              </span>
              <span class="ml-2 text-sm text-gray-500">{{
                selectedArticle.source
              }}</span>
            </div>
            <button
              @click="closeArticle"
              class="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            {{ selectedArticle.title }}
          </h1>
          <div class="text-gray-600 mb-6">
            {{ formatDate(selectedArticle.publishedAt) }}
          </div>

          <div class="prose max-w-none text-gray-700 leading-relaxed">
            {{ selectedArticle.content }}
          </div>

          <div class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="tag in selectedArticle.tags"
              :key="tag"
              class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              #{{ tag }}
            </span>
          </div>

          <div class="mt-8 pt-6 border-t border-gray-200">
            <a
              :href="selectedArticle.url"
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read Full Article
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import travelNewsService, { type TravelNews, type TravelTip, type WeatherData } from '~/services/TravelNewsService'

// Reactive data
const loading = ref(true)
const activeCategory = ref('all')
const selectedArticle = ref<TravelNews | null>(null)
const travelNews = ref<TravelNews[]>([])
const travelTips = ref<TravelTip[]>([])
const destinationWeather = ref<WeatherData[]>([])

// Categories with professional icons
const categories = [
  {
    value: 'all',
    label: 'All Updates',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    value: 'news',
    label: 'Travel News',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>`
  },
  {
    value: 'tips',
    label: 'Travel Tips',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`
  },
  {
    value: 'destination',
    label: 'Destinations',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
  },
  {
    value: 'safety',
    label: 'Safety',
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
  }
]

// Popular destinations for weather
const popularDestinations = ['Dubai', 'London', 'New York', 'Tokyo', 'Paris']

// Computed
const filteredNews = computed(() => {
  if (activeCategory.value === 'all') {
    return travelNews.value
  }
  return travelNews.value.filter(article => article.category === activeCategory.value)
})

// Methods
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    news: 'bg-blue-600',
    tips: 'bg-green-600',
    destination: 'bg-orange-600',
    safety: 'bg-red-600',
    deals: 'bg-purple-600'
  }
  return colors[category] || 'bg-gray-600'
}

const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    news: 'Travel News',
    tips: 'Travel Tips',
    destination: 'Destination',
    safety: 'Safety Alert',
    deals: 'Travel Deals'
  }
  return labels[category] || 'Update'
}

const getTipIcon = (category: string): string => {
  const icons: Record<string, string> = {
    budget: `<svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    packing: `<svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 12l6-3m-4 9l4-2"/></svg>`,
    safety: `<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    cultural: `<svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    transportation: `<svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>`,
    food: `<svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 8l1.6 8h12.8M7 13v8m5-8v8m5-8v8M9 7h1m4 0h1"/></svg>`,
    health: `<svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
  }
  return icons[category] || `<svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`
}

const getWeatherIcon = (condition: string): string => {
  const icons: Record<string, string> = {
    Clear: `<svg class="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L6.76,6.76C6.68,7.17 6.64,7.58 6.64,8H3.34C3.34,7.67 3.34,7.33 3.34,7M20.66,7C20.66,7.33 20.66,7.67 20.66,8H17.36C17.36,7.58 17.32,7.17 17.24,6.76L20.66,7M3.34,17L6.76,17.24C6.68,16.83 6.64,16.42 6.64,16H3.34C3.34,16.33 3.34,16.67 3.34,17M20.66,17C20.66,16.67 20.66,16.33 20.66,16H17.36C17.36,16.42 17.32,16.83 17.24,17.24L20.66,17M5.42,14.39L8.84,14.84C8.76,14.54 8.7,14.27 8.7,14H5.42V14.39M18.58,14.39V14H15.3C15.3,14.27 15.24,14.54 15.16,14.84L18.58,14.39Z"/></svg>`,
    Clouds: `<svg class="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z"/></svg>`,
    Rain: `<svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M14,17H12L10,19H8L10,17C10,16.45 10.45,16 11,16H13C13.55,16 14,16.45 14,17M18,17H16L14,19H12L14,17C14,16.45 14.45,16 15,16H17C17.55,16 18,16.45 18,17Z"/></svg>`,
    Snow: `<svg class="w-8 h-8 text-blue-300" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M12,21L9,18H11V16H13V18H15L12,21M8,17H6V15H8V17M18,17H16V15H18V17Z"/></svg>`,
    Thunderstorm: `<svg class="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M14.82,17L13.82,18H16L13,22L8.18,17L9.18,16H7L10,12L14.82,17Z"/></svg>`,
    Drizzle: `<svg class="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M11,18V16H13V18H11M7,18V16H9V18H7M15,18V16H17V18H15Z"/></svg>`,
    Mist: `<svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04M17,17H21V19H17V17M2,17H8V19H2V17M14,17H16V19H14V17M10,17H12V19H10V17Z"/></svg>`
  }
  return icons[condition] || `<svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z"/></svg>`
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const openArticle = (article: TravelNews) => {
  selectedArticle.value = article
}

const closeArticle = () => {
  selectedArticle.value = null
}

const refreshTips = async () => {
  try {
    const tips = await travelNewsService.getTravelTips()
    travelTips.value = tips
  } catch (error) {
    console.error('Failed to refresh tips:', error)
  }
}

const refreshWeather = async () => {
  try {
    console.log('🌤️ Refreshing weather data for all destinations...')

    // Clear current weather data
    weatherData.value = []

    // Reload weather for popular destinations
    const weatherPromises = popularDestinations.map(destination =>
      travelNewsService.getDestinationWeather(destination)
    )

    const weatherResults = await Promise.allSettled(weatherPromises)

    weatherResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        weatherData.value.push(result.value)
        console.log(`✅ Refreshed weather for ${popularDestinations[index]}:`, {
          temp: result.value.temperature,
          condition: result.value.condition
        })
      } else {
        console.warn(`⚠️ Failed to refresh weather for ${popularDestinations[index]}`)
      }
    })

    console.log(`🌤️ Weather refresh complete! Loaded ${weatherData.value.length} weather reports`)
  } catch (error) {
    console.error('Failed to refresh weather:', error)
  }
}

// Load data on mount
onMounted(async () => {
  try {
    console.log('🌍 Loading travel news and tips...')

    const [news, tips] = await Promise.all([
      travelNewsService.getTravelNews(12),
      travelNewsService.getTravelTips()
    ])

    travelNews.value = news
    travelTips.value = tips

    console.log(`📰 Loaded ${news.length} news articles`)
    console.log(`💡 Loaded ${tips.length} travel tips`)

    // Load weather for popular destinations
    const weatherPromises = popularDestinations.map(destination =>
      travelNewsService.getDestinationWeather(destination)
    )

    const weatherResults = await Promise.allSettled(weatherPromises)
    destinationWeather.value = weatherResults
      .filter(result => result.status === 'fulfilled' && result.value)
      .map(result => (result as PromiseFulfilledResult<WeatherData>).value)

    console.log(`🌤️ Loaded weather for ${destinationWeather.value.length} destinations`)

    // Display cache stats in development
    if (process.env.NODE_ENV === 'development') {
      const cacheStats = travelNewsService.getCacheStats()
      console.log('📊 Cache stats:', cacheStats)
    }

  } catch (error) {
    console.error('❌ Failed to load travel data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  line-height: 1.7;
}

.prose p {
  margin-bottom: 1rem;
}
</style>
