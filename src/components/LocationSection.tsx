import React from 'react';
import { PHARMACY_INFO } from '../data/links';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const LocationSection: React.FC = () => {
  return (
    <section aria-label="Localização da Farmácia" className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs p-4 sm:p-5">
        {/* Background visual map lines motif */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:12px_12px]" />

        <div className="relative flex flex-col gap-3.5">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 leading-tight">
                  Encontre a Farmácia
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Veja a rota no Google Maps
                </p>
              </div>
            </div>
            
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full shrink-0">
              Loja Física
            </span>
          </div>

          {/* Action button: Como chegar */}
          <motion.a
            href={PHARMACY_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                <Navigation className="w-3.5 h-3.5 text-white" />
              </div>
              <span>Como chegar</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300 group-hover:text-white text-xs font-medium">
              <span>Abrir Mapa</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
