"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarOptions from "./NavbarOptions";
import Image from "next/image";
import logo from "@/public/assets/arinova.jpg"
import Link from "next/link";

function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 w-[98%] sm:w-full px-6 sm:px-10 md:px-12 z-[999] flex justify-between items-center py-4 bg-transparent">
      {/* Logo */}
      <Link href={"/"} className="w-14 h-14">
      <Image
      src={logo.src}
      alt="logo"
      width={logo.width}
    height={logo.height}
    className="w-full h-full object-cover rounded-full"
      />
      </Link>
      {/* Hamburger */}

      <div
        onClick={() => setVisible(!visible)}
        className={`w-10 sm:w-12 md:w-14 h-8 sm:h-10 flex flex-col justify-center items-center gap-2 cursor-pointer group transition duration-75 ${visible ? "opacity-0" : "opacity-100"}`}
      >
        <div
          className="w-full h-0.5 bg-white rounded-full transition-all duration-500"
        />
        <div
          className="w-full h-0.5 bg-white rounded-full transition-all duration-500 "
        />
      </div>

      {/* Animated Overlay Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <NavbarOptions close={setVisible} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
