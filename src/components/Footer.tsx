import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, PhoneCall } from "lucide-react";
import logo from "@/assets/logo4.png"; 


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003366] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="" className="w-10 h-10" />
              <span className="text-2xl text-foreground">OBJECTIVE</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Construimos aplicaciones web modernas con tecnologías de
              vanguardia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@devteam.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#web-dev"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Desarrollo Web a Medida
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ui-ux"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Diseño Moderno UI/UX
                </Link>
              </li>
              <li>
                <Link
                  to="/services#api"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Integraciones de API y Sistemas
                </Link>
              </li>
              <li>
                <Link
                  to="/services#maintenance"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Mantenimiento y Soporte
                </Link>
              </li>
              <li>
                <Link
                  to="/services#seo"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Optimización SEO y de Rendimiento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Información de Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  <a
                    href="mailto:contact@devteam.com"
                    className="hover:text-primary transition-colors"
                  >
                    ludwingvaldev@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  <a
                    href="tel:+541173980952"
                    className="hover:text-primary transition-colors"
                  >
                    +54 (11) 7398-0952
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">
                  Trabajando remotamente desde cualquier parte del mundo
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DevTeam. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Política de Privacidad
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
