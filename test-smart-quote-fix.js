// ============================================================
// 🔧 Test Smart Quote Request Fix
// ============================================================

const API_BASE_URL = 'https://glohorizonapi.fly.dev/api';

console.log('🔧 TESTING SMART QUOTE REQUEST FIX\n');

// ============================================================
// 🧪 Test Smart Request Logic
// ============================================================

async function testSmartQuoteRequest() {
    console.log('🧪 Testing Smart Quote Request with Mock Authentication...\n');
    
    // Test 1: Create quote with authentication header
    console.log('1️⃣ Testing Authenticated Quote Creation');
    try {
        const response = await fetch(`${API_BASE_URL}/quote/flight`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer mock-token-for-testing'
            },
            body: JSON.stringify({
                contactEmail: 'authenticated@example.com',
                contactPhone: '0541234567',
                contactName: 'Authenticated User',
                urgency: 0,
                flightDetails: {
                    departureCity: 'Accra',
                    arrivalCity: 'Dubai',
                    departureDate: '2025-09-01T08:00:00Z',
                    adultPassengers: 1,
                    childPassengers: 0,
                    infantPassengers: 0,
                    travelClass: 'Economy',
                    tripType: 'OneWay'
                }
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Authenticated Quote Created');
            console.log(`   📋 Reference: ${result.referenceNumber}`);
            console.log(`   👤 Should have UserId: ${result.quote?.userId || 'Backend logs needed'}`);
        } else {
            console.log(`❌ Failed: HTTP ${response.status}`);
        }
    } catch (error) {
        console.log('❌ Error:', error.message);
    }

    // Test 2: Create quote without authentication (guest)
    console.log('\n2️⃣ Testing Guest Quote Creation');
    try {
        const response = await fetch(`${API_BASE_URL}/quote/flight`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // No Authorization header
            },
            body: JSON.stringify({
                contactEmail: 'guest@example.com',
                contactPhone: '0541234567',
                contactName: 'Guest User',
                urgency: 0,
                flightDetails: {
                    departureCity: 'Accra',
                    arrivalCity: 'London',
                    departureDate: '2025-09-01T08:00:00Z',
                    adultPassengers: 1,
                    childPassengers: 0,
                    infantPassengers: 0,
                    travelClass: 'Economy',
                    tripType: 'OneWay'
                }
            })
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Guest Quote Created');
            console.log(`   📋 Reference: ${result.referenceNumber}`);
            console.log(`   👤 Should have UserId: null (guest)`);
        } else {
            console.log(`❌ Failed: HTTP ${response.status}`);
        }
    } catch (error) {
        console.log('❌ Error:', error.message);
    }
}

// ============================================================
// 📊 Explain the Solution
// ============================================================

function explainSolution() {
    console.log('\n\n🔧 SOLUTION IMPLEMENTED:\n');
    
    console.log('❌ PREVIOUS PROBLEM:');
    console.log('   - Quote forms used makePublicRequest() only');
    console.log('   - No authentication headers sent to backend');
    console.log('   - Backend stored quotes with UserId = null');
    console.log('   - My Quotes page found no quotes (WHERE UserId = userId)');
    console.log('');
    
    console.log('✅ NEW SOLUTION:');
    console.log('   - Quote forms now use makeSmartRequest()');
    console.log('   - Checks if user is authenticated before submitting');
    console.log('   - If authenticated: sends Authorization header');
    console.log('   - If guest: uses public request (backwards compatible)');
    console.log('   - Backend extracts userId from JWT token');
    console.log('   - Quotes stored with proper UserId association');
    console.log('');
    
    console.log('🔄 FLOW CHANGES:');
    console.log('   1. User logs in → JWT token stored');
    console.log('   2. User creates quote → Smart request detects auth');
    console.log('   3. Frontend sends Authorization: Bearer <token>');
    console.log('   4. Backend: User.FindFirst("Id")?.Value extracts userId');
    console.log('   5. Quote saved with quote.UserId = userId');
    console.log('   6. My Quotes page finds quotes WHERE UserId = userId');
    console.log('');
    
    console.log('🧪 TESTING NEEDED:');
    console.log('   1. Login to your account');
    console.log('   2. Create a new quote (flight/hotel/visa)');
    console.log('   3. Check browser dev tools for Authorization header');
    console.log('   4. Check My Quotes page - should show the new quote');
    console.log('   5. Test as guest - should still work (no auth header)');
}

// ============================================================
// 🚀 Run Tests
// ============================================================

async function runTests() {
    await testSmartQuoteRequest();
    explainSolution();
    
    console.log('\n🏁 TESTING COMPLETE!\n');
    console.log('🎯 ACTION REQUIRED:');
    console.log('1. Deploy the updated QuoteService.ts');
    console.log('2. Test by logging in and creating a quote');
    console.log('3. Verify quote appears in My Quotes page');
    console.log('4. Check browser console for authentication logs');
}

runTests();