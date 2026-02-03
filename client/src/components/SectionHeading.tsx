import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  accentWord?: string;
}

/**
 * SectionHeading Component - Design: Neomorfismo Tecnológico
 * - Título com fonte display (Outfit)
 * - Subtítulo com fonte mono
 * - Animações ao scroll
 * - Suporte para palavra destacada em cor primária
 */

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'left',
  accentWord 
}: SectionHeadingProps) => {
  const titleParts = accentWord 
    ? title.split(new RegExp(`(${accentWord})`, 'i'))
    : [title];

  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold italic text-3xl md:text-5xl uppercase text-white mb-4"
      >
        {titleParts.map((part, idx) => (
          <span key={idx} className={part?.toLowerCase() === accentWord?.toLowerCase() ? 'text-primary' : ''}>
            {part}
          </span>
        ))}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-mono text-white/50 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeading;
