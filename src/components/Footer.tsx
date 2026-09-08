import React from 'react';
import {
  Truck,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Highlight Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 py-10 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>ISO 9001:2017 Certified Freight Carrier</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
              Need Reliable Freight or Mini Goods Transport in Pakistan?
            </h3>
            <p className="text-sm text-slate-400">
              Speak directly with our 24/7 logistics dispatch team for custom routing and instant rates.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call +92 300 6967450</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>WhatsApp Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Truck className="w-5 h-5" />
              </div>
              <span className="text-lg font-black tracking-tight text-white font-sans">
                SUPER ITTEFAQ
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Super Ittefaq Logistics is a dedicated transport & logistics provider offering FTL, LTL, refrigerated, and mini goods regional transport with 24/7 dispatch operational support across Pakistan.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>17+ Years of Operational Excellence</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Global Certificate: <span className="text-slate-200 font-bold">ISO 9001:2017</span>
            </div>
          </div>

          {/* Column 2: Working Hours (Exact from site) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Working Hours</span>
            </h4>
            <p className="text-xs text-slate-400">
              We work 7 days a week, every day excluding major national holidays.
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-400">Monday - Friday:</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.hours.weekdays}</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-400">Saturday:</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.hours.saturday}</span>
              </li>
              <li className="flex items-center justify-between border-b border-slate-900 pb-1.5">
                <span className="text-slate-400">Sunday & Holidays:</span>
                <span className="text-slate-200 font-semibold">{COMPANY_INFO.hours.sundayAndHolidays}</span>
              </li>
              <li className="flex items-center justify-between pt-1">
                <span className="text-amber-400 font-medium">Dispatch Operations Desk:</span>
                <span className="text-emerald-400 font-bold">24 / 7 Active</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Full Truckload (FTL) Dedicated</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Less Than Truckload (LTL) Consolidation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Refrigerated & Cold Chain</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Regional Mini Goods Transport</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Cross-Docking & Distribution</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-slate-500" />
                  <span>Specialized & Oversized Cargo</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Office & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Super ittefaq mini goods, Razvi Chowk, Dipalpur Okara Road, Depalpur, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                id="footer-maps-link"
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded bg-slate-900 border border-slate-700 hover:border-amber-400 text-xs font-semibold text-slate-200 hover:text-amber-400 transition-colors flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>View Office on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-slate-950/90 border-t border-slate-900 py-6 px-4 sm:px-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            Copyright © 2026, <span className="text-slate-300 font-semibold">Super Ittefaq Logistics</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => handleNav('about')} className="hover:text-slate-200">
              About
            </button>
            <span>•</span>
            <button onClick={() => handleNav('team')} className="hover:text-slate-200">
              Our People
            </button>
            <span>•</span>
            <button onClick={() => handleNav('faq')} className="hover:text-slate-200">
              FAQ
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-200">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
