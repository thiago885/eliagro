"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, CheckCircle2, Users, Star, MessageSquare, Pill, Package, Wrench, Leaf, Dog, Coffee } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";
import Header from "./Header";

const whatsappNumber = "5534999474396";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const productCategories = [
  {
    icon: <Pill className="text-[#009F47]" size={48} />,
    title: "Medicamentos Veterinários",
    alt: "Medicamentos veterinários Eliagro MG",
  },
  {
    icon: <Coffee className="text-[#009F47]" size={48} />,
    title: "Rações e Suplementos",
    alt: "Rações e suplementos Eliagro MG",
  },
  {
    icon: <Dog className="text-[#009F47]" size={48} />,
    title: "Produtos Pet Shop",
    alt: "Produtos pet shop Eliagro MG",
  },
  {
    icon: <Leaf className="text-[#009F47]" size={48} />,
    title: "Sementes e Inoculantes",
    alt: "Sementes e inoculantes Eliagro MG",
  },
  {
    icon: <Wrench className="text-[#009F47]" size={48} />,
    title: "Ferramentas e Lonas",
    alt: "Ferramentas e lonas Eliagro MG",
  },
  {
    icon: <Package className="text-[#009F47]" size={48} />,
    title: "Selaria e Roupas Country",
    alt: "Selaria e roupas country Eliagro MG",
  },
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

const partnerLogos = [
  { alt: "MSD", src: "https://upload.wikimedia.org/wikipedia/commons/7/7a/MSD_Logo.svg" },
  { alt: "Supra", src: "https://supra.com.br/wp-content/uploads/2020/06/logo-supra.png" },
  { alt: "Prador", src: "https://prador.com.br/wp-content/uploads/2020/06/logo-prador.png" },
  { alt: "Santa Fé", src: "https://santafe.com.br/wp-content/uploads/2020/06/logo-santafe.png" },
];

const promotions = [
  {
    title: "Campanha de Vacinação",
    description: "Proteja seu rebanho com as melhores vacinas.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Campanha de vacinação Eliagro",
  },
  {
    title: "Promoção de Rações",
    description: "Descontos especiais em rações selecionadas.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=80",
    alt: "Promoção de rações Eliagro",
  },
  {
    title: "Adubos e Fertilizantes",
    description: "Incentive sua lavoura com insumos de qualidade.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    alt: "Adubos e fertilizantes Eliagro",
  },
];

const LandingPage = () => {
  const isMobile = useIsMobile();

  // Check if Carousel and Carousel.Slide exist
  const hasCarousel = Carousel && typeof Carousel === "function" && Carousel.Slide;

  return (
    <>
      <Header />
      <main className="font-sans bg-[#F9FAFB] text-[#004C72] pt-16">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center bg-no-repeat min-h-[480px] flex flex-col justify-center items-center text-center px-6 md:px-12"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')",
          }}
          aria-label="Imagem da loja ou fazenda com luz natural"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative max-w-4xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              O Agro de Patos de Minas confia na Eliagro
            </h1>
            <h2 className="text-lg md:text-xl font-medium drop-shadow-md max-w-3xl mx-auto">
              Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações,
              sementes e insumos agrícolas.
            </h2>
            <Button
              asChild
              className="bg-[#009F47] hover:bg-[#007a34] text-white rounded-full shadow-lg px-8 py-3 text-lg font-semibold transition-colors"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale com um especialista no WhatsApp">
                Fale com um especialista no WhatsApp
              </a>
            </Button>
            <p className="text-sm opacity-80 mt-2 drop-shadow-md">Desde 1989 | Tradição e Confiança no Campo</p>
          </div>
          {/* Floating Message Icon */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mensagem Eliagro"
            className="fixed right-4 bottom-6 md:right-8 md:bottom-8 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full p-4 shadow-lg z-50 transition-colors"
          >
            <MessageSquare size={28} />
          </a>
        </section>

        {/* About Section */}
        <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-10">
          <img
            src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80"
            alt="Equipe da Eliagro Produtos Agropecuários"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-[400px]"
            loading="lazy"
          />
          <div className="md:w-1/2 text-[#004C72]">
            <h2 className="text-3xl font-bold mb-4">Tradição, técnica e confiança no atendimento agropecuário</h2>
            <p className="text-lg leading-relaxed">
              A Eliagro Produtos Agropecuários é referência em Patos de Minas – MG e região. Com mais de 5.000
              produtos, atendemos produtores, veterinários e técnicos com soluções completas para fazenda, pet shop e
              lavouras. Nosso compromisso é unir conhecimento técnico e atendimento personalizado para cada cliente.
            </p>
          </div>
        </section>

        {/* Product Lines Section */}
        <section id="produtos" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004C72]">
            Tudo o que o produtor precisa em um só lugar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            {productCategories.map(({ icon, title, alt }) => (
              <div
                key={title}
                className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-default"
                aria-label={alt}
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-[#009F47]">{title}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-[#F4C300] hover:bg-[#c9a500] text-[#004C72] rounded-full shadow-lg px-8 py-3 text-lg font-semibold transition-colors"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Veja nossas ofertas no WhatsApp">
                Veja nossas ofertas no WhatsApp
              </a>
            </Button>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-[#004C72] text-white py-16 px-6 md:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Um parceiro do produtor, não apenas uma loja</h2>
            <ul className="max-w-md mx-auto space-y-4 text-left">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-[#F4C300] flex-shrink-0" size={24} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button
                asChild
                className="bg-[#009F47] hover:bg-[#007a34] text-white rounded-full shadow-lg px-8 py-3 text-lg font-semibold transition-colors"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chame no WhatsApp e receba orientação agora">
                  Chame no WhatsApp e receba orientação agora
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section
          id="promocoes"
          className="py-16 px-6 md:px-12 max-w-7xl mx-auto bg-[url('https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1400&q=40')] bg-cover bg-center bg-fixed"
          aria-label="Promoções e campanhas sazonais da Eliagro"
        >
          <div className="bg-white/90 rounded-lg p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#004C72] mb-2 text-center">Promoções e Ações Sazonais da Eliagro</h2>
            <p className="text-center text-lg text-[#009F47] mb-8">A cada época do ano, novas oportunidades no agro.</p>

            {isMobile || !hasCarousel ? (
              <div className="space-y-8">
                {promotions.map(({ title, description, image, alt }) => (
                  <div key={title} className="rounded-lg overflow-hidden shadow-lg">
                    <img src={image} alt={alt} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-4 bg-[#F9FAFB]">
                      <h3 className="text-xl font-semibold text-[#004C72] mb-1">{title}</h3>
                      <p className="text-[#004C72]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Carousel className="max-w-5xl mx-auto" loop snap="center" align="center" slideGap={24}>
                {promotions.map(({ title, description, image, alt }) => (
                  <Carousel.Slide key={title} className="rounded-lg overflow-hidden shadow-lg">
                    <img src={image} alt={alt} className="w-full h-64 object-cover" loading="lazy" />
                    <div className="p-4 bg-[#F9FAFB]">
                      <h3 className="text-xl font-semibold text-[#004C72] mb-1">{title}</h3>
                      <p className="text-[#004C72]">{description}</p>
                    </div>
                  </Carousel.Slide>
                ))}
              </Carousel>
            )}

            <div className="mt-10 text-center">
              <Button
                asChild
                className="bg-[#F4C300] hover:bg-[#c9a500] text-[#004C72] rounded-full shadow-lg px-8 py-3 text-lg font-semibold transition-colors"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Receba as promoções no seu WhatsApp">
                  Receba as promoções no seu WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials and Partners Section */}
        <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#004C72]">Quem conhece, confia.</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, text }) => (
              <blockquote
                key={name}
                className="border border-[#009F47] rounded-lg p-6 shadow-sm text-[#004C72] bg-[#F9FAFB]"
                aria-label={`Depoimento de ${name}`}
              >
                <p className="mb-4 italic">“{text}”</p>
                <footer className="font-semibold text-[#009F47]">— {name}</footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap justify-center items-center gap-12">
            {partnerLogos.map(({ alt, src }) => (
              <img
                key={alt}
                src={src}
                alt={`Logo da marca parceira ${alt}`}
                className="h-12 object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                loading="lazy"
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-[#009F47] text-white py-16 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Estamos prontos para atender você.</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <MessageSquare size={24} aria-hidden="true" />
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#F4C300]"
                    aria-label="Mensagem Eliagro"
                  >
                    (34) 99947-4396
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={24} aria-hidden="true" />
                  <a
                    href="mailto:telemarketing@eliagro.com.br"
                    className="underline hover:text-[#F4C300]"
                    aria-label="E-mail Eliagro"
                  >
                    telemarketing@eliagro.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Users size={24} aria-hidden="true" />
                  Rua Dr. Marcolino, 255 – Centro – Patos de Minas – MG
                </li>
                <li className="flex items-center gap-3">
                  <Star size={24} aria-hidden="true" />
                  Segunda a sábado, 8h às 18h
                </li>
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#F4C300] hover:bg-[#c9a500] text-[#004C72] rounded-full shadow-lg px-8 py-3 text-lg font-semibold transition-colors"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Fale com nossa equipe agora">
                    Fale com nossa equipe agora
                  </a>
                </Button>
              </div>
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

        {/* Footer */}
        <footer className="bg-[#004C72] text-white py-8 px-6 md:px-12 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src="http://eliagro.com.br/imgs/logodaeliagro.png"
                alt="Logo Eliagro Produtos Agropecuários"
                className="h-10 object-contain"
                loading="lazy"
              />
              <p className="text-sm max-w-md">
                Eliagro Produtos Agropecuários | Agropecuária e loja veterinária em Patos de Minas – MG. Produtos
                agropecuários, rações, sementes e insumos agrícolas com atendimento técnico especializado.
              </p>
            </div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="/politica-de-privacidade"
                className="hover:underline"
                aria-label="Política de Privacidade"
              >
                Política de Privacidade
              </a>
              <a href="/termos-de-uso" className="hover:underline" aria-label="Termos de Uso">
                Termos de Uso
              </a>
              <a
                href="https://instagram.com/eliagrovet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Instagram Eliagro"
              >
                Instagram @eliagrovet
              </a>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LandingPage;