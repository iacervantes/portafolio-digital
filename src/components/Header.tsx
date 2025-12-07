import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Skills', href: '#skills' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Certificaciones', href: '#certificaciones' },
  { name: 'Contacto', href: '#contacto' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('light');
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDownloadCV = () => {
    window.open('/cv-italo-cervantes.pdf', '_blank');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="text-xl md:text-2xl font-display font-bold gradient-text relative z-[60]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            IC<span className="text-accent">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 lg:px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors relative z-[60]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:flex"
              onClick={handleDownloadCV}
            >
              <Download size={16} />
              Descargar CV
            </Button>

            {/* Mobile Menu Button - Always visible on mobile */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors relative z-[60]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden bg-background/98 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              <nav className="flex flex-col items-center gap-4 w-full max-w-xs">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-center py-4 text-xl font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-xl transition-all"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
              
              <motion.div 
                className="mt-8 w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button 
                  variant="gradient" 
                  className="w-full" 
                  size="lg"
                  onClick={() => {
                    handleDownloadCV();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Download size={18} />
                  Descargar CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
