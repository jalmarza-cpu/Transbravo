import React, { useEffect } from 'react';
import { X, CheckCircle, Truck, Phone } from 'lucide-react';
import { ServiceItem } from '../types';
import { WHATSAPP_LINK } from '../constants';

interface ServiceModalProps {
  service: ServiceItem;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#1A1A1A] border border-brand-yellow/30 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/50 p-1 rounded-full hover:bg-brand-yellow hover:text-black transition-all"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-brand-yellow p-3 rounded-lg text-black">
              <service.icon size={32} strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-white uppercase">{service.title}</h2>
              <span className="text-brand-yellow text-sm font-bold tracking-wider uppercase">Ficha Técnica de Servicio</span>
            </div>
          </div>

          <div className="space-y-6 text-gray-300">
            <div>
              <p className="text-lg leading-relaxed font-light">{service.details.longDescription}</p>
            </div>

            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h3 className="text-white font-bold uppercase mb-4 flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-yellow" /> Especificaciones
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.details.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-1.5 shrink-0"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                <Truck size={18} className="text-brand-yellow" /> Maquinaria Utilizada
              </h3>
              <p className="text-sm font-light text-gray-400">{service.details.machinery}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <a 
                href={`${WHATSAPP_LINK}&text=Hola Transbravo, me interesa cotizar el servicio de: ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-yellow text-brand-dark font-bold py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white transition-colors uppercase tracking-wide group"
              >
                <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                Cotizar este Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};