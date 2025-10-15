"use client";

import React from "react";
import Link from "next/link";
import {FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/assets/arinova.jpg"

export default function Footer() {
  const links = [
    { title: "Home", link: "/" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Case Studies", link: "/case-studies" },
    { title: "Design gallery", link: "/#design-gallery" },
  ];

  const connect = [
    { title: "Request a call", link: "tel:+916296900966" },
    { title: "support@arinova.studio", link: "mailto:support@arinova.studio" },
    { title: "career@arinova.studio", link: "mailto:career@arinova.studio" },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const linkItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const revealTitle = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <footer className="bg-[#0F0F0F] text-gray-300 px-6 md:px-20 py-12 md:py-16 overflow-hidden">
      <div className="flex items-center gap-4">
        <motion.div
          className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-white/90 to-neutral-200 rounded-full flex-shrink-0 shadow-lg"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 8, -6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          aria-hidden
        >
          <Image 
          src={logo.src}
          alt="logo"
          width={logo.width}
          height={logo.height}
          className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.05em] text-white font-unbounded leading-tight">
            ARINOVA
            <motion.p
              className="text-sm md:text-lg text-gray-400 -mt-1 font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              STUDIO
            </motion.p>
          </h2>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            <motion.nav
              className="flex flex-col space-y-3 mt-1"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {links.map((item) => (
                <motion.div
                  key={item.title}
                  variants={linkItem as any}
                  className="overflow-hidden"
                >
                  <Link
                    href={item.link}
                    className="block text-2xl md:text-2xl font-light text-neutral-400 hover:text-white transition-transform transform-gpu will-change-transform"
                  >
                    <motion.span
                      whileHover={{ x: 8, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 220 }}
                    >
                      {item.title}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="flex flex-col space-y-3 mt-1"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {connect.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="block text-xl md:text-lg font-light text-neutral-400 hover:text-white transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </motion.div>
          </div>

          <div className="text-left md:pr-12">
            <motion.p
              className="uppercase text-gray-400 text-base md:text-lg mb-2"
              variants={revealTitle as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              GOT A PROJECT IN MIND?
            </motion.p>

            <motion.h2
              className="text-5xl md:text-[72px] lg:text-8xl font-unbounded font-medium text-white leading-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.4, ease: "circOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.span
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Let’s
              </motion.span>{" "}
              <motion.span
                className="block md:inline"
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Talk
              </motion.span>
            </motion.h2>
          </div>
        </div>

        {/* Original SVG line with animation */}
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: false}}
        transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
        className="my-10 mb-6 opacity-50">
          {" "}
          <svg
            width="1680"
            height="3"
            viewBox="0 0 1680 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <line
              x1="1"
              y1="1.55347"
              x2="1679"
              y2="1.55347"
              stroke="#ADADAD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="24 24"
            />{" "}
          </svg>{" "}
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-400 px-2 md:px-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
            <Link
              href="/cookie-policy"
              className="hover:text-white transition font-unbounded text-lg font-light"
            >
              Cookie Policy
            </Link>
            <Link
              href="/legal-terms"
              className="hover:text-white transition font-unbounded text-lg font-light"
            >
              Legal Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition font-unbounded text-lg font-light"
            >
              Privacy & Policy
            </Link>
          </div>

          <motion.div
            className="flex gap-6 justify-center md:justify-end text-neutral-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: false }}
          >
            {[
              { Icon: FaFacebookF, url: "https://www.facebook.com/share/1BR3tmRpMs", label: "Facebook" },
              { Icon: FaXTwitter, url: "https://x.com/arinovaStudio", label: "X / Twitter" },
              { Icon: FaInstagram, url: "https://instagram.com/arinova.studio", label: "Instagram" },
              { Icon: FaLinkedinIn, url: "https://linkedin.com/company/arinova-studio", label: "LinkedIn" },
            ].map(({ Icon, label, url }) => (
              <Link
                key={label}
                href={url}
                className="p-1 rounded-md"
                aria-label={label}
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                >
                  <Icon size={26} />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="text-center font-unbounded my-6 mb-0 font-light text-neutral-500 text-sm">
          © All Copyright are reserved by Arinova Studio
        </div>
      </div>
    </footer>
  );
}
