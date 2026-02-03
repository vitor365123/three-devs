import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { COMPANY, PROCESS_STEPS } from "@/lib/constants";

/**
 * Contact Section - Design: Editorial Bold (Lando Norris style)
 * - CTA grande e impactante
 * - Processo de trabalho em etapas
 * - Tipografia Bebas Neue
 * - Fundo escuro
 */

export default function Contact() {
  return (
    <section id="contato" className="relative py-32 lg:py-40 bg-background organic-lines overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium">
            Vamos conversar
          </span>
          <h2 className="display-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mt-4">
            PRONTO PARA <span className="text-highlight">TRANSFORMAR</span> SUA IDEIA EM{" "}
            <span className="text-highlight">REALIDADE?</span>
          </h2>
          
          <motion.a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-12 bg-primary text-primary-foreground px-10 py-5 text-sm uppercase tracking-[0.15em] font-medium hover:bg-primary/90 transition-all duration-300 group"
          >
            <MessageCircle size={20} />
            <span>Falar no WhatsApp</span>
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-foreground/10 pt-16 lg:pt-24"
        >
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium">
              Nosso Processo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group text-center lg:text-left"
              >
                {/* Step Number */}
                <span className="text-5xl lg:text-6xl text-foreground/10 group-hover:text-primary/30 transition-colors duration-300" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {item.step}
                </span>
                
                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl lg:text-2xl text-foreground uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 lg:mt-32 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-foreground/50">
              Baseados no Brasil
            </span>
          </div>
          <div className="hidden md:block w-px h-4 bg-foreground/20" />
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-foreground/50">
              Disponíveis Globalmente
            </span>
          </div>
          <div className="hidden md:block w-px h-4 bg-foreground/20" />
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-primary" />
            <span className="text-xs uppercase tracking-[0.15em] text-foreground/50">
              Resposta em até 24h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
