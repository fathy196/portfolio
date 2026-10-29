import type { Metadata, Viewport } from "next";
import { Noto_Sans, Roboto_Slab } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { themeScript } from "@/components/ThemeToggle";
import { experience, ogImages, site } from "@/lib/data";
import "./globals.css";

const sans = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });
const slab = Roboto_Slab({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-slab", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(`${site.url}/`),
  title: {
    default: `${site.name} — ${site.role} | PHP & Laravel`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: `${site.url}/` }],
  creator: site.name,
  alternates: { canonical: "./" },
  openGraph: {
    type: "profile",
    siteName: site.name,
    locale: "en_US",
    url: "./",
    title: `${site.name} — ${site.role}`,
    description: site.description,
    firstName: "Fathy",
    lastName: "Abdelkader",
    images: ogImages,
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.role}`, description: site.description, images: ogImages },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f4c5c" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1f26" },
  ],
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: `${site.url}/`,
  email: `mailto:${site.email}`,
  worksFor: { "@type": "Organization", name: experience[0].company },
  address: { "@type": "PostalAddress", addressCountry: "EG" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Mansoura University" },
  knowsAbout: ["PHP", "Laravel", "MySQL", "REST APIs", "Microservices", "Payment Gateway Integration"],
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${slab.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Sidebar />
        <main id="main" className="content">
          {children}
          <footer className="site-footer">
            © {new Date().getFullYear()} {site.name} · Built with Next.js
          </footer>
        </main>
      </body>
    </html>
  );
}
