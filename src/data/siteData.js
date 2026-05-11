// ─────────────────────────────────────────────
// src/data/siteData.js
// Edit all website content here
// ─────────────────────────────────────────────

export const META = {
  name: 'Tanishq Photography',
  tagline: 'Wedding & Cinematography',
  phone: '9637777744',
  instagram: 'tanishq_photographys',
  instagramWeddings: 'tanishq_weddings',
  location: 'Kannnad Sambajinagar, Maharashtra',
  availability: 'Available Worldwide',
  email: 'tanishqphotography@gmail.com', // update if needed
}

export const STATS = [
  { value: 300, suffix: '+', label: 'Weddings' },
  { value: 5,   suffix: '+', label: 'Years Exp.' },
  { value: 2467, suffix: '',  label: 'Followers' },
]

// ── HERO ────────────────────────────────────
// Add your images to /public/images/ and reference them here
// e.g. src: '/images/hero1.jpg'
export const HERO_IMAGES = [
  { src: '/images/hero1.jpg', alt: 'Wedding couple portrait' },
  { src: '/images/hero2.jpg', alt: 'Bridal portrait' },
  { src: '/images/hero3.jpg', alt: 'Royal wedding' },
  { src: '/images/hero4.jpg', alt: 'Candid moment' },
  { src: '/images/hero5.jpg', alt: 'Wedding film BTS' },
]

// ── ABOUT ───────────────────────────────────
export const ABOUT = {
  // Replace with your actual photo path e.g. '/images/tanishq-portrait.jpg'
  photo: '/images/Couple.jpg',
  photoAlt: 'Tanishq — photographer holding camera',
  quote: '"I don\'t just photograph weddings — I preserve the feeling of the day, forever."',
  bio: 'Based in Kannnad Sambajinagar and available worldwide, Tanishq Photography brings fine-art sensibility and documentary storytelling to every wedding. With a passion for authentic moments and cinematic quality, each frame is crafted with intention and heart.',
}

// ── SERVICES ────────────────────────────────
export const SERVICES = [
  {
    number: '01',
    title: 'Wedding Photography',
    description: 'Candid emotions and composed elegance — we capture every stolen glance, tender moment, and joyful celebration across your entire wedding day.',
    tag: 'Photography',
  },
  {
    number: '02',
    title: 'Wedding Cinematography',
    description: 'Cinematic films that tell your love story with artistry and depth. Every scene is crafted to move you for a lifetime.',
    tag: 'Videography',
  },
  {
    number: '03',
    title: 'Pre-Wedding Shoots',
    description: 'Intimate couple sessions celebrating your love story before the big day — in locations that reflect your journey together.',
    tag: 'Portraits',
  },
  {
    number: '04',
    title: 'Model Portfolio',
    description: 'Professional portfolio sessions for models and artists, crafted with editorial lighting and composition to elevate your presence.',
    tag: 'Portfolio',
  },
  {
    number: '05',
    title: 'Royal Weddings',
    description: 'Grandeur deserves exceptional documentation. Specializing in large-scale, elaborate wedding celebrations where every regal detail is honored.',
    tag: 'Luxury',
  },
  {
    number: '06',
    title: 'Destination Coverage',
    description: 'Available across India and worldwide. Wherever your wedding takes you, we travel with the same dedication and artistry.',
    tag: 'Worldwide',
  },
]

// ── GALLERY ─────────────────────────────────
// Add your images to /public/images/gallery/
// cat options: 'wedding' | 'couple' | 'portrait' | 'film'
export const GALLERY_ITEMS = [
  { src: '/images/gallery/Bride.jpg',  alt: 'Bridal portrait',        cat: 'wedding',  label: 'Bridal Portrait' },
  { src: '/images/gallery/Prewedding.jpg',  alt: 'Pre-wedding couple',     cat: 'couple',   label: 'Pre-Wedding' },
  { src: '/images/gallery/Model.jpg',  alt: 'Model portfolio shot',   cat: 'portrait', label: 'Model Portfolio' },
  { src: '/images/gallery/Ceremony.jpg',  alt: 'Wedding ceremony',       cat: 'wedding',  label: 'Ceremony' },
  { src: '/images/gallery/Cinematic.jpg',  alt: 'Cinematic BTS',          cat: 'film',     label: 'Cinematic BTS' },
  { src: '/images/gallery/Bridalsty.jpg',  alt: 'Bridal styling',         cat: 'wedding',  label: 'Bridal Styling' },
  { src: '/images/gallery/Engagement.jpg',  alt: 'Engagement session',     cat: 'couple',   label: 'Engagement' },
  { src: '/images/gallery/Reception.jpg',  alt: 'Reception night',        cat: 'wedding',  label: 'Reception' },
  { src: '/images/gallery/g9.jpg',  alt: 'Behind the scenes',      cat: 'portrait', label: 'Behind The Scenes' },
  { src: '/images/gallery/g10.jpg', alt: 'Film reel moment',       cat: 'film',     label: 'Film Reel' },
  { src: '/images/gallery/g11.jpg', alt: 'Couple love story',      cat: 'couple',   label: 'Love Story' },
]

// ── TESTIMONIALS ────────────────────────────
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
    quote: 'We hired Tanishq for our destination pre-wedding shoot in Rajasthan and the results were magazine-worthy. Incredibly talented and passionate about their craft.',
    name: 'Anika & Rohan',
    event: 'Pre-Wedding · Jaipur, 2025',
  },
]

// ── PACKAGES ────────────────────────────────
export const PACKAGES = [
  {
    badge: 'Essential',
    name: 'Silver',
    price: 'On Request',
    features: [
      'Full-day photography coverage',
      '300+ edited high-res images',
      'Online gallery delivery',
      '1 photographer',
      '7-day turnaround',
    ],
    featured: false,
  },
  {
    badge: 'Most Popular',
    name: 'Gold',
    price: 'On Request',
    features: [
      'Full-day photo + video coverage',
      '500+ edited high-res images',
      'Cinematic wedding highlight film',
      '2 photographers + 1 videographer',
      'Pre-wedding shoot included',
      'Printed photo album',
    ],
    featured: true,
  },
  {
    badge: 'Premium',
    name: 'Royal',
    price: 'On Request',
    features: [
      'Multi-day full event coverage',
      'Unlimited edited images',
      'Feature-length wedding film',
      'Full production crew',
      'Drone aerial coverage',
      'Luxury album + destination travel',
    ],
    featured: false,
  },
]
