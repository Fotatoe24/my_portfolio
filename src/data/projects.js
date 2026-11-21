// Your projects, in the order they appear on the site.
//
// Media (all optional — the site shows a styled placeholder until you add them):
//   poster:  still image for the card and project page   e.g. '/media/dormvision/poster.jpg'
//   clip:    short muted loop (5–10s) that plays on hover e.g. '/media/dormvision/clip.mp4'
//   video:   full walkthrough on the project page — either an .mp4 path
//            or a YouTube video ID, e.g. { youtube: 'dQw4w9WgXcQ' }
//   gallery: screenshots shown in a lightbox             e.g. ['/media/dormvision/1.jpg', ...]
//
// Put the files in public/media/<slug>/ (see public/media/README.md).

export const projects = [
  {
    slug: "dormvision",
    title: "DormVision",
    kind: "web",
    category: "Web App",
    year: "2026",
    tagline: "Dormitory management & accounting system",
    whatItIs:
      "A web-based dormitory management and accounting information system.",
    whatItDoes:
      "Replaces paper records for dorm owners — tenants, rooms, monthly billing, payments, income and expenses, and financial monitoring in one place.",
    highlights: [
      "Separate portals for tenants, dorm owners and the platform admin",
      "Automatic monthly bills with PDF invoices and receipts",
      "Income, expense, collection and occupancy trends",
      "Custom JWT sessions, login lockout, rate limiting and audit log",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/Fotatoe24/DormVision",
    live: null,
    media: {
      poster: "/media/dormvision/poster.png",
      clip: null,
      video: null,
      gallery: [
        "/media/dormvision/1.png",
        "/media/dormvision/2.png",
        "/media/dormvision/3.png",
        "/media/dormvision/4.png",
        "/media/dormvision/5.png",
        "/media/dormvision/10.png",
      ],
    },
  },
  {
    slug: "integrio",
    title: "Integrio PMS",
    kind: "web",
    category: "Web App",
    year: "2026",
    tagline: "Property management for short-term rentals",
    whatItIs: "A property management system for Airbnb-style rental units.",
    whatItDoes:
      "Runs the whole operation — bookings, guests, housekeeping, bills, expenses, payments and staff — with calendars synced from booking sites.",
    highlights: [
      "iCal calendar sync with booking platforms",
      "Owner, staff and auditor views",
      "Financial reports and charts",
      "Booking-status endpoint for a chatbot",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "shadcn/ui", "Recharts"],
    github: "https://github.com/Fotatoe24/integrio-pms_v2",
    live: null,
    media: {
      poster: "/media/integrio/poster.png",
      clip: null,
      video: null,
      gallery: [
        "/media/integrio/1.png",
        "/media/integrio/2.png",
        "/media/integrio/3.png",
      ],
    },
  },
  {
    slug: "artdotica",
    title: "Artdotica",
    kind: "desktop",
    category: "Desktop App",
    year: "2026",
    tagline: "Pixel art editor for the desktop",
    whatItIs: "A fully offline pixel art editor built with Electron.",
    whatItDoes:
      "Create and manage pixel art projects, draw with pen, eraser and fill bucket, and export at up to 16× scale.",
    highlights: [
      "Project dashboard with rename, delete and custom canvas sizes",
      "Brush sizes, colour picker, palette, undo/redo, zoom and grid",
      "Export to PNG, JPG, WEBP or BMP at 1×–16×",
      "Dark/light theme with no white flash on startup",
    ],
    stack: ["Electron", "JavaScript", "HTML", "CSS", "Node.js"],
    github: "https://github.com/Fotatoe24/artdotica",
    live: null,
    media: {
      poster: "/media/artdotica/poster.png",
      clip: null,
      video: null,
      gallery: [
        "/media/artdotica/1.png",
        "/media/artdotica/2.png",
        "/media/artdotica/3.png",
      ],
    },
  },
  {
    slug: "busahero",
    title: "BUSAhero",
    kind: "web",
    category: "Web App",
    year: "2026",
    tagline: "Bus tracking & fare management",
    whatItIs:
      "A bus tracking and fare management app for the Olongapo–Zambales route.",
    whatItDoes:
      "Shows live bus locations on a map and lets operators manage fares, with user accounts and a fare dashboard.",
    highlights: [
      "Live bus positions on an interactive map",
      "Fare management with regular and discounted rates",
      "Registration, login and password reset",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Supabase", "Leaflet"],
    github: "https://github.com/Fotatoe24/BUSahero-webapp",
    live: null,
    media: { poster: null, clip: null, video: null, gallery: [] },
  },
  {
    slug: "evangelina",
    title: "Evangelina's Staycation",
    kind: "web",
    category: "Web App",
    year: "2026",
    tagline: "Booking system for a real rental business",
    whatItIs:
      "A booking management system built for a working staycation business.",
    whatItDoes:
      "Handles bookings, the calendar, housekeeping and bills, with five user roles checked on every page and API route.",
    highlights: [
      "Owner, co-owner, housekeeping, booker and auditor roles",
      "Full activity log for auditing",
      "PDF and Excel exports",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/Fotatoe24/evangelina-pms",
    live: null,
    media: { poster: null, clip: null, video: null, gallery: [] },
  },
  {
    slug: "audiothentic",
    title: "Audiothentic",
    kind: "web",
    category: "AI · Web App",
    year: "2026",
    tagline: "AI voice deepfake detector",
    whatItIs: "A tool that tells real voices from AI-generated ones.",
    whatItDoes:
      "Record or upload a clip and a trained CNN model returns a real-vs-AI verdict with a confidence score.",
    highlights: [
      "CNN model with emotion features",
      "Live waveform while recording",
      "History of past checks",
    ],
    stack: ["React", "Vite", "Web Audio API", "Python"],
    github: "https://github.com/Fotatoe24/Audiothentic",
    live: null,
    media: {
      poster: "/media/audiothentic/poster.png",
      clip: null,
      video: null,
      gallery: [],
    },
  },
  {
    slug: "shop-kiosk",
    title: "Shop Kiosk",
    kind: "desktop",
    category: "Desktop System",
    year: "",
    tagline: "Self-service ordering kiosk",
    whatItIs: "A self-service ordering kiosk with staff screens behind it.",
    whatItDoes:
      "Customers order on their own; the cashier marks it paid, the kitchen works a prep queue, and a status board shows progress through to the receipt.",
    highlights: [
      "Customer → cashier → kitchen → status board flow",
      "Admin product management and order history",
      "Entire UI built in code with a shared theme",
      "Database creates its own tables on first run",
    ],
    stack: ["VB.NET", "Windows Forms", "MS Access"],
    github: null,
    live: null,
    media: {
      poster: "/media/shop_kiosk/poster.png",
      clip: null,
      video: null,
      gallery: [
        "/media/shop_kiosk/1.png",
        "/media/shop_kiosk/2.png",
        "/media/shop_kiosk/3.png",
        "/media/shop_kiosk/4.png",
        "/media/shop_kiosk/5.png",
      ],
    },
  },
  {
    slug: "resort-management",
    title: "Resort Management System",
    kind: "desktop",
    category: "Desktop System",
    year: "2026",
    tagline: "Front desk, billing & POS for a resort",
    whatItIs: "A complete system for running a resort or hotel.",
    whatItDoes:
      "Reservations, check-in and check-out, guest accounts with automatic balances, and a restaurant and bar POS with stock tracking.",
    highlights: [
      "Guest folio with amenity pricing and balance recalculation",
      "Restaurant & bar point-of-sale",
      "Booking receipts and room reports via Crystal Reports",
    ],
    stack: ["VB.NET", "Windows Forms", "MS Access", "Crystal Reports"],
    github: "https://github.com/Fotatoe24/resort-management",
    live: null,
    media: {
      poster: "/media/rms/poster.png",
      clip: null,
      video: null,
      gallery: [
        "/media/rms/1.png",
        "/media/rms/2.png",
        "/media/rms/3.png",
        "/media/rms/4.png",
        "/media/rms/5.png",
      ],
    },
  },
  {
    slug: "ienc-kitchenware",
    title: "I en C Kitchenware POS",
    kind: "desktop",
    category: "Desktop System",
    year: "",
    team: true,
    tagline: "Point-of-sale & inventory",
    whatItIs: "A point-of-sale and inventory system for a kitchenware shop.",
    whatItDoes:
      "Checkout with receipt printing, stock management, user accounts and an activity log, with reports that export to Excel.",
    highlights: [
      "Sales, stock, transaction and user reports",
      "Excel export",
      "Ships with a Windows installer",
    ],
    stack: ["VB.NET", "Windows Forms", "MS Access", "Crystal Reports"],
    github: null,
    live: null,
    media: {
      poster: "/media/pos/poster.png",
      clip: null,
      video: null,
      gallery: ["/media/pos/1.png", "/media/pos/2.png", "/media/pos/3.png"],
    },
  },
  {
    slug: "loca-de-mocha",
    title: "Loca De Mocha",
    kind: "web",
    category: "Early Work",
    year: "2024",
    tagline: "Café website",
    whatItIs: "A website for a coffee shop.",
    whatItDoes: "A three-page site with home, about and menu pages.",
    highlights: [],
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Fotatoe24/Loca-De-Mocha",
    live: null,
    media: { poster: null, clip: null, video: null, gallery: [] },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
export const pad = (n) => String(n).padStart(2, "0");
