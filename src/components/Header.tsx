import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Award,
  Menu,
  X,
  Truck,
  MessageSquare,
  ChevronDown,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal?: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  const navItems: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Company', hasDropdown: true },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Our Leadership' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setCompanyDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Bar matching original superittefaqlogistics.com */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate max-w-xs sm:max-w-md md:max-w-none">
              Super ittefaq mini goods, Razvi Chowk, Dipalpur Okara Road, Depalpur, Pakistan
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium">
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon-Fri: {COMPANY_INFO.hours.weekdays} | Sat: {COMPANY_INFO.hours.saturday}</span>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              title="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding & Header Info Area */}
      <div className="bg-white py-3 px-4 sm:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-slate-800 transition-colors">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                  SUPER ITTEFAQ
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wide">
                  Logistics
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Transport • Freight • Cold Chain • Mini Goods
              </p>
            </div>
          </button>

          {/* Quick info boxes on large screens */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <Phone className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Call Hotline</div>
                <div className="text-xs font-bold text-slate-800">{COMPANY_INFO.phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-slate-400 uppercase font-semibold">Global Quality</div>
                <div className="text-xs font-bold text-slate-800">{COMPANY_INFO.certification}</div>
              </div>
            </div>

            <a
              id="header-whatsapp-btn"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-all hover:shadow"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Primary Navigation Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                const isCompanyActive =
                  currentPage === 'about' || currentPage === 'team' || currentPage === 'faq';
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setCompanyDropdownOpen(true)}
                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`flex items-center gap-1.5 px-4 py-3 text-sm font-semibold transition-colors ${
                        isCompanyActive
                          ? 'text-amber-400 bg-slate-800'
                          : 'text-slate-200 hover:text-amber-400 hover:bg-slate-800/60'
                      }`}
                    >
                      <span>Company</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>

                    {companyDropdownOpen && (
                      <div className="absolute left-0 top-full w-48 bg-slate-900 border border-slate-800 rounded-b-lg shadow-xl py-2 z-50">
                        <button
                          onClick={() => handleNavClick('about')}
                          className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-800 transition-colors ${
                            currentPage === 'about' ? 'text-amber-400' : 'text-slate-200'
                          }`}
                        >
                          About Us & Legacy
                        </button>
                        <button
                          onClick={() => handleNavClick('team')}
                          className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-800 transition-colors ${
                            currentPage === 'team' ? 'text-amber-400' : 'text-slate-200'
                          }`}
                        >
                          Our People & Team
                        </button>
                        <button
                          onClick={() => handleNavClick('faq')}
                          className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-800 transition-colors ${
                            currentPage === 'faq' ? 'text-amber-400' : 'text-slate-200'
                          }`}
                        >
                          Frequently Asked Questions
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}-btn`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-sm font-semibold transition-colors relative ${
                    isActive
                      ? 'text-amber-400 bg-slate-800'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Dispatch: {COMPANY_INFO.phone}</span>
            </a>
            <button
              id="header-instant-quote-btn"
              onClick={() => onOpenQuoteModal?.()}
              className="px-4 py-1.5 rounded text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 px-4 py-4 space-y-1">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'home' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'about' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'services' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Logistics Services
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'projects' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('team')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'team' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Our Leadership
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'faq' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded text-sm font-semibold ${
              currentPage === 'contact' ? 'bg-slate-800 text-amber-400' : 'text-slate-200'
            }`}
          >
            Contact Us & Office
          </button>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal?.();
              }}
              className="w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs text-center"
            >
              Get Instant Freight Quote
            </button>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Operations Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
