import React, { useState } from 'react';
import { SERVICES, INDUSTRIAL_STYLES } from '../constants';
import { ServiceModal } from './ServiceModal';
import { ServiceItem } from '../types';
import { Plus } from 'lucide-react';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section 
      id="servicios" 
      className="py-24 relative scroll-mt-24"
      style={INDUSTRIAL_STYLES.ASPHALT_BG}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white uppercase mb-4 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
            Soluciones que <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.ORANGE_TEXT_GRADIENT}>Eliminan Problemas</span> de Obra
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl font-light">
            No dejes que el escombro o el terreno detengan tu avance. Ejecución profesional con estándares técnicos exigentes.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            // Bento Grid Logic
            let gridClass = "";
            if (index === 0) gridClass = "md:col-span-2"; // Retiro de Escombros (Wide)
            else if (index === 1) gridClass = "md:col-span-1"; // Movimiento de Tierras (Tall/Standard)
            else if (index === 2) gridClass = "md:col-span-1"; // Preparación (Standard)
            else if (index === 3) gridClass = "md:col-span-2"; // Excavaciones (Wide)
            else if (index === 4) gridClass = "md:col-span-3"; // Minicargador (Full Width)

            return (
              <div 
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative rounded-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer ${gridClass}`}
                style={INDUSTRIAL_STYLES.BLACK_CHROME}
              >
                {/* Orange Steel Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left z-20" style={INDUSTRIAL_STYLES.ORANGE_STEEL}></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110"
                         style={{ 
                           background: 'rgba(0,0,0,0.5)', 
                           border: '1px solid #FF6600',
                           color: '#FF6600'
                         }}
                    >
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="text-gray-600 group-hover:text-brand-orange transition-colors">
                      <Plus size={24} />
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-gray-100 mb-3 uppercase group-hover:text-brand-orange transition-colors tracking-wide drop-shadow-md">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto inline-block text-xs font-bold text-white uppercase tracking-widest px-3 py-1 rounded opacity-80 group-hover:opacity-100 transition-opacity w-max"
                       style={INDUSTRIAL_STYLES.ORANGE_STEEL}
                  >
                    Ver Detalles
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
};