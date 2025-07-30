# 🚨 MISSING ENDPOINTS TO IMPLEMENT

## **Frontend Integration Requirements**

### **1. USER DASHBOARD ENDPOINTS**

```csharp
// UserController.cs - Missing endpoints
[HttpGet("stats")]
public async Task<ActionResult<UserStatsDto>> GetUserStats()

[HttpGet("bookings/recent")]
public async Task<ActionResult<List<BookingDto>>> GetRecentBookings([FromQuery] int limit = 5)
```

### **2. BOOKING MANAGEMENT ENDPOINTS**

```csharp
// BookingController.cs - Missing endpoints
[HttpGet("{id}")]
public async Task<ActionResult<BookingDetailDto>> GetBookingById(int id)

[HttpPut("{id}/cancel")]
public async Task<ActionResult> CancelBooking(int id, [FromBody] CancelBookingRequest request)

[HttpPost("{id}/notes")]
public async Task<ActionResult> AddBookingNote(int id, [FromBody] AddNoteRequest request)
```

### **3. PACKAGE PRICING ENDPOINTS**

```csharp
// TravelPackageController.cs - Missing endpoints
[HttpPost("calculate-price")]
public async Task<ActionResult<PriceCalculationDto>> CalculatePackagePrice([FromBody] PriceCalculationRequest request)

[HttpGet("search")]
public async Task<ActionResult<List<TravelPackageDto>>> SearchPackages([FromQuery] SearchPackagesRequest request)
```

### **4. NOTIFICATION ENDPOINTS**

```csharp
// NotificationController.cs - New controller needed
[HttpGet("user/{userId}")]
public async Task<ActionResult<List<NotificationDto>>> GetUserNotifications(int userId)

[HttpPut("{id}/read")]
public async Task<ActionResult> MarkNotificationAsRead(int id)
```

### **5. SUPPORT ENDPOINTS**

```csharp
// SupportController.cs - New controller needed
[HttpPost("tickets")]
public async Task<ActionResult<SupportTicketDto>> CreateSupportTicket([FromBody] CreateTicketRequest request)

[HttpGet("tickets/{id}")]
public async Task<ActionResult<SupportTicketDetailDto>> GetTicketDetails(int id)
```

## **Frontend API Configuration**

### **Base URL Configuration**

```javascript
// nuxt.config.ts - Add API configuration
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "https://localhost:7000/api",
    },
  },
});
```

### **API Service Setup**

```javascript
// composables/useApi.js
export const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie("auth-token");

  const $api = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      Authorization: token.value ? `Bearer ${token.value}` : undefined,
      "Content-Type": "application/json",
    },
  });

  return { $api };
};
```

## **Priority Implementation Order**

### **🔥 IMMEDIATE (Required for MVP)**

1. `GET /api/user/stats` - For dashboard
2. `GET /api/booking/{id}` - For booking details
3. `POST /api/packages/calculate-price` - For tour pricing calculator
4. `PUT /api/booking/{id}/cancel` - For booking cancellation

### **⚡ HIGH PRIORITY (Week 1)**

5. `GET /api/user/bookings/recent` - For dashboard recent bookings
6. `POST /api/support/tickets` - For customer support
7. `GET /api/notifications/user/{userId}` - For user notifications
8. `GET /api/packages/search` - For package filtering

### **📋 MEDIUM PRIORITY (Week 2)**

9. `POST /api/booking/{id}/notes` - For booking notes
10. `PUT /api/notifications/{id}/read` - For notification management
11. `GET /api/support/tickets/{id}` - For support ticket details

## **DTO Classes Needed**

### **User Stats DTO**

```csharp
public class UserStatsDto
{
    public int TotalBookings { get; set; }
    public int CompletedBookings { get; set; }
    public int PendingBookings { get; set; }
    public decimal TotalSpent { get; set; }
    public string FavoriteDestination { get; set; }
}
```

### **Price Calculation DTO**

```csharp
public class PriceCalculationRequest
{
    public int PackageId { get; set; }
    public int Adults { get; set; }
    public int Children { get; set; }
    public int Infants { get; set; }
    public string AccommodationLevel { get; set; }
    public DateTime TravelDate { get; set; }
}

public class PriceCalculationDto
{
    public decimal BasePrice { get; set; }
    public decimal AdultPrice { get; set; }
    public decimal ChildPrice { get; set; }
    public decimal InfantPrice { get; set; }
    public decimal AccommodationSurcharge { get; set; }
    public decimal SeasonalAdjustment { get; set; }
    public decimal TotalPrice { get; set; }
    public List<PriceBreakdownItem> Breakdown { get; set; }
}
```

### **Notification DTO**

```csharp
public class NotificationDto
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Message { get; set; }
    public string Type { get; set; } // Info, Success, Warning, Error
    public bool IsRead { get; set; }
    public DateTime CreatedAt { get; set; }
    public string ActionUrl { get; set; }
}
```

## **Integration Steps**

### **Step 1: API Base Setup**

1. Add API configuration to `nuxt.config.ts`
2. Create `composables/useApi.js` for centralized API calls
3. Set up error handling and token management

### **Step 2: Replace TODO Comments**

1. Update all `// TODO: Replace with actual API call` comments
2. Replace EmailJS calls with backend API calls
3. Add proper error handling and loading states

### **Step 3: Testing**

1. Test authentication flow end-to-end
2. Test booking submission and tracking
3. Test user dashboard data loading
4. Test package pricing calculator

**Ready to start implementing these missing endpoints?** 🚀
