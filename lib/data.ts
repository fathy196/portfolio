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
      "Design, develop, and maintain scalable backend services and RESTful APIs using PHP, Laravel, and MySQL for data-driven web applications.",
      "Build and optimize database schemas, complex SQL queries, and Eloquent models to improve query performance and data integrity.",
      "Integrate third-party APIs, payment gateways, and authentication services to support core business workflows.",
      "Implement caching, queues, and background jobs to improve application speed, reliability, and scalability.",
      "Write unit and feature tests with PHPUnit and collaborate with frontend and product teams to ship features on schedule.",
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
  category: "API" | "Laravel" | "Dashboard" | "PHP Native";
  summary: string;
  description: string;
  features: string[];
  stack: string[];
  repo?: string;
  period?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "hotel-management-api",
    name: "Hotel Management System",
    category: "API",
    period: "May 2025 – Jun 2025",
    featured: true,
    summary: "Secure Laravel 12 hotel booking API with JWT, role-based access, and Stripe payments.",
    description:
      "A backend API for hotel operations covering room inventory, the full booking flow, check-in/check-out logic, and payment tracking, secured with JWT authentication and fine-grained permissions.",
    features: [
      "JWT authentication with Spatie roles & permissions",
      "Room inventory, availability, and booking lifecycle",
      "Check-in / check-out workflows",
      "Stripe integration for secure payment processing",
    ],
    stack: ["Laravel 12", "PHP", "MySQL", "JWT", "Spatie Permission", "Stripe"],
    repo: "https://github.com/fathy196/hotel-management-api",
  },
  {
    slug: "shop",
    name: "Shop — E-commerce",
    category: "Laravel",
    period: "Dec 2024 – Feb 2025",
    featured: true,
    summary: "Laravel e-commerce store with smart search, cart & orders, Paymob payments, and an admin dashboard.",
    description:
      "A modern e-commerce application with secure authentication, dynamic product browsing, smart search, a cart and order system, Paymob payment integration, and an admin dashboard for managing products and categories.",
    features: [
      "Product browsing, categories, and smart search",
      "Cart, checkout, and order management",
      "Paymob payment gateway integration",
      "Admin panel for products and categories",
    ],
    stack: ["Laravel", "Blade", "MySQL", "Paymob"],
    repo: "https://github.com/fathy196/shop",
  },
  {
    slug: "hmvc-e-commerce",
    name: "HMVC E-commerce",
    category: "Laravel",
    featured: true,
    summary: "Modular Laravel 12 system with admin/user modules, queued Excel import/export, and Paymob.",
    description:
      "A modular (HMVC) Laravel 12 application split into admin and user modules, with product and category CRUD, Excel import/export processed on queues, Paymob payments, and user authentication.",
    features: [
      "HMVC modular architecture",
      "Excel import/export with Laravel queues",
      "Paymob payment integration",
      "Product browsing and order placement",
    ],
    stack: ["Laravel 12", "HMVC", "Queues", "Laravel Excel", "Paymob"],
    repo: "https://github.com/fathy196/hmvc_E-commerce",
  },
  {
    slug: "go-smart",
    name: "Go Smart",
    category: "API",
    featured: true,
    summary: "Travel platform API for Egypt — hotels, restaurants, landmarks, itineraries, and driver booking.",
    description:
      "Graduation project (grade A): a Laravel API for a travel platform that helps users discover cultural landmarks, hotels, and restaurants across Egypt, with reviews, personalized itinerary recommendations, and a driver-booking system.",
    features: [
      "Discovery of hotels, restaurants, and landmarks",
      "Reviews and ratings",
      "Personalized itinerary recommendations",
      "Driver booking system",
    ],
    stack: ["Laravel", "REST API", "MySQL", "Sanctum"],
    repo: "https://github.com/fathy196/go-smart",
  },
  {
    slug: "real-time-chat",
    name: "Real-Time Chat",
    category: "Laravel",
    summary: "Private real-time chat app built with Laravel Reverb and WebSockets.",
    description:
      "A private one-to-one chat application that delivers messages instantly using Laravel Reverb and WebSockets with event broadcasting.",
    features: ["Private channels", "Instant delivery via WebSockets", "Event broadcasting with Reverb"],
    stack: ["Laravel", "Reverb", "WebSockets", "Echo"],
    repo: "https://github.com/fathy196/real-time-chat",
  },
  {
    slug: "mentor",
    name: "Mentor",
    category: "Laravel",
    summary: "Education platform connecting students with trainers, courses, events, and dashboards.",
    description:
      "An education platform featuring course browsing, popular courses, trainer profiles, events, secure authentication, and dashboards for trainers.",
    features: ["Course catalogue and popular courses", "Trainer profiles and dashboards", "Events", "Secure authentication"],
    stack: ["Laravel", "Blade", "MySQL"],
  },
  {
    slug: "banaa",
    name: "Banaa",
    category: "Dashboard",
    summary: "Filament dashboard for in-store sales, purchases, invoices, and real-time reporting.",
    description:
      "A Filament admin dashboard for managing in-store product sales and purchases, with real-time reporting, analytics, and efficient invoice handling.",
    features: ["Sales and purchase management", "Invoices", "Real-time reports and analytics"],
    stack: ["Laravel", "Filament", "Livewire", "MySQL"],
  },
  {
    slug: "blog-platform",
    name: "Blog Platform",
    category: "Laravel",
    summary: "Laravel blog with email/phone login, profiles, post CRUD, search, and an admin dashboard.",
    description:
      "A full blog platform with email or phone login, user profiles, post CRUD, search, category management, pagination, and an admin dashboard.",
    features: ["Email / phone authentication", "Posts, categories, and search", "Admin dashboard"],
    stack: ["Laravel", "Blade", "MySQL"],
    repo: "https://github.com/fathy196/blog",
  },
  {
    slug: "api-blog",
    name: "API Blog",
    category: "API",
    summary: "Laravel REST API for posts and comments with secure authentication.",
    description: "A REST API for managing users, posts, and comments with token-based authentication and full CRUD.",
    features: ["Token authentication", "Posts and comments CRUD", "Resource responses"],
    stack: ["Laravel", "REST API", "Sanctum"],
    repo: "https://github.com/fathy196/api_blog",
  },
  {
    slug: "multi-auth",
    name: "Multi Authentication",
    category: "Laravel",
    summary: "Separated authentication guards for admins, staff, and customers.",
    description: "A multi-guard authentication system that keeps admin, staff, and customer areas fully separated.",
    features: ["Multiple guards", "Role-specific dashboards", "Isolated sessions"],
    stack: ["Laravel", "Guards", "Middleware"],
    repo: "https://github.com/fathy196/multi_auth",
  },
  {
    slug: "blog-native",
    name: "Blog Native",
    category: "PHP Native",
    summary: "Simple blogging system written in plain PHP — no framework.",
    description: "A lightweight blogging system built with native PHP and MySQL to practise the fundamentals without a framework.",
    features: ["Posts CRUD", "Native PHP routing", "PDO database access"],
    stack: ["PHP", "MySQL", "PDO"],
    repo: "https://github.com/fathy196/blog-Native",
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
