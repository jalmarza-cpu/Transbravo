import React from 'react';
import { GALLERY_IMAGES, WHATSAPP_LINK, INDUSTRIAL_STYLES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  return (
    <section 
      id="equipos" 
      className="py-24 relative scroll-mt-24"
      style={INDUSTRIAL_STYLES.ASPHALT_BG}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
              Galería de <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.YELLOW_TEXT_GRADIENT}>Equipos</span>
            </h2>
            <p className="text-gray-300 text-lg font-light">
              Equipamiento listo para entrar en faena. Maquinaria International y New Holland.
            </p>
          </div>
          <div className="hidden md:block">
            <a 
               href={WHATSAPP_LINK}
               target="_blank"
               rel="noopener noreferrer"
               className="text-brand-yellow flex items-center gap-2 hover:text-white transition-colors uppercase font-bold tracking-wider"
            >
              Consultar disponibilidad <ArrowUpRight size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative group overflow-hidden rounded-lg aspect-[4/3] shadow-2xl ${
                index === 0 || index === 3 ? 'lg:col-span-2' : ''
              }`}
              style={{ border: '1px solid #333' }}
            >
              {/* Image with enhanced transition: Darker/Desaturated initially -> Full Color/Bright on hover */}
              <img 
                src={image.url} 
                alt={image.alt} 
                loading="lazy"
                className="w-full h-full object-cover transform transition-all duration-700 ease-out group-hover:scale-110 filter saturate-[0.6] contrast-125 brightness-90 group-hover:saturate-100 group-hover:brightness-100"
              />
              
              {/* Industrial Yellow Border Frame - Appears on Hover */}
              <div className="absolute inset-0 border-0 group-hover:border-[6px] border-[#FFCC00] transition-all duration-300 z-20 pointer-events-none box-border"></div>
              
              {/* Backdrop Overlay - Fades in */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4 text-center backdrop-blur-sm z-10">
                {/* Text Badge with Slide Up Animation */}
                <span 
                  className="text-black font-display uppercase font-bold text-lg px-6 py-3 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" 
                  style={INDUSTRIAL_STYLES.YELLOW_STEEL}
                >
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <a 
             href={WHATSAPP_LINK}
             target="_blank"
             rel="noopener noreferrer"
             className="text-brand-yellow inline-flex items-center gap-2 hover:underline uppercase font-bold tracking-wider"
          >
            Consultar disponibilidad <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};