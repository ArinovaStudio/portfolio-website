import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";




export async function POST(req: NextRequest) {
  try {
    const { form, type } = await req.json();

    if (!form.email && !form.fullName) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    console.log(form, type);
    
    

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
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9fafb;
        color: #333;
      }
      .email-wrapper {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        overflow: hidden;
      }
      .email-header {
        background: linear-gradient(135deg, #6366f1, #3b82f6);
        color: #ffffff;
        text-align: center;
        padding: 30px 20px;
      }
      .email-header h1 {
        margin: 0;
        font-size: 24px;
        font-weight: 600;
      }
      .email-body {
        padding: 30px 25px;
        text-align: center;
      }
      .email-body h2 {
        color: #111827;
        margin-bottom: 10px;
      }
      .email-body p {
        color: #4b5563;
        line-height: 1.6;
        font-size: 15px;
        margin: 8px 0;
      }
      .email-footer {
        background: #f3f4f6;
        text-align: center;
        padding: 15px;
        font-size: 13px;
        color: #6b7280;
      }
      .button {
        display: inline-block;
        margin-top: 20px;
        background: #3b82f6;
        color: #fff !important;
        padding: 10px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-weight: 500;
        transition: background 0.3s ease;
      }
      .button:hover {
        background: #2563eb;
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="email-header">
        <h2>Hey, ${form.fullName}</h2>
        <h1>Thank You for Reaching Out!</h1>
      </div>
      <div class="email-body">
        <h2>We’ve received your message 🌟</h2>
        <p>
          Hi there,<br />
          Thank you for contacting <strong>Arinova Studio</strong>. We truly appreciate you taking the time to reach out to us.
        </p>
        <p>
          Our team has received your message and will get back to you as soon as possible.
          Meanwhile, feel free to explore our latest work and insights on our website.
        </p>
        <a href="https://arinova.studio" class="button">Visit Our Website</a>
      </div>
      <div class="email-footer">
        © ${new Date().getFullYear()} Arinova Studio. All rights reserved.<br />
        Designed with ❤️ by Arinova Studio.
      </div>
    </div>
  </body>
</html>
`


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
`

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
      subject: type === "me" ? "Mail from Website" : "Arinova Studio - Thanks for reaching out",
      html: type === "me" ? myMail : userMail,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "OTP sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}