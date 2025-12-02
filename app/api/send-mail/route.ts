import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { form, type } = await req.json();

    if (!form.email && !form.fullName) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const userMail = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You for Contacting Us</title>
    <style>
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f3f4f6;
        color: #111827;
      }
      .email-wrapper {
        max-width: 640px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 16px;
        box-shadow: 0 10px 35px rgba(15, 23, 42, 0.12);
        overflow: hidden;
      }
      .email-header {
        background: radial-gradient(circle at top left, #818cf8, #4f46e5 40%, #1d4ed8 85%);
        color: #ffffff;
        text-align: center;
        padding: 32px 24px 26px;
      }
      .email-header-logo {
        margin-bottom: 16px;
      }
      .email-header-logo img {
        max-width: 80px;
        height: auto;
        display: block;
        margin: 0 auto;
        border-radius: 10rem;
      }
      .email-header h2 {
        margin: 0 0 6px;
        font-size: 18px;
        font-weight: 400;
        opacity: 0.9;
      }
      .email-header h1 {
        margin: 0;
        font-size: 26px;
        font-weight: 600;
      }
      .email-body {
        padding: 30px 26px 24px;
      }
      .hero-image-wrapper {
        text-align: center;
        margin: 0 0 22px;
      }
      .hero-image-wrapper img {
        width: 100%;
        max-width: 560px;
        border-radius: 12px;
        display: block;
        margin: 0 auto;
      }
      .email-body h2 {
        color: #111827;
        margin: 0 0 10px;
        font-size: 20px;
        font-weight: 600;
        text-align: left;
      }
      .email-body p {
        color: #4b5563;
        line-height: 1.7;
        font-size: 15px;
        margin: 8px 0;
        text-align: left;
      }
      .email-body p strong {
        color: #111827;
      }
      .highlight-box {
        margin-top: 18px;
        padding: 14px 16px;
        border-radius: 10px;
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        font-size: 13px;
        color: #4b5563;
      }
      .highlight-box span {
        display: block;
      }
      .highlight-label {
        font-weight: 600;
        color: #111827;
      }
  .social-section {
    margin-top: 26px;
    border-top: 1px solid #e5e7eb;
    padding-top: 18px;
  }

  .social-section-title {
    font-size: 14px;
    font-weight: 600;
    color: #111827;
    margin: 0 0 10px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  /* Container for pills */
  .social-links {
    margin: 0 -4px;
    font-size: 0; /* fixes whitespace gaps for inline-block */
  }

  /* Pill buttons */
  .social-link {
    display: inline-block;
    margin: 4px;
    padding: 8px 16px;
    border-radius: 999px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: #ffffff !important;
    border: none;
    white-space: nowrap;
  }

  .social-link:hover {
    opacity: 0.92;
  }

  .social-whatsapp {
    background-color: #22c55e; /* WhatsApp green */
  }

  .social-facebook {
    background-color: #1877f2; /* Facebook blue */
  }

  .social-instagram {
    background: linear-gradient(135deg, #f97316, #ec4899, #6366f1); /* IG gradient */
  }

  .social-linkedin {
    background-color: #0a66c2; /* LinkedIn blue */
  }

  .social-call {
    background-color: #10b981; /* Call / brand green */
  }

  /* Mobile: stack pills full-width */
  @media (max-width: 640px) {
    .social-link {
      display: block;
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      white-space: normal;
    }
  }
      .email-footer {
        background: #f9fafb;
        text-align: center;
        padding: 14px 16px 18px;
        font-size: 12px;
        color: #6b7280;
        border-top: 1px solid #e5e7eb;
      }
      .email-footer a {
        color: #4f46e5;
        text-decoration: none;
      }
      @media (max-width: 640px) {
        .email-wrapper {
          margin: 16px;
        }
        .email-body {
          padding: 22px 18px 20px;
        }
        .social-links {
          gap: 8px;
        }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-header">
        <!-- Embedded logo image for Nodemailer (attach with cid: "arinova-logo") -->
        <div class="email-header-logo">
          <img src="cid:arinova-logo" alt="Arinova Studio Logo" />
        </div>
        <h2>Hey, ${form.fullName}</h2>
        <h1>Thank You for Getting in Touch</h1>
      </div>

      <div class="email-body">
    <h3>Arinova Studio - Turning Visualization into Reality</h3>
        <h2>We’ve received your enquiry 🌟</h2>
        <p>
          Thank you for contacting <strong>Arinova Studio</strong>. We appreciate you taking the time to connect with us and share your requirements.
        </p>
        <p>
          Our team has successfully received your message and one of our specialists will review it shortly.
          We typically respond within a reasonable timeframe, with clear next steps and any additional information we may need from you.
        </p>
        <p>
          In the meantime, if your query is time-sensitive or you’d like to speak with us directly, you can reach us via any of the channels below.
        </p>

        <div class="highlight-box">
          <span class="highlight-label">What happens next?</span>
          <span>• Our team reviews your message and requirements.</span>
          <span>• If needed, we’ll reach out for clarification or additional details.</span>
          <span>• You’ll receive a follow-up with recommendations, timelines, or a proposal.</span>
        </div>

<div class="social-section">
  <p class="social-section-title">Connect with Arinova Studio</p>
  <div class="social-links">
    <a
      href="https://wa.me/message/ODABEMFEV3VRP1/"
      class="social-link social-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>

    <a
      href="https://facebook.com/share/1BR3tmRpMs/"
      class="social-link social-facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>

    <a
      href="https://instagram.com/arinova.studio"
      class="social-link social-instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>

    <a
      href="https://www.linkedin.com/company/arinova-studio"
      class="social-link social-linkedin"
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>

    <a
      href="tel:+916296900966"
      class="social-link social-call"
    >
      Call Us
    </a>
  </div>
</div>

      </div>

      <div class="email-footer">
        © ${new Date().getFullYear()} Arinova Studio. All rights reserved.<br />
        Designed with ❤️ by Arinova Studio.
      </div>
    </div>
  </body>
</html>
`;

    const myMail = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Contact Form Submission</title>
    <style>
      body {
        margin: 0;
        background-color: #f9fafb;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #111827;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      }
      .header {
        background: linear-gradient(135deg, #3b82f6, #6366f1);
        color: #ffffff;
        text-align: center;
        padding: 25px 20px;
      }
      .header h1 {
        margin: 0;
        font-size: 22px;
        font-weight: 600;
      }
      .content {
        padding: 25px 30px;
      }
      .content h2 {
        margin-top: 0;
        color: #1f2937;
        font-size: 18px;
        border-bottom: 2px solid #e5e7eb;
        padding-bottom: 8px;
      }
      .info {
        margin-top: 15px;
        font-size: 15px;
        color: #374151;
      }
      .info strong {
        display: inline-block;
        width: 100px;
        color: #111827;
      }
      .message-box {
        background: #f3f4f6;
        padding: 15px;
        border-radius: 8px;
        margin-top: 15px;
        color: #374151;
        white-space: pre-wrap;
        line-height: 1.6;
      }
      .footer {
        background: #f3f4f6;
        text-align: center;
        padding: 15px;
        font-size: 13px;
        color: #6b7280;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>📩 New Contact Form Submission</h1>
      </div>
      <div class="content">
        <h2>Contact Details</h2>
        <div class="info"><strong>Name:</strong> ${form.fullName || "—"}</div>
        <div class="info"><strong>Email:</strong> ${form.email || "—"}</div>
        <div class="info"><strong>Phone:</strong> ${form.phone || "—"}</div>
        ${form.project ? `<div class="info"><strong>Project:</strong> ${form.project}</div>` : ""}
        <div class="info"><strong>Date:</strong> ${new Date().toLocaleString()}</div>

        <h2>Message</h2>
        <div class="message-box">${form.message || "No message provided."}</div>
      </div>
      <div class="footer">
        This message was automatically sent from your website contact form.
      </div>
    </div>
  </body>
</html>
`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"Arinova Studio" <no-reply@arinova.studio>',
      to: type === "me" ? "support@arinova.studio" : form.email,
      subject:
        type === "me"
          ? "Mail from Website"
          : "Arinova Studio - Thanks for reaching out",
      html: type === "me" ? myMail : userMail,
      attachments:
        type === "me"
          ? []
          : [
              {
                filename: "logo.jpg",
                path: "public/assets/arinova.jpg",
                cid: "arinova-logo",
              },
            ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: "OTP sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
