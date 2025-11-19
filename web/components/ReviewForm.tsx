"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ReviewPayload = {
  name: string;
  email: string;
  service?: string;
  rating: number;
  message: string;
  photos: Array<{ name: string; type: string; size: number; data: string }>;
};

const MAX_FILES = 3;
const MAX_SIZE_BYTES = 4 * 1024 * 1024; // 4MB per photo

async function encodeFiles(files: FileList | File[]): Promise<ReviewPayload["photos"]> {
  const selected = Array.from(files).slice(0, MAX_FILES);

  const encodings = await Promise.all(
    selected.map(
      (file) =>
        new Promise<{ name: string; type: string; size: number; data: string }>((resolve, reject) => {
          if (file.size > MAX_SIZE_BYTES) {
            reject(new Error(`${file.name} is larger than 4MB.`));
            return;
          }

          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result;
            if (typeof result !== "string") {
              reject(new Error("Could not read file"));
              return;
            }
            const base64 = result.split(",")[1] ?? "";
            resolve({ name: file.name, type: file.type, size: file.size, data: base64 });
          };
          reader.onerror = () => reject(new Error(`Failed to read ${file.name}`));
          reader.readAsDataURL(file);
        })
    )
  );

  return encodings;
}

export default function ReviewForm({ services }: { services: string[] }) {
  const [state, setState] = useState<{ status: Status; message: string }>({
    status: "idle",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const ratingValue = Number(formData.get("rating") ?? 5);

    const payload: ReviewPayload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim() || undefined,
      rating: Number.isFinite(ratingValue) ? Math.min(Math.max(ratingValue, 1), 5) : 5,
      message: String(formData.get("message") ?? "").trim(),
      photos: [],
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState({ status: "error", message: "Name, email, and your story are required." });
      return;
    }

    const files = formData.getAll("photos").filter((item): item is File => item instanceof File);

    try {
      setState({ status: "loading", message: "" });
      if (files.length) {
        payload.photos = await encodeFiles(files);
      }

      const res = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message ?? "Unable to submit review right now.");
      }

      setState({ status: "success", message: "Review submitted! We’ll publish within 24 hours." });
      form.reset();
    } catch (error) {
      setState({
        status: "error",
        message: error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-[var(--neutral-700)]">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 w-full rounded-xl border border-[var(--neutral-200)] px-3 py-2 text-sm"
            placeholder="Ariel M."
            required
          />
        </label>
        <label className="text-sm font-medium text-[var(--neutral-700)]">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-xl border border-[var(--neutral-200)] px-3 py-2 text-sm"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Service type
        <select
          name="service"
          className="mt-1 w-full rounded-xl border border-[var(--neutral-200)] px-3 py-2 text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Rating
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          defaultValue="5"
          className="mt-1 w-full rounded-xl border border-[var(--neutral-200)] px-3 py-2 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Your words
        <textarea
          name="message"
          className="mt-1 w-full rounded-xl border border-[var(--neutral-200)] px-3 py-2 text-sm"
          rows={4}
          placeholder="Tell future clients what stood out..."
          required
        />
      </label>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Add photos (optional, max 3 at 4MB each)
        <input type="file" name="photos" className="mt-1 w-full text-sm" accept="image/*" multiple />
      </label>
      <button
        type="submit"
        className="w-full rounded-2xl bg-[var(--brand-primary-700)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-primary-500)] disabled:opacity-60"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Submitting..." : "Submit review"}
      </button>
      {state.status === "success" && (
        <p className="text-sm font-medium text-[var(--support-success)]">{state.message}</p>
      )}
      {state.status === "error" && (
        <p className="text-sm font-medium text-[var(--support-warning)]">{state.message}</p>
      )}
      <p className="text-xs text-[var(--neutral-500)]">
        By submitting you agree we may share your first name, initial, and photos on the site/social.
      </p>
    </form>
  );
}
