import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award, FolderGit2, Users } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const stats = [
  { icon: Briefcase, value: '5+', label: 'Años de Experiencia' },
  { icon: FolderGit2, value: '30+', label: 'Proyectos Completados' },
  { icon: Award, value: '8+', label: 'Certificaciones' },
  { icon: Users, value: '15+', label: 'Clientes Satisfechos' },
];

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="sobre-mi" className="py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image Column */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent/30 rounded-2xl" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Italo Cervantes - Sobre mí"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-8 px-6 py-4 glass rounded-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Años de Experiencia</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.span
              variants={itemVariants}
              className="text-accent font-medium mb-4 block"
            >
              Conóceme
            </motion.span>
            
            <motion.h2
              variants={itemVariants}
              className="section-title"
            >
              Sobre <span className="gradient-text">Mí</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />

            <motion.div variants={itemVariants} className="space-y-4 text-muted-foreground mb-8">
              <p>
                Soy un <strong className="text-foreground">Data Engineer & AI Engineer</strong> apasionado 
                por transformar datos en soluciones de negocio impactantes. Mi experiencia abarca 
                el diseño e implementación de arquitecturas de datos escalables en la nube.
              </p>
              <p>
                Me especializo en construir pipelines de datos robustos, implementar soluciones de 
                Machine Learning y desarrollar aplicaciones de IA generativa utilizando las últimas 
                tecnologías como <strong className="text-foreground">LangChain, Databricks y servicios cloud de AWS, Azure y GCP</strong>.
              </p>
              <p>
                Mi enfoque combina la excelencia técnica con una visión estratégica del negocio, 
                asegurando que cada solución no solo funcione, sino que genere valor real y medible 
                para las organizaciones.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  className="p-4 glass rounded-xl card-hover group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold gradient-text">{value}</p>
                      <p className="text-xs text-muted-foreground">{label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
