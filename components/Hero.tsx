import React from 'react';
import { ChevronRight, FileCheck } from 'lucide-react';
import { WHATSAPP_LINK, INDUSTRIAL_STYLES } from '../constants';

export const Hero: React.FC = () => {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Real Machinery (Retroexcavadora) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/retroexcavadora.jpg" 
          alt="Retroexcavadora New Holland trabajando" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ASPHALT TEXTURE OVERLAY - Global Industrial Style */}
      <div 
        className="absolute inset-0 z-1 pointer-events-none opacity-60 mix-blend-multiply"
        style={INDUSTRIAL_STYLES.ASPHALT_BG}
      ></div>

      {/* Gradient Overlays for Readability and Depth */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/95 via-black/80 to-black/50"></div>
      
      {/* Vignette for cinematic look */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle,transparent_40%,#000000_100%)]"></div>
      
      {/* Content - Z-INDEX INCREASED TO 20 to sit above bottom fade */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-4xl">
          <div className="flex flex-wrap gap-4 mb-6">
            <div 
              className="inline-block px-4 py-1 rounded backdrop-blur-sm transform -skew-x-12"
              style={{
                border: '1px solid #FF6600',
                background: 'rgba(0,0,0,0.6)'
              }}
            >
              <span className="block transform skew-x-12 text-brand-orange font-bold uppercase tracking-widest text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Experiencia y compromiso desde 2023
              </span>
            </div>

            {/* B2B Badge - Factura */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1 rounded backdrop-blur-sm transform -skew-x-12 bg-white/10 border border-white/20"
            >
              <div className="transform skew-x-12 flex items-center gap-2">
                <FileCheck size={16} className="text-brand-orange" />
                <span className="text-white font-bold uppercase tracking-widest text-xs">
                  Emitimos Factura Electrónica
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6 uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            ¿Retrasos en tu obra por falta de <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.ORANGE_TEXT_GRADIENT}>transporte confiable?</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-2xl mb-10 max-w-2xl font-light drop-shadow-md border-l-4 border-brand-orange pl-6">
            <span className="block mb-2 font-medium text-white">El tiempo es dinero y una máquina parada cuesta millones.</span>
            Transbravo: Movimiento de tierras y retiro de escombros con precisión y puntualidad garantizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#contacto"
              className="font-bold py-4 px-8 rounded flex items-center justify-center transition-all transform hover:scale-105 uppercase tracking-wide group shadow-[0_0_20px_rgba(255,102,0,0.3)] hover:shadow-[0_0_30px_rgba(255,102,0,0.5)] border border-orange-600"
              style={{
                ...INDUSTRIAL_STYLES.ORANGE_STEEL,
                color: '#fff',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Solicitar Cotización
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicios"
              onClick={scrollToServices}
              className="border-2 border-white/40 bg-black/40 text-white hover:bg-brand-orange hover:border-brand-orange hover:text-white font-bold py-4 px-8 rounded flex items-center justify-center transition-all uppercase tracking-wide backdrop-blur-md cursor-pointer shadow-lg"
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade - Z-10 stays below content Z-20 */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent z-10"></div>
    </section>
  );
};