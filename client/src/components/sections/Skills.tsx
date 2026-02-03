import { motion } from "framer-motion";
import { Code2, Server, Cloud } from "lucide-react";
import { SKILLS } from "@/lib/constants";

/**
 * Skills Section - Design: Editorial Bold (Lando Norris style)
 * - Layout em 3 colunas com ícones grandes
 * - Tipografia Bebas Neue
 * - Fundo escuro com linhas orgânicas
 */

const icons = {
  frontend: Code2,
  backend: Server,
  devops: Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-40 bg-background organic-lines">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-24 text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/50 font-medium">
            Expertise
          </span>
          <h2 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mt-4">
            NOSSAS <span className="text-highlight">SKILLS</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {Object.entries(SKILLS).map(([key, category], index) => {
            const Icon = icons[key as keyof typeof icons];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center border border-foreground/20 mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <Icon size={28} className="text-foreground/60 group-hover:text-primary transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl text-foreground mb-6 uppercase tracking-wide" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.items.map((skill, idx) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                      className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-primary" />
                      <span className="text-sm uppercase tracking-[0.1em]">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 lg:mt-32 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl lg:text-3xl text-foreground/80 leading-relaxed">
            "Não importa onde você começa, o que importa é como você{" "}
            <span className="text-highlight font-bold">EVOLUI</span> a partir daí."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-foreground/20" />
            <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Three Devs</span>
            <div className="w-12 h-px bg-foreground/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
