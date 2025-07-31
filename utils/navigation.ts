// ====================================================
// 🧭 Navigation Utilities - Bulletproof Redirects
// ====================================================

/**
 * Force redirect with complete page reload
 * Use this when navigation gets stuck
 */
export const forceRedirect = (path: string) => {
    console.log('🚀 Force redirecting to:', path);

    // Clear any potential navigation locks
    if (typeof window !== 'undefined') {
        // Force page reload to reset all state
        window.location.href = path;
    }
};

/**
 * Emergency reset - clears everything and goes home
 * Use this as last resort when app gets stuck
 */
export const emergencyReset = () => {
    console.log('🚨 Emergency reset triggered!');

    if (typeof window !== 'undefined') {
        try {
            // Clear all storage
            localStorage.clear();
            sessionStorage.clear();

            // Clear cookies by setting them to expire
            document.cookie.split(";").forEach((c) => {
                const eqPos = c.indexOf("=");
                const name = eqPos > -1 ? c.substr(0, eqPos) : c;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            });

            console.log('🧹 All storage cleared, redirecting to home...');

            // Force redirect to home
            window.location.href = '/';
        } catch (error) {
            console.error('Emergency reset failed:', error);
            // Force reload as fallback
            window.location.reload();
        }
    }
};

/**
 * Safe logout redirect
 */
export const safeLogout = async () => {
    console.log('🚪 Safe logout initiated...');

    try {
        // Import AuthService dynamically to avoid circular imports
        const { authService } = await import('~/services/AuthService');
        await authService.logout();
    } catch (error) {
        console.error('Logout API call failed:', error);
    }

    // Always force redirect regardless of API result
    forceRedirect('/');
};

/**
 * Safe login redirect
 */
export const safeLoginRedirect = (redirectTo?: string) => {
    const targetPath = redirectTo || '/dashboard';
    console.log('🎯 Safe login redirect to:', targetPath);
    forceRedirect(targetPath);
}; 