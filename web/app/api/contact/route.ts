import { NextResponse } from "next/server";

const CONTACT_WEBHOOK_URL = process.env.CONTACT_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, window: preferredWindow, details } = body ?? {};

    if (!name || !email || !details) {
      return NextResponse.json(
        { message: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      phone,
      preferredWindow,
      details,
      submittedAt: new Date().toISOString(),
      source: "landing-contact",
    };

    if (CONTACT_WEBHOOK_URL) {
      await fetch(CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      console.info("[contact] lead received", payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] error", error);
    return NextResponse.json(
      { message: "Unable to send details. Please call or text us." },
      { status: 500 }
    );
  }
}
