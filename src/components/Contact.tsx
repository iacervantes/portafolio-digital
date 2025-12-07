import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, CheckCircle, Loader2, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const subjects = [
  { value: 'consulta', label: 'Consulta General' },
  { value: 'proyecto', label: 'Propuesta de Proyecto' },
  { value: 'laboral', label: 'Oportunidad Laboral' },
  { value: 'otro', label: 'Otro' },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: '¡Mensaje enviado!',
      description: 'Gracias por contactarme. Te responderé pronto.',
    });
    
    reset();
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-32 relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Contacto</span>
          <h2 className="section-title">
            ¿Trabajamos <span className="gradient-text">Juntos</span>?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-4" />
          <p className="section-subtitle mt-6">
            Estoy disponible para proyectos freelance y oportunidades laborales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              <p className="text-muted-foreground mb-8">
                ¿Tienes un proyecto en mente o quieres discutir una oportunidad? 
                No dudes en contactarme a través de cualquiera de estos canales.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:italo.cervantesp@gmail.com"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-secondary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    italo.cervantesp@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Lima, Perú</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Estado</p>
                  <p className="font-medium text-green-500">Disponible para proyectos</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Sígueme en redes</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/italo-cervantes-prieto/', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com/icervantesp', label: 'GitHub' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Nombre completo *
                  </label>
                  <Input
                    {...register('name', { required: 'El nombre es requerido' })}
                    placeholder="Tu nombre"
                    className="glass border-border/50 focus:border-primary"
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input
                    type="email"
                    {...register('email', {
                      required: 'El email es requerido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido',
                      },
                    })}
                    placeholder="tu@email.com"
                    className="glass border-border/50 focus:border-primary"
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Asunto *</label>
                <select
                  {...register('subject', { required: 'Selecciona un asunto' })}
                  className="w-full h-10 px-3 rounded-lg glass border border-border/50 focus:border-primary bg-transparent text-foreground"
                >
                  <option value="" className="bg-background">Selecciona un asunto</option>
                  {subjects.map((s) => (
                    <option key={s.value} value={s.value} className="bg-background">
                      {s.label}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje *</label>
                <Textarea
                  {...register('message', {
                    required: 'El mensaje es requerido',
                    minLength: { value: 10, message: 'Mínimo 10 caracteres' },
                  })}
                  placeholder="Cuéntame sobre tu proyecto o propuesta..."
                  rows={5}
                  className="glass border-border/50 focus:border-primary resize-none"
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Enviando...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle size={20} />
                    ¡Mensaje Enviado!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
