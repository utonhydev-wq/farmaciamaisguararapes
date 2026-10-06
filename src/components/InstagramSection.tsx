import React from 'react';
import { PHARMACY_INFO } from '../data/links';
import { InstagramIcon } from './Icons';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const InstagramSection: React.FC = () => {
  return (
    <section aria-label="Instagram Oficial" className="w-full">
      <motion.a
        href={PHARMACY_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={{ scale: 0.98 }}
        className="group relative flex items-center justify-between w-full min-h-[58px] p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-pink-300 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden"
      >
        {/* Subtle accent gradient bar on hover */}
        <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />

        <div className="flex items-center gap-3.5 pl-1.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#fd1d1d] via-[#e1306c] to-[#833ab4] text-white flex items-center justify-center shadow-xs">
            <InstagramIcon className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-slate-900 group-hover:text-pink-700 transition-colors">
                Siga a Farmácia no Instagram
              </span>
              <Sparkles className="w-3.5 h-3.5 text-pink-500 inline" />
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {PHARMACY_INFO.instagramHandle}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white text-slate-700 text-xs font-semibold transition-all">
          <span>Acessar</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </motion.a>
    </section>
  );
};
