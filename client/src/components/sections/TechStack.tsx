import { motion } from 'framer-motion';

/**
 * TechStack Section - Design: Neomorfismo Tecnológico
 * - Marquee infinito com logos de tecnologias
 * - Pausa ao hover
 * - Glass effect nos cards
 * - Responsivo
 */

interface Technology {
  name: string;
  logo: string;
}

const TechStack = () => {
  const technologies: Technology[] = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  ];

  return (
    <section className="py-20 bg-[#0D0D0D] border-y border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-2">Tecnologias que Usamos</p>
            <h3 className="font-display font-bold italic text-3xl uppercase text-white">Stack Moderno & Escalável</h3>
          </motion.div>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="marquee-container">
        <div className="marquee">
          {[...technologies, ...technologies].map((tech, idx) => (
            <motion.div
              key={idx}
              className="marquee-item group"
              whileHover={{ scale: 1.15 }}
            >
              <div className="flex flex-col items-center gap-3 glass p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-all w-full h-full justify-center">
                <div className="tech-logo">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-tighter text-white/40 group-hover:text-primary transition-colors">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
