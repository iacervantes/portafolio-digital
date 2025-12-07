import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'Enero 2024',
    logo: 'https://images.credly.com/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    id: 2,
    name: 'Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: 'Marzo 2024',
    logo: 'https://www.datahai.co.uk/wp-content/uploads/2021/05/azure-data-engineer-associate-600x600-1.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 3,
    name: 'Databricks Certified Data Engineer',
    issuer: 'Databricks',
    date: 'Febrero 2024',
    logo: 'https://www.databricks.com/sites/default/files/2025-10/associate-badge-de.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-red-500 to-orange-500',
  },
  {
    id: 4,
    name: 'Google Cloud Professional Data Engineer',
    issuer: 'Google Cloud',
    date: 'Diciembre 2023',
    logo: 'https://www.cloudassistsvcs.com/wp-content/uploads/2022/07/google-data-engineer-logo.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-blue-400 to-green-400',
  },
  {
    id: 5,
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Noviembre 2023',
    logo: 'https://images.credly.com/images/45571506-2705-4f2f-ae28-29109a4f2f55/image.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    id: 6,
    name: 'Snowflake SnowPro Core',
    issuer: 'Snowflake',
    date: 'Octubre 2023',
    logo: 'https://img-c.udemycdn.com/open-badges/v2/badge-class/1529286954/SnowProCoreTM6007515649034834097820.png',
    credential: 'https://www.credly.com/badges/example',
    color: 'from-cyan-400 to-blue-500',
  },
];

export const Certifications = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certificaciones" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Credenciales</span>
          <h2 className="section-title">
            <span className="gradient-text">Certificaciones</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="section-subtitle mt-6">
            Validando mi expertise con certificaciones de las principales plataformas cloud
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="p-6 glass rounded-2xl card-hover h-full flex flex-col">
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-20 h-20 rounded-xl bg-background/50 p-2 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground/70 mb-4">{cert.date}</p>

                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors group/link"
                  >
                    <Award size={14} />
                    Verificar credencial
                    <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
