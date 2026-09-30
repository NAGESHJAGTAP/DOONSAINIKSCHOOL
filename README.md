# Doon Sainik School — Premier Defense & Sainik Academy Frontend

A modern, high-performance, fully responsive frontend web application inspired by [Doon Sainik School](https://doonsainikschool.com/). Built for entrance coaching preparation across **All India Sainik Schools (AISSEE)**, **Rashtriya Indian Military College (RIMC) Dehradun**, **Rashtriya Military Schools (RMS)**, and **NDA Foundation**.

---

## 🌟 Key Highlights & Architecture

- **100% Mobile-First & Fully Responsive:** Tested and verified across desktop (1440px, 1280px, 1024px), tablet (768px, 820px, 912px), and mobile devices (480px, 414px, 390px, 375px, 360px). Zero horizontal overflow.
- **Prestige Military Academy Aesthetic:** Navy Blue (`#0c1a30`), Brass Gold (`#f59e0b`), Crimson Red accents, clean white cards, subtle glassmorphism, and custom SVG crest icons.
- **Modern Typography:** Google Fonts pairing of **Outfit** (headings), **Plus Jakarta Sans** (body text), and **Cinzel** (insignia).
- **Interactive Framer Motion Animations:** Viewport-triggered reveals, animated statistics counters, carousel transitions, and touch-friendly controls.
- **Dynamic Routing & Reusable Components:** Full React Router setup with 8 core pages, 1 dynamic course detail route (`/courses/:courseId`), and custom 404 page.
- **Zero Backend / Lightweight Production Bundle:** Self-contained data models in `src/data/`, client-side validated inquiry modal and contact form with instant notifications.

---

## 🚀 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Component-driven UI development |
| **Vite 6** | Ultra-fast build tool and dev server |
| **Tailwind CSS 3.4** | Utility-first styling with custom military color tokens |
| **React Router 7** | Client-side routing with automatic scroll restoration |
| **Framer Motion** | Micro-interactions, slide reveals, and animated modals |
| **Lucide React** | Clean, accessible iconography |

---

## 📂 Project Structure

```text
doonsainikschool/
├── public/
│   ├── favicon.svg          # Custom Academy Shield Crest Favicon
├── src/
│   ├── assets/              # Static styling assets
│   ├── components/
│   │   ├── Button.jsx           # Reusable button (Gold, Navy, Outline, Ghost, Sizing)
│   │   ├── Header.jsx           # Top info hotline bar + Sticky Navbar + Academy Crest
│   │   ├── MobileMenu.jsx       # Responsive drawer navigation with touch targets
│   │   ├── Footer.jsx           # 4-Column footer with accreditation, links, contact
│   │   ├── Hero.jsx             # High-contrast hero carousel with slider indicators
│   │   ├── SectionTitle.jsx     # Typographic heading with kicker badge and gold bars
│   │   ├── StatsCounter.jsx     # Viewport-triggered animated numeric counters
│   │   ├── CourseCard.jsx       # Reusable course card with rating, tags, and CTA
│   │   ├── AchievementCard.jsx  # Hall of Fame cadet card with rank, score, and quote
│   │   ├── TestimonialCard.jsx  # Verified parent/cadet review card with stars
│   │   ├── FeatureCard.jsx      # Why Choose Us card with dynamic Lucide icons
│   │   ├── Lightbox.jsx         # Fullscreen gallery image modal with next/prev
│   │   ├── EnquiryModal.jsx     # Modal for admission application with validation
│   │   └── ScrollToTop.jsx      # Route-change scroll restoration + floating top button
│   ├── data/
│   │   ├── courses.js           # 6 comprehensive defense entrance curricula
│   │   ├── achievements.js      # Hall of fame cadets and statistics metrics
│   │   ├── testimonials.js      # Parent & student reviews
│   │   ├── gallery.js           # Campus & cadet activities gallery categories
│   │   └── features.js          # Leadership message, Why Choose Us, 4-step admission
│   ├── pages/
│   │   ├── Home.jsx             # 11-section complete homepage
│   │   ├── About.jsx            # Heritage, Mission, Vision, Values, Infrastructure
│   │   ├── Courses.jsx          # Live search + category filter + course cards
│   │   ├── CourseDetails.jsx    # Dynamic syllabus, mark distribution, FAQs, sidebar
│   │   ├── Admission.jsx        # 4-Step timeline, eligibility matrix, documents checklist
│   │   ├── Gallery.jsx          # Category filter + Masonry grid + Lightbox
│   │   ├── Testimonials.jsx     # Parent/Student review filter + video card mockups
│   │   ├── Contact.jsx          # Address cards, validated form, directions, Map embed
│   │   └── NotFound.jsx         # 404 off-grid cadet error page
│   ├── App.jsx                  # Main router and global modal providers
│   ├── index.css                # Tailwind directives, CSS variables, custom utilities
│   └── main.jsx                 # React root DOM entry
├── index.html                   # SEO metadata, Google Fonts, theme color
├── tailwind.config.js           # Custom theme extension (navy, gold, font families)
├── postcss.config.js            # PostCSS configuration
└── package.json
```

---

## 🛠️ How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📱 Verified Responsive Breakpoints

- **Desktop:** 1440px, 1280px, 1024px
- **Tablet:** 768px, 820px, 912px
- **Mobile:** 480px, 414px, 390px, 375px, 360px
