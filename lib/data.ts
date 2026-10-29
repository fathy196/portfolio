export const site = {
  name: "Fathy Abdelkader",
  role: "Backend Developer",
  tagline: "PHP · Laravel · REST APIs",
  url: "https://fathy196.github.io/portfolio",
  location: "Egypt",
  email: "fathyabdelkader8@gmail.com",
  phone: "+20 106 427 4581",
  github: "https://github.com/fathy196",
  linkedin: "https://www.linkedin.com/in/fathy-abdelkader-4a47b1224/",
  cv: "/Fathy-Abdelkader-Backend-Dev-CV.pdf",
  formspree: "https://formspree.io/f/xkgrdkyb",
  description:
    "Fathy Abdelkader is a Backend Developer based in Egypt, building scalable web applications and RESTful APIs with PHP, Laravel, and MySQL. Explore projects, experience, and skills.",
  summary:
    "Backend Developer with 3+ years of experience designing, building, and maintaining scalable web applications and RESTful APIs using PHP, Laravel, and MySQL. I care about clean architecture, secure and well-tested code, and fast, reliable systems — from payment gateway integrations to queues, caching, and CI/CD.",
  keywords: [
    "Fathy Abdelkader",
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "Backend Developer Egypt",
    "Laravel Developer Egypt",
    "REST API Developer",
    "MySQL",
    "Microservices",
    "Payment Gateway Integration",
    "Travel Booking Platform",
    "Recommendation Engine",
    "E-commerce Marketplace",
  ],
};

export type Job = {
  title: string;
  company: string;
  location: string;
  start: string; // ISO yyyy-mm
  end: string | null;
  points: string[];
};

export const experience: Job[] = [
  {
    title: "Backend Developer",
    company: "Data Pulse",
    location: "Egypt",
    start: "2026-05",
    end: null,
    points: [
      "Built the backend of PlanGo, a bilingual (Arabic/English) travel booking platform, with Laravel 12 and MySQL across 80+ models and three API surfaces: customer, admin, and travel provider.",
      "Engineered a smart package recommendation engine that builds a complete, priced trip from user preferences using weighted multi-criteria scoring of destinations.",
      "Integrated NDC airline flight search and booking, Zentrum hotel availability and rates, and Paymob payments, with commission-based pricing.",
      "Implemented JWT authentication, roles and permissions, real-time notifications with Laravel Reverb, booking vouchers, and queued hotel content sync jobs.",
      "Built the backend of Mogwharat, a Saudi multi-vendor gold & jewelry marketplace with live gold-based pricing, merchant subscriptions, MyFatoorah payments, SMSA shipping, and influencer commissions.",
      "Covered PlanGo's core booking and package flows with 100+ PHPUnit feature test files.",
    ],
  },
  {
    title: "Backend Developer",
    company: "morb7",
    location: "Mansoura, Egypt",
    start: "2025-06",
    end: "2026-06",
    points: [
      "Built and enhanced multiple Laravel web applications, delivering new features and refactoring legacy code.",
      "Developed RESTful APIs and internal microservices, and server-rendered views with Blade.",
      "Worked on Jahzha, a Saudi shipping aggregator (Jul 2025 – Mar 2026): integrated shipping carrier APIs, built a dynamic monthly invoicing system for postpaid companies, and built the company dashboard, roles and permissions, and the Jahzha for Business website.",
      "Built and grew the Afaq Al-Syola classified ads & escrow brokerage platform (Jun 2025 – Jun 2026), integrated it with Jahzha for shipping, and migrated its legacy production database into the new system.",
      "Integrated third-party services, payment gateways, and external APIs to automate business workflows.",
      "Managed deployments, CI/CD pipelines, and Linux server configuration.",
    ],
  },
  {
    title: "Freelance Backend Developer",
    company: "Self-employed",
    location: "Cairo, Egypt",
    start: "2023",
    end: null,
    points: [
      "Delivered custom web applications for clients across e-commerce, booking, and service industries.",
      "Integrated Stripe, Paymob, Moyasar, and Tabby payments plus OAuth social logins (Google, Facebook, GitHub).",
      "Handled hosting, deployment, notifications (SMTP, Firebase), and ongoing maintenance.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  description: string;
  liveUrl?: string;
  repo?: string; // public GitHub link, if any
  highlights: { title: string; text: string }[];
  engineTitle?: string;
  engineIntro?: string;
  engine?: { title: string; text: string }[]; // optional "how it works" steps
  weightsTitle?: string;
  weights?: { label: string; value: number }[];
  integrations?: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "plan-go",
    name: "PlanGo",
    tagline: "Smart travel package platform",
    company: "Data Pulse",
    role: "Backend Developer",
    period: "2026",
    summary:
      "Bilingual travel booking platform with a smart recommendation engine that builds a complete, priced trip — flights, hotels, transfers, and a day-by-day program — from a traveller's preferences.",
    description:
      "PlanGo lets travellers book ready-made packages or generate a fully custom trip in one request. I built the Laravel backend that powers the customer app, the admin dashboard, and the travel provider portal — including the dynamic package engine, live flight and hotel integrations, payments, and real-time notifications.",
    liveUrl: "https://front.kazamiza.com/plan-go/ar/",
    highlights: [
      {
        title: "Smart package recommendation engine",
        text: "Turns a few preferences — destination, dates, nights, trip type, travellers, hotel stars — into a complete itinerary with live prices in a single API call.",
      },
      {
        title: "Live flights & hotels",
        text: "NDC airline search and booking for international and domestic legs, plus Zentrum hotel availability with polygon and radius-based region search.",
      },
      {
        title: "Payments & commissions",
        text: "Paymob checkout with configurable commission markup applied to hotel and package pricing.",
      },
      {
        title: "Three API surfaces",
        text: "Customer, admin, and provider APIs with JWT authentication, roles & permissions, bookings, vouchers, invoices, and reports.",
      },
      {
        title: "Real-time & background work",
        text: "Real-time notifications with Laravel Reverb, and queued jobs that sync hotel content for cities and destinations.",
      },
      {
        title: "Bilingual & tested",
        text: "Full Arabic/English content and responses, covered by 100+ PHPUnit feature test files.",
      },
    ],
    engineTitle: "How the recommendation engine works",
    engineIntro:
      "A traveller picks a country or city, departure date, number of nights, trip type, travellers, and optional hotel stars, breakfast, and ground services. The engine then builds and prices the whole trip in one request:",
    engine: [
      {
        title: "Filter candidates",
        text: "Keep only active destinations that are open in the travel season (including year-wrapping seasons) and match the chosen trip type.",
      },
      {
        title: "Score each destination",
        text: "Compute a weighted score from popularity, route proximity, nights fit, travel time, and trip-type match. Weights are configurable by the admin.",
      },
      {
        title: "Build the route",
        text: "Pick the best-scoring anchor city, then chain the closest suitable destinations — the number of cities depends on the trip length.",
      },
      {
        title: "Distribute the nights",
        text: "Split the requested nights across cities while respecting each city's minimum, maximum, and recommended stay.",
      },
      {
        title: "Price it live",
        text: "Search flights (NDC), select the best-value hotel rooms (Zentrum), and add airport transfers, city-to-city cars, and program activities with commission.",
      },
      {
        title: "Handle the edge cases",
        text: "Early-morning arrivals trigger early check-in or a transit-hotel night, flights are skipped when the traveller is already in the city, and long single-city stays get two hotels.",
      },
    ],
    weightsTitle: "Destination score weights (admin-configurable)",
    weights: [
      { label: "Destination popularity", value: 50 },
      { label: "Route proximity", value: 25 },
      { label: "Nights fit", value: 15 },
      { label: "Travel time", value: 5 },
      { label: "Trip type match", value: 5 },
    ],
    integrations: ["NDC airline API", "Zentrum Hub hotels", "Paymob payments", "Laravel Reverb"],
    stack: ["Laravel 12", "PHP", "MySQL", "JWT", "Laravel Reverb", "Queues", "Laravel Excel", "PHPUnit"],
  },
  {
    slug: "mogwharat",
    name: "Mogwharat",
    tagline: "Multi-vendor gold & jewelry marketplace",
    company: "Data Pulse",
    role: "Backend Developer",
    period: "2026",
    summary:
      "Saudi multi-vendor marketplace where jewelry stores sell gold and silver pieces priced live from the daily gold market — with merchant subscriptions, used-gold buy-back, influencer commissions, and paid ads.",
    description:
      "Mogwharat connects leading jewelry brands in Saudi Arabia with customers on one bilingual (Arabic/English) platform. I built the Laravel backend behind the customer storefront, the merchant portal, and the admin dashboard — including live metal pricing, payments, shipping, wallets, and commissions.",
    liveUrl: "https://front.kazamiza.com/mogwharat/",
    highlights: [
      {
        title: "Live gold-based pricing",
        text: "A scheduled job pulls gold and silver prices from metals.dev for every karat, and each product is re-priced automatically from its weight, making cost, and merchant margin.",
      },
      {
        title: "Multi-vendor merchant portal",
        text: "Merchants subscribe to monthly or yearly packages, manage products and variants, offers, orders, shipping companies, staff permissions, wallets, and bank accounts.",
      },
      {
        title: "Payments, shipping & wallets",
        text: "MyFatoorah checkout, SMSA shipping with tracking, and merchant and admin wallets where funds are released when an order is delivered.",
      },
      {
        title: "Influencer commission system",
        text: "Influencers get discount codes; when an order using their code is delivered, the commission is credited to their wallet automatically and they can request payouts.",
      },
      {
        title: "Used-gold buy-back",
        text: "Customers sell their old gold or silver by karat and weight at the daily used-metal price and book a pickup, with status updates by notification and email.",
      },
      {
        title: "Engagement & trust features",
        text: "Paid merchant consultations with real-time chat, reviews and ratings, merchant follows, loyalty coins, stolen-jewelry reports, paid ad placements, and photography bookings.",
      },
    ],
    engineTitle: "How live pricing works",
    engineIntro: "Product prices are never stored as a fixed number — they follow the gold market:",
    engine: [
      {
        title: "Fetch market prices",
        text: "A scheduled command calls the metals.dev API and stores the price per gram for 24K, 22K, 21K, 18K gold and 925 silver.",
      },
      {
        title: "Price every product",
        text: "Price = (gold price per gram + making cost per gram + merchant profit per gram) × weight, plus tax — calculated per product and per variant.",
      },
      {
        title: "Apply offers & coupons",
        text: "Merchant offers, platform coupons, and influencer codes are applied at checkout before payment through MyFatoorah.",
      },
      {
        title: "Release funds on delivery",
        text: "Once the order is delivered, the merchant's share, platform fees, and any influencer commission are credited to the right wallets.",
      },
    ],
    integrations: ["metals.dev prices", "MyFatoorah payments", "SMSA shipping", "Firebase notifications"],
    stack: ["Laravel 12", "PHP", "MySQL", "JWT", "Laravel Reverb", "Laravel Excel", "Firebase FCM", "Google OAuth"],
  },
  {
    slug: "jahzha",
    name: "Jahzha",
    tagline: "Shipping aggregator & B2B logistics brokerage",
    company: "morb7",
    role: "Backend Developer",
    period: "Jul 2025 – Mar 2026",
    summary:
      "Saudi shipping platform that integrates with local and international carriers so individuals and businesses can compare rates, book, pay, print labels, and track parcels in one place.",
    description:
      "Jahzha is a shipping aggregator and logistics broker in Saudi Arabia. Instead of contracting carriers one by one, customers and merchants enter their shipment details, compare live offers from a network of 100+ carriers, pay from a prepaid wallet, and track the parcel to delivery. At morb7 I worked on the shipping-carrier integrations, a dynamic monthly invoicing system for postpaid companies, the company dashboard with roles and permissions, and the Jahzha for Business website.",
    liveUrl: "https://company.jahzha.com.sa/",
    highlights: [
      {
        title: "Shipping carrier integrations",
        text: "Integrated local and international carriers through their APIs to fetch live rates, create shipments, generate shipping labels, and sync tracking statuses — behind one common interface so new carriers can be added easily.",
      },
      {
        title: "Company dashboard",
        text: "Built the dashboard businesses use to create and manage shipments, compare carrier offers, follow tracking, and manage their wallet balance and shipping history.",
      },
      {
        title: "Dynamic monthly invoicing",
        text: "For companies on monthly postpaid packages, an invoice opens automatically with their first shipment of the month, collects every shipment until the month ends, and then locks the account from new shipments until the invoice is paid.",
      },
      {
        title: "Roles & permissions",
        text: "Implemented role-based access control so each company can add team members and control exactly what every user can see and do.",
      },
      {
        title: "Jahzha for Business website",
        text: "Built the company-facing website (company.jahzha.com.sa) with service pages, sign-up and login, billing and subscription details, and FAQs.",
      },
    ],
    engineTitle: "How a shipment flows",
    engine: [
      { title: "Enter the shipment", text: "The customer sets origin and destination (domestic or international) plus the parcel weight and size." },
      { title: "Compare carrier offers", text: "The backend requests rates from the integrated carriers and returns them ranked by price and delivery time." },
      { title: "Book & pay", text: "The customer picks a carrier and pays online or from their wallet; the shipment is created with the carrier through its API." },
      { title: "Label & tracking", text: "A shipping label is generated for drop-off or pickup, and status updates are tracked until delivery." },
    ],
    integrations: ["Shipping carrier APIs", "Wallet payments (Mada, Visa, Apple Pay)", "Shipment tracking"],
    stack: ["Laravel", "PHP", "MySQL", "REST APIs", "Carrier API Integration", "Roles & Permissions", "Billing & Invoicing"],
  },
  {
    slug: "afaq-alsyola",
    name: "Afaq Al-Syola",
    tagline: "Classified ads & escrow trade brokerage platform",
    company: "morb7",
    role: "Backend Developer",
    period: "Jun 2025 – Jun 2026",
    summary:
      "Saudi classified-ads marketplace with a trusted brokerage service that holds the buyer's payment until the deal is completed, connected to Jahzha for shipping.",
    description:
      "Afaq Al-Syola combines classified ads across many categories with a trade brokerage (wasata) service: the platform acts as an independent middleman between buyer and seller and releases the money only when the deal is completed on the agreed terms. I built the backend system at morb7 and kept growing it over a year — including connecting it to Jahzha for shipping and migrating the legacy production database into the new system.",
    liveUrl: "https://www.afaqalsyola.com.sa/",
    highlights: [
      {
        title: "Classified ads marketplace",
        text: "Ads across services, cars, electronics, furniture, jobs, tools, and more, with featured listings, city filters, and sorting by price, rating, and views.",
      },
      {
        title: "Escrow brokerage flow",
        text: "Brokerage requests where the platform holds the buyer's payment, tracks the deal, and releases funds to the seller after confirmation, with fees, commissions, and dispute handling.",
      },
      {
        title: "Jahzha shipping integration",
        text: "Connected the platform to Jahzha through its API so brokered deals can be shipped and tracked through Jahzha's network of carriers.",
      },
      {
        title: "Legacy database migration",
        text: "Migrated and merged Afaq's existing production database into the new system, keeping users, ads, and transaction history intact.",
      },
      {
        title: "Web & mobile API",
        text: "One backend serving the website and the iOS and Android apps.",
      },
    ],
    engineTitle: "How a brokered deal works",
    engine: [
      { title: "Open a brokerage request", text: "Buyer and seller agree on a deal from an ad, and a brokerage request is opened with the agreed terms." },
      { title: "Buyer pays the platform", text: "The buyer's payment is held by Afaq as an independent middleman instead of going straight to the seller." },
      { title: "Ship through Jahzha", text: "When the item needs delivery, the shipment is created and tracked through the Jahzha integration." },
      { title: "Confirm & release", text: "After the buyer confirms receipt, the platform releases the money to the seller minus fees; disputes follow the platform's resolution policy." },
    ],
    integrations: ["Jahzha shipping API", "Payment gateway", "iOS & Android apps"],
    stack: ["Laravel", "PHP", "MySQL", "REST APIs", "Data Migration", "Third-party API Integration"],
  },
  {
    slug: "sahrah-oud",
    name: "Sahrah Oud",
    tagline: "Evening events & entertainment services marketplace",
    company: "Data Pulse",
    role: "Backend Developer",
    period: "2026",
    summary:
      "Bilingual marketplace for evening gatherings: venues publish lounges, events, and artists for booking, and service providers sell packages — with wallet escrow, subscriptions, and accounting sync to Daftra.",
    description:
      "Sahrah Oud connects customers with evening entertainment. Venue companies list lounges and events with their artists, customers book and review them, and service providers offer packages that customers order. I built the Laravel backend behind the customer app, the provider and company apps, and the admin panel, including payments held in a wallet until orders are completed and automatic invoicing in Daftra.",
    highlights: [
      {
        title: "Four-sided platform",
        text: "Separate APIs and auth for customers, service providers, and venue companies, plus an admin panel with roles and permissions, CMS pages, geography, orders, bookings, and withdrawals.",
      },
      {
        title: "Events & bookings",
        text: "Companies manage lounges, events, event artists, and features; customers book events, favourite and review them, and companies follow bookings and statistics.",
      },
      {
        title: "Wallet escrow & withdrawals",
        text: "Customer payments are held in a wallet, released to the provider when an order is completed and refunded on cancellation — all inside database transactions with commission and VAT.",
      },
      {
        title: "Daftra accounting integration",
        text: "Each order creates the client and a VAT invoice for the platform commission in Daftra and records its payment, through retrying queued jobs that are safe to re-run.",
      },
      {
        title: "Subscriptions",
        text: "Subscription packages for companies and providers, with a daily job that expires ended subscriptions.",
      },
      {
        title: "Messaging & notifications",
        text: "Real-time chat over Socket.IO, OTP and SMS via 4Jawaly, Firebase push notifications, and in-app notifications in Arabic and English.",
      },
    ],
    engineTitle: "How a service order works",
    engine: [
      { title: "Order a package", text: "The customer picks a provider's package and pays by wallet, card, or bank transfer." },
      { title: "Hold the payment", text: "The amount is held in escrow in the wallet while the provider accepts, starts, and completes the order." },
      { title: "Complete & release", text: "On completion the provider's share is released to their wallet after commission and VAT; cancellations are refunded." },
      { title: "Invoice in Daftra", text: "A queued job registers the client and issues the commission invoice and payment in Daftra automatically." },
    ],
    integrations: ["Daftra accounting", "4Jawaly SMS", "Firebase FCM", "Socket.IO chat"],
    stack: ["Laravel", "PHP", "MySQL", "JWT", "Queues", "Redis", "Laravel Excel", "Socket.IO"],
  },
  {
    slug: "hisn",
    name: "Hisn",
    tagline: "Islamic azkar, books & reminders app",
    company: "Data Pulse",
    role: "Backend Developer",
    period: "2026",
    summary:
      "Bilingual Islamic app with daily azkar, duas, a library of Islamic books with audio and explanations, smart reminders, and prayer times — powered by a Laravel API and an admin dashboard.",
    description:
      "Hisn is a free, ad-free Islamic companion app: morning and evening azkar with their evidence, a digital tasbeeh counter, duas, books such as Hisn Al-Muslim organised into chapters and sections, recitations, and reminder notifications. I built the Laravel backend that serves the mobile app and the admin dashboard used to manage all of its content.",
    liveUrl: "https://hisnsa.com/",
    highlights: [
      {
        title: "Islamic books library",
        text: "Books organised into chapters, sections, and content entries with Arabic and English text, audio, references, vocabulary, explanations, and target counts — with large PDF uploads in chunks.",
      },
      {
        title: "Azkar & duas",
        text: "Azkar with several target counts and duas by category, with dhikr content imported from an external Islamic API by a console command.",
      },
      {
        title: "Arabic-aware search",
        text: "One search across books, content, azkar, and duas that ignores diacritics and Arabic letter variants.",
      },
      {
        title: "Scheduled push notifications",
        text: "Firebase notifications sent by a scheduler every minute for one-time and daily reminders, plus replies to user inquiries sent straight to the device.",
      },
      {
        title: "Admin dashboard & analytics",
        text: "Sanctum-secured dashboard for content, FAQs, pages, and settings, with app analytics such as most-viewed sections by device.",
      },
    ],
    integrations: ["Firebase FCM", "Islamic content API"],
    stack: ["Laravel 12", "PHP", "MySQL", "Sanctum", "Firebase", "Pest"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["PHP", "SQL", "JavaScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["Laravel", "Livewire", "Filament", "Blade", "Bootstrap"] },
  { group: "APIs & Auth", items: ["RESTful APIs", "JWT", "Sanctum", "OAuth (Google, Facebook, GitHub, LinkedIn)", "WebSockets / Reverb"] },
  { group: "Payments", items: ["Paymob", "MyFatoorah", "Stripe", "Moyasar", "Tabby", "PayPal"] },
  {
    group: "Integrations",
    items: [
      "Accounting systems",
      "Flight booking",
      "Hotel booking",
      "Shipping carriers",
      "SMS gateways",
      "WhatsApp messaging",
      "Push notifications",
      "Live market prices",
    ],
  },
  { group: "Databases", items: ["MySQL", "SQLite", "SQL Server", "Eloquent ORM", "Query Optimization"] },
  { group: "Architecture", items: ["OOP", "SOLID", "MVC / HMVC", "Design Patterns", "Microservices", "Queues"] },
  { group: "Testing & Tools", items: ["PHPUnit", "Postman", "Xdebug", "Git & GitHub", "CI/CD", "Linux"] },
];

export const education = {
  degree: "Bachelor of Computer Science (Artificial Intelligence)",
  school: "Mansoura University",
  period: "2020 – 2024",
  note: "Grade: Very Good · Graduation project “Go Smart” graded A",
};

export const courses = [
  { name: "Backend Development Program", org: "CCIC, Mansoura University", period: "Jul 2023 – Oct 2023" },
  { name: "30 Days to Learn Laravel", org: "Laracasts", period: "May 2024 – Jun 2024" },
  { name: "Transact-SQL with SQL Server", org: "MaharaTech", period: "" },
];

const monthFmt = new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" });
export const fmtMonth = (ym: string | null) =>
  !ym ? "Present" : ym.length === 4 ? ym : monthFmt.format(new Date(`${ym}-01T00:00:00Z`));

export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// Relative to metadataBase (which already includes the /portfolio base path).
export const ogImages = [{ url: "og.png", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }];
