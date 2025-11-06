"use client";

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronRight, Star, Pill, Wheat, PawPrint, Sprout, Wrench, Shirt, CheckCircle2, Instagram, Facebook, MessageCircle, Menu, X } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import HeroSection from "../components/HeroSection";

const whatsappLink = "https://wa.me/5534999474396";

const productCategories = [
  {
    title: "Medicamentos Veterinários",
    description: "Linha completa para saúde animal",
    icon: Pill,
  },
  {
    title: "Rações e Suplementos",
    description: "Nutrição balanceada e de qualidade",
    icon: Wheat,
  },
  {
    title: "Produtos Pet Shop",
    description: "Cuidado completo para pets",
    icon: PawPrint,
  },
  {
    title: "Sementes e Inoculantes",
    description: "Genética superior para sua lavoura",
    icon: Sprout,
  },
  {
    title: "Ferramentas e Lonas",
    description: "Equipamentos duráveis e resistentes",
    icon: Wrench,
  },
  {
    title: "Selaria e Roupas Country",
    description: "Tradição e estilo do campo",
    icon: Shirt,
  },
];

const benefits = [
  "Atendimento técnico especializado",
  "Marcas líderes do mercado",
  "Consultoria personalizada",
  "Ofertas sazonais exclusivas",
  "Entregas rápidas na região",
  "Sustentabilidade e qualidade garantida",
];

const testimonials = [
  {
    name: "João Silva",
    role: "Produtor Rural",
    text: "A Eliagro sempre me atende com muita atenção e tem os melhores produtos para minha fazenda.",
    rating: 5,
  },
  {
    name: "Maria Oliveira",
    role: "Veterinária",
    text: "Confio na Eliagro para tudo que preciso em insumos agrícolas e veterinários. Profissionalismo e qualidade.",
    rating: 5,
  },
  {
    name: "Carlos Pereira",
    role: "Técnico Agrícola",
    text: "Equipe técnica excelente e atendimento próximo. Recomendo para todos os produtores da região.",
    rating: 5,
  },
];

const stats = [
  { value: 35, suffix: "+", label: "Anos de Tradição" },
  { value: 5000, suffix: "+", label: "Produtores Atendidos" },
  { value: 5000, suffix: "+", label: "Produtos Disponíveis" },
  { value: 100, suffix: "%", label: "Compromisso com Qualidade" },
];

const socialLinks = [
  {
    name: "instagram",
    icon: Instagram,
    href: "https://instagram.com/eliagrovet",
    label: "Instagram Eliagro",
  },
  {
    name: "facebook",
    icon: Facebook,
    href: "https://facebook.com/eliagrovet",
    label: "Facebook Eliagro",
  },
  {
    name: "whatsapp",
    icon: MessageCircle,
    href: whatsappLink,
    label: "WhatsApp Eliagro",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Eliagro Produtos Agropecuários",
  "image": "http://eliagro.com.br/imgs/logodaeliagro.png",
  "url": "https://eliagro.com.br",
  "telephone": "+5534999474396",
  "email": "telemarketing@eliagro.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Dr. Marcolino, 255",
    "addressLocality": "Patos de Minas",
    "addressRegion": "MG",
    "postalCode": "38700-002",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -18.579928,
    "longitude": -46.518927
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "150"
  }
};

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [productsRef, productsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags Básicas */}
        <title>Eliagro Produtos Agropecuários – Patos de Minas – MG</title>
        <meta name="description" content="Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações, sementes e insumos agrícolas em Patos de Minas – MG. Atendimento técnico especializado e marcas líderes do mercado." />
        <meta name="keywords" content="Eliagro, agropecuária, Patos de Minas, produtos veterinários, rações, sementes, inoculantes, insumos agrícolas, loja agro, pet shop, selaria, ferramentas agrícolas, MG" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Eliagro Produtos Agropecuários" />
        <link rel="canonical" href="https://eliagro.com.br/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eliagro.com.br/" />
        <meta property="og:title" content="Eliagro Produtos Agropecuários – Patos de Minas – MG" />
        <meta property="og:description" content="Tradição, técnica e confiança no atendimento agropecuário. Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações, sementes e insumos agrícolas." />
        <meta property="og:image" content="http://eliagro.com.br/imgs/banner_site_eliagro.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Eliagro Produtos Agropecuários" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eliagro Produtos Agropecuários – Patos de Minas – MG" />
        <meta name="twitter:description" content="Soluções completas em produtos veterinários, rações, sementes e insumos agrícolas. Atendimento técnico especializado há mais de 35 anos." />
        <meta name="twitter:image" content="http://eliagro.com.br/imgs/banner_site_eliagro.jpg" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
            <a href="#" aria-label="Eliagro Produtos Agropecuários">
              <img
                src="http://eliagro.com.br/imgs/logodaeliagro.png"
                alt="Logo Eliagro Produtos Agropecuários"
                className="h-16 md:h-20 w-auto"
                loading="eager"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 font-medium text-[#0C3B2E]" aria-label="Navegação principal">
              {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-[#16A34A] transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop WhatsApp Button */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
              aria-label="Fale conosco pelo WhatsApp"
            >
              <Phone size={20} />
              Fale no WhatsApp
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#0C3B2E] p-2"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white shadow-lg overflow-hidden"
              >
                <div className="px-6 py-4 space-y-4">
                  {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left text-lg font-medium text-[#0C3B2E] hover:text-[#16A34A] transition-colors py-2"
                    >
                      {item}
                    </button>
                  ))}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold mt-4"
                    aria-label="Fale conosco pelo WhatsApp"
                  >
                    <Phone size={20} />
                    Fale no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />

          {/* Stats Section */}
          <section ref={statsRef} className="py-20 bg-gradient-to-br from-[#0C3B2E] to-[#16A34A] text-white" aria-label="Estatísticas da Eliagro">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map(({ value, suffix, label }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                      {statsInView && <CountUp end={value} duration={2.5} suffix={suffix} />}
                    </div>
                    <div className="text-lg opacity-90">{label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section id="produtos" ref={productsRef} className="py-20 bg-gray-50" aria-labelledby="produtos-heading">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 id="produtos-heading" className="text-4xl md:text-5xl font-bold text-[#0C3B2E] mb-4">
                  Produtos Agropecuários Completos
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Linha completa de produtos para o agronegócio em Patos de Minas
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <motion.article
                      key={product.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={productsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="bg-white rounded-2xl shadow-lg p-8 cursor-default hover:shadow-xl transition-all duration-300"
                    >
                      <IconComponent className="w-12 h-12 text-green-600 mb-4" strokeWidth={1.5} aria-hidden="true" />
                      <h3 className="text-2xl font-bold text-[#0C3B2E] mb-3">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="sobre" ref={benefitsRef} className="py-20 bg-[#0C3B2E] text-white" aria-labelledby="sobre-heading">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <motion.h2
                id="sobre-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12"
              >
                Um parceiro do produtor rural, não apenas uma loja
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#16A34A] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-white" aria-labelledby="depoimentos-heading">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <h2 id="depoimentos-heading" className="text-4xl md:text-5xl font-bold text-center text-[#0C3B2E] mb-16">
                Depoimentos de Clientes
              </h2>

              <div className="relative h-80">
                {testimonials.map((testimonial, index) => (
                  <motion.blockquote
                    key={testimonial.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: index === currentTestimonial ? 1 : 0,
                      scale: index === currentTestimonial ? 1 : 0.9,
                      pointerEvents: index === currentTestimonial ? "auto" : "none",
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-10"
                  >
                    <div className="flex gap-2 mb-6" aria-label={`Avaliação: ${testimonial.rating} estrelas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={24} aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-2xl text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <footer>
                      <div className="font-bold text-xl text-[#0C3B2E]">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>

              <div className="flex justify-center gap-3 mt-8" role="tablist" aria-label="Navegação de depoimentos">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? "bg-[#16A34A] w-8" : "bg-gray-300"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                    role="tab"
                    aria-selected={index === currentTestimonial}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contato" className="py-20 bg-gradient-to-br from-[#16A34A] to-[#0C3B2E] text-white" aria-labelledby="contato-heading">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 id="contato-heading" className="text-4xl md:text-5xl font-bold mb-8">
                    Entre em Contato com a Eliagro
                  </h2>

                  <address className="space-y-6 not-italic">
                    <div className="flex items-center gap-4">
                      <MapPin className="flex-shrink-0" size={28} aria-hidden="true" />
                      <span className="text-lg">Rua Dr. Marcolino, 255 – Centro – Patos de Minas – MG</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="flex-shrink-0" size={28} aria-hidden="true" />
                      <a href={whatsappLink} className="text-lg hover:text-green-200 transition-colors">
                        (34) 99947-4396
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="flex-shrink-0" size={28} aria-hidden="true" />
                      <a href="mailto:telemarketing@eliagro.com.br" className="text-lg hover:text-green-200 transition-colors">
                        telemarketing@eliagro.com.br
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="flex-shrink-0" size={28} aria-hidden="true" />
                      <span className="text-lg">Segunda a sábado, 8h às 18h</span>
                    </div>
                  </address>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-[#16A34A] px-8 py-4 rounded-full shadow-xl font-bold text-lg mt-8"
                    aria-label="Fale com a Eliagro pelo WhatsApp"
                  >
                    Fale com a Eliagro
                    <ChevronRight size={24} />
                  </motion.a>
                </div>

                <div className="h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    title="Localização da Eliagro Produtos Agropecuários em Patos de Minas"
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
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-[#0C3B2E] text-white py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <img
                  src="http://eliagro.com.br/imgs/logodaeliagro.png"
                  alt="Logo Eliagro Produtos Agropecuários"
                  className="h-16 mb-4"
                  loading="lazy"
                />
                <p className="text-gray-300">
                  Há mais de 35 anos oferecendo soluções completas no agronegócio de Patos de Minas e região.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Contato</h3>
                <address className="space-y-2 text-gray-300 not-italic">
                  <p>(34) 99947-4396</p>
                  <p>telemarketing@eliagro.com.br</p>
                  <p>Segunda a sábado, 8h às 18h</p>
                </address>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map(({ name, icon: IconComponent, href, label }) => (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#16A34A] transition-colors"
                      aria-label={label}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-gray-400">
              © {new Date().getFullYear()} Eliagro Produtos Agropecuários — Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;