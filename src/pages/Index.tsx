"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const productCategories = [
  "Medicamentos Veterinários",
  "Rações e Suplementos",
  "Produtos Pet Shop",
  "Sementes e Inoculantes",
  "Ferramentas e Lonas",
  "Selaria e Roupas Country",
];

const benefits = [
  "Atendimento técnico especializado",
  "Marcas líderes do mercado",
  "Atendimento próximo e consultivo",
  "Ofertas sazonais conforme o calendário agro",
  "Entregas rápidas em toda a região",
];

const testimonials = [
  {
    name: "João Silva",
    text: "A Eliagro sempre me atende com muita atenção e tem os melhores produtos para minha fazenda.",
  },
  {
    name: "Maria Oliveira",
    text: "Confio na Eliagro para tudo que preciso em insumos agrícolas e veterinários. Profissionalismo e qualidade.",
  },
  {
    name: "Carlos Pereira",
    text: "Equipe técnica excelente e atendimento próximo. Recomendo para todos os produtores da região.",
  },
];

const transition = { duration: 0.6, ease: "easeOut" };

const Index = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
        }}
        aria-label="Imagem hero da Eliagro com overlay e parallax"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="relative z-20 max-w-4xl text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold font-poppins leading-tight drop-shadow-lg">
            O Agro de Patos de Minas confia na Eliagro
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow-md max-w-3xl mx-auto">
            Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações, sementes e insumos agrícolas.
          </p>
          <a
            href="https://wa.me/5534999474396"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale com um especialista no WhatsApp"
            className="inline-block mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition-transform"
          >
            Fale com um especialista no WhatsApp
          </a>
        </div>
      </section>

      {/* Produtos Section */}
      <motion.section
        id="produtos"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        aria-label="Categorias de produtos"
      >
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#0C3B2E]">
          Tudo o que o produtor precisa em um só lugar
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {productCategories.map((title) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md p-6 cursor-default hover:shadow-lg transition-shadow"
              aria-label={title}
            >
              <h3 className="text-xl font-semibold text-[#16A34A]">{title}</h3>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Benefícios Section */}
      <motion.section
        id="beneficios"
        className="bg-[#0C3B2E] text-white py-16 px-6 md:px-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        aria-label="Benefícios"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 font-poppins">Um parceiro do produtor, não apenas uma loja</h2>
          <ul className="max-w-md mx-auto space-y-4 text-left font-inter text-lg">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-green-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Depoimentos Section */}
      <motion.section
        id="depoimentos"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition}
        aria-label="Depoimentos"
      >
        <h2 className="text-3xl font-bold text-center mb-12 font-poppins text-[#0C3B2E]">Quem conhece, confia.</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ name, text }) => (
            <blockquote
              key={name}
              className="border border-[#16A34A] rounded-lg p-6 shadow-sm text-[#0C3B2E] bg-white"
              aria-label={`Depoimento de ${name}`}
            >
              <p className="mb-4 italic">“{text}”</p>
              <footer className="font-semibold text-[#16A34A]">— {name}</footer>
            </blockquote>
          ))}
        </div>
      </motion.section>

      {/* Contato Section */}
      <section
        id="contato"
        className="bg-[#16A34A] text-white py-16 px-6 md:px-12"
        aria-label="Contato"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 font-poppins">Estamos prontos para atender você.</h2>
            <ul className="space-y-4 text-lg font-inter">
              <li className="flex items-center gap-3">
                <Phone size={24} aria-hidden="true" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-300"
                  aria-label="Mensagem Eliagro"
                >
                  (34) 99947-4396
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" />
                </svg>
                <a
                  href="mailto:telemarketing@eliagro.com.br"
                  className="underline hover:text-green-300"
                  aria-label="E-mail Eliagro"
                >
                  telemarketing@eliagro.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                </svg>
                Rua Dr. Marcolino, 255 – Centro – Patos de Minas – MG
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                </svg>
                Segunda a sábado, 8h às 18h
              </li>
            </ul>
          </div>
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Mapa do Google da Eliagro Produtos Agropecuários"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.927964964682!2d-46.51892768459206!3d-18.57992798736654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a7a0a3a7a7a7a7%3A0x7a7a7a7a7a7a7a7a!2sEliagro%20Produtos%20Agropecu%C3%A1rios!5e0!3m2!1spt-BR!2sbr!4v1695830400000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;