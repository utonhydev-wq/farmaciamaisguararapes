import React, { useState } from 'react';
import { PHARMACY_INFO } from '../data/links';
import { X, Check, Copy, Share2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://farmaciamaisguararapes.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: PHARMACY_INFO.name,
          text: PHARMACY_INFO.slogan,
          url: currentUrl,
        });
        onClose();
      } catch {
        // Ignored
      }
    } else {
      handleCopy();
    }
  };

  // QR Code URL using high-reliability QR code API with fallbacks
  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    currentUrl
  )}&margin=10&color=064e3b&bgcolor=ffffff`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 text-center relative"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Compartilhar Bio Site
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Escaneie o QR Code no balcão ou compartilhe o link oficial
            </p>

            {/* QR Code Container */}
            <div className="w-48 h-48 mx-auto p-3 bg-white rounded-2xl border-2 border-slate-100 shadow-inner flex items-center justify-center mb-4">
              <img
                src={qrCodeImageUrl}
                alt={`QR Code ${PHARMACY_INFO.name}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* URL Display and Copy */}
            <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-xl mb-4">
              <span className="text-xs text-slate-600 truncate flex-1 text-left px-2 font-mono">
                {currentUrl}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            {/* Share CTA */}
            <button
              type="button"
              onClick={handleNativeShare}
              className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Enviar para alguém</span>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
