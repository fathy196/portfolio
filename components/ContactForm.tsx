"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} action={site.formspree} method="post">
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" required />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status === "sent" && "Thanks! Your message has been sent."}
        {status === "error" && `Something went wrong — please email me at ${site.email}.`}
      </p>
    </form>
  );
}
