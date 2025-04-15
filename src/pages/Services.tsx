import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Layout, Layers, Settings, BarChart } from "lucide-react";

const Services = () => {
  window.scrollTo(0, 0);

  return (
    <div className="pt-24 pb-16">
      {/* Sección de Hero */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Ofrecemos soluciones integrales de desarrollo para ayudar a las
              empresas a prosperar en el entorno digital.
            </p>
          </div>
        </div>
      </section>

      {/* Detalles de Servicios */}
      <section
        className="py-16 bg-[#003366] relative overflow-hidden"
        id="web-dev"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6 hover-glow">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Desarrollo Web a Medida
              </h2>
              <p className="text-muted-foreground mb-6">
                Creamos aplicaciones web personalizadas que se alinean con las
                necesidades y objetivos específicos de tu negocio. Nuestro
                proceso de desarrollo se centra en crear soluciones escalables y
                mantenibles que crecen con tu empresa.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Aplicaciones Web Progresivas (PWAs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Aplicaciones de Página Única (SPAs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Plataformas de comercio electrónico</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Aplicaciones empresariales personalizadas</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Solicitar una Cotización</Link>
              </Button>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="rounded-xl overflow-hidden shadow-xl hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Desarrollo Web a Medida"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-background relative overflow-hidden"
        id="ui-ux"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative" data-aos="fade-right">
              <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="rounded-xl overflow-hidden shadow-xl hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Diseño UI/UX"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6 hover-glow">
                <Layout className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Diseño Moderno UI/UX</h2>
              <p className="text-muted-foreground mb-6">
                Creamos interfaces de usuario intuitivas y experiencias
                atractivas que deleitan a los usuarios y cumplen los objetivos
                comerciales. Nuestro proceso de diseño es colaborativo, centrado
                en el usuario y enfocado en lograr resultados tangibles.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>
                    Investigación de usuarios y desarrollo de perfiles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Diseño de wireframes y prototipos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Sistemas de diseño UI y guías de estilo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Diseño de interacción y animación</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Solicitar una Cotización</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366] relative overflow-hidden" id="api">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6 hover-glow">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Integraciones de API y Sistemas
              </h2>
              <p className="text-muted-foreground mb-6">
                Conectamos tus aplicaciones sin problemas con servicios de
                terceros y aseguramos que todos tus sistemas trabajen juntos de
                manera eficiente. Nuestras integraciones son seguras, confiables
                y construidas para la escalabilidad.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Desarrollo de API RESTful</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Integración de pasarelas de pago</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Integración con CRM y ERP</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Conexiones con API de terceros</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Solicitar una Cotización</Link>
              </Button>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="rounded-xl overflow-hidden shadow-xl hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Integraciones de API y Sistemas"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-background relative overflow-hidden"
        id="maintenance"
      >
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative" data-aos="fade-right">
              <div className="absolute -z-10 top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="rounded-xl overflow-hidden shadow-xl hover-scale">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Mantenimiento y Soporte"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6 hover-glow">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Mantenimiento y Soporte
              </h2>
              <p className="text-muted-foreground mb-6">
                Ofrecemos mantenimiento y soporte continuo para asegurar que tus
                aplicaciones se mantengan seguras, actualizadas y funcionen de
                forma óptima. Nuestros planes de soporte son flexibles y se
                adaptan a tus necesidades específicas.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Actualizaciones de seguridad regulares</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Monitoreo del rendimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Correcciones de errores y solución de problemas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Mejoras de funcionalidades</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Solicitar una Cotización</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#003366]" id="seo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary/10 rounded-lg p-4 w-fit mb-6">
                <BarChart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Optimización SEO y de Rendimiento
              </h2>
              <p className="text-muted-foreground mb-6">
                Optimizamos tu presencia web para los motores de búsqueda y
                logramos velocidades de carga ultrarrápidas para una mejor
                experiencia de usuario. Nuestro enfoque combina conocimientos
                técnicos con estrategias de contenido.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Auditorías SEO técnicas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Optimización del rendimiento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Optimización móvil primero</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <span>Mejora de Core Web Vitals</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Solicitar una Cotización</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30"></div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Optimización SEO y de Rendimiento"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-20 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12 text-center"
            data-aos="zoom-in"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar Tu Presencia Digital?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy para discutir los requerimientos de tu proyecto y
              cómo nuestro equipo puede ayudar a hacer realidad tu visión.
            </p>
            <Button size="lg" asChild className="hover-scale">
              <Link to="/contact">Iniciar una Conversación</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
