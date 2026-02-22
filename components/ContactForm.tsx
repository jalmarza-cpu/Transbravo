import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { INDUSTRIAL_STYLES } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Placeholder Webhook URL - User requested space for n8n URL
    const WEBHOOK_URL = 'https://YOUR_N8N_WEBHOOK_URL_HERE'; 

    try {
      // Simulation of API call if URL is placeholder
      if (WEBHOOK_URL.includes('YOUR_N8N')) {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
        console.log('Form Data to Send:', formData);
        setStatus('success');
        return;
      }

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto-form" className="py-20 relative bg-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white uppercase mb-4 tracking-tight">
              Solicita tu <span className="text-transparent bg-clip-text" style={INDUSTRIAL_STYLES.ORANGE_TEXT_GRADIENT}>Cotización</span>
            </h2>
            <p className="text-gray-400 font-light">
              Respuesta rápida. Déjanos tus datos y te contactaremos a la brevedad para coordinar tu servicio.
            </p>
          </div>

          <div className="bg-[#111] p-8 md:p-10 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1" style={INDUSTRIAL_STYLES.ORANGE_STEEL}></div>

            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-gray-400">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-orange hover:text-white transition-colors font-medium"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-600"
                      placeholder="Tu nombre o empresa"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-600"
                      placeholder="+56 9 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-600"
                    placeholder="contacto@empresa.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-wider">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded p-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all placeholder:text-gray-600"
                    placeholder="Describe tu proyecto o servicio que necesitas..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded border border-red-500/20">
                    <AlertCircle size={20} />
                    <span>Hubo un error al enviar el mensaje. Por favor intenta nuevamente.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full font-bold py-4 px-8 rounded flex items-center justify-center transition-all uppercase tracking-wide group hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    ...INDUSTRIAL_STYLES.ORANGE_STEEL,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar Solicitud <Send size={18} />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
