import React from 'react';
import { FileCheck, ShieldCheck, HardHat, Building2 } from 'lucide-react';
import { INDUSTRIAL_STYLES } from '../constants';

export const Authority: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden border-y border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-white uppercase tracking-tight leading-tight">
              Cumplimiento Normativo y <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.ORANGE_TEXT_GRADIENT}>Respaldo Legal</span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed border-l-4 border-brand-orange pl-6">
              En Transbravo, la formalidad no es opcional. Operamos bajo estricto cumplimiento de la normativa chilena para garantizar la tranquilidad de tu empresa y la continuidad de tu obra.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4 p-4 rounded bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-colors group">
                <div className="p-3 rounded bg-black border border-white/20 group-hover:border-brand-orange text-brand-orange">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">Facturación Electrónica</h4>
                  <p className="text-xs text-gray-500">Documentación tributaria inmediata y válida ante el SII.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-colors group">
                <div className="p-3 rounded bg-black border border-white/20 group-hover:border-brand-orange text-brand-orange">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">Normativa Laboral</h4>
                  <p className="text-xs text-gray-500">Operadores con contratos y seguros al día (Ley 16.744).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-colors group">
                <div className="p-3 rounded bg-black border border-white/20 group-hover:border-brand-orange text-brand-orange">
                  <HardHat size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">Seguridad en Obra</h4>
                  <p className="text-xs text-gray-500">Protocolos de seguridad y EPP certificado.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-colors group">
                <div className="p-3 rounded bg-black border border-white/20 group-hover:border-brand-orange text-brand-orange">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm mb-1">Empresa Establecida</h4>
                  <p className="text-xs text-gray-500">Domicilio comercial y patente municipal vigente en San Bernardo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Authority */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl rounded-full opacity-20"></div>
            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-sm p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                   <span className="font-display font-bold text-4xl text-brand-orange">SII</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Contribuyente Habilitado</h3>
              <p className="text-gray-400 mb-8 font-light">
                Rutificado y verificado para operar con grandes empresas y constructoras.
              </p>
              
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-orange/10 border border-brand-orange/30 text-brand-orange font-bold uppercase tracking-wider text-sm">
                <FileCheck size={18} />
                <span>Factura Inmediata</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
