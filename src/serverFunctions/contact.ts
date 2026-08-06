import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): ContactPayload => {
    const d = data as Record<string, unknown>;
    if (typeof d.name !== "string" || !d.name.trim()) throw new Error("Name is required");
    if (typeof d.email !== "string" || !d.email.includes("@"))
      throw new Error("Valid email is required");
    if (typeof d.message !== "string" || !d.message.trim()) throw new Error("Message is required");
    return { name: d.name.trim(), email: d.email.trim(), message: d.message.trim() };
  })
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = data;

    const { error } = await resend.emails.send({
      from: "SharperOps Contact <contact@sharperops.com>",
      to: "christian@sharperops.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[sendContactEmail] Resend error:", error);
      throw new Error(error.message);
    }
    return { ok: true };
  });
