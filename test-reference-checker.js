// ============================================================
// 🔍 Reference Number Type Checker & Tracker
// ============================================================

const API_BASE_URL = 'https://glohorizonapi.fly.dev/api';

console.log('🔍 REFERENCE NUMBER ANALYSIS & TRACKING TEST\n');

// ============================================================
// 📋 Reference Type Detection
// ============================================================

function analyzeReferenceNumber(reference) {
    console.log(`🔍 Analyzing Reference: ${reference}\n`);
    
    const quoteFormats = ['QFL', 'QHT', 'QVS', 'QTR', 'QCP'];
    const bookingFormats = ['BFL', 'BHT', 'BVS', 'BTR', 'BCP'];
    
    const prefix = reference.substring(0, 3);
    
    if (quoteFormats.includes(prefix)) {
        console.log('📋 DETECTED: QUOTE REFERENCE');
        console.log(`   🎯 Type: ${getServiceType(prefix)}`);
        console.log(`   🌐 Tracking: Public (no auth required)`);
        console.log(`   📍 Endpoint: GET /api/quote/track/${reference}`);
        console.log(`   🔗 Use: Quote tracking system`);
        return 'quote';
    } else if (bookingFormats.includes(prefix)) {
        console.log('🎫 DETECTED: BOOKING REFERENCE');
        console.log(`   🎯 Type: ${getServiceType(prefix)}`);
        console.log(`   🔒 Tracking: Authenticated (login required)`);
        console.log(`   📍 Endpoint: GET /api/booking/track/${reference}`);
        console.log(`   🔗 Use: Booking tracking system`);
        return 'booking';
    } else {
        console.log('❓ UNKNOWN REFERENCE FORMAT');
        console.log(`   ⚠️  Prefix: ${prefix} not recognized`);
        console.log(`   📋 Quote prefixes: ${quoteFormats.join(', ')}`);
        console.log(`   🎫 Booking prefixes: ${bookingFormats.join(', ')}`);
        return 'unknown';
    }
}

function getServiceType(prefix) {
    const types = {
        'QFL': 'Flight Quote', 'BFL': 'Flight Booking',
        'QHT': 'Hotel Quote', 'BHT': 'Hotel Booking',
        'QVS': 'Visa Quote', 'BVS': 'Visa Booking',
        'QTR': 'Tour Quote', 'BTR': 'Tour Booking',
        'QCP': 'Complete Package Quote', 'BCP': 'Complete Package Booking'
    };
    return types[prefix] || 'Unknown';
}

// ============================================================
// 🧪 Test Both Tracking Systems
// ============================================================

async function testQuoteTracking(reference) {
    console.log(`\n📋 Testing Quote Tracking for: ${reference}`);
    try {
        const response = await fetch(`${API_BASE_URL}/quote/track/${reference}`, {
            method: 'GET'
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Quote Found!');
            console.log(`   📋 Reference: ${result.referenceNumber}`);
            console.log(`   📊 Status: ${result.status}`);
            console.log(`   🎯 Service: ${getServiceType(result.referenceNumber?.substring(0, 3))}`);
            console.log(`   📅 Created: ${result.createdAt}`);
            console.log(`   📍 Destination: ${result.destination}`);
            return true;
        } else if (response.status === 404) {
            console.log('❌ Quote Not Found');
            const error = await response.json();
            console.log(`   💬 Message: ${error.message || 'Quote not found'}`);
            return false;
        } else {
            console.log(`❌ Error: HTTP ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log('❌ Exception:', error.message);
        return false;
    }
}

async function testBookingTracking(reference) {
    console.log(`\n🎫 Testing Booking Tracking for: ${reference}`);
    try {
        const response = await fetch(`${API_BASE_URL}/booking/track/${reference}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer mock-token-for-testing'
            }
        });

        if (response.ok) {
            const result = await response.json();
            console.log('✅ Booking Found!');
            console.log(`   📋 Reference: ${result.referenceNumber}`);
            console.log(`   📊 Status: ${result.status}`);
            console.log(`   🎯 Service: ${getServiceType(result.referenceNumber?.substring(0, 3))}`);
            return true;
        } else if (response.status === 404) {
            console.log('❌ Booking Not Found');
            const error = await response.json();
            console.log(`   💬 Message: ${error.message || 'Booking not found'}`);
            return false;
        } else if (response.status === 401) {
            console.log('🔒 Authentication Required');
            console.log('   💬 Message: Login required to track bookings');
            return false;
        } else {
            console.log(`❌ Error: HTTP ${response.status}`);
            return false;
        }
    } catch (error) {
        console.log('❌ Exception:', error.message);
        return false;
    }
}

// ============================================================
// 🚀 Test Common Reference Scenarios
// ============================================================

async function testCommonScenarios() {
    console.log('🧪 TESTING COMMON REFERENCE SCENARIOS\n');
    
    const testReferences = [
        'QFL23493847540', // Flight quote from our earlier test
        'QHT234001542',   // Hotel quote example
        'BFL123456789',   // Flight booking (probably doesn't exist)
        'BHT123456789',   // Hotel booking (probably doesn't exist)
        'INVALID123'      // Invalid format
    ];
    
    for (const ref of testReferences) {
        console.log('═'.repeat(50));
        const type = analyzeReferenceNumber(ref);
        
        if (type === 'quote') {
            await testQuoteTracking(ref);
        } else if (type === 'booking') {
            await testBookingTracking(ref);
        } else {
            console.log('❌ Cannot test unknown reference format');
        }
    }
}

// ============================================================
// 📚 Solution Guide
// ============================================================

function provideSolution() {
    console.log('\n\n🔧 SOLUTION FOR "BOOKING REFERENCE NOT FOUND" ERROR:\n');
    
    console.log('❌ PROBLEM:');
    console.log('   You\'re trying to track a QUOTE reference using BOOKING tracker');
    console.log('   Quotes and Bookings are different systems!');
    console.log('');
    
    console.log('✅ SOLUTIONS:');
    console.log('');
    console.log('1️⃣ FOR QUOTE REFERENCES (QFL, QHT, QVS, QTR, QCP):');
    console.log('   📍 Use: Quote tracking page');
    console.log('   🌐 URL: /track-quote');
    console.log('   🔗 Endpoint: GET /api/quote/track/{reference}');
    console.log('   🔓 Access: Public (no login required)');
    console.log('');
    
    console.log('2️⃣ FOR BOOKING REFERENCES (BFL, BHT, BVS, BTR, BCP):');
    console.log('   📍 Use: Booking tracking page');
    console.log('   🌐 URL: /my-bookings or booking tracker');
    console.log('   🔗 Endpoint: GET /api/booking/track/{reference}');
    console.log('   🔒 Access: Authenticated (login required)');
    console.log('');
    
    console.log('3️⃣ HOW TO IDENTIFY YOUR REFERENCE:');
    console.log('   📋 Check the reference number prefix');
    console.log('   📧 Look in your email confirmation');
    console.log('   📱 Check SMS notifications');
    console.log('   📋 Visit My Quotes page if logged in');
    console.log('');
    
    console.log('4️⃣ QUICK FIXES:');
    console.log('   ✅ Quote reference? Use /track-quote page');
    console.log('   ✅ Booking reference? Login and use /my-bookings');
    console.log('   ✅ Not sure? Check reference prefix (first 3 letters)');
}

// ============================================================
// 🚀 Run All Tests
// ============================================================

async function runAllTests() {
    await testCommonScenarios();
    provideSolution();
    
    console.log('\n🏁 REFERENCE ANALYSIS COMPLETE!\n');
    console.log('🎯 NEXT STEPS:');
    console.log('1. Check your reference number prefix');
    console.log('2. Use appropriate tracking system');
    console.log('3. Make sure you\'re logged in for booking tracking');
    console.log('4. Try quote tracking for QXX references');
}

runAllTests();