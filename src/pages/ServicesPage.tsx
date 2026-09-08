import React, { useState } from 'react';
import {
  Truck,
  Boxes,
  Snowflake,
  Navigation,
  Zap,
  ShieldAlert,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_INFO } from '../data/logisticsData';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ftl');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck':
        return <Truck className="w-5 h-5 text-amber-500" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-amber-500" />;
      case 'Snowflake':
        return <Snowflake className="w-5 h-5 text-sky-500" />;
      case 'Navigation':
        return <Navigation className="w-5 h-5 text-emerald-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
      default:
        return <Truck className="w-5 h-5 text-amber-500" />;
    }
  };

  const activeService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>Core Logistics Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Our Logistics Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Tailored freight management — from high-capacity FTL trunk lines and consolidated LTL networks to cold chain and 24/7 dispatch operations support.
          </p>
        </div>
      </section>

      {/* Interactive Service Detail Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Quick Service Switcher Tabs */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-2 mb-2">
              Select Logistics Division
            </span>
            {SERVICES_DATA.map((srv) => {
              const isSelected = srv.id === selectedServiceId;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{srv.title}</div>
                      <div
                        className={`text-[11px] truncate max-w-[180px] sm:max-w-[220px] ${
                          isSelected ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {srv.shortDesc}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}

            {/* Quick Contact Box on Left */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 mt-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
                <HelpCircle className="w-4 h-4" />
                <span>Custom Freight Requirements?</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Need multi-drop distribution, return logistics, or customized contracts? Our freight consultants are available 7 days a week.
              </p>
              <div className="pt-1 flex items-center gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full py-2 px-3 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Full Service Deep Dive Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 uppercase">
                      {activeService.badge || 'Standard Service'}
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      ISO 9001:2017 Certified Workflow
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-sans">
                    {activeService.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wide text-xs">
                  Operational Overview
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeService.fullDesc}
                </p>
              </div>

              {/* Service Specifications Grid */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Service Specifications & Capabilities
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeService.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                    >
                      <div className="text-[10px] uppercase font-bold text-slate-400">
                        {spec.label}
                      </div>
                      <div className="text-xs font-bold text-slate-800 leading-tight">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Key Service Standards
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Backed by dedicated dispatch desk in Depalpur</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Call Dispatch</span>
                  </a>
                  <button
                    id={`book-${activeService.id}-btn`}
                    onClick={() => onOpenQuoteModal(activeService.id)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Request Rate Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Fleet & Working Hours Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Operating Schedule
              </span>
              <h3 className="text-xl sm:text-3xl font-black font-sans">
                Scheduled Departures 7 Days a Week
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                We maintain active daily routes connecting Lahore, Karachi, Islamabad, Faisalabad, Multan, and regional feeder depots.
              </p>
            </div>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-2 shrink-0 shadow-lg"
            >
              <span>Check Departure Timings on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
