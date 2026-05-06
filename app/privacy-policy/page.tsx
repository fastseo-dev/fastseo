import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FastSEO",
  description:
    "FastSEO Privacy Policy. How we collect, use, store and protect your personal data. GDPR compliant.",
  alternates: { canonical: "https://www.fastseosolutions.com/privacy-policy/" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <div className="max-w-[780px] mx-auto px-6 py-20">
        <span className="inline-flex items-center gap-2 text-text-faint font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          FastSEO · Legal
        </span>
        <h1 className="font-display font-black text-[42px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-3">
          Privacy Policy
        </h1>
        <p className="font-body text-[13px] text-text-faint mb-10">Last updated: April 2025</p>

        <div className="prose">
          <h2>1. Who We Are</h2>
          <p>
            FastSEO Solutions ("FastSEO", "we", "us", "our") is an SEO agency providing specialist
            search engine optimisation services. Our website is{" "}
            <a href="https://www.fastseosolutions.com">www.fastseosolutions.com</a>. You can contact
            us at{" "}
            <a href="mailto:seo@fastseosolutions.com">seo@fastseosolutions.com</a>.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li>
              <strong>Contact information:</strong> name, email address, company name, and any
              information you include when emailing us or completing a contact form.
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, time spent on pages, browser type,
              referring URL, and general geographic location (country/city level) collected
              via website analytics.
            </li>
            <li>
              <strong>Communication data:</strong> the content of emails and messages you send us,
              and our responses.
            </li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and provide the services you have requested.</li>
            <li>Send information about our services where you have given consent or where we have
            a legitimate interest in doing so as a business.</li>
            <li>Understand how our website is used and improve its content and structure.</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p>
            We process your data under the following legal bases: contract performance (where data
            processing is necessary to provide services you have requested), legitimate interests
            (improving our services, direct marketing to business contacts), and consent (where you
            have specifically opted in).
          </p>

          <h2>4. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and analytics tools to collect usage data as described
            above. Analytics data is collected in aggregate and is not used to identify individual
            visitors. You can disable cookies in your browser settings at any time.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data to third parties. We may share data with:
          </p>
          <ul>
            <li>Service providers acting as data processors on our behalf (email hosting, analytics
            tools) who are contractually bound to protect your data.</li>
            <li>Law enforcement or regulatory authorities where legally required.</li>
          </ul>

          <h2>6. Data Retention</h2>
          <p>
            We retain your contact and communication data for as long as necessary to maintain
            our business relationship and comply with legal obligations. Website analytics data
            is retained per the default retention settings of the analytics platform in use.
            You can request deletion of your data at any time.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR and applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data ("right to be forgotten").</li>
            <li>Object to or restrict our processing of your data.</li>
            <li>Withdraw consent at any time (where processing is based on consent).</li>
            <li>Lodge a complaint with your local data protection supervisory authority.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href="mailto:seo@fastseosolutions.com">seo@fastseosolutions.com</a>.
          </p>

          <h2>8. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures to protect your personal data
            from unauthorised access, disclosure, or loss. Email communications are not
            fully secure by default — if you have concerns about data sensitivity, please let us know.
          </p>

          <h2>9. International Transfers</h2>
          <p>
            Where personal data is transferred outside the EEA, we ensure appropriate safeguards
            are in place in accordance with applicable data protection legislation.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "last updated" date at the
            top of this page indicates when it was most recently revised. Continued use of our
            website after changes constitutes acceptance of the updated policy.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any privacy-related questions or to exercise your data rights, contact us at:{" "}
            <a href="mailto:seo@fastseosolutions.com">seo@fastseosolutions.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
