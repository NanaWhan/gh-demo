<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-95"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-95"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
      :class="{ 'animate-bounce': showBounce }"
      aria-label="Back to top"
      type="button"
    >
      <!-- Arrow Icon -->
      <svg
        class="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-y-0.5 transition-transform duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>

      <!-- Ripple Effect -->
      <span
        v-if="isScrolling"
        class="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"
      ></span>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const isVisible = ref(false)
const showBounce = ref(false)
const isScrolling = ref(false)
const scrollThreshold = 300 // Show button after scrolling 300px

// Throttle function for performance
function throttle(func: Function, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null
  let lastExecTime = 0

  return function (...args: any[]) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime > delay) {
      func(...args)
      lastExecTime = currentTime
    } else {
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
        lastExecTime = Date.now()
      }, delay - (currentTime - lastExecTime))
    }
  }
}

// Handle scroll events
const handleScroll = throttle(() => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Show/hide button based on scroll position
  const shouldShow = scrollTop > scrollThreshold

  if (shouldShow !== isVisible.value) {
    isVisible.value = shouldShow

    // Add bounce effect when first appearing
    if (shouldShow) {
      showBounce.value = true
      setTimeout(() => {
        showBounce.value = false
      }, 1000)
    }
  }
}, 100)

// Smooth scroll to top
const scrollToTop = () => {
  isScrolling.value = true

  // Smooth scroll behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  // Alternative fallback for browsers that don't support smooth scrolling
  if (!('scrollBehavior' in document.documentElement.style)) {
    smoothScrollPolyfill()
  }

  // Reset scrolling state after animation
  setTimeout(() => {
    isScrolling.value = false
  }, 800)
}

// Smooth scroll polyfill for older browsers
const smoothScrollPolyfill = () => {
  const startPosition = window.pageYOffset
  const startTime = performance.now()
  const duration = 800 // 800ms animation

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const animateScroll = (currentTime: number) => {
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    const easedProgress = easeInOutCubic(progress)
    const currentPosition = startPosition * (1 - easedProgress)

    window.scrollTo(0, currentPosition)

    if (progress < 1) {
      requestAnimationFrame(animateScroll)
    }
  }

  requestAnimationFrame(animateScroll)
}

// Keyboard accessibility
const handleKeydown = (event: KeyboardEvent) => {
  // Allow activation with Enter or Space
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    scrollToTop()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  // Initial check in case page is already scrolled
  handleScroll()

  // Add keyboard event listener
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Custom styles for enhanced visual effects */
@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

/* Ensure button stays above mobile navigation */
@media (max-width: 1023px) {
  button {
    bottom: 5rem; /* Stay above mobile bottom navigation */
  }
}

/* Enhanced focus styles for accessibility */
button:focus-visible {
  outline: 2px solid #fbbf24;
  outline-offset: 2px;
}

/* Disable bounce on reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animate-bounce {
    animation: none;
  }

  .transition-all {
    transition: none;
  }
}
</style>
