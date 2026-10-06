import React, { useState } from 'react';
import { PHARMACY_INFO } from '../data/links';
import { Share2, Check, QrCode, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onOpenQr: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQr }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: PHARMACY_INFO.name,
      text: PHARMACY_INFO.slogan,
      url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <header className="relative w-full pt-4 pb-2 px-4 flex flex-col items-center text-center">
      {/* Top utility row: Share and QR Code buttons */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Canal Oficial</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenQr}
            aria-label="Ver QR Code do perfil"
            className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all shadow-xs active:scale-95"
            title="QR Code da página"
          >
            <QrCode className="w-4 h-4" />
          </button>
          
          <button
            type="button"
            onClick={handleShare}
            aria-label="Compartilhar página"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 transition-all shadow-xs text-xs font-medium active:scale-95"
            title="Compartilhar link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copiado!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Compartilhar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Official Pharmacy Logo */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mb-3"
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 opacity-25 blur-sm group-hover:opacity-40 transition-opacity" />
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white shadow-md border-2 border-emerald-500/20 overflow-hidden flex items-center justify-center">
          {!imgError ? (
            <img
              src={PHARMACY_INFO.logoUrl}
              alt={PHARMACY_INFO.name}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex flex-col items-center justify-center text-white p-2">
              <span className="text-xl font-bold tracking-tight">MAIS</span>
              <span className="text-[9px] uppercase tracking-wider text-emerald-100 font-semibold">Guararapes</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Name and Official Badge */}
      <div className="flex items-center justify-center gap-1.5 mb-1.5">
        <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {PHARMACY_INFO.name}
        </h1>
        <span
          className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-600 text-white shadow-xs"
          title="Perfil Oficial Verificado"
          aria-label="Perfil Oficial Verificado"
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </span>
      </div>

      {/* Institutional Slogan */}
      <p className="text-sm text-slate-600 max-w-sm font-normal leading-relaxed text-balance">
        {PHARMACY_INFO.slogan}
      </p>
    </header>
  );
};
