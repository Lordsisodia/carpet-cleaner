import { NextResponse } from "next/server";

const REVIEW_WEBHOOK_URL = process.env.REVIEW_WEBHOOK_URL;
const MAX_PHOTOS = 3;
const MAX_BASE64_LENGTH = 6_000_000; // ~4.5MB

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, rating, message, photos = [] } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and your story are required." },
        { status: 400 }
      );
    }

    if (Array.isArray(photos) && photos.length > MAX_PHOTOS) {
      return NextResponse.json(
        { message: `Please limit photo uploads to ${MAX_PHOTOS}.` },
        { status: 400 }
      );
    }

    const sanitizedPhotos = Array.isArray(photos)
      ? photos.map((photo) => ({
          name: photo?.name,
          type: photo?.type,
          size: Number(photo?.size),
          data:
            typeof photo?.data === "string" && photo.data.length <= MAX_BASE64_LENGTH
              ? photo.data
              : undefined,
        }))
      : [];

    const payload = {
      name,
      email,
      service,
      rating: Number(rating) || 5,
      message,
      photos: sanitizedPhotos,
      submittedAt: new Date().toISOString(),
      source: "landing-review",
    };

    if (REVIEW_WEBHOOK_URL) {
      await fetch(REVIEW_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } else {
      console.info("[review] submission received", {
        ...payload,
        photos: sanitizedPhotos.map((photo) => ({
          name: photo.name,
          type: photo.type,
          size: photo.size,
          hasData: Boolean(photo.data),
        })),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[review] error", error);
    return NextResponse.json(
      { message: "Unable to submit your review. Please try again shortly." },
      { status: 500 }
    );
  }
}
