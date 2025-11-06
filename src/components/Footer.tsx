"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Zap } from "lucide-react";

const currentYear = new Date().getFullYear();

const socialLinks = [
  {
    icon: <Instagram size={24} />,
    href: "https://instagram.com/eliagrovet",
    label: "Instagram Eliagro",
  },
  {
    icon: <Facebook size={24} />,
    href: "https://facebook.com/eliagrovet",
    label: "Facebook Eliagro",
  },
  {
    icon: <Zap size={24} />,
    href: "https://wa.me/5534999474396",
    label: "WhatsApp Eliagro",
  },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0C3B2E] text-white py-12 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo + Description */}
        <div className="flex flex-col items-start space-y-4 font-poppins">
          <img
            src="http://eliagro.com.br/imgs/logodaeliagro.png"
            alt="Logo Eliagro Produtos Agropecuários"
            className="h-12 w-auto"
            loading="lazy"
          />
          <p className="text-sm max-w-xs leading-relaxed">
            Há mais de 35 anos oferecendo soluções completas no agro, com atendimento técnico especializado e produtos de qualidade para Patos de Minas e região.
          </p>
        </div>

        {/* Atendimento */}
        <div className="font-inter text-sm space-y-3">
          <h3 className="font-semibold text-[#16A34A] mb-2">Atendimento</h3>
          <address className="not-italic space-y-2">
            <p>Rua Dr. Marcolino, 255 – Centro – Patos de Minas – MG</p>
            <p>
              Telefone:{" "}
              <a
                href="tel:+5534999474396"
                className="underline hover:text-[#16A34A]"
                aria-label="Telefone Eliagro"
              >
                (34) 99947-4396
              </a>
            </p>
            <p>
              E-mail:{" "}
              <a
                href="mailto:telemarketing@eliagro.com.br"
                className="underline hover:text-[#16A34A]"
                aria-label="E-mail Eliagro"
              >
                telemarketing@eliagro.com.br
              </a>
            </p>
            <p>Segunda a sábado, 8h às 18h</p>
          </address>
        </div>

        {/* Redes Sociais */}
        <div className="font-inter text-sm">
          <h3 className="font-semibold text-[#16A34A] mb-4">Redes Sociais</h3>
          <div className="flex space-x-6">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-[#16A34A] transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-green-700 pt-6 text-center text-green-400 text-sm font-inter select-none">
        © {currentYear} Eliagro — Todos os direitos reservados.
      </div>
    </motion.footer>
  );
};

export default Footer;