import React, { useState } from 'react';
import { PHARMACY_INFO } from '../data/links';
import { Tag, Sparkles, Image as ImageIcon, Eye, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './Icons';

export const PromotionsSection: React.FC = () => {
  const [showTemplateCard, setShowTemplateCard] = useState(true);

  return (
    <section aria-label="Promoções e Ofertas da Farmácia" className="w-full">
      <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xs p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Tag className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-tight">
                Área de Promoções
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Encarte e ofertas especiais
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowTemplateCard(!showTemplateCard)}
            className="flex items-center gap-1 text-[11px] font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-full transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>{showTemplateCard ? 'Estrutura ativa' : 'Ver modelo'}</span>
          </button>
        </div>

        {/* Notice explaining this section is prepared for future additions */}
        <div className="p-3 rounded-xl bg-gradient-to-r from-rose-50/60 to-amber-50/40 border border-rose-100 text-xs text-slate-700 mb-3.5 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Estrutura pronta para os encartes e ofertas da semana. Para saber quais promoções estão vigentes hoje na farmácia, consulte nosso atendimento:
          </p>
        </div>

        {/* Template card illustrating the exact structure ready for insertion */}
        {showTemplateCard && (
          <div className="relative border border-dashed border-rose-300 rounded-xl p-3.5 bg-rose-50/20 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 bg-rose-100 px-2 py-0.5 rounded-md">
                Modelo de Card de Promoção
              </span>
              <span className="text-[10px] text-slate-500">Pronto para cadastro</span>
            </div>

            <div className="flex gap-3">
              {/* Foto do produto */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-400 shrink-0">
                <ImageIcon className="w-6 h-6 stroke-1 text-slate-400" />
                <span className="text-[9px] mt-1 text-slate-500 font-medium">Foto Produto</span>
              </div>

              {/* Informações: Nome, Preço, Preço promocional, Percentual de desconto */}
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="text-[11px] font-bold text-rose-700 bg-rose-100/90 px-1.5 py-0.5 rounded">
                      -% OFF
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">Desconto</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">
                    Nome do Produto Promocional
                  </h3>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-xs text-slate-400 line-through">
                      R$ --,--
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700">
                      R$ --,--
                    </span>
                  </div>
                </div>

                {/* Botão para WhatsApp */}
                <a
                  href={PHARMACY_INFO.whatsAppList[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs transition-colors"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>Pedir no WhatsApp</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 text-emerald-200" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Action button to consult current promotions on WhatsApp */}
        <a
          href={PHARMACY_INFO.whatsAppList[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full min-h-[44px] py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
          <span>Consultar promoções vigentes pelo WhatsApp</span>
        </a>
      </div>
    </section>
  );
};
