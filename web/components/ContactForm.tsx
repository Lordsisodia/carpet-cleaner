"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  window?: string;
  details: string;
};

const initialState = { status: "idle" as Status, message: "" };

export default function ContactForm() {
  const [state, setState] = useState(initialState);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: ContactPayload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim() || undefined,
      window: String(formData.get("window") ?? "").trim() || undefined,
      details: String(formData.get("details") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.details) {
      setState({ status: "error", message: "Name, email, and project details are required." });
      return;
    }

    setState({ status: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message ?? "Unable to send details right now.");
      }

      setState({ status: "success", message: "Thanks! Expect a reply within 15 minutes." });
      form.reset();
    } catch (error) {
      setState({ status: "error", message: error instanceof Error ? error.message : "Something went wrong." });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-[var(--neutral-700)]">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
            placeholder="Jordan" 
            required
          />
        </label>
        <label className="text-sm font-medium text-[var(--neutral-700)]">
          Email
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Phone (optional)
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
          placeholder="(512) 555-0198"
        />
      </label>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        Preferred visit window
        <input
          type="text"
          name="window"
          placeholder="Example: Thursday after 3p"
          className="mt-1 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
        />
      </label>
      <label className="text-sm font-medium text-[var(--neutral-700)]">
        How can we help?
        <textarea
          name="details"
          className="mt-1 w-full rounded-2xl border border-[var(--neutral-200)] px-4 py-3 text-sm"
          rows={4}
          placeholder="Rooms, stains, pets, deadlines..."
          required
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-2xl bg-[var(--brand-primary-700)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-primary-500)] disabled:opacity-60"
        disabled={state.status === "loading"}
      >
        {state.status === "loading" ? "Sending..." : "Send details"}
      </button>
      {state.status === "success" && (
        <p className="text-sm font-medium text-[var(--support-success)]">{state.message}</p>
      )}
      {state.status === "error" && (
        <p className="text-sm font-medium text-[var(--support-warning)]">{state.message}</p>
      )}
      <p className="text-xs text-[var(--neutral-500)]">
        You’ll get a text + email confirmation with prep checklist and quote estimate.
      </p>
    </form>
  );
}
