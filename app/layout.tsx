import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getIntegrations } from "@/lib/settings";

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
  description: "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
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
  description: "Specialist SEO agency for iGaming, cryptocurrency, adult, cannabis, dental and SaaS industries.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://www.fastseosolutions.com/blog/?s={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const integrations = await getIntegrations();
  const gaId  = integrations.gaMeasurementId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
  const gtmId = integrations.gtmId || "";

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

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Custom body scripts from admin */}
        {integrations.bodyScripts && (
          <Script id="custom-body" strategy="afterInteractive">{integrations.bodyScripts}</Script>
        )}
      </body>
    </html>
  );
}
