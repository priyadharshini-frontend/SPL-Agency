import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, business, message } = body;

    const data = await resend.emails.send({
      from: "Priya Agency <onboarding@resend.dev>",
      to: ["yourmail@gmail.com"], // 👈 your email here
      subject: "New Lead from Website 🚀",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Business:</b> ${business}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}