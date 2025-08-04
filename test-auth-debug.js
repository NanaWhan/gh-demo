// ============================================================
// 🔍 Authentication & User Quotes Debug Test
// ============================================================

const API_BASE_URL = 'https://glohorizonapi.fly.dev/api';

// Mock JWT token structure (replace with real token)
const mockJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

console.log('🔍 DEBUGGING AUTHENTICATION & USER QUOTES ISSUE\n');

// ============================================================
// 🧪 TEST 1: Create Quote as Authenticated User
// ============================================================

async function testAuthenticatedQuoteCreation() {
    console.log('1️⃣ Testing Quote Creation with Authentication...\n');
    
    try {
        // Create a quote with a mock auth token
        const response = await fetch(`${API_BASE_URL}/quote/flight`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${mockJWT}` // This would be a real token
            },
            body: JSON.stringify({
                contactEmail: 'user@example.com',
                contactPhone: '0541234567',
                contactName: 'Test User',
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
            console.log('✅ Authenticated Quote Created Successfully');
            console.log(`   📋 Reference: ${result.referenceNumber}`);
            console.log(`   👤 UserId should be associated: ${result.quote?.userId || 'N/A'}`);
            return result.referenceNumber;
        } else {
            console.log(`❌ Failed to create authenticated quote: HTTP ${response.status}`);
            const error = await response.text();
            console.log(`   Error: ${error.substring(0, 200)}`);
        }
    } catch (error) {
        console.log('❌ Error creating authenticated quote:', error.message);
    }
    
    return null;
}

// ============================================================
// 🧪 TEST 2: Test My Quotes Endpoint with Various Tokens
// ============================================================

async function testMyQuotesEndpoint() {
    console.log('\n2️⃣ Testing My Quotes Endpoint...\n');
    
    // Test different token scenarios
    const testTokens = [
        { name: 'No Token', token: null },
        { name: 'Invalid Token', token: 'invalid-token' },
        { name: 'Mock JWT', token: mockJWT },
        { name: 'Empty Bearer', token: '' }
    ];
    
    for (const test of testTokens) {
        console.log(`🧪 Testing: ${test.name}`);
        
        try {
            const headers = {
                'Content-Type': 'application/json'
            };
            
            if (test.token) {
                headers['Authorization'] = `Bearer ${test.token}`;
            }
            
            const response = await fetch(`${API_BASE_URL}/quote/my-quotes`, {
                method: 'GET',
                headers
            });
            
            console.log(`   📊 Status: ${response.status}`);
            
            if (response.ok) {
                const result = await response.json();
                console.log(`   ✅ Success: ${result.message}`);
                console.log(`   📋 Quotes Found: ${result.totalCount || 0}`);
            } else if (response.status === 401) {
                console.log(`   🔒 Expected: Authentication required`);
            } else {
                const error = await response.text();
                console.log(`   ❌ Error: ${error.substring(0, 100)}`);
            }
        } catch (error) {
            console.log(`   💥 Exception: ${error.message}`);
        }
        
        console.log('');
    }
}

// ============================================================
// 🧪 TEST 3: Test JWT Token Parsing
// ============================================================

function testJWTTokenParsing() {
    console.log('3️⃣ Testing JWT Token Parsing...\n');
    
    // Test with a more realistic JWT structure
    const testJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEyMzQ1Njc4OTAiLCJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZ2l2ZW5fbmFtZSI6IlRlc3QiLCJmYW1pbHlfbmFtZSI6IlVzZXIiLCJwaG9uZU51bWJlciI6IjA1NDEyMzQ1NjciLCJpYXQiOjE2MTYyMzkwMjIsImV4cCI6OTk5OTk5OTk5OX0.fake-signature';
    
    try {
        const payload = JSON.parse(atob(testJWT.split('.')[1]));
        console.log('🔍 JWT Payload Structure:');
        console.log('   📧 Email:', payload.email);
        console.log('   👤 User ID (Id):', payload.Id);
        console.log('   👤 User ID (sub):', payload.sub);
        console.log('   📱 Phone:', payload.phoneNumber);
        console.log('   📛 Name:', payload.given_name, payload.family_name);
        console.log('   ⏰ Expires:', new Date(payload.exp * 1000).toISOString());
        
        console.log('\n🔍 Backend looks for User ID in token claims:');
        console.log('   C# Code: User.FindFirst("Id")?.Value');
        console.log(`   Would find: "${payload.Id || 'NULL'}"`);
        
        if (!payload.Id && !payload.sub) {
            console.log('   ⚠️  PROBLEM: No "Id" claim found in token!');
        }
        
    } catch (error) {
        console.log('❌ Failed to parse JWT:', error.message);
    }
}

// ============================================================
// 🧪 TEST 4: Check Quote Database Schema
// ============================================================

async function analyzeQuoteDatabaseIssues() {
    console.log('\n4️⃣ Analyzing Potential Database Issues...\n');
    
    console.log('🔍 POTENTIAL ISSUES:');
    console.log('');
    
    console.log('📋 Issue 1: Guest vs Authenticated Quotes');
    console.log('   - Quote API allows both guest and authenticated users');
    console.log('   - Guest quotes have UserId = null');
    console.log('   - Authenticated quotes should have UserId = user.Id');
    console.log('   - Backend: quote.UserId = userId (from JWT token)');
    console.log('');
    
    console.log('🔑 Issue 2: JWT Token Claims');
    console.log('   - Backend looks for: User.FindFirst("Id")?.Value');
    console.log('   - Token must have "Id" claim with user ID');
    console.log('   - Check if your JWT tokens have correct claims');
    console.log('');
    
    console.log('🔄 Issue 3: Quote Creation Flow');
    console.log('   - User must be logged in when creating quotes');
    console.log('   - Frontend must send Authorization header');
    console.log('   - Backend must extract userId from token');
    console.log('   - Database must store userId with quote');
    console.log('');
    
    console.log('📊 Issue 4: My Quotes Query');
    console.log('   - Backend: WHERE q.UserId == userId');
    console.log('   - If UserId is null, quote won\'t show in my-quotes');
    console.log('   - If userId from token is wrong, no matches found');
    console.log('');
    
    console.log('💡 DEBUGGING STEPS NEEDED:');
    console.log('1. Check if you\'re logged in when creating quotes');
    console.log('2. Verify JWT token has "Id" claim with correct user ID');
    console.log('3. Check if quotes in database have UserId set');
    console.log('4. Verify Authorization header is sent correctly');
    console.log('5. Check backend logs for userId extraction');
}

// ============================================================
// 🚀 RUN ALL DEBUG TESTS
// ============================================================

async function runAllDebugTests() {
    const quoteRef = await testAuthenticatedQuoteCreation();
    await testMyQuotesEndpoint();
    testJWTTokenParsing();
    await analyzeQuoteDatabaseIssues();
    
    console.log('\n🏁 DEBUG ANALYSIS COMPLETE!\n');
    console.log('🎯 NEXT STEPS:');
    console.log('1. Login to your account and check the JWT token structure');
    console.log('2. Create a quote while authenticated and verify UserId is set');
    console.log('3. Check if quotes appear in my-quotes after creation');
    console.log('4. Verify Authorization header is being sent correctly');
    console.log('5. Check browser developer tools for API call details');
}

// Execute debug tests
runAllDebugTests();