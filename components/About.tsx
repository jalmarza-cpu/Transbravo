import React from 'react';
import { INDUSTRIAL_STYLES } from '../constants';

export const About: React.FC = () => {
  return (
    <section 
      id="nosotros" 
      className="py-20 relative border-b border-white/10"
      style={INDUSTRIAL_STYLES.ASPHALT_BG}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase mb-8 tracking-tight drop-shadow-md">
            Tu socio estratégico en <span className="text-brand-orange">Terreno</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed">
              <p>
                Sabemos que <strong className="text-white">cada hora cuenta</strong> en una obra. Un retraso en el movimiento de tierras o el retiro de escombros puede paralizar todo el proyecto.
              </p>
              <p>
                Por eso, en <strong className="text-white">TRANSBRAVO</strong> no solo movemos tierra, movemos tu proyecto hacia adelante. Desde 2023, ofrecemos soluciones eficientes con maquinaria propia y operadores que entienden la urgencia de tu cronograma.
              </p>
              <p className="border-l-4 border-brand-orange pl-4 italic text-gray-400">
                "Olvídate de los proveedores que no llegan. Nuestro compromiso es la seriedad y la respuesta inmediata."
              </p>
            </div>
            
            <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 border-2 border-brand-orange/30 rounded-lg transform rotate-2"></div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl" style={INDUSTRIAL_STYLES.BLACK_CHROME}>
                    <img 
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" 
                        alt="Operador Transbravo" 
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <span className="text-brand-orange font-display font-bold uppercase tracking-widest text-sm">Transbravo</span>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};