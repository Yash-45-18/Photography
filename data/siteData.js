// ─────────────────────────────────────────────────────────────
//  data/siteData.js
//  Edit this file to update all content on the website.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name:       'Tanishq Photography',
  tagline:    'Wedding & Cinematography',
  phone:      '9637777744',
  instagram:  '@tanishq_photographys',
  weddings:   '@tanishq_weddings',
  location:   'Kannnad Sambajinagar, Maharashtra',
  available:  'Worldwide | Destination Weddings Welcome',
}

export const STATS = [
  { value: 300, suffix: '+', label: 'Weddings' },
  { value: 5,   suffix: '+', label: 'Years Exp.' },
  { value: 2467, suffix: '', label: 'Followers' },
]

export const SERVICES = [
  {
    num: '01',
    title: 'Wedding Photography',
    desc: 'Candid emotions and composed elegance — we capture every stolen glance, tender moment, and joyful celebration across your entire wedding day.',
    tag: 'Photography',
  },
  {
    num: '02',
    title: 'Wedding Cinematography',
    desc: 'Cinematic films that tell your love story with artistry. Every scene is crafted to move you for a lifetime.',
    tag: 'Videography',
  },
  {
    num: '03',
    title: 'Pre-Wedding Shoots',
    desc: 'Intimate couple sessions celebrating your love story before the big day — in locations that reflect your journey together.',
    tag: 'Portraits',
  },
  {
    num: '04',
    title: 'Model Portfolio',
    desc: 'Professional portfolio sessions for models and artists, crafted with editorial lighting to elevate your presence.',
    tag: 'Portfolio',
  },
  {
    num: '05',
    title: 'Royal Weddings',
    desc: 'Grandeur deserves exceptional documentation. Specializing in large-scale, elaborate wedding celebrations.',
    tag: 'Luxury',
  },
  {
    num: '06',
    title: 'Destination Coverage',
    desc: 'Available across India and worldwide. Wherever your wedding takes you, we travel with the same dedication.',
    tag: 'Worldwide',
  },
]

// ─── GALLERY ──────────────────────────────────────────────────
// To add your images:
//   1. Drop image files into /public/images/
//   2. Set src to '/images/your-file.jpg'
//   3. Give it a category: wedding | couple | portrait | film
// ──────────────────────────────────────────────────────────────
export const GALLERY_ITEMS = [
  { src: null, alt: 'Bridal Portrait',       category: 'wedding',  label: 'Bridal Portrait' },
  { src: null, alt: 'Pre-Wedding Couple',    category: 'couple',   label: 'Pre-Wedding Couple' },
  { src: null, alt: 'Model Portfolio',       category: 'portrait', label: 'Model Portfolio' },
  { src: null, alt: 'Wedding Ceremony',      category: 'wedding',  label: 'Wedding Ceremony' },
  { src: null, alt: 'Cinematic BTS',         category: 'film',     label: 'Cinematic BTS' },
  { src: null, alt: 'Bridal Styling',        category: 'wedding',  label: 'Bridal Styling' },
  { src: null, alt: 'Engagement Session',    category: 'couple',   label: 'Engagement Session' },
  { src: null, alt: 'Reception Night',       category: 'wedding',  label: 'Reception Night' },
  { src: null, alt: 'Behind The Scenes',     category: 'portrait', label: 'Behind The Scenes' },
  { src: null, alt: 'Film Reel',             category: 'film',     label: 'Film Reel' },
  { src: null, alt: 'Love Story',            category: 'couple',   label: 'Love Story' },
]

// ─── HERO MOSAIC ──────────────────────────────────────────────
// 5 images shown in the right-side hero collage
// Set src to '/images/your-file.jpg' or leave null for placeholder
export const HERO_IMAGES = [
  { src: `/images/Bride.jpg`, alt: 'Bride' },
  { src: `/images/RoyalW.jpg`, alt: 'Royal Wedding' },
  { src: `/images/Couple.jpg`, alt: 'Couple' },
  { src: `/images/Candid.jpg`, alt: 'Candid' },
  { src: `/images/Film.mp4`, alt: 'Film', type: 'video' },
]

// About section portrait
export const ABOUT_IMAGE = { src: null, alt: 'Tanishq — Photographer' }

export const TESTIMONIALS = [
  {
    quote: 'Tanishq captured our wedding day beyond our wildest dreams. Every emotion, every tiny detail preserved perfectly. We rewatch our wedding video every anniversary.',
    name: 'Priya & Rahul',
    event: 'Wedding · Aurangabad, 2024',
  },
  {
    quote: 'From our pre-wedding shoot to the grand reception, the team was professional, creative and so fun to work with. The photos are absolutely stunning.',
    name: 'Sneha & Vikram',
    event: 'Royal Wedding · Pune, 2024',
  },
  {
    quote: 'We hired Tanishq for our destination pre-wedding shoot in Rajasthan and the results were magazine-worthy. Incredibly talented and passionate.',
    name: 'Anika & Rohan',
    event: 'Pre-Wedding · Jaipur, 2025',
  },
]

export const PACKAGES = [
  {
    badge: 'Essential',
    name: 'Silver',
    price: 'On Request',
    featured: false,
    features: [
      'Full-day photography coverage',
      '300+ edited high-res images',
      'Online gallery delivery',
      '1 photographer',
      '7-day turnaround',
    ],
  },
  {
    badge: 'Most Popular',
    name: 'Gold',
    price: 'On Request',
    featured: true,
    features: [
      'Full-day photo + video coverage',
      '500+ edited high-res images',
      'Cinematic wedding highlight film',
      '2 photographers + 1 videographer',
      'Pre-wedding shoot included',
      'Printed photo album',
    ],
  },
  {
    badge: 'Premium',
    name: 'Royal',
    price: 'On Request',
    featured: false,
    features: [
      'Multi-day full event coverage',
      'Unlimited edited images',
      'Feature-length wedding film',
      'Full production crew',
      'Drone aerial coverage',
      'Luxury album + destination travel',
    ],
  },
]
