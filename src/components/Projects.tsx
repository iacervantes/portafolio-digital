import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['Todos', 'Data Engineering', 'AI/ML', 'Dashboards', 'Automatización'];

const projects = [
  {
    id: 1,
    title: 'Pipeline ETL con Databricks',
    description: 'Arquitectura de datos escalable para procesar +10TB diarios usando Delta Lake y Apache Spark.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
    category: 'Data Engineering',
    tags: ['Databricks', 'Spark', 'Python', 'Delta Lake'],
    github: 'https://github.com/icervantesp/databricks-etl',
    demo: null,
    stars: 45,
  },
  {
    id: 2,
    title: 'Chatbot RAG con LangChain',
    description: 'Asistente virtual inteligente usando RAG, embeddings y LLMs para consultas sobre documentación.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    category: 'AI/ML',
    tags: ['LangChain', 'OpenAI', 'Pinecone', 'FastAPI'],
    github: 'https://github.com/icervantesp/rag-chatbot',
    demo: 'https://demo-chatbot.example.com',
    stars: 128,
  },
  {
    id: 3,
    title: 'Dashboard Analytics Real-time',
    description: 'Dashboard interactivo con KPIs en tiempo real, alertas y visualizaciones avanzadas.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    category: 'Dashboards',
    tags: ['Power BI', 'Azure', 'SQL', 'DAX'],
    github: 'https://github.com/icervantesp/powerbi-dashboard',
    demo: null,
    stars: 32,
  },
  {
    id: 4,
    title: 'Automatización N8N + AI',
    description: 'Workflows automatizados con IA para procesamiento de documentos y notificaciones.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    category: 'Automatización',
    tags: ['N8N', 'OpenAI', 'Webhooks', 'REST API'],
    github: 'https://github.com/icervantesp/n8n-workflows',
    demo: null,
    stars: 67,
  },
  {
    id: 5,
    title: 'ML Pipeline en AWS',
    description: 'Pipeline de Machine Learning end-to-end usando SageMaker, Step Functions y S3.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
    category: 'AI/ML',
    tags: ['AWS', 'SageMaker', 'Python', 'MLflow'],
    github: 'https://github.com/icervantesp/aws-ml-pipeline',
    demo: null,
    stars: 89,
  },
  {
    id: 6,
    title: 'Data Lake Architecture',
    description: 'Arquitectura de Data Lake en Azure con ingesta, procesamiento y gobernanza de datos.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    category: 'Data Engineering',
    tags: ['Azure', 'Data Factory', 'Synapse', 'Purview'],
    github: 'https://github.com/icervantesp/azure-datalake',
    demo: null,
    stars: 56,
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyectos" className="py-20 lg:py-32 relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Portfolio</span>
          <h2 className="section-title">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground'
                  : 'glass hover:bg-secondary/50 text-muted-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Stars badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 glass rounded-full text-xs">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    {project.stars}
                  </div>

                  {/* Category badge */}
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-primary/80 rounded-full text-xs font-medium text-primary-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} />
                      Código
                    </Button>
                    {project.demo && (
                      <Button
                        variant="gradient"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="neon"
            size="lg"
            onClick={() => window.open('https://github.com/icervantesp', '_blank')}
          >
            <Github size={20} />
            Ver más proyectos en GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
