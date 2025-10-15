import React from 'react';
import Image from 'next/image';

export default function TermsAndConditions() {
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
              <p className="text-sm text-slate-600">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Title Section */}
          <div className="mb-8 pb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h2>
            <p className="text-slate-600">
              <span className="font-semibold">Last Updated:</span> {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              Welcome to Arinova Studio. These Terms and Conditions govern your use of our services, digital products, and website. By accessing or using our services, you agree to be bound by these Terms. Please read them carefully.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If you do not agree with any part of these Terms, you may not access our services or use our products. These Terms apply to all visitors, users, clients, and others who access or use our services.
            </p>
          </section>

          {/* Definitions */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Definitions</h3>
            <div className="ml-4 space-y-3 text-slate-700">
              <p className="leading-relaxed"><span className="font-semibold">"Company," "We," "Us," "Our"</span> refers to Arinova Studio.</p>
              <p className="leading-relaxed"><span className="font-semibold">"Client," "You," "Your"</span> refers to the individual or entity using our services or products.</p>
              <p className="leading-relaxed"><span className="font-semibold">"Services"</span> refers to all service-based work, consulting, development, design, and other professional services provided by Arinova Studio.</p>
              <p className="leading-relaxed"><span className="font-semibold">"Digital Products"</span> refers to software, applications, templates, tools, or other digital goods created and distributed by Arinova Studio.</p>
              <p className="leading-relaxed"><span className="font-semibold">"Agreement"</span> refers to these Terms and Conditions along with any project-specific contracts or statements of work.</p>
            </div>
          </section>

          {/* Services */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.1 Service Description</h4>
                <p className="text-slate-700 leading-relaxed">
                  Arinova Studio provides custom service-based solutions including but not limited to web development, software development, design services, consulting, and digital product creation. The specific scope of services will be outlined in individual project agreements or statements of work.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.2 Service Modifications</h4>
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.3 Project Scope</h4>
                <p className="text-slate-700 leading-relaxed">
                  Each project will have a defined scope of work. Any changes or additions to the agreed scope may result in additional charges and timeline adjustments. Change requests must be submitted in writing and approved by both parties.
                </p>
              </div>
            </div>
          </section>

          {/* Account and Registration */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Account and Registration</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.1 Account Creation</h4>
                <p className="text-slate-700 leading-relaxed">
                  When you create an account or engage our services, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of these Terms and may result in immediate termination of services.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.2 Account Security</h4>
                <p className="text-slate-700 leading-relaxed">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">4.1 Pricing</h4>
                <p className="text-slate-700 leading-relaxed">
                  Service fees and product prices will be clearly stated in project proposals, invoices, or product listings. All prices are subject to change with notice. Pricing does not include applicable taxes unless otherwise specified.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">4.2 Payment Schedule</h4>
                <p className="text-slate-700 leading-relaxed">
                  Payment terms will be specified in individual project agreements. Typically, we require an initial deposit before commencing work, with the balance due upon project completion or according to agreed milestones. Payment is due within the timeframe specified on the invoice.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">4.3 Late Payments</h4>
                <p className="text-slate-700 leading-relaxed">
                  Late payments may incur interest charges at the rate of 1.5% per month or the maximum rate permitted by law, whichever is lower. We reserve the right to suspend services for accounts with overdue payments.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">4.4 Refunds</h4>
                <p className="text-slate-700 leading-relaxed">
                  Refund policies vary by service and product. For service-based work, deposits are generally non-refundable once work has commenced. For digital products, refunds may be available within a specified period as outlined at the time of purchase.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">5.1 Ownership of Deliverables</h4>
                <p className="text-slate-700 leading-relaxed">
                  Upon full payment, you will own the final deliverables specifically created for you as part of the agreed project scope. However, we retain ownership of all preliminary materials, source files, methodologies, tools, and reusable components unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">5.2 Portfolio Rights</h4>
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right to display completed projects in our portfolio, marketing materials, and case studies unless a non-disclosure agreement specifies otherwise. We will not disclose any confidential information in such displays.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">5.3 Third-Party Components</h4>
                <p className="text-slate-700 leading-relaxed">
                  Projects may include third-party libraries, frameworks, or components subject to their own licenses. You are responsible for complying with the terms of any third-party licenses.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">5.4 Digital Products</h4>
                <p className="text-slate-700 leading-relaxed">
                  Digital products are licensed, not sold. You receive a non-exclusive, non-transferable license to use the product according to the license terms provided at the time of purchase. Unauthorized reproduction, distribution, or modification is prohibited.
                </p>
              </div>
            </div>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. Client Responsibilities</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              To ensure successful project completion, you agree to:
            </p>
            <div className="ml-4 space-y-2 text-slate-700">
              <p className="leading-relaxed">• Provide timely access to necessary materials, information, and resources</p>
              <p className="leading-relaxed">• Respond to requests for feedback and approvals within agreed timeframes</p>
              <p className="leading-relaxed">• Ensure you have the rights to any materials you provide to us</p>
              <p className="leading-relaxed">• Designate a primary point of contact for the project</p>
              <p className="leading-relaxed">• Make timely payments according to the agreed schedule</p>
              <p className="leading-relaxed">• Review and approve deliverables within the specified timeframe</p>
            </div>
            <p className="text-slate-700 leading-relaxed mt-4">
              Delays caused by failure to meet these responsibilities may result in project timeline extensions and additional charges.
            </p>
          </section>

          {/* Warranties and Disclaimers */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. Warranties and Disclaimers</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">7.1 Service Warranty</h4>
                <p className="text-slate-700 leading-relaxed">
                  We warrant that services will be performed in a professional and workmanlike manner in accordance with industry standards. For a period of 30 days after project completion, we will correct any defects or errors in our work at no additional charge, provided the issue is reported within this period.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">7.2 Disclaimer</h4>
                <p className="text-slate-700 leading-relaxed">
                  Except as expressly stated herein, our services and digital products are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">7.3 No Guarantee of Results</h4>
                <p className="text-slate-700 leading-relaxed">
                  We do not guarantee specific results, outcomes, or performance metrics from our services or products. Success depends on various factors, many of which are outside our control.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, Arinova Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <div className="ml-4 space-y-2 text-slate-700">
              <p className="leading-relaxed">• Your use or inability to use our services or products</p>
              <p className="leading-relaxed">• Any unauthorized access to or use of our servers or any personal information stored therein</p>
              <p className="leading-relaxed">• Any interruption or cessation of services</p>
              <p className="leading-relaxed">• Any bugs, viruses, or harmful code transmitted through our services</p>
              <p className="leading-relaxed">• Any errors or omissions in content or for any loss or damage incurred as a result of the use of any content posted or transmitted through our services</p>
            </div>
            <p className="text-slate-700 leading-relaxed mt-4">
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed the amount paid by you for the specific service or product giving rise to the claim.
            </p>
          </section>

          {/* Indemnification */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">9. Indemnification</h3>
            <p className="text-slate-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Arinova Studio and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your infringement of any intellectual property or other rights of any third party.
            </p>
          </section>

          {/* Confidentiality */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">10. Confidentiality</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">10.1 Mutual Confidentiality</h4>
                <p className="text-slate-700 leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information disclosed during the course of the project. This obligation survives the termination of the agreement.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">10.2 Exceptions</h4>
                <p className="text-slate-700 leading-relaxed">
                  Confidential information does not include information that is publicly available, already known to the receiving party, independently developed, or required to be disclosed by law.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">11. Termination</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">11.1 Termination by Either Party</h4>
                <p className="text-slate-700 leading-relaxed">
                  Either party may terminate a service agreement with written notice. Upon termination, you will be responsible for payment of all work completed up to the termination date, plus any non-refundable expenses incurred.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">11.2 Termination for Breach</h4>
                <p className="text-slate-700 leading-relaxed">
                  We may terminate services immediately if you breach these Terms, fail to make timely payments, or engage in conduct that we determine to be harmful to our business or reputation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">11.3 Effect of Termination</h4>
                <p className="text-slate-700 leading-relaxed">
                  Upon termination, you must cease all use of our services and digital products. Provisions of these Terms that by their nature should survive termination shall survive, including intellectual property rights, payment obligations, warranties, disclaimers, and limitations of liability.
                </p>
              </div>
            </div>
          </section>

          {/* Force Majeure */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">12. Force Majeure</h3>
            <p className="text-slate-700 leading-relaxed">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">13. Dispute Resolution</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">13.1 Informal Resolution</h4>
                <p className="text-slate-700 leading-relaxed">
                  In the event of any dispute, both parties agree to first attempt to resolve the matter through good faith negotiations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">13.2 Arbitration</h4>
                <p className="text-slate-700 leading-relaxed">
                  If informal resolution fails, any dispute arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration authority in our jurisdiction.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">13.3 Governing Law</h4>
                <p className="text-slate-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Arinova Studio is registered, without regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </section>

          {/* General Provisions */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">14. General Provisions</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">14.1 Entire Agreement</h4>
                <p className="text-slate-700 leading-relaxed">
                  These Terms, together with any project-specific agreements, constitute the entire agreement between you and Arinova Studio regarding the use of our services and supersede all prior agreements and understandings.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">14.2 Severability</h4>
                <p className="text-slate-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the remaining Terms remain in full force and effect.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">14.3 Assignment</h4>
                <p className="text-slate-700 leading-relaxed">
                  You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign our rights and obligations under these Terms without restriction.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">14.4 Waiver</h4>
                <p className="text-slate-700 leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. Any waiver must be in writing and signed by an authorized representative.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">14.5 Amendments</h4>
                <p className="text-slate-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms with a new "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">15. Contact Information</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about these Terms and Conditions, please contact us at:
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
              By using Arinova Studio's services or purchasing our digital products, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
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