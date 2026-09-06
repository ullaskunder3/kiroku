import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, UserCheck, Trash2, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Kiroku",
  description:
    "Privacy Policy for Kiroku, the minimalist living documentation library and writing platform. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="size-3.5" />
            <span>Privacy & Data Protection</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#20221f]">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#7b817a]">
            Effective Date: {lastUpdated} • Application: <span className="font-semibold text-[#20221f]">Kiroku (kiroku.xyz)</span>
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[#50544f]">
          
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              1. Overview & Core Philosophy
            </h2>
            <p>
              Welcome to <strong>Kiroku</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), accessible at{" "}
              <a href="https://kiroku.xyz" className="text-[#56715b] underline font-medium">https://kiroku.xyz</a>, created and operated by{" "}
              <strong>Ullas Kunder</strong> (<a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">ullaskunder.com</a>).
            </p>
            <p>
              Kiroku is a serene, high-speed living documentation library and writing environment. We believe that your thoughts, notes, and documentation belong strictly to you. We are committed to transparency, minimal data collection, and robust user privacy.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              2. Information We Collect
            </h2>
            <p>
              We only collect information strictly necessary to provide, authenticate, and maintain your workspace:
            </p>

            <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#e2e5df]">
              <div>
                <h3 className="font-semibold text-[#20221f] text-sm sm:text-base">A. Account & Authentication Information</h3>
                <p className="text-xs sm:text-sm mt-1">
                  When you register or sign in, we collect your name, email address, and authentication credentials. If you sign in via OAuth providers (such as Google), we receive basic public profile information (such as your name, email address, avatar URL, and Google Account ID).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#20221f] text-sm sm:text-base">B. Documents & Workspace Content</h3>
                <p className="text-xs sm:text-sm mt-1">
                  We store and synchronize the books, chapters, pages, markdown text, code blocks, diagrams, and revision histories that you create inside Kiroku to allow seamless multi-device editing and backup.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#20221f] text-sm sm:text-base">C. Technical & Diagnostic Data</h3>
                <p className="text-xs sm:text-sm mt-1">
                  When you access Kiroku, we may log standard technical data including browser type, operating system, IP address, device identifiers, and crash logs to monitor service reliability and prevent abuse.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#20221f] text-sm sm:text-base">D. Information We DO NOT Collect</h3>
                <p className="text-xs sm:text-sm mt-1 text-[#38503d] font-medium">
                  We <strong>do not collect phone numbers</strong>, physical addresses, biometric identifiers, or government-issued IDs.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Google API & OAuth User Data Policy Compliance */}
          <section className="space-y-4 p-5 sm:p-6 bg-[#f1f3ef] rounded-xl border border-[#e2e5df]">
            <div className="flex items-center gap-2 text-[#38503d] font-semibold text-base sm:text-lg">
              <Lock className="size-5" />
              <h3>3. Google API Services & OAuth User Data Compliance</h3>
            </div>
            <p className="text-xs sm:text-sm">
              Kiroku allows users to sign in and authenticate using Google OAuth. When you authenticate using Google, Kiroku only accesses basic profile information (name, email address, avatar image, and user identifier) to create and authenticate your account session.
            </p>
            <div className="bg-[#fdfdfb] p-4 rounded-lg border border-[#e2e5df] text-xs sm:text-sm space-y-2">
              <p className="font-medium text-[#20221f]">
                <strong>Google Limited Use Disclosure:</strong>
              </p>
              <p className="italic text-[#50544f]">
                Kiroku&rsquo;s use and transfer to any other app of information received from Google APIs will adhere to the{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#56715b] underline font-medium inline-flex items-center gap-1"
                >
                  Google API Services User Data Policy
                  <ExternalLink className="size-3" />
                </a>, including the Limited Use requirements.
              </p>
            </div>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#50544f]">
              <li>We do not sell, rent, or trade Google user data to third parties, advertisers, or data brokers.</li>
              <li>We do not use Google user data or your private documents to train generalized artificial intelligence (AI) or machine learning (ML) models.</li>
              <li>You may revoke Kiroku&rsquo;s access to your Google account at any time via <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">Google Security Settings</a>.</li>
            </ul>
          </section>

          {/* Section 4: How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              4. How We Use Your Information
            </h2>
            <p>We process your information exclusively for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
              <li>To provide, operate, and maintain your distraction-free documentation workspace.</li>
              <li>To authenticate your identity and protect against unauthorized access.</li>
              <li>To save, sync, and restore your documents across your connected devices and sessions.</li>
              <li>To manage optional subscription tiers (Lite Power / Pro) and feature entitlements.</li>
              <li>To respond to your support requests and communicate critical security notices.</li>
            </ul>
          </section>

          {/* Section 5: Data Storage, Retention & Security */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              5. Data Storage, Retention & Security
            </h2>
            <p>
              We implement industry-standard encryption (HTTPS/TLS in transit and secure database access controls) to safeguard your data.
            </p>
            <p className="text-xs sm:text-sm">
              <strong>Data Retention:</strong> We retain your personal data and documents for as long as your account remains active or as required to fulfill the purposes outlined in this policy. When you delete a page or document, it is immediately removed from your workspace or moved to your designated trash archive.
            </p>
          </section>

          {/* Section 6: User Rights & Data Deletion */}
          <section className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              6. Your Rights & Data Deletion Process
            </h2>
            <p>
              Regardless of your location (including rights under GDPR, CCPA, and global privacy standards), you have full control over your personal data:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 bg-[#fdfdfb] rounded-lg border border-[#e2e5df]">
                <div className="font-bold text-[#20221f] mb-1 flex items-center gap-1.5">
                  <UserCheck className="size-3.5 text-[#56715b]" />
                  <span>Access & Export</span>
                </div>
                <p className="text-[#7b817a] font-sans">
                  Export your documents, markdown files, and workspace archives locally at any time.
                </p>
              </div>

              <div className="p-3.5 bg-[#fdfdfb] rounded-lg border border-[#e2e5df]">
                <div className="font-bold text-[#20221f] mb-1 flex items-center gap-1.5">
                  <Trash2 className="size-3.5 text-[#56715b]" />
                  <span>Account & Data Deletion</span>
                </div>
                <p className="text-[#7b817a] font-sans">
                  Request full deletion of your account, profile, and cloud workspace data.
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm">
              To request complete deletion of your account and associated data, contact us directly at our{" "}
              <a
                href="https://www.ullaskunder.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#56715b] underline font-medium"
              >
                contact page
              </a>. Requests are processed promptly within 30 days.
            </p>
          </section>

          {/* Section 7: Third-Party Service Providers */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              7. Third-Party Service Providers
            </h2>
            <p>
              We may utilize trusted third-party cloud infrastructure providers to operate the service:
            </p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
              <li><strong>Hosting & Edge CDN:</strong> Vercel Inc.</li>
              <li><strong>Database & Edge Persistence:</strong> Turso / LibSQL</li>
              <li><strong>Authentication:</strong> Better-Auth & Google OAuth</li>
            </ul>
            <p className="text-xs sm:text-sm text-[#7b817a]">
              These third parties are bound by strict data protection agreements and only process data as necessary to perform their respective services.
            </p>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              8. Children&rsquo;s Privacy
            </h2>
            <p className="text-xs sm:text-sm">
              Kiroku is not directed at children under the age of 13 (or under 16 where applicable by local law), and we do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please notify us immediately so we can delete the account and associated data.
            </p>
          </section>

          {/* Section 9: Updates to this Policy */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f]">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-xs sm:text-sm">
              We may update this Privacy Policy periodically to reflect enhancements to our service or changes in legal requirements. Any modifications will be posted on this page with an updated &ldquo;Effective Date&rdquo;.
            </p>
          </section>

          {/* Section 10: Contact Us */}
          <section className="space-y-4 pt-4 border-t border-[#e2e5df]">
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#20221f] flex items-center gap-2">
              <Mail className="size-5 text-[#56715b]" />
              <span>10. Contact Information</span>
            </h2>
            <p className="text-xs sm:text-sm">
              If you have any questions, feedback, or privacy-related inquiries regarding this Privacy Policy or your personal data, please contact:
            </p>
            <div className="p-4 bg-[#fdfdfb] rounded-lg border border-[#e2e5df] text-xs sm:text-sm space-y-1 font-mono">
              <p><span className="text-[#7b817a]">Developer:</span> <strong className="text-[#20221f]">Ullas Kunder</strong></p>
              <p><span className="text-[#7b817a]">Service:</span> <strong className="text-[#20221f]">Kiroku</strong> (<a href="https://kiroku.xyz" className="text-[#56715b] underline">https://kiroku.xyz</a>)</p>
              <p><span className="text-[#7b817a]">Contact Form:</span> <a href="https://www.ullaskunder.com/contact" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">https://www.ullaskunder.com/contact</a></p>
              <p><span className="text-[#7b817a]">Website:</span> <a href="http://ullaskunder.com/" target="_blank" rel="noopener noreferrer" className="text-[#56715b] underline">http://ullaskunder.com/</a></p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-[#e2e5df] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7b817a]">
          <p>© {new Date().getFullYear()} Kiroku. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[#20221f] underline">
              Terms of Service
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
