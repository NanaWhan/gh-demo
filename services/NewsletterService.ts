// ============================================================
// 📧 Newsletter Subscription Service
// ============================================================

import {
    NewsletterSubscriptionRequest,
    NewsletterSubscriptionResponse,  
    NewsletterErrorResponse,
    NewsletterResult,
    validateNewsletterSubscription
} from '~/types/newsletter-api-types';

export class NewsletterService {
    private baseUrl: string;

    constructor(baseUrl = 'https://glohorizonapi.fly.dev/api') {
        this.baseUrl = baseUrl;
    }

    // ============================================================
    // 🔐 PRIVATE HELPERS
    // ============================================================

    private async makeRequest<T>(endpoint: string, options: any = {}): Promise<T> {
        try {
            const response = await $fetch<T>(`${this.baseUrl}${endpoint}`, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                }
            });

            return response;
        } catch (error: any) {
            console.error(`❌ Newsletter API request failed [${endpoint}]:`, error);
            throw new Error(error.data?.message || error.message || 'Newsletter API request failed');
        }
    }

    // ============================================================
    // 📱 SMS NEWSLETTER SUBSCRIPTION
    // ============================================================

    async subscribeToSMSNewsletter(phoneNumber: string, source = 'Website'): Promise<NewsletterResult> {
        try {
            console.log('📱 Subscribing to SMS newsletter:', phoneNumber);

            const data: NewsletterSubscriptionRequest = {
                phoneNumber: phoneNumber.trim(),
                source
            };

            // Validate request data
            const validationErrors = validateNewsletterSubscription(data);
            if (validationErrors.length > 0) {
                throw new Error(`Validation errors: ${validationErrors.join(', ')}`);
            }

            const response = await this.makeRequest<NewsletterSubscriptionResponse>('/newsletter/subscribe', {
                method: 'POST',
                body: data
            });

            console.log('✅ SMS newsletter subscription successful:', response);
            return response;

        } catch (error: any) {
            console.error('❌ SMS newsletter subscription failed:', error);
            return {
                success: false,
                message: error.message || 'Failed to subscribe to SMS newsletter'
            } as NewsletterErrorResponse;
        }
    }

    // ============================================================
    // 📧 EMAIL NEWSLETTER SUBSCRIPTION (Future Enhancement)
    // ============================================================

    async subscribeToEmailNewsletter(email: string, source = 'Website'): Promise<{ success: boolean; message: string }> {
        try {
            console.log('📧 Email newsletter subscription (placeholder):', email);
            
            // TODO: Implement email newsletter subscription when backend endpoint is available
            // For now, return success message
            return {
                success: true,
                message: 'Email newsletter subscription will be available soon! For now, subscribe via SMS.'
            };

        } catch (error: any) {
            console.error('❌ Email newsletter subscription failed:', error);
            return {
                success: false,
                message: 'Email newsletter subscription temporarily unavailable'
            };
        }
    }

    // ============================================================
    // 🚫 UNSUBSCRIBE FROM SMS NEWSLETTER
    // ============================================================

    async unsubscribeFromSMSNewsletter(phoneNumber: string): Promise<NewsletterResult> {
        try {
            console.log('🚫 Unsubscribing from SMS newsletter:', phoneNumber);

            const data = {
                phoneNumber: phoneNumber.trim()
            };

            const response = await this.makeRequest<NewsletterSubscriptionResponse>('/newsletter/unsubscribe', {
                method: 'POST',
                body: data
            });

            console.log('✅ SMS newsletter unsubscription successful:', response);
            return response;

        } catch (error: any) {
            console.error('❌ SMS newsletter unsubscription failed:', error);
            return {
                success: false,
                message: error.message || 'Failed to unsubscribe from SMS newsletter'
            } as NewsletterErrorResponse;
        }
    }

    // ============================================================
    // 🛠️ UTILITY METHODS
    // ============================================================

    /**
     * Format phone number to Ghana standard (+233XXXXXXXXX)
     */
    formatPhoneForSMS(phone: string): string {
        // Remove all non-digit characters
        const digitsOnly = phone.replace(/\D/g, '');
        
        // Handle different Ghana phone formats
        if (digitsOnly.startsWith('233')) {
            return `+${digitsOnly}`;
        } else if (digitsOnly.startsWith('0')) {
            return `+233${digitsOnly.slice(1)}`;
        } else if (digitsOnly.length === 9) {
            return `+233${digitsOnly}`;
        }
        
        return `+233${digitsOnly}`;
    }

    /**
     * Validate Ghana phone number format
     */
    validateGhanaPhone(phone: string): { isValid: boolean; formatted: string; error?: string } {
        try {
            const formatted = this.formatPhoneForSMS(phone);
            const phoneRegex = /^\+233\d{9}$/;
            
            if (!phoneRegex.test(formatted)) {
                return {
                    isValid: false,
                    formatted: phone,
                    error: 'Invalid Ghana phone number format. Use format: 0XXXXXXXXX or +233XXXXXXXXX'
                };
            }

            return {
                isValid: true,
                formatted
            };
        } catch (error) {
            return {
                isValid: false,
                formatted: phone,
                error: 'Unable to validate phone number'
            };
        }
    }

    /**
     * Check if email address is valid
     */
    validateEmail(email: string): { isValid: boolean; error?: string } {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            return {
                isValid: false,
                error: 'Invalid email address format'
            };
        }

        return { isValid: true };
    }
}

// Export singleton instance
export const newsletterService = new NewsletterService();
export default newsletterService;