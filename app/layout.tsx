import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PublicLayout } from "@/components/PublicLayout";
import { supabaseServer } from "@/lib/supabase";

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
  keywords: ["iGaming SEO", "crypto SEO", "adult SEO", "SaaS SEO", "AEO", "AI search visibility"],
  openGraph: {
    type: "website",
    siteName: "FastSEO",
    url: "https://www.fastseosolutions.com",
    images: [
      {
        url: "https://www.fastseosolutions.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FastSEO — Specialist SEO Agency for iGaming, Crypto & SaaS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.fastseosolutions.com/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fastseosolutions.com/#organization",
  name: "FastSEO Solutions",
  alternateName: "FastSEO",
  url: "https://www.fastseosolutions.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.fastseosolutions.com/logo.svg",
    width: 200,
    height: 60,
  },
  image: "https://www.fastseosolutions.com/opengraph-image",
  description: "International SEO agency specialising in iGaming, Crypto, Adult, Dental, SaaS and Cannabis niches",
  email: "seo@fastseosolutions.com",
  areaServed: "Worldwide",
  foundingDate: "2020",
  knowsAbout: [
    "Search Engine Optimisation",
    "iGaming SEO",
    "Cryptocurrency SEO",
    "Adult SEO",
    "Dental SEO",
    "SaaS SEO",
    "Cannabis SEO",
    "Answer Engine Optimisation",
    "AI Search Visibility",
    "Link Building",
    "Technical SEO",
    "Voice Search Optimisation",
    "Local SEO",
    "Content Strategy",
    "Topical Authority Building",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "seo@fastseosolutions.com",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SEO Services by FastSEO",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "iGaming SEO", url: "https://www.fastseosolutions.com/igaming-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cryptocurrency SEO", url: "https://www.fastseosolutions.com/cryptocurrency-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Adult SEO", url: "https://www.fastseosolutions.com/adult-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental SEO", url: "https://www.fastseosolutions.com/dental-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS SEO", url: "https://www.fastseosolutions.com/saas-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cannabis SEO", url: "https://www.fastseosolutions.com/cannabis-seo/" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI SEO & AEO Services", url: "https://www.fastseosolutions.com/ai-seo-services/" } },
    ],
  },
  sameAs: [] as string[],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.fastseosolutions.com/#website",
  name: "FastSEO",
  url: "https://www.fastseosolutions.com",
  description: "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.fastseosolutions.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.fastseosolutions.com/blog/?s={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.fastseosolutions.com/#professionalservice",
  name: "FastSEO Solutions",
  url: "https://www.fastseosolutions.com",
  description: "International SEO agency specialising in iGaming, Crypto, Adult, Dental, SaaS and Cannabis niches. Expert Answer Engine Optimisation for ChatGPT, Gemini, Perplexity, and voice search visibility.",
  email: "seo@fastseosolutions.com",
  areaServed: "Worldwide",
  serviceType: [
    "Search Engine Optimisation",
    "Answer Engine Optimisation",
    "Link Building",
    "Technical SEO",
    "Content Strategy",
    "Voice Search Optimisation",
    "AI Search Visibility",
    "Local SEO",
  ],
  provider: {
    "@type": "Organization",
    "@id": "https://www.fastseosolutions.com/#organization",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  let gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  let gtmId = "";
  let gscVerificationCode = "";
  let headScripts = "";
  let bodyScripts = "";

  try {
    const { data } = await supabaseServer.from("integrations").select("*").limit(1).single();
    if (data) {
      gaId = data.ga_measurement_id || gaId;
      gtmId = data.gtm_id || "";
      gscVerificationCode = data.gsc_verification_code || "";
      headScripts = data.head_scripts || "";
      bodyScripts = data.body_scripts || "";
    }
  } catch {
    // Use defaults if fetch fails
  }

  const integrations = { gscVerificationCode, headScripts, bodyScripts };

  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        {/* Google Search Console verification */}
        {integrations.gscVerificationCode && (
          <meta name="google-site-verification" content={integrations.gscVerificationCode} />
        )}

        {/* Google Tag Manager */}
        {gtmId && (
          <Script id="gtm-head" strategy="afterInteractive">{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');
          `}</Script>
        )}

        {/* Google Analytics 4 (only if GTM not used) */}
        {gaId && !gtmId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','${gaId}');
            `}</Script>
          </>
        )}

        {/* Custom head scripts from admin (raw <script>/<style> tags) */}
        {integrations.headScripts && (
          <Script id="custom-head" strategy="afterInteractive">{integrations.headScripts}</Script>
        )}
      </head>

      <body className="min-h-full antialiased bg-void text-text-primary font-body">
        {/* GTM noscript */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0" width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />

        <PublicLayout>{children}</PublicLayout>

        {/* Custom body scripts from admin */}
        {integrations.bodyScripts && (
          <Script id="custom-body" strategy="afterInteractive">{integrations.bodyScripts}</Script>
        )}
      </body>
    </html>
  );
}
