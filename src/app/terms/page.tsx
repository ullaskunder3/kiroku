import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2, ShieldAlert, Scale, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Kiroku",
  description:
    "Terms of Service for Kiroku, the minimalist living documentation library and writing platform. Review terms governing usage, account security, and intellectual property.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "September 6, 2026";

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#20221f] selection:bg-[#56715b]/20 selection:text-[#20221f] py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Navigation back */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#7b817a] hover:text-[#20221f] transition-colors group"
          >
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Kiroku</span>
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-3 border-b border-[#e2e5df] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e9eee8] text-[#38503d] font-mono text-xs font-medium">
            <FileText className="size-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#20221f]">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#7b817a]">
            Effective Date: {lastUpdated} • Application: <span className="font-semibold text-[#20221f]">Kiroku (kiroku.xyz)</span>
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#50544f]">
          
          {/* Section 1: Acceptance */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;) and <strong>Ullas Kunder</strong> (&ldquo;Developer&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), governing your access to and use of the <strong>Kiroku</strong> application, website (<a href="https://kiroku.xyz" className="text-[#56715b] underline font-medium">https://kiroku.xyz</a>), and related sync and documentation services (collectively, the &ldquo;Service&rdquo;).
            </p>
            <p>
              By accessing, creating an account on, or using Kiroku, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link href="/privacy" className="text-[#56715b] underline font-medium">Privacy Policy</Link>. If you do not agree, do not use the Service.
            </p>
          </section>

          {/* Section 2: Eligibility & Account Security */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              2. Eligibility & Account Security
            </h2>
            <p>
              You must be at least 13 years of age (or the legal age of majority in your jurisdiction) to use Kiroku. By using the Service, you represent that you meet this requirement.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
              <li>You are responsible for maintaining the confidentiality of your account login credentials.</li>
              <li>You agree to notify us immediately of any unauthorized use or security compromise of your account.</li>
              <li>You are responsible for all activities that occur under your account.</li>
            </ul>
          </section>

          {/* Section 3: Intellectual Property & Ownership */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              3. User Content & Intellectual Property Ownership
            </h2>
            
            <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#20221f]">
                <CheckCircle2 className="size-4 text-[#56715b]" />
                <span>You Own 100% of Your Content</span>
              </div>
              <p className="text-xs sm:text-sm text-[#50544f]">
                All documents, notes, books, chapters, pages, code snippets, diagrams, markdown text, and files you create, upload, or import to Kiroku remain your sole and exclusive property. We claim zero ownership over your intellectual property.
              </p>
            </div>

            <p className="text-xs sm:text-sm">
              <strong>Limited License to Operate:</strong> By using Kiroku, you grant us only the limited, revocable, non-exclusive license to host, store, index, format, and synchronize your content solely as required to provide the Service to you. We do not use your private content to train public AI models or monetize your data.
            </p>

            <p className="text-xs sm:text-sm">
              <strong>Kiroku Platform Rights:</strong> The Kiroku brand, logo, user interface design, visual styling, source code, and underlying software are the intellectual property of Ullas Kunder and are protected by applicable copyright, trademark, and intellectual property laws.
            </p>
          </section>

          {/* Section 4: Acceptable Use & Prohibited Activities */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              4. Acceptable Use Policy
            </h2>
            <p>You agree not to misuse the Service. Specifically, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
              <li>Use the Service for any unlawful, fraudulent, or malicious purpose.</li>
              <li>Upload or transmit malware, viruses, harmful code, or malicious scripts.</li>
              <li>Attempt to reverse-engineer, decompile, probe, scan, or breach any security vulnerability of the Service.</li>
              <li>Engage in automated scraping or rate-limit circumvention that harms the infrastructure or availability for other users.</li>
              <li>Store content that infringes upon the intellectual property or privacy rights of any third party.</li>
            </ul>
          </section>

          {/* Section 5: Subscriptions & Feature Tiers */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              5. Subscriptions, Pricing & Entitlements
            </h2>
            <p>
              Kiroku offers free workspace capabilities alongside optional paid feature tiers (&ldquo;Lite Power&rdquo; / Pro) offering expanded storage, unlimited books/chapters/pages, advanced theme styling, PDF exports, and on-demand cloud synchronization.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
              <li><strong>Billing:</strong> Fees for paid tiers are billed in advance on a recurring or one-time basis as specified at checkout.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Your access to paid features will continue through the end of your paid billing period.</li>
              <li><strong>Modifications:</strong> We reserve the right to adjust pricing or feature limits with prior reasonable notice.</li>
            </ul>
          </section>

          {/* Section 6: Third-Party Authentication & Services */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              6. Third-Party Integrations & Google OAuth
            </h2>
            <p className="text-xs sm:text-sm">
              When you use third-party authentication (such as Google OAuth) to sign in to Kiroku, your use is also subject to the terms and policies of those respective third parties. Kiroku&rsquo;s handling of Google User Data strictly adheres to the{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#56715b] underline font-medium"
              >
                Google API Services User Data Policy
              </a>.
            </p>
          </section>

          {/* Section 7: Disclaimers & Limitation of Liability */}
          <section className="space-y-4 p-5 sm:p-6 bg-[#f1f3ef] rounded-xl border border-[#e2e5df]">
            <div className="flex items-center gap-2 text-[#38503d] font-semibold text-base sm:text-lg">
              <ShieldAlert className="size-5" />
              <h3>7. Disclaimer of Warranties & Limitation of Liability</h3>
            </div>
            <p className="text-xs sm:text-sm uppercase font-mono tracking-wide text-[#7b817a]">
              Please read this section carefully.
            </p>
            <p className="text-xs sm:text-sm">
              THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p className="text-xs sm:text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ULLAS KUNDER OR KIROKU BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF DATA, REVENUE, OR USE ARISING FROM OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
          </section>

          {/* Section 8: Termination */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              8. Account Suspension & Termination
            </h2>
            <p className="text-xs sm:text-sm">
              You are free to stop using Kiroku at any time and may request deletion of your account. We reserve the right to suspend or terminate your access to the Service at our discretion if you violate these Terms or engage in conduct harmful to other users or the platform.
            </p>
          </section>

          {/* Section 9: Governing Law */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f] flex items-center gap-2">
              <Scale className="size-5 text-[#56715b]" />
              <span>9. Governing Law & Dispute Resolution</span>
            </h2>
            <p className="text-xs sm:text-sm">
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law principles. Any disputes shall be resolved through good-faith informal negotiations prior to initiating any formal legal proceedings.
            </p>
          </section>

          {/* Section 10: Changes to Terms */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              10. Changes to These Terms
            </h2>
            <p className="text-xs sm:text-sm">
              We reserve the right to update or modify these Terms from time to time. When changes are made, we will revise the &ldquo;Effective Date&rdquo; at the top of this page. Continued use of the Service following such updates signifies your acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 11: Contact Us */}
          <section className="space-y-4 pt-4 border-t border-[#e2e5df]">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f] flex items-center gap-2">
              <Mail className="size-5 text-[#56715b]" />
              <span>11. Contact Information</span>
            </h2>
            <p className="text-xs sm:text-sm">
              For questions, clarifications, or notices regarding these Terms of Service, please reach out via:
            </p>
            <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] text-xs sm:text-sm space-y-1 font-mono">
              <p><span className="text-[#7b817a]">Developer:</span> <strong className="text-[#20221f]">Ullas Kunder</strong></p>
              <p><span className="text-[#7b817a]">Application:</span> <strong className="text-[#20221f]">Kiroku</strong> (<a href="https://kiroku.xyz" className="text-[#56715b] underline">https://kiroku.xyz</a>)</p>
              <p><span className="text-[#7b817a]">Contact Form:</span> <a href="https://www.ullaskunder.com/contact" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">https://www.ullaskunder.com/contact</a></p>
              <p><span className="text-[#7b817a]">Website:</span> <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">http://ullaskunder.com/</a></p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#e2e5df] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7b817a]">
          <p>© {new Date().getFullYear()} Kiroku. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-[#20221f] underline">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#20221f]">
              Home
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}
