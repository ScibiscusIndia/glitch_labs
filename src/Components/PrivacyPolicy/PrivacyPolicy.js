import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="text-center mb-4">Privacy Policy</h1>

              <p className="text-muted">
                Last updated: <strong>January 2026</strong>
              </p>

              <section className="mb-4">
                <h5>1. Introduction</h5>
                <p>
                  We respect your privacy and are committed to protecting your
                  personal information. This Privacy Policy outlines how we
                  collect, use, store, and protect your data when you access or
                  use our website and services.
                </p>
              </section>

              <section className="mb-4">
                <h5>2. Information We Collect</h5>
                <p>
                  We may collect personal information such as your name, email
                  address, phone number, and payment-related details when you
                  voluntarily provide them through forms, registrations, or
                  service inquiries.
                </p>
                <p>
                  Additionally, we collect non-personal data such as IP address,
                  browser type, device information, and pages visited to help us
                  understand user behavior and improve our services.
                </p>
              </section>

              <section className="mb-4">
                <h5>3. How We Use Your Information</h5>
                <p>
                  The information we collect is used to deliver our services,
                  respond to inquiries, process payments, and communicate
                  important updates related to your engagement with us.
                </p>
                <p>
                  We may also use your data to improve website performance,
                  enhance user experience, and comply with legal or regulatory
                  requirements.
                </p>
              </section>

              <section className="mb-4">
                <h5>4. Cookies & Tracking Technologies</h5>
                <p>
                  Our website uses cookies and similar technologies to enhance
                  functionality, analyze traffic, and personalize content.
                  Cookies help us understand how visitors interact with our
                  website.
                </p>
                <p>
                  You can choose to disable cookies through your browser
                  settings; however, doing so may affect certain website
                  features.
                </p>
              </section>

              <section className="mb-4">
                <h5>5. Payment Processing & Third-Party Services</h5>
                <p>
                  We use <strong>Instamojo</strong> as a third-party payment
                  gateway to securely process payments. We do not store or
                  process your debit/credit card or banking details on our
                  servers.
                </p>
                <p>
                  Instamojo may collect and process your payment information in
                  accordance with their own privacy policy and security
                  standards. We recommend reviewing Instamojo’s privacy policy
                  for more details.
                </p>
              </section>

              <section className="mb-4">
                <h5>6. Refund Policy</h5>
                <p>
                  All payments made for our services are
                  <strong> non-refundable</strong>. Once a payment is
                  successfully processed through Instamojo, it cannot be
                  canceled, refunded, or reversed under any circumstances.
                </p>
                <p>
                  By making a payment on our website, you acknowledge and agree
                  to this non-refundable policy. We encourage users to review
                  all service details carefully before completing any payment.
                </p>
              </section>

              <section className="mb-4">
                <h5>7. Data Security</h5>
                <p>
                  We implement reasonable technical and organizational security
                  measures to protect your personal data from unauthorized
                  access, misuse, or disclosure.
                </p>
                <p>
                  While we strive to protect your information, no method of data
                  transmission over the Internet is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-4">
                <h5>8. Your Rights</h5>
                <p>
                  You have the right to access, correct, or request deletion of
                  your personal data, subject to applicable laws and
                  regulations.
                </p>
                <p>
                  To exercise these rights, you may contact us using the details
                  provided below.
                </p>
              </section>

              <section className="mb-4">
                <h5>9. Changes to This Policy</h5>
                <p>
                  We reserve the right to update or modify this Privacy Policy
                  at any time. Any changes will be effective immediately upon
                  posting on this page.
                </p>
                <p>
                  Continued use of our website after changes are posted
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h5>10. Contact Us</h5>
                <p className="mb-0">
                  If you have any questions regarding this Privacy Policy or
                  Refund Policy, please contact us at:
                  <br />
                  <strong>Email:</strong> support@yourdomain.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
