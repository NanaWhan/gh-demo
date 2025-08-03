// ============================================================
// 📱 Newsletter SMS Subscription Test
// ============================================================

const API_BASE_URL = 'https://glohorizonapi.fly.dev/api';

async function testNewsletterSMSSubscription() {
    console.log('🧪 Testing Newsletter SMS Subscription API...\n');

    // Test phone numbers (Ghana format)
    const testPhones = [
        '0541458512',
        '+233541458512',
        '541458512',
        '233541458512'
    ];

    for (const phone of testPhones) {
        try {
            console.log(`📱 Testing subscription with phone: ${phone}`);
            
            const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: phone,
                    source: 'API Test'
                })
            });

            const result = await response.json();
            
            if (result.success) {
                console.log(`✅ SUCCESS: ${result.message}`);
                console.log(`   📞 Formatted: ${result.phoneNumber}`);
                console.log(`   📅 Subscribed: ${result.subscribedAt}\n`);
            } else {
                console.log(`❌ FAILED: ${result.message}\n`);
            }

        } catch (error) {
            console.error(`💥 ERROR with ${phone}:`, error.message, '\n');
        }
    }

    // Test invalid phone numbers
    console.log('🚫 Testing invalid phone numbers...\n');

    const invalidPhones = [
        '123456',      // Too short
        '0123456789012',  // Too long
        'abc123',      // Contains letters
        '+1234567890'  // Wrong country code
    ];

    for (const phone of invalidPhones) {
        try {
            console.log(`📱 Testing invalid phone: ${phone}`);
            
            const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: phone,
                    source: 'API Test Invalid'
                })
            });

            const result = await response.json();
            console.log(`Expected failure: ${result.message}\n`);

        } catch (error) {
            console.error(`💥 ERROR with ${phone}:`, error.message, '\n');
        }
    }

    console.log('🏁 Newsletter SMS API test completed!');
}

// Run the test
testNewsletterSMSSubscription();