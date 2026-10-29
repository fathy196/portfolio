export const site = {
  name: "Fathy Abdelkader",
  role: "Backend Developer",
  tagline: "PHP · Laravel · REST APIs",
  url: "https://fathy196.github.io/portfolio",
  location: "Saudi Arabia",
  email: "fathyabdelkader8@gmail.com",
  phone: "+20 106 427 4581",
  github: "https://github.com/fathy196",
  linkedin: "https://www.linkedin.com/in/fathy-abdelkader-4a47b1224/",
  cv: "/Fathy-Abdelkader-Backend-Dev-CV.pdf",
  formspree: "https://formspree.io/f/xkgrdkyb",
  description:
    "Fathy Abdelkader is a Backend Developer based in Saudi Arabia, building scalable web applications and RESTful APIs with PHP, Laravel, and MySQL. Explore projects, experience, and skills.",
  summary:
    "Backend Developer with 3+ years of experience designing, building, and maintaining scalable web applications and RESTful APIs using PHP, Laravel, and MySQL. I care about clean architecture, secure and well-tested code, and fast, reliable systems — from payment gateway integrations to queues, caching, and CI/CD.",
  keywords: [
    "Fathy Abdelkader",
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "Backend Developer Saudi Arabia",
    "Laravel Developer Saudi Arabia",
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
    location: "Saudi Arabia",
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
    end: "2026-04",
    points: [
      "Built and enhanced multiple Laravel web applications, delivering new features and refactoring legacy code.",
      "Developed RESTful APIs and internal microservices, and server-rendered views with Blade.",
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
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["PHP", "SQL", "JavaScript", "HTML", "CSS"] },
  { group: "Frameworks", items: ["Laravel", "Livewire", "Filament", "Blade", "Bootstrap"] },
  { group: "APIs & Auth", items: ["RESTful APIs", "JWT", "Sanctum", "OAuth (Google, Facebook, GitHub, LinkedIn)", "WebSockets / Reverb"] },
  { group: "Payments", items: ["Stripe", "Paymob", "Moyasar", "Tabby", "PayPal"] },
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
