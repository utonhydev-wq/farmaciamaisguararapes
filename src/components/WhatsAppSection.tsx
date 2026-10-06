import React from 'react';
import { PHARMACY_INFO } from '../data/links';
import { WhatsAppIcon } from './Icons';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppSection: React.FC = () => {
  return (
    <section aria-label="Atendimento pelo WhatsApp" className="w-full">
      <div className="bg-gradient-to-b from-emerald-500/10 to-teal-500/5 rounded-2xl p-4 sm:p-5 border border-emerald-500/20 shadow-xs">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">
                Fale com a Farmácia
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Atendimento rápido pelo WhatsApp
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </span>
        </div>

        {/* 3 WhatsApp Buttons */}
        <div className="flex flex-col gap-2.5">
          {PHARMACY_INFO.whatsAppList.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.25 }}
              className="group relative flex items-center justify-between w-full min-h-[52px] px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-sm hover:shadow transition-all duration-150"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/60 group-hover:bg-emerald-500 flex items-center justify-center transition-colors">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-base font-bold tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-emerald-100 font-normal leading-none mt-0.5">
                    Toque para iniciar conversa
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-200 group-hover:text-white transition-colors">
                <span className="text-xs font-medium hidden xs:inline">Iniciar</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
