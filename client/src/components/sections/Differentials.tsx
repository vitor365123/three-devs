import { motion } from "framer-motion";
import { DIFFERENTIALS } from "@/lib/constants";

/**
 * Differentials Section - Design: Editorial Bold (Lando Norris style)
 * - Números grandes como elemento visual
 * - Layout horizontal com scroll
 * - Tipografia Bebas Neue
 * - Fundo claro
 */

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-32 lg:py-40 bg-[#F5F5E8] overflow-hidden">
      {/* Organic lines background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path
            d="M0 150 Q300 50 600 150 T1200 150"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 300 Q300 200 600 300 T1200 300"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 450 Q300 350 600 450 T1200 450"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#3D3D29]/50 font-medium">
            Por que nós
          </span>
          <h2 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#3D3D29] mt-4">
            NOSSOS <span className="text-[#CCFF00]" style={{ textShadow: '0 0 30px rgba(204,255,0,0.3)' }}>DIFERENCIAIS</span>
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {DIFFERENTIALS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Large Number */}
              <div className="mb-6">
                <span className="text-8xl lg:text-9xl text-[#3D3D29]/10 group-hover:text-[#CCFF00]/20 transition-colors duration-500" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative -mt-16 lg:-mt-20 pl-4 border-l-2 border-[#3D3D29]/20 group-hover:border-[#CCFF00] transition-colors duration-300">
                <span className="text-xs uppercase tracking-[0.2em] text-[#CCFF00] font-medium" style={{ textShadow: '0 0 10px rgba(204,255,0,0.3)' }}>
                  {item.subtitle}
                </span>
                <h3 className="text-3xl lg:text-4xl text-[#3D3D29] mt-2 uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="text-[#3D3D29]/70 mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 lg:mt-32 pt-12 border-t border-[#3D3D29]/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projetos Entregues" },
              { number: "99%", label: "Clientes Satisfeitos" },
              { number: "5+", label: "Anos de Experiência" },
              { number: "24/7", label: "Suporte Disponível" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl lg:text-5xl text-[#3D3D29]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {stat.number}
                </span>
                <p className="text-xs uppercase tracking-[0.15em] text-[#3D3D29]/50 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
