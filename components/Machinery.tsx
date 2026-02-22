import React from 'react';
import { Truck, Shovel, BoxSelect } from 'lucide-react';
import { INDUSTRIAL_STYLES } from '../constants';

export const Machinery: React.FC = () => {
  return (
    <section 
      className="py-24 relative border-t border-white/10"
      style={INDUSTRIAL_STYLES.ASPHALT_BG}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
              Nuestra <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.YELLOW_TEXT_GRADIENT}>Maquinaria</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto font-light">
              En <strong className="text-white">TRANSBRAVO</strong> contamos con maquinaria propia, lo que nos permite ejecutar trabajos de forma eficiente, segura y sin depender de terceros.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Camiones Tolva */}
            <div 
              className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={INDUSTRIAL_STYLES.BLACK_CHROME}
            >
               <div className="h-1 w-full bg-[#FFCC00]"></div>
               <div className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-brand-dark border border-brand-yellow/30 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                    <Truck size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Camiones Tolva</h3>
                  
                  <div className="space-y-2 mb-6 text-brand-yellow font-bold uppercase text-sm tracking-wider">
                    <p>International 7400 – año 2008</p>
                    <p>Freightliner FL12</p>
                  </div>
                  
                  <p className="text-gray-400 font-light mb-4 text-sm leading-relaxed">
                    Camiones robustos y confiables, ideales para el retiro de escombros y excedentes de obra, asegurando un traslado rápido y ordenado del material.
                  </p>
                  
                  <div className="border-t border-white/10 pt-4 mt-4">
                     <p className="text-xs text-gray-500 uppercase tracking-widest">
                       👉 Aptos para obras pequeñas y medianas en la RM
                     </p>
                  </div>
               </div>
            </div>

            {/* Card 2: Retroexcavadora */}
            <div 
              className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={INDUSTRIAL_STYLES.BLACK_CHROME}
            >
               <div className="h-1 w-full bg-[#FFCC00]"></div>
               <div className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-brand-dark border border-brand-yellow/30 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                    <Shovel size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Retroexcavadora</h3>
                  
                  <div className="space-y-2 mb-6 text-brand-yellow font-bold uppercase text-sm tracking-wider">
                    <p>Retroexcavadora New Holland</p>
                  </div>
                  
                  <p className="text-gray-400 font-light mb-4 text-sm">Equipo versátil diseñado para:</p>
                  <ul className="text-gray-300 space-y-2 text-sm mb-4 list-disc list-inside marker:text-brand-yellow">
                      <li>Excavaciones generales</li>
                      <li>Movimiento de tierras</li>
                      <li>Zanjas</li>
                      <li>Preparación de terrenos</li>
                  </ul>
                  
                   <div className="border-t border-white/10 pt-4 mt-4">
                     <p className="text-xs text-gray-500 uppercase tracking-widest">
                       Permite trabajos precisos en distintos tipos de suelo
                     </p>
                  </div>
               </div>
            </div>

            {/* Card 3: Minicargador */}
            <div 
              className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={INDUSTRIAL_STYLES.BLACK_CHROME}
            >
               <div className="h-1 w-full bg-[#FFCC00]"></div>
               <div className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-brand-dark border border-brand-yellow/30 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                    <BoxSelect size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white uppercase mb-4">Minicargador</h3>
                  
                  <div className="space-y-2 mb-6 text-brand-yellow font-bold uppercase text-sm tracking-wider">
                    <p>Minicargador Bobcat S160</p>
                  </div>
                  
                  <p className="text-gray-400 font-light mb-4 text-sm leading-relaxed">
                    Ideal para espacios reducidos, trabajos urbanos y apoyo en obra donde la maquinaria grande no puede ingresar.
                  </p>
                  
                  <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside marker:text-brand-yellow">
                      <li>Limpieza de terrenos</li>
                      <li>Movimiento en áreas pequeñas</li>
                      <li>Apoyo a excavaciones</li>
                  </ul>
               </div>
            </div>

        </div>
      </div>
    </section>
  );
};