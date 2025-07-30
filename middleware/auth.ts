export default defineNuxtRouteMiddleware((to, from) => {
    // Check if user is authenticated
    const token = useCookie('auth-token')

    if (!token.value) {
        // Redirect to login with return URL
        return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
    }

    // TODO: Validate token with backend
    // For now, just check if token exists
    if (process.client && token.value) {
        // Optional: Verify token validity
        try {
            // You can add token validation logic here
            // const response = await $fetch('/api/auth/verify', {
            //   headers: { Authorization: `Bearer ${token.value}` }
            // })
        } catch (error) {
            // Token is invalid, clear it and redirect
            token.value = null
            return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
        }
    }
}) 