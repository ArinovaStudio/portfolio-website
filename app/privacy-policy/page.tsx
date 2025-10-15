import React from 'react';
import Image from 'next/image';

export default function PrivacyPolicy() {
  const lastUpdated = "October 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/arinova.jpg"
              alt="Arinova Studio Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Arinova Studio</h1>
              <p className="text-sm text-slate-600">Privacy Policy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Title Section */}
          <div className="mb-8 pb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
            <p className="text-slate-600">
              <span className="font-semibold">Last Updated:</span> {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              At Arinova Studio, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or digital products.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By engaging with our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">1.1 Personal Information</h4>
                <p className="text-slate-700 leading-relaxed">
                  We may collect personal information that you provide directly to us, including but not limited to your name, email address, phone number, company name, job title, billing address, and payment information when you engage our services or products.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">1.2 Project Information</h4>
                <p className="text-slate-700 leading-relaxed">
                  When you work with us on projects, we may collect information related to your business requirements, project specifications, design preferences, and any other information necessary to deliver our services effectively.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">1.3 Usage Data</h4>
                <p className="text-slate-700 leading-relaxed">
                  We may automatically collect certain information about your device and how you interact with our digital products, including IP address, browser type, operating system, access times, pages viewed, and the pages visited before navigating to our services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">1.4 Cookies and Tracking Technologies</h4>
                <p className="text-slate-700 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity and enhance user experience. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <div className="ml-4 space-y-2 text-slate-700">
              <p className="leading-relaxed">• To provide, maintain, and deliver our services and digital products</p>
              <p className="leading-relaxed">• To process transactions and send related information including confirmations and invoices</p>
              <p className="leading-relaxed">• To communicate with you about projects, updates, and service-related announcements</p>
              <p className="leading-relaxed">• To respond to your inquiries and provide customer support</p>
              <p className="leading-relaxed">• To improve our services and develop new products</p>
              <p className="leading-relaxed">• To monitor and analyze usage patterns and trends</p>
              <p className="leading-relaxed">• To detect, prevent, and address technical issues or fraudulent activity</p>
              <p className="leading-relaxed">• To comply with legal obligations and enforce our terms of service</p>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.1 Service Providers</h4>
                <p className="text-slate-700 leading-relaxed">
                  We may share your information with third-party service providers who perform services on our behalf, such as payment processing, hosting, analytics, and customer support. These providers are bound by contractual obligations to keep your information confidential.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.2 Legal Requirements</h4>
                <p className="text-slate-700 leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid requests by public authorities, including to meet national security or law enforcement requirements.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.3 Business Transfers</h4>
                <p className="text-slate-700 leading-relaxed">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h3>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Data Retention</h3>
            <p className="text-slate-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Project-related data may be retained for the duration of our business relationship and for a reasonable period thereafter for legal and accounting purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights and Choices</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <div className="ml-4 space-y-2 text-slate-700">
              <p className="leading-relaxed">• The right to access and receive a copy of your personal information</p>
              <p className="leading-relaxed">• The right to rectify inaccurate or incomplete information</p>
              <p className="leading-relaxed">• The right to request deletion of your personal information</p>
              <p className="leading-relaxed">• The right to restrict or object to processing of your information</p>
              <p className="leading-relaxed">• The right to data portability</p>
              <p className="leading-relaxed">• The right to withdraw consent at any time</p>
            </div>
            <p className="text-slate-700 leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Links and Services</h3>
            <p className="text-slate-700 leading-relaxed">
              Our services or digital products may contain links to third-party websites or services that are not operated by us. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h3>
            <p className="text-slate-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h3>
            <p className="text-slate-700 leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our services, you consent to such transfers.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h3>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-900 font-semibold mb-2">Arinova Studio</p>
              <p className="text-slate-700 mb-1">Email: support@arinova.studio</p>
              <p className="text-slate-700 mb-1">Phone: +916296900966</p>
              <p className="text-slate-700">Address: Lucknow, Uttar Pardesh</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mt-10 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              By using Arinova Studio's services or digital products, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-slate-600 text-sm">
            © {new Date().getFullYear()} Arinova Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}