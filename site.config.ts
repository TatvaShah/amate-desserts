import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Amate Dessert Studio",
  tagline: "Cakes and event food styling for birthdays, corporate events and weddings.",
  category: "Cakes and event desserts",
  schemaType: "Bakery",
  area: "Toronto, ON",
  siteUrl: "https://amate-desserts-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#b2a292" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Cakes and event desserts in Toronto",
    headline: "Wedding slab cakes, chocoflan and dessert tables",
    subhead: "Amate Dessert Studio makes cakes and event food styling in Toronto, for birthdays, corporate events and weddings. Inquire for 2026 and 2027 dates and a custom quote.",
    images: [
      { src: "/images/post-1.jpg", alt: "A wedding slab cake from Amate Dessert Studio", width: 1080, height: 1350 },
      { src: "/images/post-3.jpg", alt: "A colourful carrot cake from Amate Dessert Studio", width: 1080, height: 1440 },
      { src: "/images/post-6.jpg", alt: "Chocoflan from Amate Dessert Studio", width: 1080, height: 1340 },
    ],
    primaryCta: { label: "Inquire for a quote", href: "https://linktr.ee/amatedessertstudio" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Wedding slab cakes, including tres leches",
    "Chocoflan, carrot cake and pan de muerto",
    "Dessert table setups for events in Toronto",
    "Inquiring for 2026 and 2027 dates",
  ],

  about: {
    title: "Welcome to Amate Dessert Studio",
    body: [
      "Amate Dessert Studio offers cakes and event food styling in Toronto, for birthdays, corporate events and weddings. A recent wedding reception slab cake was tres leches with homemade strawberry compote, diced fresh strawberries and vanilla Swiss meringue buttercream. Other work has included a colourful carrot cake, chocoflan (devil's food cake with Mexican vanilla flan, a dulce de leche swirl and edible flowers), pan de muerto, and dessert table setups.",
      "Inquire for 2026 and 2027 dates and a custom quote through the link, or send an Instagram message.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A wedding slab cake from Amate Dessert Studio", width: 1080, height: 1350 },
  },

  menu: {
    label: "Menu",
    title: "What we make",
    variant: "list",
    showPrices: false,
    priceNote: "Inquire for a custom quote on your date and event.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Wedding slab cakes", description: "A recent cake was tres leches with strawberry compote and vanilla Swiss meringue buttercream." },
          { name: "Carrot cake" },
          { name: "Chocoflan", description: "Devil's food cake with Mexican vanilla flan, a dulce de leche swirl and edible flowers." },
        ],
      },
      {
        title: "Events",
        items: [
          { name: "Dessert table setups" },
          { name: "Pan de muerto" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1350, alt: "A wedding slab cake from Amate Dessert Studio", caption: "A wedding slab cake", href: "https://www.instagram.com/p/DflaoPkkVGy/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1440, alt: "A colourful carrot cake from Amate Dessert Studio", caption: "Carrot cake", href: "https://www.instagram.com/p/DfhzdQbkS_5/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1340, alt: "Chocoflan from Amate Dessert Studio", caption: "Chocoflan", href: "https://www.instagram.com/p/DZqpdy2Ef6P/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1918, alt: "A dessert table setup by Amate Dessert Studio", caption: "A dessert table", href: "https://www.instagram.com/reel/DZqr1GvxkOv/" },
      { src: "/images/post-2.jpg", width: 1030, height: 1826, alt: "A cake being assembled by Amate Dessert Studio", caption: "Cake assembly", href: "https://www.instagram.com/reel/Dfhz-Dux7uK/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1917, alt: "Pan de muerto from Amate Dessert Studio", caption: "Pan de muerto", href: "https://www.instagram.com/reel/DfPsf8pxHiz/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "amatedesserts",
    embeds: ["https://www.instagram.com/p/DflaoPkkVGy/", "https://www.instagram.com/p/DfhzdQbkS_5/", "https://www.instagram.com/p/DZqpdy2Ef6P/"],
  },

  order: {
    label: "How to order",
    headerCtaLabel: "Inquire",
    title: "Inquire for 2026 and 2027 dates",
    intro: "Use the inquiry link, or send an Instagram message, with your date and event. Amate Dessert Studio is based in Toronto and takes custom quotes for birthdays, corporate events and weddings.",
    dmMessage: "Hi Amate Dessert Studio! I would like to inquire.\nDate needed:\nEvent and desserts:",
    links: [
      { label: "Inquire for a quote", href: "https://linktr.ee/amatedessertstudio" },
      { label: "Message on Instagram", href: "https://ig.me/m/amatedesserts" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I inquire?", a: "Use the inquiry link, or send an Instagram message, with your date and event. Custom quotes are available for 2026 and 2027 dates." },
    { q: "What events do you bake for?", a: "Birthdays, corporate events and weddings, including dessert table setups." },
    { q: "Where are you based?", a: "Amate Dessert Studio is based in Toronto." },
  ],

  contact: {
    title: "Contact",
    area: "Toronto, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/amatedesserts/" },
      { label: "Linktree", href: "https://linktr.ee/amatedessertstudio" },
    ],
  },

  seo: {
    title: "Amate Dessert Studio | Cakes and event desserts in Toronto",
    description: "Wedding slab cakes, chocoflan, carrot cake and dessert tables in Toronto. Inquire for 2026 and 2027 dates and a custom quote.",
    keywords: ["wedding cakes Toronto", "dessert tables Toronto", "Amate Dessert Studio"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
