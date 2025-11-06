"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const whatsappLink = "https://wa.me/5534999474396";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" aria-label="Eliagro Produtos Agropecuários" className="flex items-center">
          <img
            src="http://eliagro.com.br/imgs/logodaeliagro.png"
            alt="Logo Eliagro Produtos Agropecuários"
            className="h-12 w-auto"
            loading="lazy"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins font-semibold text-[#0C3B2E] text-lg">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#16A34A] transition-colors py-2"
              aria-label={`Navegar para ${label}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button Desktop */}
        <div className="hidden md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform font-semibold flex items-center gap-2 text-base"
          >
            <Phone size={20} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-[#0C3B2E]"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-inner overflow-hidden"
          >
            <ul className="flex flex-col space-y-2 px-6 py-6 font-poppins font-semibold text-[#0C3B2E]">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block hover:text-[#16A34A] transition-colors text-xl py-3"
                    aria-label={`Navegar para ${label}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fale conosco pelo WhatsApp"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform font-semibold text-lg"
                >
                  <Phone size={20} />
                  WhatsApp
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;