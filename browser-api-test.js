// Browser Console API Testing
// Copy and paste these functions into your browser console on any page

const BASE_URL = 'https://glohorizonapi.fly.dev';

// Test Hotel Quote (No Auth Required)
async function testHotelQuote() {
  const response = await fetch(`${BASE_URL}/api/quote/hotel`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hotelDetails: {
        destination: "Dubai",
        checkInDate: "2024-12-15T00:00:00Z",
        checkOutDate: "2024-12-22T00:00:00Z",
        rooms: 1,
        adultGuests: 2,
        childGuests: 0,
        roomType: "deluxe",
        starRating: "4-star",
        amenities: ["pool", "gym"]
      },
      contactEmail: "test@example.com",
      contactPhone: "+233123456789",
      contactName: "Browser Test User",
      specialRequests: "Test from browser console",
      urgency: 1
    })
  });
  
  const data = await response.json();
  console.log('🏨 Hotel Quote Response:', data);
  return data;
}

// Test Flight Quote (No Auth Required)
async function testFlightQuote() {
  const response = await fetch(`${BASE_URL}/api/quote/flight`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      flightDetails: {
        tripType: "round-trip",
        departureCity: "Accra",
        arrivalCity: "London",
        departureDate: "2024-11-10T00:00:00Z",
        returnDate: "2024-11-20T00:00:00Z",
        adultPassengers: 2,
        childPassengers: 0,
        infantPassengers: 0,
        preferredClass: "economy",
        preferredAirline: "British Airways",
        passengers: []
      },
      contactEmail: "test@example.com",
      contactPhone: "+233123456789",
      contactName: "Browser Test User",
      specialRequests: "Test flight from browser console", 
      urgency: 1
    })
  });
  
  const data = await response.json();
  console.log('✈️ Flight Quote Response:', data);
  return data;
}

// Test User Registration
async function testRegistration() {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: `browsertest-${Date.now()}@example.com`,
      password: "SecurePass123!",
      fullName: "Browser Test User",
      phoneNumber: "+233123456789",
      dateOfBirth: "1990-01-15T00:00:00Z"
    })
  });
  
  const data = await response.json();
  console.log('👤 Registration Response:', data);
  return data;
}

// Test Quote Tracking (replace with actual reference number)
async function testTracking(referenceNumber = 'QHT17054939887') {
  const response = await fetch(`${BASE_URL}/api/quote/track/${referenceNumber}`);
  const data = await response.json();
  console.log('🔍 Tracking Response:', data);
  return data;
}

// Run all tests
async function runBrowserTests() {
  console.log('🧪 Running Browser API Tests...');
  
  try {
    await testHotelQuote();
    await testFlightQuote();
    await testRegistration();
    // await testTracking(); // Use actual reference number from above tests
    
    console.log('✅ Browser tests complete!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

// Instructions
console.log(`
🧪 Browser API Testing Ready!

Available functions:
- testHotelQuote() - Test hotel quote request
- testFlightQuote() - Test flight quote request  
- testRegistration() - Test user registration
- testTracking(refNumber) - Test quote tracking
- runBrowserTests() - Run all tests

Usage:
1. Copy this entire script
2. Paste in browser console
3. Call: runBrowserTests()
`);

// Uncomment to run automatically:
// runBrowserTests();