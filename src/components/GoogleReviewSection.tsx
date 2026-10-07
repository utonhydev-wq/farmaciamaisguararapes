import React from 'react';
import { PHARMACY_INFO } from '../data/links';
import { GoogleIcon } from './Icons';
import { Star, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const GoogleReviewSection: React.FC = () => {
  return (
    <section aria-label="Avaliação no Google" className="w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200/90 shadow-xs p-4 sm:p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-2xs">
              <GoogleIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-base font-bold text-slate-900 leading-tight">
                  Avaliação no Google
                </h2>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <div className="flex items-center text-amber-400" aria-label="5 estrelas">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-slate-600 ml-1">
                  5.0
                </span>
              </div>
            </div>
          </div>

          <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 px-2 py-0.5 rounded-full shrink-0">
            Google Reviews
          </span>
        </div>

        <p className="text-xs text-slate-600 mb-3.5 leading-relaxed">
          Sua opinião é fundamental para continuarmos cuidando da sua saúde com excelência. Conte como foi sua experiência conosco!
        </p>

        {/* CTA Button to write review */}
        <motion.a
          href={PHARMACY_INFO.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.98 }}
          className="group flex items-center justify-between w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:from-blue-800 active:to-blue-900 text-white font-semibold text-sm transition-all shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/15 group-hover:bg-white/20 flex items-center justify-center">
              <Star className="w-3.5 h-3.5 fill-white text-white" />
            </div>
            <span>Deixar avaliação no Google</span>
          </div>

          <div className="flex items-center gap-1.5 text-blue-100 group-hover:text-white text-xs font-medium">
            <span>Avaliar</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};
