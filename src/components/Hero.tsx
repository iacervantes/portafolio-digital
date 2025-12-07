import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowDown, Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.png';

const Particle = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomSize = Math.random() * 4 + 2;
  const randomDuration = Math.random() * 10 + 15;

  return (
    <motion.div
      className="particle bg-primary/30"
      style={{
        left: `${randomX}%`,
        width: randomSize,
        height: randomSize,
      }}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{
        y: '-100vh',
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export const Hero = () => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    setParticles(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#sobre-mi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-accent/15 rounded-full blur-3xl" />
      
      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <Particle key={i} delay={i * 0.5} />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo - Always on top for mobile */}
          <motion.div
            className="mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              {/* Animated ring */}
              <motion.div
                className="absolute -inset-1.5 md:-inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-75 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background">
                <img
                  src={profilePhoto}
                  alt="Italo Cervantes Prieto - Data Architect & AI Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                className="absolute -top-1 -right-1 md:-top-2 md:-right-2 px-2 py-1 md:px-3 md:py-1.5 glass rounded-full text-xs font-medium whitespace-nowrap"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀 Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              className="text-accent font-medium mb-3 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              ¡Bienvenido a mi portafolio!
            </motion.p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 md:mb-4 leading-tight">
              <TypeAnimation
                sequence={[
                  'Hola, soy',
                  800,
                  'Hola, soy Italo',
                  400,
                  'Hola, soy Italo Cervantes',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={true}
              />
            </h1>

            <motion.h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl gradient-text font-semibold mb-4 md:mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Data Architect | Data Governance | AI Engineer
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Arquitecto de Datos especializado en Data Governance. Transformo datos en decisiones estratégicas 
              con tecnologías cloud e IA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open('/cv-italo-cervantes.pdf', '_blank')}
              >
                <Download size={18} />
                Descargar CV
              </Button>
              <Button variant="neon" size="lg" className="w-full sm:w-auto" onClick={scrollToAbout}>
                Conocer más
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/italo-cervantes-prieto/', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/italocervantes', label: 'GitHub' },
                { icon: Mail, href: 'mailto:italo.cervantes@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover:bg-primary/20 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs md:text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};
