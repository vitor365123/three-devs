import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

/**
 * Projects Section - Design: Editorial Bold (Lando Norris style)
 * - Grid assimétrico com fotos de diferentes tamanhos
 * - Hover effects com reveal de informações
 * - Tipografia Bebas Neue nos títulos
 * - Seção com fundo claro (alternância)
 */

export default function Projects() {
  return (
    <section id="projetos" className="relative py-32 lg:py-40 bg-[#F5F5E8]">
      {/* Organic lines background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            d="M0 200 Q300 100 600 200 T1200 200"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M0 400 Q300 300 600 400 T1200 400"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M0 600 Q300 500 600 600 T1200 600"
            stroke="#3D3D29"
            strokeWidth="1"
            fill="none"
            opacity="0.2"
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
            Portfólio
          </span>
          <h2 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#3D3D29] mt-4">
            NOSSOS <span className="text-[#CCFF00]" style={{ textShadow: '0 0 30px rgba(204,255,0,0.3)' }}>PROJETOS</span>
          </h2>
        </motion.div>

        {/* Projects Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#3D3D29]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content on hover */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Category */}
                    <span className="text-xs uppercase tracking-[0.2em] text-[#CCFF00] font-medium">
                      {project.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl text-white mt-2 uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-white/80 mt-3 max-w-md">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 border border-white/30 text-white/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Arrow icon */}
                <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-white/30 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Title below image (always visible) */}
              <div className="p-4 bg-white/50">
                <span className="text-xs uppercase tracking-[0.2em] text-[#3D3D29]/50">
                  {project.category}
                </span>
                <h3 className="text-2xl text-[#3D3D29] mt-1 uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {project.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#3D3D29] hover:text-[#CCFF00] transition-colors group"
          >
            <span>Veja mais projetos</span>
            <ArrowUpRight
              size={16}
              className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
