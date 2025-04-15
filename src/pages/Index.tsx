import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Code, Layout, Layers, BarChart, ArrowUpRight, CheckCircle } from 'lucide-react';

const Index = () => {
  const services = [
    {
      title: 'Desarrollo Web a Medida',
      description: 'Construimos aplicaciones web y sitios diseñados a medida para satisfacer las necesidades y objetivos específicos de tu negocio.',
      icon: Code,
      link: '/services#web-dev'
    },
    {
      title: 'Diseño Moderno UI/UX',
      description: 'Creamos interfaces de usuario intuitivas y experiencias atractivas que mantienen a los usuarios volviendo a tu plataforma.',
      icon: Layout,
      link: '/services#ui-ux'
    },
    {
      title: 'Integraciones de APIs y Sistemas',
      description: 'Conecta sin problemas tus aplicaciones con servicios de terceros y asegura que todos tus sistemas trabajen en conjunto.',
      icon: Layers,
      link: '/services#api'
    },
    {
      title: 'SEO y Rendimiento',
      description: 'Optimiza tu presencia web para los motores de búsqueda y alcanza velocidades de carga ultra rápidas para mejorar la experiencia del usuario.',
      icon: BarChart,
      link: '/services#seo'
    }
  ];

  const testimonials = [
    {
      quote: "El equipo de desarrollo entregó nuestro proyecto a tiempo y superó nuestras expectativas. Su experiencia técnica y comunicación fueron excepcionales durante todo el proceso.",
      name: "Sarah Johnson",
      company: "TechStart Inc."
    },
    {
      quote: "Trabajar con este equipo fue sin complicaciones. Entendieron perfectamente nuestros requerimientos y construyeron una solución que transformó nuestras operaciones comerciales.",
      name: "Michael Rodriguez",
      company: "Global Solutions Ltd."
    },
    {
      quote: "Su atención al detalle y habilidades para resolver problemas son impresionantes. El equipo no solo programa; piensan estratégicamente en los objetivos comerciales.",
      name: "Emma Thompson",
      company: "DataFlow Systems"
    }
  ];

  const advantages = [
    {
      title: "Desarrolladores Expertos",
      description: "Especializados en React, JavaScript, APIs y tecnologías web modernas"
    },
    {
      title: "Calidad Primero",
      description: "Código limpio y bien documentado con procedimientos de prueba exhaustivos"
    },
    {
      title: "Proceso Transparente",
      description: "Actualizaciones regulares y comunicación clara durante todo el desarrollo"
    },
    {
      title: "Diseño Responsivo",
      description: "Todas las aplicaciones construidas con enfoque móvil primero"
    },
    {
      title: "Enfoque en el Rendimiento",
      description: "Optimizado para velocidad, SEO y excelente experiencia del usuario"
    },
    {
      title: "Soporte Continuo",
      description: "Mantenimiento y actualizaciones disponibles después del lanzamiento"
    }
  ];
  window.scrollTo(0, 0);


  return (
    <>
      <HeroSection />
      
      {/* Sección de Servicios */}
      <section className="py-20 bg-[#003366]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-muted-foreground text-lg">
              Ofrecemos servicios integrales de desarrollo para hacer realidad tus ideas digitales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild>
              <Link to="/services">
                Ver todos los servicios <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sección "Por Qué Elegirnos" */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Elegirnos</h2>
            <p className="text-muted-foreground text-lg">
              Combinamos excelencia técnica con un enfoque en los objetivos de tu negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Testimonios */}
      <section className="py-20 bg-[#003366]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-muted-foreground text-lg">
              No te limites a nuestras palabras: escucha a las personas con las que hemos trabajado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Llamado a la Acción */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Empezar Tu Proyecto?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Hablemos de cómo nuestro equipo puede ayudar a hacer realidad tus ideas con nuestra experiencia técnica y creatividad en la resolución de problemas.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Construyamos Juntos</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
