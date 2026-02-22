import React from 'react';
import { FEATURES, INDUSTRIAL_STYLES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section 
      className="py-20 border-y border-white/10 relative z-20"
      style={INDUSTRIAL_STYLES.ASPHALT_BG}
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            // Highlight Facturación Electrónica (id: f4 in new list) or Maquinaria Propia (f1)
            const isHighlighted = feature.id === 'f4';
            
            return (
              <div key={feature.id} className="flex flex-col items-center text-center md:items-start md:text-left group">
                <div 
                  className={`mb-6 p-5 rounded-lg transform transition-all duration-300 ${isHighlighted ? 'scale-110' : 'group-hover:scale-110'}`}
                  style={isHighlighted ? INDUSTRIAL_STYLES.ORANGE_STEEL : { border: '1px solid #333', background: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon size={36} strokeWidth={2} className={isHighlighted ? "text-white" : "text-brand-orange"} />
                </div>
                <h3 className="font-display font-bold text-xl md:text-xl text-white mb-4 uppercase drop-shadow-md">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};