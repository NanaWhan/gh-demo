// Notification system composable
import { ref, reactive, readonly } from 'vue'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  actions?: Array<{
    label: string
    action: () => void
    primary?: boolean
  }>
}

// Global notification state
const notifications = ref<Notification[]>([])

export const useNotifications = () => {
  // Add notification
  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    const newNotification: Notification = {
      id,
      duration: 5000, // Default 5 seconds
      ...notification
    }
    
    notifications.value.push(newNotification)
    
    // Auto remove after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }
    
    return id
  }

  // Remove notification
  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  // Clear all notifications
  const clearNotifications = () => {
    notifications.value = []
  }

  // Convenience methods
  const notifySuccess = (title: string, message: string, options?: Partial<Notification>) => {
    return addNotification({
      type: 'success',
      title,
      message,
      ...options
    })
  }

  const notifyError = (title: string, message: string, options?: Partial<Notification>) => {
    return addNotification({
      type: 'error',
      title,
      message,
      duration: 8000, // Errors stay longer
      ...options
    })
  }

  const notifyWarning = (title: string, message: string, options?: Partial<Notification>) => {
    return addNotification({
      type: 'warning',
      title,
      message,
      ...options
    })
  }

  const notifyInfo = (title: string, message: string, options?: Partial<Notification>) => {
    return addNotification({
      type: 'info',
      title,
      message,
      ...options
    })
  }

  // Quote-specific notifications
  const notifyQuoteSuccess = (referenceNumber: string, serviceType: string) => {
    return notifySuccess(
      `${serviceType} Quote Submitted!`,
      `Your quote request has been submitted successfully. Reference: ${referenceNumber}`,
      {
        duration: 10000, // Stay longer for important info
        actions: [
          {
            label: 'Track Booking',
            action: async () => {
              try {
                await navigateTo(`/track-booking?ref=${referenceNumber}`)
              } catch (e) {
                // Fallback if navigation fails
                window.location.href = `/track-booking?ref=${referenceNumber}`
              }
            },
            primary: true
          },
          {
            label: 'View Details',
            action: async () => {
              try {
                await navigateTo('/my-bookings')
              } catch (e) {
                // Fallback if navigation fails
                window.location.href = '/my-bookings'
              }
            }
          }
        ]
      }
    )
  }

  const notifyQuoteError = (serviceType: string, error: string) => {
    return notifyError(
      `${serviceType} Quote Failed`,
      `Failed to submit your quote request: ${error}`,
      {
        duration: 12000,
        actions: [
          {
            label: 'Try Again',
            action: () => {
              // Simple reload without async issues
              window.location.reload()
            },
            primary: true
          },
          {
            label: 'Contact Support',
            action: async () => {
              try {
                await navigateTo('/contact')
              } catch (e) {
                // Fallback if navigation fails
                window.location.href = '/contact'
              }
            }
          }
        ]
      }
    )
  }

  return {
    notifications: readonly(notifications),
    addNotification,
    removeNotification,
    clearNotifications,
    notifySuccess,
    notifyError,
    notifyWarning,
    notifyInfo,
    notifyQuoteSuccess,
    notifyQuoteError
  }
}