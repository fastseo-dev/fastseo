import { config, collection, singleton, fields } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "fastseo-dev",
      name: "fastseo",
    },
  },

  ui: {
    brand: { name: "FastSEO Admin" },
  },

  // Session-based authentication with password
  auth: {
    sessions: {
      secret: process.env.KEYSTATIC_SESSION_SECRET || "dev-secret-change-in-production",
    },
  },

  /* ─── Collections ─────────────────────────────────────────────────────── */
  collections: {

    /* Blog Posts */
    blogPosts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title", validation: { isRequired: true } },
        }),
        date: fields.date({
          label: "Publish Date",
          validation: { isRequired: true },
        }),
        author: fields.text({
          label: "Author",
          defaultValue: "FastSEO",
        }),
        categories: fields.array(
          fields.text({ label: "Category" }),
          { label: "Categories", itemLabel: (props) => props.value }
        ),
        excerpt: fields.text({
          label: "Excerpt",
          description: "Short summary shown on the blog index (160 chars max).",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),

    /* Case Studies */
    caseStudies: collection({
      label: "Case Studies",
      slugField: "title",
      path: "content/case-studies/*",
      format: { contentField: "body" },
      schema: {
        title: fields.slug({
          name: { label: "Case Study Title", validation: { isRequired: true } },
        }),
        niche: fields.select({
          label: "Niche",
          options: [
            { label: "iGaming", value: "iGaming" },
            { label: "Crypto", value: "Crypto" },
            { label: "Adult", value: "Adult" },
            { label: "Cannabis", value: "Cannabis" },
            { label: "Dental", value: "Dental" },
            { label: "SaaS", value: "SaaS" },
          ],
          defaultValue: "iGaming",
        }),
        client: fields.text({ label: "Client Description" }),
        result: fields.text({ label: "Headline Result (e.g. 0 → 180,000)" }),
        metric: fields.text({ label: "Metric Label (e.g. Monthly organic visits)" }),
        period: fields.text({ label: "Time Period (e.g. 14 months)" }),
        tags: fields.array(
          fields.text({ label: "Tag" }),
          { label: "Tags", itemLabel: (props) => props.value }
        ),
        body: fields.markdoc({ label: "Case Study Detail" }),
      },
    }),
  },

  /* ─── Singletons ──────────────────────────────────────────────────────── */
  singletons: {

    /* Integrations & Scripts */
    integrations: singleton({
      label: "Integrations & Scripts",
      path: "content/config/integrations",
      schema: {
        gaMeasurementId: fields.text({
          label: "Google Analytics 4 — Measurement ID",
          description: "Format: G-XXXXXXXXXX. Find it in GA4 → Admin → Data Streams.",
        }),
        gscVerificationCode: fields.text({
          label: "Google Search Console — Verification Code",
          description: "Paste only the content value from the <meta name=\"google-site-verification\" content=\"XXXXX\"> tag.",
        }),
        gtmId: fields.text({
          label: "Google Tag Manager — Container ID",
          description: "Format: GTM-XXXXXXX. If set, GTM is used instead of direct GA4.",
        }),
        headScripts: fields.text({
          label: "Custom <head> Scripts",
          description: "Raw <script> or <style> tags injected into every page head. For Meta Pixel, Hotjar, cookie banners, etc.",
          multiline: true,
        }),
        bodyScripts: fields.text({
          label: "Custom <body> Scripts",
          description: "Raw <script> tags injected before </body>. For live chat, intercom, etc.",
          multiline: true,
        }),
      },
    }),

    /* Pricing */
    pricing: singleton({
      label: "Pricing",
      path: "content/config/pricing",
      schema: {
        plans: fields.array(
          fields.object({
            name: fields.text({ label: "Plan Name" }),
            price: fields.text({ label: "Price (e.g. £3,500)" }),
            period: fields.text({ label: "Period", defaultValue: "/month" }),
            tagline: fields.text({ label: "Tagline" }),
            popular: fields.checkbox({ label: "Mark as Most Popular", defaultValue: false }),
            features: fields.array(
              fields.object({
                text: fields.text({ label: "Feature" }),
                included: fields.checkbox({ label: "Included", defaultValue: true }),
              }),
              { label: "Features", itemLabel: (props) => props.fields.text.value }
            ),
          }),
          { label: "Plans", itemLabel: (props) => props.fields.name.value }
        ),
      },
    }),

    /* Site Settings */
    siteSettings: singleton({
      label: "Site Settings",
      path: "content/config/site-settings",
      schema: {
        siteName: fields.text({ label: "Site Name", defaultValue: "FastSEO" }),
        tagline: fields.text({ label: "Tagline" }),
        email: fields.text({
          label: "Contact Email",
          defaultValue: "hello@fastseosolutions.com",
        }),
        linkedIn: fields.text({ label: "LinkedIn URL" }),
        twitter: fields.text({ label: "Twitter / X URL" }),
        acceptingClients: fields.checkbox({
          label: "Currently Accepting Clients",
          defaultValue: true,
        }),
        announcementBar: fields.text({
          label: "Announcement Bar (leave empty to hide)",
        }),
      },
    }),
  },
});
