import React from 'react';
import { PHARMACY_INFO } from '../data/links';
import { InstagramIcon, WhatsAppIcon } from './Icons';
import { MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pt-6 pb-12 px-4 mt-6 border-t border-slate-200/80 flex flex-col items-center text-center">
      <div className="flex items-center gap-1.5 mb-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <h3 className="text-sm font-bold text-slate-900 tracking-tight">
          {PHARMACY_INFO.name}
        </h3>
      </div>

      <p className="text-xs text-slate-500 max-w-xs font-normal mb-4">
        {PHARMACY_INFO.slogan}
      </p>

      {/* Links rápidos */}
      <nav aria-label="Links rápidos do rodapé" className="flex items-center justify-center gap-4 py-2 mb-4 text-xs font-medium text-slate-600">
        <a
          href={PHARMACY_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-pink-600 transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
          <span>Instagram</span>
        </a>

        <span className="text-slate-300" aria-hidden="true">·</span>

        <a
          href={PHARMACY_INFO.whatsAppList[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        <span className="text-slate-300" aria-hidden="true">·</span>

        <a
          href={PHARMACY_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-emerald-700 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
          <span>Localização</span>
        </a>
      </nav>

      {/* Official copyright & trust note */}
      <div className="text-[11px] text-slate-400 flex flex-col items-center gap-1">
        <p className="flex items-center gap-1">
          <span>Central Oficial de Links</span>
          <span>•</span>
          <span>© {currentYear} {PHARMACY_INFO.name}</span>
        </p>
        <p className="flex items-center gap-1 text-[10px] text-slate-400">
          <span>Feito com carinho para sua saúde</span>
          <Heart className="w-2.5 h-2.5 text-emerald-500 fill-emerald-500 inline" />
        </p>
      </div>
    </footer>
  );
};
