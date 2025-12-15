# MyTripMates Website – AI Design & Development Prompt

## Project Overview
Design and develop a production-ready travel website for **MyTripMates**, a premium travel brand focused on couples and travelers planning customized trips.

The website must be **modular, scalable, and AI-iterable**, allowing individual components to be fixed or optimized later **without affecting approved sections**.

---

## Core AI Instructions (Strict Rules)

1. **Do NOT refactor, rename, remove, or redesign any element that I explicitly approve later.**
2. When fixing issues (flickering, broken animations, layout shifts, performance issues):
   - Fix **only** the reported issue
   - Do **not** alter layout, styling, structure, or logic of approved components
3. Maintain **clean, readable, and commented code**
4. Use **modular, reusable components**
5. Ensure animations are **performance-safe** and do not cause layout thrashing

---

## Visual Design Direction

### Brand Feel
- Premium, warm, and emotionally engaging
- Designed for couples and experiential travelers
- Trend-forward but minimal
- Storytelling-focused with smooth motion

### Design Inspiration
- Strong inspiration from **bucketlist.to**
- More modern, emotional, and personalized

---

## Hero Section (Critical)

### Layout Rules
- ❌ No single large hero image
- ✅ Use layered visual elements:
  - Soft gradients
  - Ambient textures
  - Floating image fragments or polaroid-style frames
- Create depth without visual clutter

### Content
- Clean, concise, emotionally appealing headline
- Short supporting subtext
- Clear primary CTA:
  - **“DM us on WhatsApp”**
- CTA must be visually prominent and accessible

---

## Below-Hero Feature

### Polaroid Carousel
- Polaroid-style visual frames
- 3–4 pinned travel moments
- Smooth, slow rotating animation
- Soft shadows and depth
- Organic, non-mechanical motion

---

## Destinations Section

### Destination Cards
- Futuristic glassmorphism design
- Blur effects
- Subtle shadows
- Interactive hover animations:
  - Slight lift
  - Glow or border highlight
- Smooth, subtle transitions only

---

## Animations & Motion

- Use **GSAP or Framer Motion**
- Smooth and minimal transitions
- No flickering, jitter, or layout shifts
- Animations should:
  - Enhance storytelling
  - Never block interaction
  - Be performance-optimized

---

## Navigation Structure

### Main Pages
- Home
- About
- Destinations
- Gallery
- Reviews
- Contact
- Privacy Policy
- Refund Policy
- Terms & Conditions
- Booking Policy

---

## Destination Pages (Reusable Components)

### Destinations to Include
- Bali
- Thailand
- Maldives
- Seychelles
- Vietnam
- Philippines
- China Canton Fair

### Technical Requirements
- Each destination opens as a **single reusable component**
- Same layout and structure across all destinations
- Only content (text, images, experiences) changes
- No duplicated logic

---

## China Canton Fair – Special Focus

Create additional supporting pages focused on:
- China Canton Fair travel planning
- Business travel experiences
- Logistics, stays, and itineraries
- Must feel professional, premium, and informative

---

## Code Architecture Rules

- Modular component-based structure
- Clear separation of concerns
- No hard-coded magic values
- Animations isolated from layout logic
- Easy to debug and extend

---

## Iteration & Bug-Fix Protocol (Very Important)

When I report an issue such as:
- “This section flickers”
- “This animation breaks on scroll”
- “This hover effect is laggy”

You must:
1. Fix **only** the reported issue
2. Keep all approved elements visually and structurally unchanged
3. Briefly explain:
   - What was fixed
   - Why the issue occurred

---

## Final Objective

Deliver a **premium, emotionally engaging, smooth, and scalable travel website** that:
- Feels modern and trustworthy
- Encourages WhatsApp inquiries
- Can be safely iterated without breaking existing features

---
