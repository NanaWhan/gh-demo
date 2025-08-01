const BASE_URL = 'https://glohorizonapi.fly.dev';

async function testBookingEndpoints() {
  console.log('Testing booking endpoints...');
  
  // Test the two different endpoints
  const endpoints = [
    '/api/user/booking-history',
    '/api/booking/my-bookings'
  ];
  
  for (const endpoint of endpoints) {
    try {
      console.log(`\nTesting: ${endpoint}`);
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer fake-token-for-testing'
        }
      });
      
      console.log(`Status: ${response.status}`);
      if (response.status !== 401) {
        const data = await response.text();
        console.log(`Response: ${data.substring(0, 200)}...`);
      } else {
        console.log('401 Unauthorized (endpoint exists but needs valid token)');
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }
}

testBookingEndpoints();