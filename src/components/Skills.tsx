import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Code, BarChart3, Zap } from 'lucide-react';

const categories = [
  { id: 'cloud', label: 'Cloud & Data', icon: Cloud },
  { id: 'programming', label: 'Programación', icon: Code },
  { id: 'automation', label: 'Automatización', icon: Zap },
  { id: 'bi', label: 'BI & Analytics', icon: BarChart3 },
];

const skills = {
  cloud: [
    { name: 'Databricks', level: 90, expertise: 'Experto', color: 'from-red-500 to-orange-500' },
    { name: 'AWS', level: 85, expertise: 'Avanzado', color: 'from-orange-400 to-yellow-500' },
    { name: 'Azure', level: 85, expertise: 'Avanzado', color: 'from-blue-500 to-cyan-400' },
    { name: 'GCP', level: 80, expertise: 'Avanzado', color: 'from-blue-400 to-green-400' },
    { name: 'Snowflake', level: 75, expertise: 'Avanzado', color: 'from-cyan-400 to-blue-500' },
    { name: 'Apache Spark', level: 85, expertise: 'Avanzado', color: 'from-orange-500 to-red-500' },
  ],
  programming: [
    { name: 'Python', level: 95, expertise: 'Experto', color: 'from-blue-500 to-yellow-400' },
    { name: 'LangChain', level: 85, expertise: 'Avanzado', color: 'from-green-400 to-emerald-500' },
    { name: 'SQL', level: 90, expertise: 'Experto', color: 'from-blue-400 to-indigo-500' },
    { name: 'PySpark', level: 85, expertise: 'Avanzado', color: 'from-orange-400 to-red-500' },
    { name: 'FastAPI', level: 80, expertise: 'Avanzado', color: 'from-teal-400 to-cyan-500' },
    { name: 'Docker', level: 75, expertise: 'Intermedio', color: 'from-blue-400 to-blue-600' },
  ],
  automation: [
    { name: 'N8N', level: 80, expertise: 'Avanzado', color: 'from-pink-500 to-rose-500' },
    { name: 'Apache Airflow', level: 85, expertise: 'Avanzado', color: 'from-teal-400 to-cyan-500' },
    { name: 'CI/CD', level: 80, expertise: 'Avanzado', color: 'from-gray-400 to-gray-600' },
    { name: 'Terraform', level: 70, expertise: 'Intermedio', color: 'from-purple-400 to-indigo-500' },
  ],
  bi: [
    { name: 'Power BI', level: 90, expertise: 'Experto', color: 'from-yellow-400 to-orange-500' },
    { name: 'Tableau', level: 75, expertise: 'Avanzado', color: 'from-blue-500 to-indigo-500' },
    { name: 'Looker', level: 70, expertise: 'Intermedio', color: 'from-purple-400 to-pink-500' },
    { name: 'dbt', level: 80, expertise: 'Avanzado', color: 'from-orange-500 to-red-500' },
  ],
};

const SkillBar = ({ skill, delay }: { skill: typeof skills.cloud[0]; delay: number }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
            {skill.expertise}
          </span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className={`skill-bar-fill bg-gradient-to-r ${skill.color}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Mi Expertise</span>
          <h2 className="section-title">
            Habilidades <span className="gradient-text">Técnicas</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === id
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/25'
                  : 'glass hover:bg-secondary/50 text-muted-foreground'
              }`}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <div key={skill.name} className="p-6 glass rounded-2xl card-hover">
                <SkillBar skill={skill} delay={index * 0.1} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">También trabajo con:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis', 'Kafka', 'MLflow', 'OpenAI API', 'Hugging Face', 'Pandas', 'NumPy'].map(
              (tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
