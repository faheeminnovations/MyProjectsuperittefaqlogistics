import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const defaultMsg = 'Hello! I am interested in your logistics and freight services.';

  const handleSend = () => {
    const textToSend = encodeURIComponent(customMessage.trim() || defaultMsg);
    window.open(`https://wa.me/${COMPANY_INFO.phoneClean}?text=${textToSend}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat Box Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  🚚
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-300 border-2 border-emerald-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Super Ittefaq Logistics</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Typically replies instantly</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-emerald-700 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-sm shadow-xs border border-slate-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-semibold block mb-1">👋 Hello! How can we help you today?</span>
              We offer dedicated FTL, LTL freight consolidation, regional mini goods transport, and temperature-controlled cold chain services across all major cities of Pakistan.
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>Official WhatsApp Helpdesk • {COMPANY_INFO.phone}</span>
            </div>

            <div className="space-y-2 pt-1">
              <input
                type="text"
                placeholder="Type your freight query or route..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={handleSend}
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>Start WhatsApp Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="floating-whatsapp-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl transition-all hover:scale-105 hover:shadow-2xl focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline">Chat with Logistics Desk</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </button>
    </div>
  );
};
