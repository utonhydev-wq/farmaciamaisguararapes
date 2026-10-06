import React, { useState } from 'react';
import { PHARMACY_INFO, ServiceCategory } from '../data/links';
import {
  ShoppingCart,
  Flame,
  Pill,
  Sparkles,
  Stethoscope,
  Package,
  BadgePercent,
  Smartphone,
  ChevronRight,
  Clock,
  X,
} from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ReactNode> = {
  ShoppingCart: <ShoppingCart className="w-4 h-4 text-emerald-600" />,
  Flame: <Flame className="w-4 h-4 text-amber-500" />,
  Pill: <Pill className="w-4 h-4 text-teal-600" />,
  Sparkles: <Sparkles className="w-4 h-4 text-purple-500" />,
  Stethoscope: <Stethoscope className="w-4 h-4 text-blue-500" />,
  Package: <Package className="w-4 h-4 text-emerald-600" />,
  BadgePercent: <BadgePercent className="w-4 h-4 text-rose-500" />,
  Smartphone: <Smartphone className="w-4 h-4 text-indigo-500" />,
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  return (
    <section aria-label="Serviços e Funcionalidades Preparadas" className="w-full">
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 leading-tight">
              Serviços & Atendimentos
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Canais e categorias da farmácia
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            Em expansão
          </span>
        </div>

        {/* 2-column grid of prepared services */}
        <div className="grid grid-cols-2 gap-2">
          {PHARMACY_INFO.preparedServices.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service)}
              className="group flex flex-col p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/60 hover:border-emerald-200 transition-all text-left min-h-[72px] justify-between active:scale-[0.98]"
            >
              <div className="flex items-center justify-between w-full">
                <div className="w-7 h-7 rounded-lg bg-white shadow-2xs border border-slate-200/60 flex items-center justify-center">
                  {iconMap[service.iconName] || <Pill className="w-4 h-4 text-emerald-600" />}
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
              <div className="mt-2">
                <span className="text-xs font-semibold text-slate-800 group-hover:text-emerald-900 line-clamp-1">
                  {service.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Dialog when tapping a prepared service */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-2xl p-6 shadow-xl border border-slate-100 text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                    {iconMap[selectedService.iconName]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {selectedService.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                      <Clock className="w-3 h-3" />
                      <span>Estrutura preparada</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Para atendimento ou pedidos relacionados a <strong>{selectedService.name}</strong>, entre em contato diretamente com nossa equipe pelo WhatsApp.
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={PHARMACY_INFO.whatsAppList[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Consultar no WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-full min-h-[44px] py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
