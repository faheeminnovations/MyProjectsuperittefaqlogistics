import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  Phone,
  Mail,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/logisticsData';
import { PageId, FaqItem } from '../types';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });

  const categories = ['All', 'General', 'Operations', 'Cold Chain', 'Pricing', 'Fleet'];

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCat = activeCategory === 'All' || faq.category === activeCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Support & Guidance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Find immediate answers regarding transit corridors across Pakistan, cold chain regulations, booking procedures, and quote requests.
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search logistics questions (e.g. cold chain, areas served, FTL, dispatch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-xl border border-slate-200 text-sm focus:border-amber-500 focus:outline-hidden text-slate-900"
            />
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-amber-400 shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
              <p className="text-sm text-slate-500">No matching questions found.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-xs font-bold text-amber-600 underline"
              >
                Clear search filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq: FaqItem) => {
              const isOpen = !!openFaqIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                        {faq.category}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 bg-amber-100 text-amber-800' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* "Need Help?" CTA Card matching original site */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-800 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Need Help?
            </div>
            <h4 className="text-lg font-bold text-white">
              Contact Our Operations Team For Any Custom Questions
            </h4>
            <p className="text-xs text-slate-300">
              Our support desk in Depalpur is ready to assist you 7 days a week.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors flex items-center gap-2 border border-slate-700"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Help</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
