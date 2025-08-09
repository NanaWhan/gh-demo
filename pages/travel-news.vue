<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50"
  >
    <!-- Hero Section -->
    <section
      class="relative py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800"
    >
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-4 text-center">
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6"
        >
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 sm:w-8 sm:h-8 text-white"
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
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center"
          >
            Travel News & Updates
          </h1>
          <div
            class="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-500 bg-opacity-90 rounded-full"
          >
            <div
              class="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"
            ></div>
            <span class="text-xs sm:text-sm font-medium text-white">LIVE</span>
          </div>
        </div>
        <p
          class="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-6 sm:mb-8 px-4"
        >
          Stay ahead with real-time travel updates, expert insights, and
          destination guides from trusted sources worldwide
        </p>

        <!-- Search Bar -->
        <div class="max-w-2xl mx-auto px-4">
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search travel news, destinations..."
              class="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 text-sm sm:text-lg bg-white bg-opacity-90 rounded-xl sm:rounded-2xl shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:bg-white"
            />
            <svg
              class="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 py-6 sm:py-12">
      <!-- Filters & Categories -->
      <div class="mb-6 sm:mb-8">
        <!-- Category Filters -->
        <div class="mb-4 sm:mb-6">
          <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button
              v-for="category in categories"
              :key="category.value"
              @click="activeCategory = category.value"
              :class="[
                'px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-200 flex items-center gap-1 sm:gap-2',
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm',
              ]"
            >
              <span v-html="category.icon" class="hidden sm:inline"></span>
              {{ category.label }}
            </button>
          </div>
        </div>

        <!-- Controls Row -->
        <div
          class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4"
        >
          <!-- Sort Options -->
          <div class="flex items-center gap-3 order-2 sm:order-1">
            <select
              v-model="sortBy"
              class="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            >
              <option value="date">Latest First</option>
              <option value="source">By Source</option>
              <option value="category">By Category</option>
            </select>

            <button
              @click="refreshNews"
              :disabled="loading"
              class="flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm sm:text-base whitespace-nowrap"
            >
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4"
                :class="{ 'animate-spin': loading }"
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

          <!-- View Mode Toggle -->
          <div class="flex items-center gap-2 order-1 sm:order-2">
            <button
              @click="viewMode = 'grid'"
              :class="[
                'p-2 rounded-lg transition-colors',
                viewMode === 'grid'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600',
              ]"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
                />
              </svg>
            </button>
            <button
              @click="viewMode = 'list'"
              :class="[
                'p-2 rounded-lg transition-colors',
                viewMode === 'list'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600',
              ]"
            >
              <svg
                class="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Stats Bar -->
        <div class="bg-white rounded-xl p-3 sm:p-4 shadow-sm mt-4">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              ></div>
              <span>{{ filteredNews.length }} articles</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>{{ uniqueSources.length }} sources</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span class="hidden sm:inline"
                >Last updated: {{ lastUpdated }}</span
              >
              <span class="sm:hidden">Updated: {{ lastUpdated }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-center py-12 sm:py-16">
        <div
          class="animate-spin w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4 sm:mb-6"
        ></div>
        <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          Loading Travel Updates
        </h3>
        <p class="text-sm sm:text-base text-gray-600 px-4">
          Fetching the latest news from trusted sources...
        </p>
      </div>

      <!-- News Content -->
      <div v-else>
        <!-- Grid View -->
        <div
          v-if="viewMode === 'grid'"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
        >
          <article
            v-for="article in paginatedNews"
            :key="article.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            @click="openArticle(article)"
          >
            <!-- Article Image -->
            <div
              class="relative overflow-hidden h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-orange-400"
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
                  class="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
                >
                  <component
                    :is="getCategoryIcon(article.category)"
                    class="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>

              <!-- Category Badge -->
              <div class="absolute top-2 sm:top-4 left-2 sm:left-4">
                <span
                  :class="getCategoryColor(article.category)"
                  class="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white"
                >
                  {{ getCategoryLabel(article.category) }}
                </span>
              </div>

              <!-- Source Badge -->
              <div class="absolute top-2 sm:top-4 right-2 sm:right-4">
                <span
                  class="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs"
                >
                  {{ article.source }}
                </span>
              </div>
            </div>

            <!-- Article Content -->
            <div class="p-4 sm:p-6">
              <h3
                class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
              >
                {{ article.title }}
              </h3>
              <p
                class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-3"
              >
                {{ article.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
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
                class="flex items-center justify-between text-xs sm:text-sm text-gray-500"
              >
                <span class="truncate mr-2">{{
                  formatDate(article.publishedAt)
                }}</span>
                <span
                  class="text-blue-600 font-semibold group-hover:text-blue-700 whitespace-nowrap"
                  >Read More →</span
                >
              </div>
            </div>
          </article>
        </div>

        <!-- List View -->
        <div v-else class="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <article
            v-for="article in paginatedNews"
            :key="article.id"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            @click="openArticle(article)"
          >
            <div class="flex flex-col sm:flex-row">
              <!-- Article Image -->
              <div
                class="w-full sm:w-48 h-32 sm:h-32 bg-gradient-to-br from-blue-400 to-orange-400 flex-shrink-0"
              >
                <img
                  v-if="article.imageUrl"
                  :src="article.imageUrl"
                  :alt="article.title"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="flex items-center justify-center h-full text-white"
                >
                  <component
                    :is="getCategoryIcon(article.category)"
                    class="w-6 h-6 sm:w-8 sm:h-8"
                  />
                </div>
              </div>

              <!-- Article Content -->
              <div class="flex-1 p-4 sm:p-6">
                <div
                  class="flex flex-col sm:flex-row items-start justify-between mb-3 gap-2 sm:gap-3"
                >
                  <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span
                      :class="getCategoryColor(article.category)"
                      class="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white"
                    >
                      {{ getCategoryLabel(article.category) }}
                    </span>
                    <span class="text-xs sm:text-sm text-gray-500">{{
                      article.source
                    }}</span>
                  </div>
                  <span class="text-xs sm:text-sm text-gray-500 self-start">{{
                    formatDate(article.publishedAt)
                  }}</span>
                </div>

                <h3
                  class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 hover:text-blue-600 transition-colors"
                >
                  {{ article.title }}
                </h3>
                <p
                  class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2"
                >
                  {{ article.description }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1 sm:gap-2">
                  <span
                    v-for="tag in article.tags.slice(0, 4)"
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div
          v-if="totalPages > 1"
          class="flex items-center justify-center gap-1 sm:gap-2 px-4"
        >
          <button
            @click="currentPage = Math.max(1, currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            <span class="hidden sm:inline">Previous</span>
            <span class="sm:hidden">Prev</span>
          </button>

          <span
            v-for="page in visiblePages"
            :key="page"
            class="px-3 sm:px-4 py-2 rounded-lg cursor-pointer text-sm sm:text-base"
            :class="
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 hover:bg-gray-50'
            "
            @click="currentPage = page"
          >
            {{ page }}
          </span>

          <button
            @click="currentPage = Math.min(totalPages, currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            <span class="hidden sm:inline">Next</span>
            <span class="sm:hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Article Modal -->
    <div
      v-if="selectedArticle"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
      @click="closeArticle"
    >
      <div
        class="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-4 sm:p-6 lg:p-8">
          <div class="flex items-start justify-between mb-4 sm:mb-6 gap-4">
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span
                  :class="getCategoryColor(selectedArticle.category)"
                  class="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white"
                >
                  {{ getCategoryLabel(selectedArticle.category) }}
                </span>
                <span class="text-xs sm:text-sm text-gray-500">{{
                  selectedArticle.source
                }}</span>
              </div>
            </div>
            <button
              @click="closeArticle"
              class="text-gray-400 hover:text-gray-600 text-xl sm:text-2xl p-1"
            >
              ×
            </button>
          </div>

          <h1
            class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4"
          >
            {{ selectedArticle.title }}
          </h1>
          <div class="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            {{ formatDate(selectedArticle.publishedAt) }}
          </div>

          <div
            class="prose max-w-none text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6"
          >
            {{ selectedArticle.content }}
          </div>

          <div class="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            <span
              v-for="tag in selectedArticle.tags"
              :key="tag"
              class="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
            >
              #{{ tag }}
            </span>
          </div>

          <div class="pt-4 sm:pt-6 border-t border-gray-200">
            <a
              :href="selectedArticle.url"
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
            >
              Read Full Article
              <svg
                class="w-3 h-3 sm:w-4 sm:h-4 ml-1"
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
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, h } from 'vue'
import travelNewsService, { type TravelNews } from '~/services/TravelNewsService'

// SEO
useHead({
  title: 'Travel News & Updates - Global Horizons',
  meta: [
    { name: 'description', content: 'Stay informed with the latest travel news, updates, and expert insights from around the world.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

// Reactive data
const loading = ref(true)
const searchQuery = ref('')
const activeCategory = ref('all')
const sortBy = ref('date')
const viewMode = ref<'grid' | 'list'>('grid')
const currentPage = ref(1)
const itemsPerPage = 12
const selectedArticle = ref<TravelNews | null>(null)
const travelNews = ref<TravelNews[]>([])

// Categories
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

// Computed properties
const filteredNews = computed(() => {
  let filtered = travelNews.value

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(article => article.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Sort articles
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'date':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      case 'source':
        return a.source.localeCompare(b.source)
      case 'category':
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  return filtered
})

const paginatedNews = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredNews.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(filteredNews.value.length / itemsPerPage))

const visiblePages = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const uniqueSources = computed(() => {
  return [...new Set(travelNews.value.map(article => article.source))]
})

const lastUpdated = computed(() => {
  const latest = travelNews.value[0]
  return latest ? formatDate(latest.publishedAt) : 'Never'
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

const getCategoryIcon = (category: string) => {
  // Return inline SVG content for each category
  const icons: Record<string, string> = {
    news: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
    tips: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
    destination: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
    safety: 'M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z',
    deals: 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'
  }

  return h('svg', {
    class: 'w-8 h-8',
    fill: 'currentColor',
    viewBox: '0 0 24 24'
  }, [
    h('path', { d: icons[category] || icons.news })
  ])
}

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const openArticle = (article: TravelNews) => {
  selectedArticle.value = article
}

const closeArticle = () => {
  selectedArticle.value = null
}

const refreshNews = async () => {
  loading.value = true
  try {
    travelNewsService.clearCache()
    const news = await travelNewsService.getTravelNews(50)
    travelNews.value = news
    currentPage.value = 1
  } catch (error) {
    console.error('Failed to refresh news:', error)
  } finally {
    loading.value = false
  }
}

// Watch for search/filter changes to reset pagination
watch([searchQuery, activeCategory], () => {
  currentPage.value = 1
})

// Load data on mount
onMounted(async () => {
  try {
    const news = await travelNewsService.getTravelNews(50)
    travelNews.value = news
  } catch (error) {
    console.error('Failed to load travel news:', error)
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
