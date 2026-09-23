import { NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "AAYWA Website <onboarding@resend.dev>";
const CONFIGURED = Boolean(RESEND_KEY && TO_EMAIL);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in every field." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Your message is a little short." },
      { status: 400 }
    );
  }

  if (!CONFIGURED) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error: "Message receiving is not enabled yet. Please contact AAYWA directly.",
      },
      { status: 501 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[AAYWA website] ${subject} — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "The message could not be sent right now." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact send failed", err);
    return NextResponse.json(
      { ok: false, error: "The message could not be sent right now." },
      { status: 500 }
    );
  }
}