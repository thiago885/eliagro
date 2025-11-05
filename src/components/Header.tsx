"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const whatsappNumber = "5534999474396";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "#produtos" },
  { label: "Promoções", href: "#promocoes" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" aria-label="Eliagro Produtos Agropecuários" className="flex items-center">
          <img
            src="http://eliagro.com.br/imgs/logodaeliagro.png"
            alt="Logo Eliagro Produtos Agropecuários"
            className="h-16 w-auto"
            loading="lazy"
          />
        </a>

        {/* Menu */}
        <nav className="hidden md:flex space-x-8 font-semibold text-[#004C72]">
          {menuItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#009F47] transition-colors"
              aria-label={`Navegar para ${label}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <div className="flex items-center">
          <Button
            asChild
            className="bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
              <MessageSquare size={20} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;