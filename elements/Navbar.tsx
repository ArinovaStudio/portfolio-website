"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarOptions from "./NavbarOptions";

function Navbar() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 w-full px-6 sm:px-10 md:px-12 z-[999] flex justify-between items-center py-4 bg-transparent">
      {/* Logo */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-stretch tracking-tight text-white">
        LOOGO
      </h1>

      {/* Hamburger */}
      <div
        onClick={() => setVisible(!visible)}
        className="w-10 sm:w-12 md:w-14 h-8 sm:h-10 flex flex-col justify-center items-center gap-2 cursor-pointer group"
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
