// ====================================================
// 📧 Newsletter Subscription API Types
// ====================================================

export interface NewsletterSubscriptionRequest {
  phoneNumber: string;         // Required, +233 format
  source: string;              // Required, e.g., "Frontend", "Homepage"
}

export interface NewsletterSubscriptionResponse {
  success: boolean;
  message: string;
  phoneNumber: string;
  source: string;
  subscribedAt: string;        // ISO date string
}

export interface NewsletterErrorResponse {
  success: false;
  message: string;
  errors?: string[];
}

export type NewsletterResult = NewsletterSubscriptionResponse | NewsletterErrorResponse;

// ====================================================
// 🛠️ VALIDATION HELPERS
// ====================================================

export const validateNewsletterSubscription = (data: NewsletterSubscriptionRequest): string[] => {
  const errors: string[] = [];

  if (!data.phoneNumber?.trim()) {
    errors.push('Phone number is required');
  }

  if (!data.source?.trim()) {
    errors.push('Source is required');
  }

  // Phone validation (Ghana format)
  const phoneRegex = /^\+233\d{9}$/;
  if (data.phoneNumber && !phoneRegex.test(data.phoneNumber)) {
    errors.push('Phone must be in Ghana format (+233xxxxxxxxx)');
  }

  return errors;
};