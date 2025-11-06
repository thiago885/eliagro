"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import { ChevronRight } from "lucide-react";

const whatsappLink = "https://wa.me/5534999474396";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const smoothY = useSpring(heroY, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(heroOpacity, { stiffness: 100, damping: 30 });

  const backgroundRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef(0);

  useAnimationFrame((time) => {
    if (!backgroundRef.current) return;
    
    timeRef.current = time / 1000;
    
    const x = Math.sin(timeRef.current * 0.1) * 2;
    const y = Math.cos(timeRef.current * 0.15) * 2;
    
    backgroundRef.current.style.transform = `translate(${x}%, ${y}%)`;
  });

  return (
    <section
      id="início"
      className="relative h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: smoothY, opacity: smoothOpacity }}
        className="absolute inset-0"
      >
        <motion.div
          ref={backgroundRef}
          className="absolute inset-0 w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ willChange: "transform" }}
        >
          <picture>
            <source 
              media="(max-width: 768px)" 
              srcSet="http://eliagro.com.br/imgs/bbannse_eliagro_mobile.jpg" 
            />
            <source 
              media="(min-width: 769px)" 
              srcSet="http://eliagro.com.br/imgs/banner_site_eliagro.jpg" 
            />
            <img
              src="http://eliagro.com.br/imgs/banner_site_eliagro.jpg"
              alt="Campo ao amanhecer"
              className="w-full h-full object-cover"
            />
          </picture>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center text-white px-6 max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          O Agro de Patos de Minas <br />
          <span className="text-[#16A34A]">confia na Eliagro</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Há mais de 35 anos oferecendo soluções completas em produtos veterinários, rações, sementes e insumos agrícolas.
        </motion.p>
        
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 20px 40px rgba(22, 163, 74, 0.4)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full shadow-2xl font-semibold text-lg"
        >
          Fale com um especialista
          <ChevronRight size={24} />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;