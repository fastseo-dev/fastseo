import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FastSEO — AI-Powered SEO Agency for iGaming, Crypto & SaaS",
    template: "%s | FastSEO",
  },
  description:
    "Specialist SEO agency for iGaming, cryptocurrency, adult, dental and SaaS. Get ranked on Google and recommended by ChatGPT, Gemini & Perplexity.",
  keywords: [
    "iGaming SEO",
    "crypto SEO",
    "adult SEO",
    "SaaS SEO",
    "AEO",
    "AI search visibility",
  ],
  openGraph: {
    type: "website",
    siteName: "FastSEO",
    url: "https://www.fastseosolutions.com",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FastSEO",
  url: "https://www.fastseosolutions.com",
  logo: "https://www.fastseosolutions.com/logo.png",
  foundingDate: "2018",
  description:
    "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@fastseosolutions.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/fastseosolutions",
    "https://twitter.com/fastseosolutions",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FastSEO",
  url: "https://www.fastseosolutions.com",
  description:
    "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.fastseosolutions.com/blog/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full antialiased bg-void text-text-primary font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
