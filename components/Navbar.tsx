import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_LINK, INDUSTRIAL_STYLES } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/95 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center space-x-3">
            <Logo className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0" />
            <div className="flex flex-col justify-center">
              <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight leading-none">
                TRANSBRAVO
              </span>
              <span className="hidden md:block text-[10px] text-gray-300 tracking-wider uppercase leading-none mt-1">
                Servicios de Movimiento de Tierra y Maquinaria
              </span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-300 hover:text-brand-orange font-medium transition-colors uppercase tracking-wider text-sm">Servicios</a>
            <a href="#equipos" className="text-gray-300 hover:text-brand-orange font-medium transition-colors uppercase tracking-wider text-sm">Equipos</a>
            <a href="#contacto" className="text-gray-300 hover:text-brand-orange font-medium transition-colors uppercase tracking-wider text-sm">Contacto</a>
            <a 
              href="#contacto-form"
              className="text-white font-bold py-2 px-6 rounded hover:scale-105 transition-transform uppercase text-sm"
              style={INDUSTRIAL_STYLES.ORANGE_STEEL}
            >
              Cotizar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark/95 backdrop-blur-sm border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-4 text-center">
            <div className="py-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">
                Servicios de Movimiento de Tierra y Maquinaria
              </span>
            </div>
            <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-orange py-2 font-display uppercase text-xl">Servicios</a>
            <a href="#equipos" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-orange py-2 font-display uppercase text-xl">Equipos</a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-brand-orange py-2 font-display uppercase text-xl">Contacto</a>
            <a 
              href="#contacto-form" 
              className="text-white font-bold py-3 rounded uppercase hover:scale-105 transition-transform"
              style={INDUSTRIAL_STYLES.ORANGE_STEEL}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};