# 🎟️ JioMart Coupon Generator & Checker

A simple web app that **generates JioMart-style coupon codes** (with a fixed prefix `3M9B` + 6 random alphanumeric characters) and checks their validity against the official JioMart API.

Built with:
- **Frontend:** HTML, CSS, Bootstrap, JavaScript
- **Backend (API route):** Node.js + Axios
- **Deployment:** Vercel Serverless Functions

---

## 🚀 Features
- Generate random coupons like `3M9B7K2LQ9`
- Test multiple coupons in one go
- Show live results in a clean table:
  - ✅ Valid (applied successfully)
  - ❌ Invalid (coupon expired, used, or invalid)
  - ⚠️ Error (API/network issue)
- Configurable Cart ID, Auth Token, User ID, and PIN

---

