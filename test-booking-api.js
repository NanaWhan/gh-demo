// Node.js API Testing Script for Global Horizons
// Run with: node test-booking-api.js

const BASE_URL = 'https://glohorizonapi.fly.dev';

// Helper function to make API requests
async function makeRequest(endpoint, method = 'GET', body = null, headers = {}) {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  };
  
  if (body) {
    config.body = JSON.stringify(body);
  }
  
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    console.log(`\n${method} ${endpoint}`);
    console.log(`Status: ${response.status}`);
    console.log('Response:', JSON.stringify(data, null, 2));
    
    return { status: response.status, data };
  } catch (error) {
    console.error(`Error with ${method} ${endpoint}:`, error.message);
    return { error: error.message };
  }
}

// Test functions
async function testHotelQuote() {
  console.log('\n🏨 Testing Hotel Quote Request...');
  
  const hotelData = {
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
    contactName: "Test User",
    specialRequests: "Test booking from Node.js script",
    urgency: 1
  };
  
  return await makeRequest('/api/quote/hotel', 'POST', hotelData);
}

async function testFlightQuote() {
  console.log('\n✈️ Testing Flight Quote Request...');
  
  const flightData = {
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
    contactName: "Test User",
    specialRequests: "Test flight booking from Node.js script",
    urgency: 1
  };
  
  return await makeRequest('/api/quote/flight', 'POST', flightData);
}

async function testTourQuote() {
  console.log('\n🗺️ Testing Tour Quote Request...');
  
  const tourData = {
    tourDetails: {
      tourPackage: "African Safari Adventure",
      destination: "Kenya",
      startDate: "2025-01-20T00:00:00Z",
      endDate: "2025-01-27T00:00:00Z",
      travelers: 4,
      accommodationType: "luxury",
      tourType: "private",
      activities: ["game-drives", "hot-air-balloon"],
      mealPlan: "full-board"
    },
    contactEmail: "test@example.com",
    contactPhone: "+233123456789",
    contactName: "Test User",
    specialRequests: "Test tour booking from Node.js script",
    urgency: 1
  };
  
  return await makeRequest('/api/quote/tour', 'POST', tourData);
}

async function testVisaQuote() {
  console.log('\n📄 Testing Visa Quote Request...');
  
  const visaData = {
    visaDetails: {
      visaType: "Tourist Visa",
      destinationCountry: "United States",
      processingType: "standard",
      intendedTravelDate: "2025-03-15T00:00:00Z",
      durationOfStay: 21,
      purposeOfVisit: "Tourism",
      passportNumber: "GH9876543",
      passportExpiryDate: "2028-06-30T00:00:00Z",
      nationality: "Ghanaian",
      hasPreviousVisa: false,
      requiredDocuments: []
    },
    contactEmail: "test@example.com",
    contactPhone: "+233123456789",
    contactName: "Test User",
    specialRequests: "Test visa application from Node.js script",
    urgency: 1
  };
  
  return await makeRequest('/api/quote/visa', 'POST', visaData);
}

async function testUserRegistration() {
  console.log('\n👤 Testing User Registration...');
  
  const userData = {
    email: `test-${Date.now()}@example.com`, // Unique email
    password: "SecurePass123!",
    fullName: "Test User",
    phoneNumber: "+233123456789",
    dateOfBirth: "1990-01-15T00:00:00Z"
  };
  
  return await makeRequest('/api/auth/register', 'POST', userData);
}

async function testUserLogin() {
  console.log('\n🔐 Testing User Login...');
  
  const loginData = {
    email: "test@example.com",
    password: "SecurePass123!"
  };
  
  return await makeRequest('/api/auth/login', 'POST', loginData);
}

async function testWithAuth(token) {
  console.log('\n🔒 Testing Authenticated Endpoints...');
  
  // Test flight booking submission
  const flightBookingData = {
    flightDetails: {
      tripType: "round-trip",
      departureCity: "Accra",
      arrivalCity: "London",
      departureDate: "2024-11-10",
      returnDate: "2024-11-20",
      adultPassengers: 2,
      childPassengers: 0,
      infantPassengers: 0,
      preferredClass: "economy",
      preferredAirline: "British Airways",
      passengers: []
    },
    contactEmail: "test@example.com",
    contactPhone: "+233123456789",
    specialRequests: "Test authenticated flight booking",
    urgency: 1
  };
  
  const headers = { Authorization: `Bearer ${token}` };
  
  await makeRequest('/api/booking/flight', 'POST', flightBookingData, headers);
  await makeRequest('/api/booking/my-bookings', 'GET', null, headers);
}

// Main test runner
async function runAllTests() {
  console.log('🧪 Global Horizons API Testing Started');
  console.log('=====================================');
  
  try {
    // Test quote requests (no authentication required)
    const hotelResult = await testHotelQuote();
    const flightResult = await testFlightQuote();
    const tourResult = await testTourQuote();
    const visaResult = await testVisaQuote();
    
    // Test authentication
    const registerResult = await testUserRegistration();
    const loginResult = await testUserLogin();
    
    // Test authenticated endpoints if login successful
    if (loginResult.data?.token) {
      await testWithAuth(loginResult.data.token);
    }
    
    console.log('\n✅ API Testing Complete!');
    console.log('\n📊 Test Summary:');
    console.log(`Hotel Quote: ${hotelResult.status || 'Error'}`);
    console.log(`Flight Quote: ${flightResult.status || 'Error'}`);
    console.log(`Tour Quote: ${tourResult.status || 'Error'}`);
    console.log(`Visa Quote: ${visaResult.status || 'Error'}`);
    console.log(`Registration: ${registerResult.status || 'Error'}`);
    console.log(`Login: ${loginResult.status || 'Error'}`);
    
  } catch (error) {
    console.error('Test execution failed:', error);
  }
}

// Run the tests
runAllTests();