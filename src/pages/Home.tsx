import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Rocket,
  Users,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Monitor,
  Layout,
  Shield,
} from "lucide-react";

const Home = () => {
  const stats = [
    { number: "100+", label: "Proyectos Completados" },
    { number: "50+", label: "Clientes Satisfechos" },
    { number: "4+", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Técnico" },
  ];

  const features = [
    {
      icon: Monitor,
      title: "Desarrollo Web Personalizado",
      description:
        "Creamos sitios web únicos que reflejan tu marca y objetivos comerciales.",
    },
    {
      icon: Layout,
      title: "Diseño UI/UX Moderno",
      description:
        "Interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Implementamos las mejores prácticas de seguridad en cada proyecto.",
    },
    {
      icon: Rocket,
      title: "Alto Rendimiento",
      description:
        "Optimizamos cada aspecto para una velocidad y eficiencia máximas.",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      company: "TechCorp",
      text: "El equipo entregó un producto excepcional que superó nuestras expectativas. Su profesionalismo y atención al detalle son incomparables.",
      rating: 5,
    },
    {
      name: "María González",
      company: "InnovateSoft",
      text: "La comunicación fue excelente durante todo el proyecto. Entendieron perfectamente nuestras necesidades y las transformaron en realidad.",
      rating: 5,
    },
    {
      name: "Juan Pérez",
      company: "DigitalFlow",
      text: "Su experiencia técnica y creatividad nos ayudaron a llevar nuestro proyecto al siguiente nivel. Altamente recomendados.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#6ccff6]/20 rounded-full filter blur-3xl opacity-30 animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#947b57]/20 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-[#6ccff6]/10 text-[#6ccff6] rounded-full px-4 py-2 mb-6 hover-glow">
                <Code2 className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Desarrollo Web Profesional
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#f7f7f7]">
                Transformamos Ideas en{" "}
                <span className="text-[#6ccff6] animate-pulse-slow">
                  Experiencias Digitales
                </span>
              </h1>

              <p className="text-xl text-[#f7f7f7]/80 mb-8">
                Somos un equipo de desarrolladores expertos comprometidos con la
                creación de soluciones web innovadoras y de alto impacto para tu
                negocio.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="hover-scale bg-[#6ccff6] text-[#0f0f0f] hover:bg-[#6ccff6]/90"
                  asChild
                >
                  <Link to="/contact">Iniciar Proyecto</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover-scale group border-[#947b57] text-[#947b57] hover:bg-[#947b57]/10"
                  asChild
                >
                  <Link to="/services">
                    Explorar Servicios
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Development"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f]/20 to-[#6ccff6]/20 mix-blend-overlay" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#6ccff6]/20 to-[#947b57]/20 rounded-xl filter blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#947b57]/5" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#6ccff6]/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-[#6ccff6] mb-2 hover-glow">
                  {stat.number}
                </div>
                <div className="text-[#f7f7f7]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f0f] to-[#0f0f0f]/95" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#947b57]/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>

        <div className="container mx-auto px-4">
          <div
            className="max-w-3xl mx-auto text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f7f7f7]">
              Nuestras Soluciones
            </h2>
            <p className="text-lg text-[#f7f7f7]/80">
              Ofrecemos servicios completos de desarrollo web con las últimas
              tecnologías
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-[#6ccff6]/10 rounded-lg p-4 w-fit mb-4 hover-glow">
                  <feature.icon className="h-6 w-6 text-[#6ccff6]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#f7f7f7]">
                  {feature.title}
                </h3>
                <p className="text-[#f7f7f7]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#947b57]/5" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#6ccff6]/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>

        <div className="container mx-auto px-4">
          <div
            className="max-w-3xl mx-auto text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f7f7f7]">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg text-[#f7f7f7]/80">
              Testimonios de quienes han confiado en nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[#947b57] fill-[#947b57]"
                    />
                  ))}
                </div>
                <p className="text-[#f7f7f7]/80 mb-4">{testimonial.text}</p>
                <div>
                  <div className="font-semibold text-[#f7f7f7]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#6ccff6]">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f0f] to-[#0f0f0f]/95" />
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#947b57]/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>

        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f7f7f7]">
              ¿Listo para Dar el Siguiente Paso?
            </h2>
            <p className="text-lg text-[#f7f7f7]/80 mb-8 max-w-2xl mx-auto">
              Permítenos ayudarte a crear la solución digital perfecta para tu
              negocio. Contáctanos hoy y comencemos a trabajar en tu proyecto.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="hover-scale bg-[#6ccff6] text-[#0f0f0f] hover:bg-[#6ccff6]/90"
                asChild
              >
                <Link to="/contact">Solicitar Cotización</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-scale border-[#947b57] text-[#947b57] hover:bg-[#947b57]/10"
                asChild
              >
                <Link to="/about">Conocer Más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
