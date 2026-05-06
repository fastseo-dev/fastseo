import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — FastSEO",
  description:
    "FastSEO Terms of Service. The terms and conditions governing use of our website and SEO services.",
  alternates: { canonical: "https://www.fastseosolutions.com/terms-of-service/" },
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-void pt-[70px]">
      <div className="max-w-[780px] mx-auto px-6 py-20">
        <span className="inline-flex items-center gap-2 text-text-faint font-body font-semibold text-[11px] tracking-[0.12em] uppercase mb-4">
          FastSEO · Legal
        </span>
        <h1 className="font-display font-black text-[42px] leading-[1.05] tracking-[-1.5px] text-text-primary mb-3">
          Terms of Service
        </h1>
        <p className="font-body text-[13px] text-text-faint mb-10">Last updated: April 2025</p>

        <div className="prose">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the FastSEO Solutions website at{" "}
            <a href="https://www.fastseosolutions.com">www.fastseosolutions.com</a> ("the Site"),
            or by engaging FastSEO Solutions ("FastSEO", "we", "us") for SEO services, you agree
            to be bound by these Terms of Service. If you do not agree, please do not use the Site
            or engage our services.
          </p>

          <h2>2. Services</h2>
          <p>
            FastSEO provides specialist search engine optimisation services including but not
            limited to technical SEO, link building, content strategy, and AI search optimisation
            for clients in iGaming, cryptocurrency, adult, cannabis, dental, and SaaS industries.
          </p>
          <p>
            Specific service terms, deliverables, timelines, and pricing are set out in individual
            client agreements or proposals. These Terms of Service govern use of the Site and
            provide a framework for our service relationship; they do not supersede terms agreed
            in a signed client proposal or contract.
          </p>

          <h2>3. Website Use</h2>
          <p>
            You may use the Site for lawful purposes only. You must not:
          </p>
          <ul>
            <li>Use the Site in any way that breaches applicable law or regulation.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material.</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its infrastructure.</li>
            <li>Reproduce, distribute, or republish any Site content without our prior written consent.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on the Site — including text, graphics, logos, and design — is owned by
            or licensed to FastSEO and is protected by applicable intellectual property laws. You
            may not reproduce, distribute, or create derivative works from any Site content without
            our express written permission.
          </p>
          <p>
            Content, reports, and strategies we produce for clients under a service agreement
            remain our intellectual property until full payment has been received, at which point
            agreed deliverables transfer to the client as specified in the client agreement.
          </p>

          <h2>5. Disclaimers</h2>
          <p>
            The Site is provided on an "as is" basis without warranties of any kind, express or
            implied. We do not warrant that the Site will be uninterrupted or error-free.
          </p>
          <p>
            SEO involves factors outside our direct control, including search engine algorithm
            changes. We do not guarantee specific ranking positions, traffic volumes, or revenue
            outcomes. Case study results on this Site represent specific client results and are
            not a guarantee of future performance.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, FastSEO shall not be liable for any indirect,
            incidental, special, consequential, or punitive damages arising from use of the Site
            or our services, including but not limited to loss of profits, data, or goodwill.
          </p>
          <p>
            Our total liability in respect of any claim arising from our services shall not exceed
            the fees paid by the client in the three months preceding the claim.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites. These links are provided for
            convenience only. We have no control over the content of linked sites and accept no
            responsibility for them or for any loss or damage that may arise from your use of them.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms of Service and any disputes arising from them shall be governed by and
            construed in accordance with applicable law. Any disputes will be subject to the
            exclusive jurisdiction of the relevant courts.
          </p>

          <h2>9. Changes to These Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to the Site. Continued use of the Site after changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            For any questions regarding these Terms of Service, contact us at:{" "}
            <a href="mailto:seo@fastseosolutions.com">seo@fastseosolutions.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
