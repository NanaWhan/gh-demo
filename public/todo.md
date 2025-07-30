## 📋 **TODO LIST - YOUR KEY QUESTIONS & DECISIONS**

### 🎯 **BOOKING FLOW & USER EXPERIENCE**

#### **1. Customer Identification Strategy**
- [ ] **DECISION NEEDED:** Do customers need to create accounts with IDs?
  - **Option A:** Anonymous bookings with reference numbers only
  - **Option B:** Account creation required for tracking
  - **Option C:** Optional accounts (guest vs registered users)

#### **2. Booking Submission Process**
- [ ] **DECISION NEEDED:** What info do we collect at booking?
  - [ ] Personal details (name, email, phone)
  - [ ] Travel requirements 
  - [ ] Payment preferences
  - [ ] ID/passport info timing (now vs later)

---

### 🔔 **NOTIFICATION SYSTEM ARCHITECTURE**

#### **3. Frontend vs Backend Responsibility**
- [ ] **CLARIFY:** Which notifications go where?
  - **Frontend (EmailJS):**
    - [ ] Customer booking confirmations
    - [ ] ~~Admin notifications~~ ❌
  - **Backend (mnotify + SMTP):**
    - [ ] Admin SMS alerts for new bookings
    - [ ] Admin email notifications
    - [ ] Customer status update notifications

#### **4. Admin Alert Configuration**
- [ ] **DEFINE:** Which admins get notified?
  - [ ] Super admin only?
  - [ ] All active admins?
  - [ ] Role-based notifications?

---

### 🎛️ **ADMIN DASHBOARD & CONTENT MANAGEMENT**

#### **5. Package Management Strategy**
- [ ] **CONFIRM:** Super admin updates packages via dashboard?
  - [ ] Create new packages
  - [ ] Edit existing packages
  - [ ] Set pricing rules
  - [ ] Manage availability

#### **6. Booking Management Workflow**
- [ ] **DEFINE:** Admin booking processing steps
  - [ ] View new bookings
  - [ ] Update booking status
  - [ ] Add pricing estimates
  - [ ] Customer communication flow

---

### 🏗️ **BACKEND DEVELOPMENT PRIORITIES**

#### **7. Development Sequence**
- [x] ~~Backend API structure~~ ✅ (files deleted, need recreation)
- [ ] **REBUILD:** All deleted backend files
- [ ] Database setup & migrations
- [ ] API testing with Swagger
- [ ] Frontend-backend integration

#### **8. Your Additional Questions**
- [ ] **PENDING:** You mentioned more questions coming up
  - [ ] Payment processing workflow?
  - [ ] IATA compliance alternatives?
  - [ ] Pricing calculation logic?
  - [ ] Multi-currency support?

---

### ⚡ **IMMEDIATE DECISIONS NEEDED:**

1. **🔥 URGENT:** Recreate deleted backend files?
2. **📝 CLARIFY:** Customer account requirements
3. **🔔 DEFINE:** Complete notification flow
4. **💼 PLAN:** Admin dashboard features

---

**Which question should we tackle first?** 🎯