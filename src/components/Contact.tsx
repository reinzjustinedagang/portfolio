import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2Icon, MailIcon, MapPinIcon, SendIcon } from "lucide-react";
import { profile } from "../data/profile";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof typeof form) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      if (status === "error") setStatus("idle");
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const fieldClass =
    "rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors duration-150 ease-smooth placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-medium text-primary">
              Contact
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Let's build something together
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              I'm open to freelance projects, full-time opportunities, and
              collaborations. Send me a message and I'll get back to you soon.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MailIcon
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm transition-colors duration-150 ease-smooth hover:text-foreground"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPinIcon
                  size={18}
                  className="text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm">{profile.location}</span>
              </li>
            </ul>
          </div>

          <form
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5">
              <div className="grid gap-2">
                <label
                  htmlFor="name"
                  className="font-display text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="font-display text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="message"
                  className="font-display text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                  className={fieldClass}
                />
              </div>

              <div aria-live="polite" className="min-h-[1.25rem]">
                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Please fill in your name, email, and message.
                  </p>
                )}
                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle2Icon size={16} aria-hidden="true" />
                    Thanks — your message is on its way. I'll reply within a
                    day.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-150 ease-smooth hover:opacity-90 disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <SendIcon size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
