# KISHORE_PHOTOGRAPHY_WEBSITE.md

# Engineered Moments by Kishore

### Professional Photography Portfolio Website Project Brief

---

## Project Vision

Build a **production-ready, highly professional photography portfolio website** for **Kishore**, an engineer who transformed his passion for photography into a profession.

The website should reflect:

* elegance
* trust
* creativity
* premium visual storytelling
* mobile + desktop compatibility
* future scalability

Theme should feel modern, luxurious, and clean.

Suggested brand identity:

**Engineered Moments by Kishore**
*Where precision meets emotion*

---

## Brand Story

Kishore started his professional journey as an engineer, where precision, structure, and attention to detail shaped his perspective.

Over time, his love for capturing emotions and life’s special moments evolved from a hobby into a professional passion.

Today, he combines technical perfection with artistic storytelling to preserve memories that last forever.

This journey from engineering to photography should be beautifully highlighted on the website.

---

## Logo Requirement

Create a professional logo using:

* **KG monogram**
* camera lens / aperture symbol
* modern typography
* luxury black and gold theme

Example style direction:

`KG inside camera aperture icon`

Minimal and premium look.

---

## Technology Stack

Use modern production stack:

* **Next.js 14**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **PostgreSQL**
* **Prisma ORM**
* **NextAuth Google Login**
* **Docker**
* **Nginx**
* **Responsive Design**
* **SEO optimized**

---

## Website Pages and Features

---

### 1. Home / Landing Page

Create a full-screen premium landing page.

Include:

* cinematic hero image
* animated text transitions
* CTA buttons
* elegant typography

Hero title:

# Capturing Life’s Most Precious Moments

Subtext:

From engineering precision to artistic storytelling, Kishore transforms moments into timeless memories.

Buttons:

* View Portfolio
* Book a Session
* Instagram

---

### 2. About Photographer Section

Add a premium storytelling section explaining:

Engineer → Photographer journey

Include a professional paragraph.

---

### 3. Portfolio Showcase

Create a professional gallery layout.

Requirements:

* masonry grid
* lightbox popup
* category filters
* smooth hover effects
* lazy loading
* high performance
* dummy placeholder photos for now

Categories:

* Birthdays
* Marriage
* Pregnancy
* Newborn
* Family
* Portraits

Later real photos will replace placeholders.

---

### 4. Instagram Integration

Embed Instagram profile feed.

Instagram profile:

Kishore Gunda
https://www.instagram.com/kishoregunda

Show recent posts on homepage and dedicated section.

---

### 5. Professional Credibility Section

Add trust-building section:

> Acclaimed photography experience with professional training from expert photographers.

This section should feel premium and trustworthy.

---

### 6. Services and Pricing

Create service cards for:

* Birthday Photography
* Marriage / Wedding Photography
* Pregnancy Shoot
* Newborn Photography
* Family Events
* Portrait Sessions

Include tagline:

**Affordable packages for every special occasion**

---

### 7. Reviews / Comments System

Implement database-backed photo review system.

Requirements:

* login with existing Google account
* authenticated users can comment on photographs
* star rating system
* public reviews visible below photographs
* comments stored in database

Suggested table:

## Reviews Table

* id
* user_name
* email
* google_id
* photo_id
* rating
* comment
* created_at

---

### 8. Admin Login Dashboard

Create protected admin panel.

Admin should be able to:

* login securely
* view customer booking requests
* manage uploaded photographs
* moderate comments
* delete spam reviews
* view inquiry list

Suggested sections:

* Dashboard
* Requests
* Portfolio Upload
* Reviews
* Analytics

---

### 9. Contact / Booking Form

Create inquiry form.

Fields:

* Full Name
* Email
* Phone Number
* Event Type
* Preferred Date
* Message

Store all requests in database.

Admin can access from dashboard.

---

### 10. Contact Details

Display professionally in footer and contact page.

**Address**
Salzgasse 7
93059 Regensburg
Germany

**Phone**
+49 151 63034064

**Email**
[kishore.gunda01@gmail.com](mailto:kishore.gunda01@gmail.com)

**Instagram**
https://www.instagram.com/kishoregunda

---

### 11. Responsive Layout

Website must be fully responsive for:

* desktop
* tablet
* mobile

Mobile-first professional design mandatory.

---

### 12. SEO Requirements

Add:

* meta title
* meta description
* Open Graph image
* sitemap.xml
* robots.txt
* structured metadata

---

## Deployment Requirement

Website should be deployment ready.

Future hosting domain:

**pihudrive.lol**

Should support deployment on:

* VPS
* Docker
* Nginx
* Vercel (optional)

---

## Docker Requirement

Create:

### Dockerfile

* production optimized
* multi-stage build

### docker-compose.yml

services:

* app
* postgres
* nginx

---

## UI Theme

Premium photography theme:

* black
* white
* matte gold
* soft gray

Style inspiration:

luxury portfolio / studio website

---

## Quality Expectation

Website must look:

* highly professional
* production ready
* premium
* visually elegant
* suitable for real customers

This is not a demo site.

It should be ready for real-world business use.

---
