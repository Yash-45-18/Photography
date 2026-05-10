# Tanishq Photography — Next.js Website

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
tanishq-photography/
├── app/
│   ├── layout.jsx        ← Root layout + metadata + fonts
│   ├── page.jsx          ← Main page (composes all sections)
│   └── globals.css       ← All styles + design tokens
│
├── components/
│   ├── Navbar.jsx        ← Sticky nav with scroll effect
│   ├── Hero.jsx          ← Hero section + animated stats
│   ├── About.jsx         ← About / photographer bio
│   ├── Services.jsx      ← 6 service cards
│   ├── Gallery.jsx       ← Filterable gallery + lightbox
│   ├── Testimonials.jsx  ← 3 client reviews
│   ├── Packages.jsx      ← 3 pricing tiers
│   ├── Contact.jsx       ← Contact form + info
│   ├── Footer.jsx        ← Footer links
│   ├── InstaBadge.jsx    ← Floating Instagram link
│   ├── Reveal.jsx        ← Scroll-reveal animation wrapper
│   └── ImageSlot.jsx     ← Image placeholder (swap with real photos)
│
├── data/
│   └── siteData.js       ← ALL content lives here (edit this!)
│
├── hooks/
│   └── useAnimations.js  ← useScrolled, useInView, useCounter
│
└── public/
    └── images/           ← DROP YOUR PHOTOS HERE
```

---

## 🖼️ How to Add Images

All image slots are in **`data/siteData.js`**.

### Step 1 — Drop images into `/public/images/`
Rename them clearly:
```
public/images/
  hero-1.jpg
  hero-2.jpg
  hero-3.jpg
  hero-4.jpg
  hero-5.jpg
  about-portrait.jpg
  gallery-bridal.jpg
  gallery-couple.jpg
  ... etc
```

### Step 2 — Update `data/siteData.js`

**Hero mosaic (5 images):**
```js
export const HERO_IMAGES = [
  { src: '/images/hero-1.jpg', alt: 'Bride' },
  { src: '/images/hero-2.jpg', alt: 'Royal Wedding' },
  // ...
]
```

**About portrait:**
```js
export const ABOUT_IMAGE = { src: '/images/about-portrait.jpg', alt: 'Tanishq — Photographer' }
```

**Gallery (11 images):**
```js
export const GALLERY_ITEMS = [
  { src: '/images/gallery-bridal.jpg', alt: 'Bridal Portrait', category: 'wedding', label: 'Bridal Portrait' },
  { src: '/images/gallery-couple.jpg', alt: 'Couple Session', category: 'couple',  label: 'Couple Session' },
  // ...
]
```

That's it — the `ImageSlot` component handles the rest.

---

## ✏️ How to Edit Content

Everything is in **`data/siteData.js`**:
- Site name, phone, Instagram handles → `SITE`
- Hero stats (weddings, years, followers) → `STATS`
- Services cards → `SERVICES`
- Testimonials → `TESTIMONIALS`
- Packages → `PACKAGES`

---

## 📬 Connect the Contact Form

The form in `components/Contact.jsx` currently uses a fake delay.
Replace the `setTimeout` block with a real service:

**Option A — Formspree (free, no backend needed):**
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: new FormData(e.target),
  headers: { Accept: 'application/json' },
})
```

**Option B — EmailJS:**
```js
import emailjs from '@emailjs/browser'
await emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'PUBLIC_KEY')
```

---

## 🌐 Deploy

**Vercel (recommended — free):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# Upload the .next folder or connect via GitHub
```
