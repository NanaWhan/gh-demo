<template>
  <Teleport to="body">
    <div class="notification-container">
      <TransitionGroup
        tag="div"
        name="notification"
        class="fixed top-4 right-4 z-50 space-y-2 max-w-sm w-full"
      >
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'notification-card rounded-lg shadow-lg p-4 border-l-4 backdrop-blur-sm',
            getNotificationClasses(notification.type)
          ]"
        >
          <!-- Header -->
          <div class="flex items-start justify-between">
            <div class="flex items-start space-x-3 flex-1">
              <!-- Icon -->
              <div class="flex-shrink-0">
                <component :is="getNotificationIcon(notification.type)" class="h-5 w-5" />
              </div>
              
              <!-- Content -->
              <div class="flex-1">
                <h4 class="text-sm font-semibold">{{ notification.title }}</h4>
                <p class="text-sm mt-1 opacity-90">{{ notification.message }}</p>
                
                <!-- Actions -->
                <div v-if="notification.actions && notification.actions.length > 0" class="mt-3 flex space-x-2">
                  <button
                    v-for="action in notification.actions"
                    :key="action.label"
                    :class="[
                      'text-xs px-3 py-1 rounded font-medium transition-colors',
                      action.primary 
                        ? 'bg-white bg-opacity-20 hover:bg-opacity-30 text-current'
                        : 'text-current opacity-75 hover:opacity-100 underline'
                    ]"
                    @click="action.action(); removeNotification(notification.id)"
                  >
                    {{ action.label }}
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Close button -->
            <button
              @click="removeNotification(notification.id)"
              class="flex-shrink-0 ml-2 text-current opacity-70 hover:opacity-100 transition-opacity"
            >
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { notifications, removeNotification } = useNotifications()

// Get notification styling classes
const getNotificationClasses = (type: string) => {
  const classes = {
    success: 'bg-green-50 border-green-400 text-green-800',
    error: 'bg-red-50 border-red-400 text-red-800',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
    info: 'bg-blue-50 border-blue-400 text-blue-800'
  }
  return classes[type as keyof typeof classes] || classes.info
}

// Get notification icon
const getNotificationIcon = (type: string) => {
  const icons = {
    success: () => h('svg', {
      class: 'h-5 w-5',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ]),
    error: () => h('svg', {
      class: 'h-5 w-5',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ]),
    warning: () => h('svg', {
      class: 'h-5 w-5',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.734 0L3.08 16.5c-.77.833.192 2.5 1.732 2.5z'
      })
    ]),
    info: () => h('svg', {
      class: 'h-5 w-5',
      fill: 'none',
      viewBox: '0 0 24 24',
      stroke: 'currentColor'
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ])
  }
  return icons[type as keyof typeof icons] || icons.info
}
</script>

<style scoped>
/* Notification animations */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform 0.3s ease;
}

/* Card styling */
.notification-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>