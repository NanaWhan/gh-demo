// ============================================================
// 🧪 Quick Quote API Test Script
// ============================================================

const API_BASE = 'https://glohorizonapi.fly.dev/api';

// Test API connectivity
async function testAPI() {
  console.log('🧪 Testing API connectivity...');
  
  try {
    const response = await fetch(`${API_BASE}/quote/test-minimal`, {
      method: 'POST'
    });
    
    const data = await response.json();
    console.log('✅ API Status:', data.success ? 'Working' : 'Error');
    return data.success;
  } catch (error) {
    console.error('❌ API Test Failed:', error.message);
    return false;
  }
}

// Test Flight Quote
async function testFlightQuote() {
  console.log('✈️ Testing flight quote...');
  
  try {
    const response = await fetch(`${API_BASE}/quote/flight`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contactEmail: "test@example.com",
        contactPhone: "+233245678901",
        contactName: "Test User",
        specialRequests: "Window seat preferred",
        urgency: 0,  // Standard
        flightDetails: {
          departureCity: "Accra",
          arrivalCity: "London",
          departureDate: "2025-10-15T08:00:00Z",
          returnDate: "2025-10-25T18:00:00Z",
          passengerCount: 1,
          travelClass: "Economy",
          tripType: "RoundTrip"
        }
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Flight Quote Success:', data.referenceNumber);
      return data.referenceNumber;
    } else {
      console.log('❌ Flight Quote Failed:', data.message);
      return null;
    }
  } catch (error) {
    console.error('❌ Flight Quote Error:', error.message);
    return null;
  }
}

// Test Hotel Quote
async function testHotelQuote() {
  console.log('🏨 Testing hotel quote...');
  
  try {
    const response = await fetch(`${API_BASE}/quote/hotel`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contactEmail: "test@example.com",
        contactPhone: "+233245678901",
        contactName: "Test User",
        specialRequests: "Ocean view room",
        urgency: 0,
        hotelDetails: {
          destination: "Dubai",
          checkInDate: "2025-10-15T14:00:00Z",
          checkOutDate: "2025-10-20T12:00:00Z",
          roomCount: 1,
          guestCount: 2,
          roomType: "Deluxe"
        }
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Hotel Quote Success:', data.referenceNumber);
      return data.referenceNumber;
    } else {
      console.log('❌ Hotel Quote Failed:', data.message);
      return null;
    }
  } catch (error) {
    console.error('❌ Hotel Quote Error:', error.message);
    return null;
  }
}

// Test Newsletter Subscription
async function testNewsletter() {
  console.log('📧 Testing newsletter subscription...');
  
  try {
    const response = await fetch(`${API_BASE}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phoneNumber: "+233200000000",
        source: "API Test"
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Newsletter Success:', data.phoneNumber);
      return true;
    } else {
      console.log('❌ Newsletter Failed:', data.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Newsletter Error:', error.message);
    return false;
  }
}

// Test Quote Tracking
async function testTracking(referenceNumber) {
  if (!referenceNumber) {
    console.log('⏭️ Skipping tracking test (no reference number)');
    return;
  }
  
  console.log('📍 Testing quote tracking...');
  
  try {
    const response = await fetch(`${API_BASE}/quote/track/${referenceNumber}`);
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ Tracking Success:', data.quote.status);
      return true;
    } else {
      console.log('❌ Tracking Failed:', data.message);
      return false;
    }
  } catch (error) {
    console.error('❌ Tracking Error:', error.message);
    return false;
  }
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting Quote API Tests...\n');
  
  const results = {
    api: await testAPI(),
    flight: null,
    hotel: null,
    newsletter: await testNewsletter(),
    tracking: false
  };
  
  if (results.api) {
    results.flight = await testFlightQuote();
    results.hotel = await testHotelQuote();
    
    // Test tracking with flight reference if available
    if (results.flight) {
      results.tracking = await testTracking(results.flight);
    }
  }
  
  console.log('\n📊 Test Results Summary:');
  console.log('API Connectivity:', results.api ? '✅' : '❌');
  console.log('Flight Quotes:', results.flight ? '✅' : '❌');
  console.log('Hotel Quotes:', results.hotel ? '✅' : '❌');
  console.log('Newsletter:', results.newsletter ? '✅' : '❌');
  console.log('Quote Tracking:', results.tracking ? '✅' : '❌');
  
  const successCount = Object.values(results).filter(r => r).length;
  const totalTests = Object.keys(results).length;
  
  console.log(`\n🎯 Overall: ${successCount}/${totalTests} tests passed`);
  
  if (successCount === totalTests) {
    console.log('🎉 All tests passed! API integration is working correctly.');
  } else {
    console.log('⚠️ Some tests failed. Check the logs above for details.');
  }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testAPI,
    testFlightQuote,
    testHotelQuote,
    testNewsletter,
    testTracking,
    runAllTests
  };
}

// Run tests if called directly
if (typeof window !== 'undefined') {
  // Browser environment
  console.log('🌐 Running in browser - call runAllTests() to start');
} else {
  // Node.js environment
  runAllTests();
}