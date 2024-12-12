"use server";
import { Resend } from "resend";

// EMAIL SENDGING FUCTIONALITY
// ADD RESEND_API_KEY IN YOUR .ENV FILE
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return "Invalid message";
  }
  const res = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `quachminhnhat1711@gmail.com`,
    subject: `${name} From Contact Form.`,
    replyTo: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });
  
  return res.error ? "Email not sent" : "Email sent successfully";
};
