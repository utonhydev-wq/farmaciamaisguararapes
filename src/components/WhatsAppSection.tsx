import React, { useState, useEffect } from 'react';
import { PHARMACY_INFO } from '../data/links';
import { WhatsAppIcon } from './Icons';
import { ExternalLink, Clock } from 'lucide-react';
import { motion } from 'motion/react';

function checkIsOnline(): { isOnline: boolean; hoursLabel: string } {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Sao_Paulo',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });
    const parts = formatter.formatToParts(now);

    const weekday = parts.find((p) => p.type === 'weekday')?.value; // 'Sun', 'Mon', etc.
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
    const currentMinutes = hour * 60 + minute;

    const isSunday = weekday === 'Sun';

    if (isSunday) {
      // Domingo: das 07:00 às 23:00
      const isOnline = currentMinutes >= 7 * 60 && currentMinutes < 23 * 60;
      return {
        isOnline,
        hoursLabel: isOnline ? 'Online até 23:00' : 'Abre domingo às 07:00',
      };
    } else {
      // Segunda a Sábado: das 06:00 às 00:00 (meia-noite)
      const isOnline = currentMinutes >= 6 * 60 && currentMinutes < 24 * 60;
      return {
        isOnline,
        hoursLabel: isOnline ? 'Online até 00:00' : 'Abre às 06:00',
      };
    }
  } catch {
    const now = new Date();
    const isSunday = now.getDay() === 0;
    const hour = now.getHours();
    const minute = now.getMinutes();
    const currentMinutes = hour * 60 + minute;

    if (isSunday) {
      const isOnline = currentMinutes >= 7 * 60 && currentMinutes < 23 * 60;
      return {
        isOnline,
        hoursLabel: isOnline ? 'Online até 23:00' : 'Abre domingo às 07:00',
      };
    } else {
      const isOnline = currentMinutes >= 6 * 60 && currentMinutes < 24 * 60;
      return {
        isOnline,
        hoursLabel: isOnline ? 'Online até 00:00' : 'Abre às 06:00',
      };
    }
  }
}

export const WhatsAppSection: React.FC = () => {
  const [status, setStatus] = useState(checkIsOnline);

  useEffect(() => {
    // Re-check status every 60 seconds
    const interval = setInterval(() => {
      setStatus(checkIsOnline());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
              <div className="flex items-center gap-1 text-xs text-slate-500 font-medium mt-0.5">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>Seg-Sáb 06h-00h · Dom 07h-23h</span>
              </div>
            </div>
          </div>

          {status.isOnline ? (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full"
              title="Farmácia em atendimento online"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Online</span>
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full"
              title={status.hoursLabel}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              <span>Fechado agora</span>
            </span>
          )}
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
                    {status.isOnline ? 'Toque para iniciar conversa' : 'Envie sua mensagem no WhatsApp'}
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
