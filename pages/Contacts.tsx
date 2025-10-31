"use client";

import React, { useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [transition, startTransition] = useTransition()
  const faqs = [
    "What are the list of services you have?",
    "Do you provide full project support?",
    "What are your pricing options?",
    "How long do projects usually take?",
    "Do you offer post-launch maintenance?",
  ];

  const faqAnswers = [
    "We offer a range of services including branding, UI/UX, web development, marketing and more.",
    "Yes, we provide complete design-to-development project support.",
    "We offer flexible pricing and packages depending on requirements.",
    "Timelines vary by scope — typical projects range from 2–12 weeks.",
    "Yes — maintenance and support contracts are available after launch.",
  ];

  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Regex
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
      setForm({ fullName: "", email: "", phone: "", message: "" });
    }
  }
    setErrors({});
  });

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="contact-info" className="bg-[#0b0b0b] text-white px-6 sm:px-10 md:px-16 lg:px-20 py-16 md:py-20 min-h-screen overflow-hidden">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* LEFT FAQ */}
        <motion.div
          className="pr-0 md:pr-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h1
            className="font-unbounded font-medium text-4xl sm:text-5xl md:text-6xl text-gray-300 mt-2 sm:mt-4"
            variants={fadeUp as any}
          >
            <span className="text-neutral-500">Frequently </span>
            <span className="text-white font-extrabold">Asked</span>
            <br />
            <span className="text-neutral-500">
              Question<span className="text-white">.</span>
            </span>
          </motion.h1>

          <div className="mt-10 md:mt-12 space-y-8">
            {faqs.map((q, i) => (
              <motion.div
                key={i}
                className="relative"
                custom={i}
                variants={fadeUp as any}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between group cursor-pointer mt-14"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="text-neutral-400 text-xl sm:text-2xl font-semibold">
                      {i + 1}.
                    </div>
                    <div className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-300 text-left leading-snug">
                      {q}
                    </div>
                  </div>

                  <motion.div
                    className="ml-4 flex items-center"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-9 h-9 rounded-full bg-[#fdeff0] flex items-center justify-center shadow-sm">
                      <ChevronDown
                        size={24}
                        className="text-[#2b2b2b]"
                      />
                    </div>
                  </motion.div>
                </button>

                <motion.div
                  className="mt-4 border-b-2 border-white/50 opacity-60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: openIndex === i ? 0 : 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden text-white text-base sm:text-lg mt-4"
                    >
                      <p className="font-dm">{faqAnswers[i]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="pl-0 md:pl-6 flex flex-col justify-start items-center md:items-end mt-8 md:mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-medium font-unbounded text-center md:text-right mb-8"
            variants={fadeUp as any}
          >
            <span className="text-neutral-500">Let’s </span>
            <span className="text-primary">chat,</span>
            <br />
            <span className="text-neutral-500">Get </span>
            <span className="text-primary">in </span>
            <span className="text-neutral-500">touch</span>
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5 w-full sm:w-5/6 md:w-4/5"
            variants={fadeUp as any}
            custom={1}
          >
            {["fullName", "email", "phone", "message"].map((field, i) => (
              <motion.div key={field} custom={i + 2} variants={fadeUp as any}>
                {field !== "message" ? (
                  <input
                    className="w-full bg-[#2e2e2e] placeholder-gray-400 text-gray-200 px-5 py-4 rounded-none outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={
                      field === "fullName"
                        ? "Full Name"
                        : field === "email"
                        ? "Email Address"
                        : "Phone No."
                    }
                    value={(form as any)[field]}
                    onChange={(e) =>
                      setForm({ ...form, [field]: e.target.value })
                    }
                  />
                ) : (
                  <textarea
                    className="w-full h-48 sm:h-56 bg-[#2e2e2e] placeholder-gray-400 text-gray-200 px-5 py-4 resize-none outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                )}
                {errors[field as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[field as keyof FormData]}
                  </p>
                )}
              </motion.div>
            ))}

            <motion.div custom={6} variants={fadeUp as any}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`w-full bg-white text-black font-semibold py-4 text-lg tracking-wide ${transition ? "opacity-55" : "opacity-100"}`}
              >
                {transition ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
