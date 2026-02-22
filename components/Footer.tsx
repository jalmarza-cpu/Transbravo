import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS, INDUSTRIAL_STYLES } from '../constants';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer 
      id="contacto" 
      className="text-white pt-20 pb-10 border-t border-white/10 relative scroll-mt-24 bg-black"
    >
       {/* ASPHALT TEXTURE OVERLAY */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-100"
        style={INDUSTRIAL_STYLES.ASPHALT_BG}
      ></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-10 text-brand-orange" />
              <span className="font-display font-bold text-2xl tracking-tight text-white drop-shadow-md">
                TRANSBRAVO
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Empresa fundada en 2023. Especialistas en movimiento de tierras, excavaciones y retiro de escombros en la Región Metropolitana.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded flex items-center justify-center transition-all hover:scale-110"
                style={INDUSTRIAL_STYLES.BLACK_CHROME}
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded flex items-center justify-center transition-all hover:scale-110"
                style={INDUSTRIAL_STYLES.BLACK_CHROME}
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 text-brand-orange tracking-wider drop-shadow-sm">Navegación</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="#" onClick={(e) => handleScroll(e, 'top')} className="hover:text-brand-orange transition-colors">Inicio</a></li>
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Servicios</a></li>
              <li><a href="#equipos" onClick={(e) => handleScroll(e, 'equipos')} className="hover:text-brand-orange transition-colors">Equipos</a></li>
              <li><a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="hover:text-brand-orange transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services List - Functional Links */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 text-brand-orange tracking-wider drop-shadow-sm">Servicios</h4>
            <ul className="space-y-3 text-gray-400 font-light">
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Retiro de Escombros</a></li>
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Movimiento de Tierras</a></li>
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Excavaciones</a></li>
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Preparación Terrenos</a></li>
              <li><a href="#servicios" onClick={(e) => handleScroll(e, 'servicios')} className="hover:text-brand-orange transition-colors">Minicargador</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg uppercase mb-6 text-brand-orange tracking-wider drop-shadow-sm">Ubicación y Contacto</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 min-w-[20px] text-brand-orange" size={20} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-brand-orange" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="mt-1 min-w-[20px] text-brand-orange" size={20} />
                <span>Lunes a Sábado<br/>08:00 a 18:00 hrs.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-brand-orange" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors break-all">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <div className="max-w-2xl">
            <p>&copy; 2023 – TRANSBRAVO - Movimiento de Tierras y Retiro de Escombros – Región Metropolitana.</p>
            <p className="mt-2 text-xs opacity-70">Operamos bajo la normativa del SERNAC y leyes chilenas vigentes.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};