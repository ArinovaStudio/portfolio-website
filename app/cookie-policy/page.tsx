import React from 'react';
import Image from 'next/image';

export default function CookiePolicy() {
  const lastUpdated = "October 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
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
              <p className="text-sm text-slate-600">Cookie Policy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          {/* Title Section */}
          <div className="mb-8 pb-8 border-b border-slate-200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cookie Policy</h2>
            <p className="text-slate-600">
              <span className="font-semibold">Last Updated:</span> {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-10">
            <p className="text-slate-700 leading-relaxed mb-4">
              This Cookie Policy explains how Arinova Studio uses cookies and similar tracking technologies when you visit our website, use our services, or interact with our digital products. This policy provides detailed information about the types of cookies we use, why we use them, and how you can control them.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By continuing to use our website and services, you consent to our use of cookies in accordance with this Cookie Policy. If you do not agree with our use of cookies, you should adjust your browser settings or refrain from using our website.
            </p>
          </section>

          {/* What Are Cookies */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other electronic device) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Cookies allow websites to recognize your device and store information about your preferences or past actions. They help enhance your browsing experience by remembering your settings, keeping you logged in, and providing personalized content.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. However, disabling cookies may impact your ability to use certain features of our website.
            </p>
          </section>

          {/* Types of Cookies */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h3>
            
            <div className="ml-4 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.1 Strictly Necessary Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  These cookies are essential for our website to function properly. They enable core functionality such as security, network management, and accessibility. Without these cookies, certain services you request cannot be provided.
                </p>
                <p className="text-slate-700 leading-relaxed italic">
                  Examples: Authentication cookies, security cookies, load balancing cookies
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.2 Performance and Analytics Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  These cookies collect information about how visitors use our website, such as which pages are visited most often, how long users stay on pages, and any error messages received. This helps us improve the performance and user experience of our website.
                </p>
                <p className="text-slate-700 leading-relaxed italic">
                  Examples: Google Analytics, page view tracking, bounce rate analysis
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.3 Functionality Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  These cookies allow our website to remember choices you make (such as your language preference, region, or login credentials) and provide enhanced, personalized features. They may also be used to provide services you have requested, such as watching a video or commenting on content.
                </p>
                <p className="text-slate-700 leading-relaxed italic">
                  Examples: Language preferences, user interface customization, remember me functionality
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.4 Targeting and Advertising Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-2">
                  These cookies are used to deliver advertisements that are relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns. These cookies remember that you have visited our website and this information may be shared with other organizations, such as advertisers.
                </p>
                <p className="text-slate-700 leading-relaxed italic">
                  Examples: Retargeting cookies, social media advertising pixels, conversion tracking
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">2.5 Session vs Persistent Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  We use both session and persistent cookies:
                </p>
                <div className="ml-4 space-y-2 text-slate-700">
                  <p className="leading-relaxed"><span className="font-semibold">Session Cookies:</span> Temporary cookies that expire when you close your browser. They allow us to link your actions during a single browsing session.</p>
                  <p className="leading-relaxed"><span className="font-semibold">Persistent Cookies:</span> Remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.</p>
                </div>
              </div>
            </div>
          </section>

          {/* First-Party and Third-Party Cookies */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">3. First-Party and Third-Party Cookies</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.1 First-Party Cookies</h4>
                <p className="text-slate-700 leading-relaxed">
                  These cookies are set directly by Arinova Studio and can only be read by our website. We use them to operate our website, remember your preferences, and improve your experience.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">3.2 Third-Party Cookies</h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  These cookies are set by domains other than Arinova Studio. We may use third-party services that set cookies on our website for various purposes. Third-party cookies we may use include:
                </p>
                <div className="ml-4 space-y-2 text-slate-700">
                  <p className="leading-relaxed">• Google Analytics for website analytics and performance monitoring</p>
                  <p className="leading-relaxed">• Social media platforms (Facebook, LinkedIn, Twitter) for social sharing and advertising</p>
                  <p className="leading-relaxed">• Payment processors for secure transaction processing</p>
                  <p className="leading-relaxed">• Content delivery networks (CDNs) for faster content loading</p>
                  <p className="leading-relaxed">• Customer support tools for chat and help desk functionality</p>
                </div>
                <p className="text-slate-700 leading-relaxed mt-3">
                  These third-party services have their own privacy policies and cookie policies. We recommend reviewing their policies to understand how they use cookies.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Cookies</h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              We use cookies for the following purposes:
            </p>
            <div className="ml-4 space-y-2 text-slate-700">
              <p className="leading-relaxed">• To authenticate users and prevent fraudulent use of accounts</p>
              <p className="leading-relaxed">• To remember your preferences and settings for a better user experience</p>
              <p className="leading-relaxed">• To analyze how our website is used and identify areas for improvement</p>
              <p className="leading-relaxed">• To understand which pages and features are most popular</p>
              <p className="leading-relaxed">• To personalize content and recommendations based on your interests</p>
              <p className="leading-relaxed">• To track the effectiveness of our marketing campaigns</p>
              <p className="leading-relaxed">• To provide social media features and analyze social media traffic</p>
              <p className="leading-relaxed">• To remember items in your shopping cart or project inquiries</p>
              <p className="leading-relaxed">• To enable communication features such as live chat support</p>
              <p className="leading-relaxed">• To comply with legal obligations and enforce our terms of service</p>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">5. Cookie Duration</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              The length of time a cookie remains on your device depends on its type:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Cookie Type</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Duration</th>
                    <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Session Cookies</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Until browser closes</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Temporary session management</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Short-term Cookies</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Days to weeks</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Recent preferences and activities</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Long-term Cookies</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">Months to years</td>
                    <td className="border border-slate-300 px-4 py-3 text-slate-700">User preferences and analytics</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">6. How to Manage and Control Cookies</h3>
            
            <div className="ml-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">6.1 Browser Settings</h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. The following links provide information on how to manage cookies in popular browsers:
                </p>
                <div className="ml-4 space-y-2 text-slate-700">
                  <p className="leading-relaxed">• Google Chrome: Settings → Privacy and Security → Cookies and other site data</p>
                  <p className="leading-relaxed">• Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data</p>
                  <p className="leading-relaxed">• Safari: Preferences → Privacy → Cookies and website data</p>
                  <p className="leading-relaxed">• Microsoft Edge: Settings → Cookies and site permissions</p>
                  <p className="leading-relaxed">• Opera: Settings → Privacy & security → Cookies</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">6.2 Cookie Consent Banner</h4>
                <p className="text-slate-700 leading-relaxed">
                  When you first visit our website, you will see a cookie consent banner. You can choose to accept all cookies, reject non-essential cookies, or customize your cookie preferences. You can change your preferences at any time by accessing our cookie settings.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">6.3 Opt-Out Tools</h4>
                <p className="text-slate-700 leading-relaxed mb-3">
                  You can opt out of certain types of cookies using the following tools:
                </p>
                <div className="ml-4 space-y-2 text-slate-700">
                  <p className="leading-relaxed">• Google Analytics Opt-out Browser Add-on</p>
                  <p className="leading-relaxed">• Network Advertising Initiative (NAI) Opt-Out Tool</p>
                  <p className="leading-relaxed">• Digital Advertising Alliance (DAA) WebChoices Tool</p>
                  <p className="leading-relaxed">• Your Online Choices (for EU users)</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">6.4 Mobile Device Settings</h4>
                <p className="text-slate-700 leading-relaxed">
                  Mobile devices have settings that allow you to control tracking and advertising. Check your device settings for options like "Limit Ad Tracking" (iOS) or "Opt out of Ads Personalization" (Android).
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">6.5 Impact of Blocking Cookies</h4>
                <p className="text-slate-700 leading-relaxed">
                  Please note that if you choose to block or delete cookies, certain features of our website may not function properly. You may experience reduced functionality, inability to save preferences, or difficulty accessing certain services. Strictly necessary cookies cannot be disabled as they are essential for website operation.
                </p>
              </div>
            </div>
          </section>

          {/* Do Not Track */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">7. Do Not Track (DNT) Signals</h3>
            <p className="text-slate-700 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we provide you with the ability to manage cookies through your browser settings and our cookie consent tools.
            </p>
          </section>

          {/* Web Beacons */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">8. Web Beacons and Other Tracking Technologies</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              In addition to cookies, we may use other tracking technologies such as web beacons (also known as pixel tags or clear GIFs), which are small graphic images embedded in web pages or emails. Web beacons work together with cookies to track user behavior and measure the effectiveness of our communications.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We may also use local storage technologies (such as HTML5 local storage) to enhance user experience and store certain preferences. These technologies are managed through your browser settings similar to cookies.
            </p>
          </section>

          {/* Updates to Policy */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">9. Updates to This Cookie Policy</h3>
            <p className="text-slate-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on this page with a new "Last Updated" date. We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Cookie Policy, how we use cookies, or how to manage your cookie preferences, please contact us at:
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
              By continuing to use our website and services, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein.
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