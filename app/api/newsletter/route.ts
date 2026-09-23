import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

const PROVIDER = (process.env.NEWSLETTER_PROVIDER ?? "").toLowerCase();

function isConfigured() {
  switch (PROVIDER) {
    case "resend":
      return Boolean(process.env.RESEND_API_KEY && process.env.NEWSLETTER_AUDIENCE_ID);
    case "brevo":
      return Boolean(process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID);
    case "mailchimp":
      return Boolean(process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_LIST_ID);
    default:
      return false;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!PROVIDER || !isConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error: "Mailing list subscription is not enabled yet. Please try again later.",
      },
      { status: 501 }
    );
  }

  try {
    if (PROVIDER === "resend") {
      const res = await fetch(
        `https://api.resend.com/audiences/${process.env.NEWSLETTER_AUDIENCE_ID}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
          signal: AbortSignal.timeout(10000),
        }
      );
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Resend contact error", res.status, detail);
        return NextResponse.json(
          { ok: false, error: "We could not subscribe you right now." },
          { status: 502 }
        );
      }
    } else if (PROVIDER === "brevo") {
      const res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [Number(process.env.BREVO_LIST_ID)],
          updateEnabled: true,
        }),
        signal: AbortSignal.timeout(10000),
      });
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Brevo contact error", res.status, detail);
        return NextResponse.json(
          { ok: false, error: "We could not subscribe you right now." },
          { status: 502 }
        );
      }
    } else if (PROVIDER === "mailchimp") {
      const dc = process.env.MAILCHIMP_API_KEY?.split("-").pop();
      if (!dc) {
        return NextResponse.json(
          { ok: false, error: "Mailing list is not configured correctly." },
          { status: 500 }
        );
      }
      const hash = createHash("md5").update(email).digest("hex");
      const res = await fetch(
        `https://${dc}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members/${hash}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email_address: email, status: "subscribed" }),
          signal: AbortSignal.timeout(10000),
        }
      );
      if (!res.ok) {
        const detail = await res.text().catch(() => "");
        console.error("Mailchimp contact error", res.status, detail);
        return NextResponse.json(
          { ok: false, error: "We could not subscribe you right now." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter subscribe failed", err);
    return NextResponse.json(
      { ok: false, error: "We could not subscribe you right now." },
      { status: 500 }
    );
  }
}