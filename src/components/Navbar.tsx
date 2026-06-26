"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
        <span className="font-bold text-sm">LO.</span>

        <div className="hidden md:flex gap-6 text-xs text-white/60">
          <a href="#services" className="hover:text-white">
            Serviços
          </a>
          <a href="#projects" className="hover:text-white">
            Projetos
          </a>
          <a href="#about" className="hover:text-white">
            Sobre
          </a>
          <a href="#contact" className="hover:text-white">
            Contato
          </a>
        </div>

        <a
          href="#contact"
          className="text-xs px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 transition"
        >
          Solicitar orçamento
        </a>
      </div>
    </motion.nav>
  );
}