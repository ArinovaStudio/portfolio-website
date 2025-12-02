"use client";

import { startTransition, useState } from "react";

type ContactOverlayProps = {
  open: boolean;
  onClose: () => void;
};
type FormData = {
  fullName: string;
  email: string;
  phone: string;
  project: string;
  message: string;
};


export function ContactOverlay({ open, onClose }: ContactOverlayProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [form, setForm] = useState<FormData>({
      fullName: "",
      email: "",
      phone: "",
      project: "",
      message: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
      {}
    );

    const emailRegex =
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
  
    const validate = (): boolean => {
      const next: Partial<Record<keyof FormData, string>> = {};
      if (!form.fullName.trim() || form.fullName.trim().length < 2)
        next.fullName = "Full name must be at least 2 characters";
      if (!emailRegex.test(form.email.trim())) next.email = "Enter a valid email";
      if (!phoneRegex.test(form.phone.trim()))
        next.phone = "Enter a valid 10-digit phone number";
      if (!form.message.trim() || form.message.trim().length < 10)
        next.message = "Message must be at least 10 characters";
      setErrors(next);
      return Object.keys(next).length === 0;
    };
  
    
    const handleSubmit = (e: React.FormEvent) => startTransition(async () => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    if (!validate()) return;
      
      const me = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({form, type: "me"})
      })
      if (me.status === 200) {
            const user = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({form, type: "user"})
      })
      if (user.status === 200) {
      setStatus("success");
        setForm({ fullName: "", email: "", phone: "", message: "", project: "" });
      }
    }
      setErrors({});
    });

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 w-screen h-screen
        bg-black/70 backdrop-blur-sm
        flex items-center justify-center
      "
    >
      {/* Click outside to close */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* PANEL */}
      <div
        className="
          relative z-10
          w-5/6 h-3/5
          max-w-3xl min-h-[320px]
          bg-[#101010]
          border border-neutral-800
          text-neutral-50
          rounded-none
          flex flex-col
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-medium tracking-tight">
              Start a project
            </h2>
            <p className="text-[11px] sm:text-xs text-neutral-500 uppercase tracking-[0.2em]">
              Tell us what you&apos;re building
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              text-xs text-neutral-400
              uppercase tracking-[0.22em]
              hover:text-neutral-200
            "
          >
            Close
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 px-6 py-5 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                Name
              </label>
              <input
                    value={form.fullName}
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                name="name"
                required
                className="
                  bg-black
                  border border-neutral-700
                  text-sm
                  px-3 py-2
                  rounded-none
                  outline-none
                  focus:border-neutral-200
                "
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                Email
              </label>
              <input
                name="email"
                type="email"
                                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                required
                className="
                  bg-black
                  border border-neutral-700
                  text-sm
                  px-3 py-2
                  rounded-none
                  outline-none
                  focus:border-neutral-200
                "
                placeholder="you@example.com"
              />
            </div>
          </div>

                <div className="flex flex-col gap-1.5">
              <label className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                Phone
              </label>
              <input
                name="phone"
                type="number"
                                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                required
                className="
                  bg-black
                  border border-neutral-700
                  text-sm
                  px-3 py-2
                  rounded-none
                  outline-none
                  focus:border-neutral-200
                  w-full
                "
                placeholder="+91 9086XXXX12"
              />
            </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Project
            </label>
            <input
              name="project"
                                  value={form.project}
                    onChange={(e) =>
                      setForm({ ...form, project: e.target.value })
                    }
              className="
                bg-black
                border border-neutral-700
                text-sm
                px-3 py-2
                rounded-none
                outline-none
                focus:border-neutral-200
              "
              placeholder="Website, product, campaign…"
            />
          </div>

          <div className="flex-1 flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
              Message
            </label>
            <textarea
              name="message"
              required
                                  value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
              className="
                bg-black
                border border-neutral-700
                text-sm
                px-3 py-2
                rounded-none
                outline-none
                focus:border-neutral-200
                resize-none
                h-24
              "
              placeholder="Share a bit about timelines, goals, or links to references."
            />
          </div>

          {/* FOOTER */}
          <div className="mt-2 flex items-center justify-between gap-4">
            <div className="text-[11px] text-neutral-500">
              {status === "success" && (
                <span className="text-emerald-400">
                  Message sent. We&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  Something went wrong. Please try again.
                </span>
              )}
            </div>

            <div className="flex gap-3">
              {/* Secondary: Cancel */}
              <button
                type="button"
                onClick={onClose}
                className="
                  px-4 py-2
                  text-[11px] uppercase tracking-[0.24em]
                  border border-neutral-700
                  rounded-none
                  text-neutral-300
                  hover:bg-neutral-900
                "
              >
                Cancel
              </button>

              {/* Primary: Send */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  px-5 py-2
                  text-[11px] uppercase tracking-[0.24em]
                  bg-neutral-50 text-black
                  rounded-none
                  hover:bg-neutral-200
                  disabled:opacity-40
                "
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
