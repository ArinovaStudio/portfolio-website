import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";




export async function POST(req: NextRequest) {
  try {
    const { form, type } = await req.json();

    if (!form.email && !form.fullName) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    console.log(form, type);
    
    

    const userMail = ``
    const myMail = ``

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
      from: process.env.EMAIL_USER,
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