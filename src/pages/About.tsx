import React from "react";
import TeamMemberCard from "@/components/TeamMemberCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Github, Users, Target, Heart, Zap } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Ludwing Valecillos",
      role: "Full-Stack Developer",
      bio: "Soy Ludwing, Desarrollador Full Stack Java + React. Cuento con experiencia en desarrollo de tecnologías clave como React, JavaScript, Tailwind CSS y Redux en el frontend, y Java, Spring Boot, Spring Security y PostgreSQL en el backend. También tengo habilidades en la integración de APIs para construir aplicaciones robustas y eficientes. Trabajo bajo metodologías ágiles como Scrum, aplicando prácticas como daily meetings y workshops que me permiten mantener una comunicación efectiva con el equipo y los clientes, logrando así productos que cumplen con las mejores prácticas del mercado.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHoALbOgYUW3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1668460744460?e=1749686400&v=beta&t=C8Qbt1r7Q-ykKyJ_mrr3lRWxVAnixVeQBpJrgdTsuH8",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Spring Boot",
        "Spring Security",
        "Hibernate",
        "JSON Web Tokens (JWT)",
        "Postman",
        "PostgreSQL",
        "Git",
        "GitHub",
      ],
      github: "https://github.com/LudwingValecillos",
      linkedin: "https://www.linkedin.com/in/ludwingvalecillos/",
    },
    {
      name: "Kevin Noviello",
      role: "Tech-Lead Frontend Developer",
      bio: "Comencé realizando unos cursos de informática para luego expandirme al mundo de las redes estudiando para diseñar, implementar y mantener redes informáticas. Pero me faltaba algo más, necesitaba ofrecer un servicio integral. Así que decidí hacer el salto a la programación, de forma autodidacta al principio y luego realizando varios cursos de interés logrando acceder a certificaciones y armado de proyectos propios. Simultáneamente, mientras desarrollaba mi trabajo personal, ingresé a trabajar en una empresa comercial de nivel nacional como responsable de local donde mis principales tareas abarcan, entre otros, ventas, manejo de recursos humanos y trato con proveedores. Llevo casi 20 años haciendo mis trabajos con gran satisfacción. Me resultan apasionantes y me encuentro muy motivado.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEroNUU7JQ5lA/profile-displayphoto-shrink_800_800/B4DZPSka.sHMAc-/0/1734404584802?e=1749686400&v=beta&t=Uxjrt0P8QXmMeM9S2uWnYn34UZ0e63rosWBBeBbg6oI",
      skills: [
        "React Js",
        "Next Js",
        "Node Js",
        "AXIOS",
        "Git/Github",
        "Agile & Scrum",
      ],
      github: "https://github.com/kevinjoelnoviello",
      linkedin: "https://www.linkedin.com/in/kevinjoelnoviello/",
      website: null,
    },
    {
      name: "Camilo Rodriguez",
      role: "Full-Stack Developer",
      bio: "Estudiante de Analista Programador Universitario en la Universidad Nacional de La Plata, con más de 2 años de experiencia desarrollando aplicaciones web. Trabajo con tecnologías modernas tales como JavaScript, TypeScript, React.js, Next.js, Astro, Zustand, Supabase, TailwindCSS y Node.js, enfocándome en crear aplicaciones pensando principalmente en el usuario, pero sin olvidar la eficacia y la escalabilidad. Cuento con un nivel de inglés acorde al mercado, lo que me permite comprender documentación técnica y colaborar en equipos internacionales. Como hobby, disfruto del desarrollo de videojuegos con Godot, lo que me permite experimentar con lógica creativa y diseño interactivo.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D35AQHFKQXGQf2mrg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726219653135?e=1744750800&v=beta&t=aYnvET_twMXdth1PF5ZUzsWwb0zaA0qCiAFbvKfx1no",
      skills: [
        "NextJs",
        "Desarrollo Web enfocado en Frontend",
        "React",
        "NextJS y Astro",
        "TypeScript",
        "Tailwind",
        "NodeJS",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Supabase y Firebase",
      ],
      github: "https://github.com/rodrigocamilo",
      linkedin: "https://www.linkedin.com/in/rodrigocamilo/",
    },
    {
      name: "Lucio Morales",
      role: "Full-Stack Developer",
      bio: "Desarrollador Fullstack. En mi mente, como desarrollador web, los problemas representan un desafío. Aprendí a desempeñarme en mi campo usando las tecnologías más poderosas del mercado actual para brindar las mejores soluciones a los clientes y usuarios. Mi fuerte como programador es el análisis de requerimientos para lograr un desarrollo de sitios web modernos, eficientes y fáciles de usar para sus visitantes, enfocado en potenciar mi desempeño en Frontend.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGDJGtvEvnAWA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702493080985?e=1749686400&v=beta&t=JuHc_JYgNtuMFSuL5KWS5ot79BPMVLvukaseN2wk4DM",
      skills: ["Javascript", "React Js", "Node Js", "Express Js"],
      github: "https://github.com/rodrigocamilo",
      linkedin: "https://www.linkedin.com/in/lucio-morales/",
    },
  ];

  const values = [
    {
      title: "Excelencia",
      description:
        "Nos esforzamos por la más alta calidad en cada proyecto, buscando siempre superar las expectativas de nuestros clientes.",
    },
    {
      title: "Innovación",
      description:
        "Mantenemosnos a la vanguardia de las últimas tecnologías y tendencias para ofrecer soluciones modernas y efectivas.",
    },
    {
      title: "Colaboración",
      description:
        "Trabajamos en estrecha colaboración con nuestros clientes, asegurando que cada solución se alinee perfectamente con sus objetivos.",
    },
    {
      title: "Transparencia",
      description:
        "Mantenemos una comunicación clara y honesta en cada etapa del proyecto, construyendo relaciones basadas en la confianza.",
    },
    {
      title: "Pasión",
      description:
        "Nos apasiona lo que hacemos, y esta pasión se refleja en la calidad y dedicación que ponemos en cada proyecto.",
    },
    {
      title: "Crecimiento",
      description:
        "Nos comprometemos a crecer junto con nuestros clientes, adaptándonos a sus necesidades cambiantes y ayudándolos a alcanzar sus metas.",
    },
  ];

  window.scrollTo(0, 0);
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos un equipo apasionado de desarrolladores dedicados a crear
              soluciones digitales excepcionales que impulsan el éxito de
              nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Equipo Experto",
                description:
                  "4 desarrolladores especializados en diferentes áreas",
              },
              {
                icon: Target,
                title: "Enfoque",
                description: "Soluciones personalizadas para cada cliente",
              },
              {
                icon: Heart,
                title: "Compromiso",
                description:
                  "Dedicados a la excelencia y satisfacción del cliente",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4 hover-glow">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#003366] relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestros Valores y Cultura
            </h2>
            <p className="text-lg text-muted-foreground">
              Estos principios fundamentales guían nuestra forma de trabajar y
              colaborar con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg text-muted-foreground">
              Un enfoque estructurado para garantizar el éxito de cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Planificación",
                description:
                  "Analizamos tus necesidades y definimos los objetivos del proyecto",
              },
              {
                title: "Diseño",
                description:
                  "Creamos prototipos y diseños que reflejan tu visión",
              },
              {
                title: "Desarrollo",
                description:
                  "Implementamos la solución con las mejores prácticas",
              },
              {
                title: "Entrega",
                description: "Lanzamos y damos soporte continuo a tu proyecto",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover-scale"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-primary/10 rounded-lg p-4 w-fit mx-auto mb-4 hover-glow">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conoce a Nuestro Equipo
            </h2>
            <p className="text-lg text-muted-foreground">
              Un grupo de desarrolladores y diseñadores apasionados
              comprometidos con la entrega de productos digitales excepcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                skills={member.skills}
                github={member.github}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              ¿Listo para Trabajar Juntos?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos hoy para discutir cómo podemos ayudar a hacer realidad
              tu proyecto.
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

export default About;
