// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-01-27',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/main.css'],

    // Production optimizations
    nitro: {
        preset: 'static', // Change to 'node-server' if you need SSR
        prerender: {
            routes: ['/sitemap.xml', '/robots.txt'],
            ignore: ['/consultation', '/packages'], // Ignore non-existent routes
            failOnError: false // Don't fail build on 404s
        }
    },

    // Performance optimizations
    experimental: {
        payloadExtraction: false,
        inlineSSRStyles: false,
    },

    // SEO and meta optimizations
    app: {
        head: {
            title: 'Global Horizons Travel Services - Visas, Tours, Flights & Hotels',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Your trusted travel partner for visas, tours, flights, and hotels worldwide. Book with confidence and explore the world with Global Horizons Travel Services.' },
                { name: 'keywords', content: 'travel, visas, tours, flights, hotels, booking, travel services, global horizons' },
                { name: 'author', content: 'Global Horizons Travel Services' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'Global Horizons Travel Services' },
                { property: 'og:description', content: 'Your trusted travel partner for visas, tours, flights, and hotels worldwide.' },
                { property: 'og:image', content: '/glo.png' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Global Horizons Travel Services' },
                { name: 'twitter:description', content: 'Your trusted travel partner for visas, tours, flights, and hotels worldwide.' },
                { name: 'twitter:image', content: '/glo.png' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', href: '/glo.png' },
                { rel: 'canonical', href: 'https://glohorizonsgh.com/' } // Update with your actual domain
            ]
        }
    },

    // Router optimization
    router: {
        options: {
            strict: false
        }
    },

    // Build optimizations
    vite: {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        vendor: ['vue', '@nuxt/kit']
                    }
                }
            }
        }
    },

    // Runtime config for environment variables
    runtimeConfig: {
        // Private keys (only available on server-side)
        emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
        emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
        emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY,

        // Public keys (exposed to client-side)
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
        }
    }
}) 