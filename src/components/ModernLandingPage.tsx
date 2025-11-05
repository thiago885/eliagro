"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Package,
  Droplet,
  PawPrint,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Zap,
} from "lucide-react";

const productCards = [
  {
    icon: <Leaf className="text-emerald-400" size={48} />,
    title: "Sementes e Inoculantes",
    description: "Qualidade para sua lavoura prosperar.",
  },
  {
    icon: <Package className="text-emerald-400" size={48} />,
    title: "Selaria e Roupas Country",
    description: "Produtos resistentes e estilosos para o campo.",
  },
  {
    icon: <Droplet className="text-emerald-400" size={48} />,
    title: "Produtos Veterinários",
    description: "Cuidado e saúde para seu rebanho.",
  },
  {
    icon: <PawPrint className="text-emerald-400" size={48} />,
    title: "Produtos Pet Shop",
    description: "Tudo para o bem-estar dos seus pets.",
  },
  {
    icon: <Leaf className="text-emerald-400" size={48} />,
    title: "Rações e Suplementos",
    description: "Nutrição balanceada para animais saudáveis.",
  },
  {
    icon: <Package className="text-emerald-400" size={48} />,
    title: "Ferramentas e Lonas",
    description: "Equipamentos duráveis para o dia a dia.",
  },
];

const benefits = [
  {
    icon: <Leaf size={28} className="text-emerald-400" />,
    text: "Atendimento técnico especializado",
  },
  {
    icon: <Package size={28} className="text-emerald-400" />,
    text: "Marcas líderes do mercado",
  },
  {
    icon: <Droplet size={28} className="text-emerald-400" />,
    text: "Atendimento próximo e consultivo",
  },
  {
    icon: <PawPrint size={28} className="text-emerald-400" />,
    text: "Ofertas sazonais conforme o calendário agro",
  },
  {
    icon: <Leaf size={28} className="text-emerald-400" />,
    text: "Entregas rápidas em toda a região",
  },
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
    icon: <Twitter size={24} />,
    href: "https://twitter.com/eliagrovet",
    label: "Twitter Eliagro",
  },
  {
    icon: <Zap size={24} />,
    href: "https://wa.me/5534999474396",
    label: "WhatsApp Eliagro",
  },
];

const transition = { duration: 0.7, ease: "easeOut" };

const ModernLandingPage = () => {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-offwhite text-gray-900">
      {/* Hero Section */}
      <header className="relative h-[90vh] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-hidden="true"
        />
        <motion.img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
          alt="Campo rural ao amanhecer"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          aria-hidden="true"
        />
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins text-white leading-tight max-w-3xl">
            O Agro de Patos de Minas confia na{" "}
            <span className="text-emerald-400">Eliagro</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-xl font-inter">
            Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações, sementes e insumos agrícolas.
          </p>
          <motion.a
            href="https://wa.me/5534999474396"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale com um especialista no WhatsApp"
            className="mt-8 inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-full px-8 py-3 shadow-lg cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Fale com um especialista no WhatsApp
          </motion.a>
        </motion.div>
      </header>

      {/* Product Cards */}
      <section
        aria-label="Categorias de produtos"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 font-outfit text-petroleum-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          Tudo o que o produtor precisa em um só lugar
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {productCards.map(({ icon, title, description }, i) => (
            <motion.article
              key={title}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-default"
              whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              tabIndex={0}
              aria-label={title}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2 font-poppins">{title}</h3>
              <p className="text-gray-700 font-inter">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section
        aria-label="Benefícios"
        className="bg-petroleum-900 text-white py-16 px-6 md:px-12"
      >
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl font-bold mb-10 font-poppins"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Um parceiro do produtor, não apenas uma loja
          </motion.h2>
          <ul className="max-w-md mx-auto space-y-6 text-left">
            {benefits.map(({ icon, text }) => (
              <motion.li
                key={text}
                className="flex items-center gap-4 text-lg font-inter"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.div
                  className="flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  {icon}
                </motion.div>
                <span className="text-emerald-400 font-semibold">{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section
        aria-label="Depoimentos"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
      >
        <motion.h2
          className="text-3xl font-bold text-center mb-12 font-outfit text-petroleum-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          Quem conhece, confia.
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map(({ name, text }, i) => (
            <motion.blockquote
              key={name}
              className="bg-white rounded-lg shadow-lg p-8 text-gray-900 absolute inset-0"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: i === testimonialIndex ? 1 : 0,
                y: i === testimonialIndex ? 0 : 40,
                pointerEvents: i === testimonialIndex ? "auto" : "none",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              aria-live={i === testimonialIndex ? "polite" : "off"}
            >
              <p className="text-lg italic mb-6 relative before:absolute before:-left-6 before:top-0 before:text-6xl before:text-emerald-400 before:content-['“']">
                {text}
              </p>
              <footer className="font-semibold text-emerald-600 text-right font-poppins">— {name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-petroleum-900 text-gray-200 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <address className="not-italic flex flex-col md:flex-row items-center gap-6 font-inter text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-emerald-400" aria-hidden="true" />
              Rua Dr. Marcolino, 255 – Centro – Patos de Minas – MG
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-emerald-400" aria-hidden="true" />
              <a
                href="tel:+5534999474396"
                className="hover:text-emerald-400 transition-colors"
                aria-label="Telefone Eliagro"
              >
                (34) 99947-4396
              </a>
            </div>
          </address>
          <div className="flex gap-6">
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-200 hover:text-emerald-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="mt-8 max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg h-48 md:h-64">
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
      </footer>
    </div>
  );
};

export default ModernLandingPage;