import React from 'react';
import {
  Award,
  ShieldCheck,
  Headphones,
  Truck,
  Users,
  Clock,
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/logisticsData';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>ISO 9001:2017 Certified Transport & Logistics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            About Super Ittefaq Logistics
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Customer-focused transport and logistics company serving regional and international markets with 17+ years of dedication.
          </p>
        </div>
      </section>

      {/* Main Narrative: Who We Are (Exact words from original website) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Who We Are
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Moving Your Business Forward — Every Mile, Every Shipment
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">Super Ittefaq Logistics</strong> is a customer-focused transport and logistics company serving regional and international markets. We deliver tailored freight solutions — from regional mini goods and LTL consolidation to dedicated FTL services and temperature-controlled shipments.
              </p>
              <p className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-slate-800 font-medium italic">
                “Our mission: to move your business forward with transparency, reliability and responsive service — every mile, every shipment.”
              </p>
              <p>
                We combine a modern fleet, reliable dispatch operations, and experienced teams to ensure secure handling and on-time delivery across Pakistan and neighboring trade routes.
              </p>
            </div>

            {/* Strategic Pillars from the website */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Our Strategic Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {COMPANY_INFO.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="font-black text-sm text-slate-900">{pillar.title}</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image / Info Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
                alt="Super Ittefaq Truck Fleet"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Quality Standard</span>
              </div>
              <h4 className="text-base font-bold">ISO 9001:2017 Certified Operations</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adhering to international quality management guidelines for cargo handling, vehicle roadworthiness, risk mitigation, and dedicated customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-100 py-16 px-4 sm:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              The Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
              Our Core Company Values
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Safety, transparency, and customer service guide every single shipment we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize the safety of our drivers, cargo, and communities at every step. Strict vehicle inspections, driver rest guidelines, and certified securing protocols ensure complete security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Customer Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are committed to providing exceptional customer service with clear communication. Real-time updates, direct WhatsApp access, and 24/7 dispatch helplines keep you informed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We operate with honesty, transparency, and accountability in every shipment. Clear quotes, no hidden accessorial fees, and reliable proof-of-delivery receipts on every delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Fleet Capability */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Fleet & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-sans">
              Purpose-Built Transport Fleet Across Pakistan
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Maintained to the highest mechanical standards to guarantee zero en-route breakdowns and strict on-time dock arrivals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <Truck className="w-6 h-6 text-amber-400" />
              <div className="font-bold text-sm text-white">40ft & 20ft Dry Vans</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Heavy container trailers for bulk manufactured freight, FMCG, and export goods.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <TrendingUp className="w-6 h-6 text-sky-400" />
              <div className="font-bold text-sm text-white">Thermo-King Reefers</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Insulated chambers maintaining continuous -25°C to +25°C for pharmaceuticals & dairy.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <Clock className="w-6 h-6 text-emerald-400" />
              <div className="font-bold text-sm text-white">Mazda & Shahzore Units</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Agile medium-duty trucks for same-day local and inter-district distribution.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <MapPin className="w-6 h-6 text-purple-400" />
              <div className="font-bold text-sm text-white">Depalpur & Okara Depots</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Central staging yards, cross-dock platforms, and 24/7 security dispatch hub.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>All consignments monitored by dedicated operations & dispatch desk</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('team')}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
              >
                Meet Our Leadership
              </button>
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
              >
                Request Route Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
