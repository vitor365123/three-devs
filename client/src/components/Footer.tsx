import { motion } from "framer-motion";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

/**
 * Footer Component - Design: Editorial Bold (Lando Norris style)
 * - Layout minimalista
 * - Links de navegação
 * - Redes sociais
 * - Copyright
 * - Tipografia Bebas Neue
 */

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 lg:py-24 bg-background border-t border-foreground/10">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection("#hero"); }} className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt={COMPANY.name} className="h-10 w-auto" />
              <div className="flex items-baseline">
                <span className="text-2xl text-foreground tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  THREE
                </span>
                <span className="text-2xl text-primary tracking-wider ml-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  DEVS
                </span>
              </div>
            </a>
            <p className="text-2xl lg:text-3xl text-foreground/80 leading-tight max-w-md">
              Codificando o futuro, entregando{" "}
              <span className="text-highlight font-bold">EXCELÊNCIA.</span>
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h4 className="text-xs uppercase tracking-[0.2em] text-foreground/40 mb-6">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-foreground/60">
                  {COMPANY.phone}
                </span>
              </li>
            </ul>

            {/* CTA */}
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.15em] text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            >
              Iniciar Projeto
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-24 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} Three Devs. Todos os direitos reservados.
          </p>
          <p className="text-xs uppercase tracking-[0.15em] text-foreground/30">
            Desenvolvido com paixão e performance
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
