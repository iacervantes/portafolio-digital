import { motion } from 'framer-motion';
import { ArrowUp, Linkedin, Github, Mail, Heart, Coffee } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/italo-cervantes-prieto/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/italocervantes', label: 'GitHub' },
  { icon: Mail, href: 'mailto:italo.cervantes@example.com', label: 'Email' },
];

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Contacto', href: '#contacto' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-secondary/50 pt-16 pb-8">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#inicio" className="text-2xl font-display font-bold gradient-text inline-block mb-4">
              IC<span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Data Architect especializado en Data Governance, transformando datos en decisiones estratégicas.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegación Rápida</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>italo.cervantes@example.com</p>
              <p>Lima, Perú</p>
              <p className="text-green-500 font-medium">Disponible para proyectos</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Italo Cervantes. Todos los derechos reservados.
          </p>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart size={14} className="text-red-500 fill-red-500" /> y mucho{' '}
            <Coffee size={14} className="text-amber-600" />
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
