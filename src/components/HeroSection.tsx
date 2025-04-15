import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-float" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm hover-glow">
              <Sparkles className="h-4 w-4" />
              Equipo de Desarrollo Experto
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transformando Ideas en{" "}
              <span className="text-gradient hover-glow">Realidad Digital</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Un equipo de cuatro desarrolladores expertos y especializados en
              tecnologías web modernas, que entregan soluciones personalizadas
              para tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="hover-scale">
                <Link to="/contact">
                  Iniciar Proyecto <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover-scale"
              >
                <Link to="/services">Nuestros Servicios</Link>
              </Button>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-3">
                Tecnologías de Confianza
              </p>
              <div className="flex flex-wrap gap-6">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                  alt="Express.js"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity bg-white rounded-full p-1"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
                  alt="Supabase"
                  className="h-8 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
            <div className="rounded-xl overflow-hidden shadow-xl hover-scale">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Desarrollo Web"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
