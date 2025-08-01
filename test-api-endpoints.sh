#!/bin/bash

# API Testing Script for Global Horizons Booking System
# Base URL
BASE_URL="https://glohorizonapi.fly.dev"

echo "🧪 Testing Global Horizons Booking API Endpoints"
echo "================================================"

# Test 1: Hotel Quote Request (No Auth Required)
echo "🏨 Testing Hotel Quote Request..."
curl -X POST "${BASE_URL}/api/quote/hotel" \
  -H "Content-Type: application/json" \
  -d '{
    "hotelDetails": {
      "destination": "Dubai",
      "checkInDate": "2024-12-15T00:00:00Z",
      "checkOutDate": "2024-12-22T00:00:00Z",
      "rooms": 1,
      "adultGuests": 2,
      "childGuests": 0,
      "roomType": "deluxe",
      "starRating": "4-star",
      "amenities": ["pool", "gym"]
    },
    "contactEmail": "test@example.com",
    "contactPhone": "+233123456789",
    "contactName": "Test User",
    "specialRequests": "Test booking",
    "urgency": 1
  }' | jq '.'

echo -e "\n"

# Test 2: Flight Quote Request (No Auth Required)
echo "✈️ Testing Flight Quote Request..."
curl -X POST "${BASE_URL}/api/quote/flight" \
  -H "Content-Type: application/json" \
  -d '{
    "flightDetails": {
      "tripType": "round-trip",
      "departureCity": "Accra",
      "arrivalCity": "London",
      "departureDate": "2024-11-10T00:00:00Z",
      "returnDate": "2024-11-20T00:00:00Z",
      "adultPassengers": 2,
      "childPassengers": 0,
      "infantPassengers": 0,
      "preferredClass": "economy",
      "preferredAirline": "British Airways",
      "passengers": []
    },
    "contactEmail": "test@example.com",
    "contactPhone": "+233123456789",
    "contactName": "Test User",
    "specialRequests": "Test flight booking",
    "urgency": 1
  }' | jq '.'

echo -e "\n"

# Test 3: Tour Quote Request (No Auth Required)
echo "🗺️ Testing Tour Quote Request..."
curl -X POST "${BASE_URL}/api/quote/tour" \
  -H "Content-Type: application/json" \
  -d '{
    "tourDetails": {
      "tourPackage": "African Safari Adventure",
      "destination": "Kenya",
      "startDate": "2025-01-20T00:00:00Z",
      "endDate": "2025-01-27T00:00:00Z",
      "travelers": 4,
      "accommodationType": "luxury",
      "tourType": "private",
      "activities": ["game-drives", "hot-air-balloon"],
      "mealPlan": "full-board"
    },
    "contactEmail": "test@example.com",
    "contactPhone": "+233123456789",
    "contactName": "Test User",
    "specialRequests": "Test tour booking",
    "urgency": 1
  }' | jq '.'

echo -e "\n"

# Test 4: Visa Quote Request (No Auth Required)
echo "📄 Testing Visa Quote Request..."
curl -X POST "${BASE_URL}/api/quote/visa" \
  -H "Content-Type: application/json" \
  -d '{
    "visaDetails": {
      "visaType": "Tourist Visa",
      "destinationCountry": "United States",
      "processingType": "standard",
      "intendedTravelDate": "2025-03-15T00:00:00Z",
      "durationOfStay": 21,
      "purposeOfVisit": "Tourism",
      "passportNumber": "GH9876543",
      "passportExpiryDate": "2028-06-30T00:00:00Z",
      "nationality": "Ghanaian",
      "hasPreviousVisa": false,
      "requiredDocuments": []
    },
    "contactEmail": "test@example.com",
    "contactPhone": "+233123456789",
    "contactName": "Test User",
    "specialRequests": "Test visa application",
    "urgency": 1
  }' | jq '.'

echo -e "\n"

# Test 5: Track Quote (Public - No Auth Required)
echo "🔍 Testing Quote Tracking..."
# First, you'll need a real reference number from above tests
echo "Use a reference number from the above requests to test tracking:"
echo "curl -X GET \"${BASE_URL}/api/quote/track/QHT17054939887\" | jq '.'"

echo -e "\n"
echo "✅ API Testing Complete!"
echo "💡 Note: For authenticated endpoints (booking submissions), you'll need to:"
echo "   1. Register/Login to get a JWT token"
echo "   2. Add Authorization header: -H \"Authorization: Bearer \$TOKEN\""