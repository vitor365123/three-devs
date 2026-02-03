import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/**
 * Hero Section - Design: Editorial Bold (Lando Norris style)
 * - Tipografia gigante ocupando toda a tela
 * - Palavras destacadas em cor primária (itálico)
 * - Linhas orgânicas no fundo
 * - Animação de entrada dramática
 */

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden organic-lines"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 py-32 lg:py-40">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 lg:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium">
            Desenvolvimento Full Stack desde 2020
          </span>
        </motion.div>

        {/* Main headline - Editorial style */}
        <div className="max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground"
          >
            <span className="text-highlight">Transformando</span> ideias em{" "}
            <span className="text-highlight">soluções</span> digitais de alta{" "}
            <span className="text-highlight">performance.</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 lg:mt-16 max-w-xl text-base lg:text-lg text-foreground/60 leading-relaxed"
        >
          Especialistas em React, Node.js, TypeScript e arquiteturas escaláveis. 
          Criamos experiências digitais que impulsionam resultados.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Iniciar Projeto
          </a>
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-4 text-sm uppercase tracking-[0.15em] text-foreground hover:bg-foreground/5 transition-colors duration-300"
          >
            Ver Projetos
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="group-hover:text-primary" />
          </motion.div>
        </button>
      </motion.div>

      {/* Side decoration - Year */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-foreground/20" />
          <span className="text-xs uppercase tracking-[0.2em] text-foreground/40 [writing-mode:vertical-lr]">
            Est. 2020
          </span>
          <div className="w-px h-20 bg-foreground/20" />
        </div>
      </motion.div>
    </section>
  );
}
