import authService from '~/services/AuthService'

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('🛡️ Auth middleware checking route:', to.path);

    // Check if user is authenticated using AuthService
    const isAuth = authService.isAuthenticated();
    console.log('🔐 Middleware auth result:', isAuth);

    if (!isAuth) {
        console.log('❌ Not authenticated, redirecting to login');
        // Redirect to login with return URL
        return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
    }

    console.log('✅ Authenticated, allowing access to:', to.path);
    // AuthService already handles token validation including expiration checking
    // If we reach here, the user has a valid, non-expired token
}) 