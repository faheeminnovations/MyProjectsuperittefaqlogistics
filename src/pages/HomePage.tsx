import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Headphones,
  Award,
  ArrowRight,
  Boxes,
  Snowflake,
  Navigation,
  Zap,
  ShieldAlert,
  Search,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PROJECTS_DATA, TEAM_DATA } from '../data/logisticsData';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  const heroSlides = [
    {
      badge: '17 Years of Excellence in Transport & Logistics',
      title: 'World Class Logistics Across Pakistan & Beyond',
      subtitle: 'When On-Time Delivery Matters',
      desc: 'Super Ittefaq Logistics delivers end-to-end freight solutions — from regional mini goods and LTL consolidation to dedicated FTL and temperature-controlled cold chain.',
    },
    {
      badge: 'ISO 9001:2017 Certified Carrier',
      title: 'Reliable. Fast. Secure. Your Trusted Freight Partner',
      subtitle: 'Modern Fleet with 24/7 Operations Desk',
      desc: 'Optimized transit routes, certified heavy commercial drivers, and tamper-evident seal verification for your vital commercial consignments.',
    },
    {
      badge: 'Depalpur • Lahore • Karachi • Islamabad • Multan',
      title: 'Connecting Key Trade Corridors Nationwide',
      subtitle: 'Tailored Logistics for Manufacturers & Shippers',
      desc: 'Experience seamless cross-docking, temperature-monitored reefers, and dedicated operations dispatch desks standing by 24/7.',
    },
  ];

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

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 lg:py-24 border-b border-slate-800">
        {/* Subtle background graphics */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Slide selector pills */}
              <div className="flex items-center gap-2">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveHeroSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeHeroSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
                <span className="text-[11px] font-bold text-amber-400 tracking-wider uppercase ml-2">
                  {heroSlides[activeHeroSlide].badge}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-amber-400 font-semibold text-sm sm:text-base tracking-wide uppercase">
                  {heroSlides[activeHeroSlide].subtitle}
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans">
                  {heroSlides[activeHeroSlide].title}
                </h1>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                {heroSlides[activeHeroSlide].desc}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-request-quote-btn"
                  onClick={() => onOpenQuoteModal()}
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm tracking-wide transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2"
                >
                  <span>Request Freight Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  id="hero-explore-services-btn"
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-100 font-bold text-sm tracking-wide transition-all border border-slate-700 hover:border-slate-500 flex items-center gap-2"
                >
                  <span>Explore All Services</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ISO 9001:2017 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Tamper-Proof Sealing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>24/7 Operations Desk</span>
                </div>
              </div>
            </div>

            {/* Right Card: Central Depalpur Office & Dispatch Hub */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug">
                        Depalpur Central Office
                      </h3>
                      <p className="text-xs text-amber-400 font-medium">Super ittefaq mini goods</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                    Open Now
                  </span>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block text-xs">Visit Our Office:</span>
                      <p className="text-slate-300 leading-relaxed mt-0.5">
                        {COMPANY_INFO.address}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-amber-400 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Direct Call</span>
                        <span className="font-bold text-white text-xs">{COMPANY_INFO.phone}</span>
                      </div>
                    </a>

                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-amber-400 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                      <div className="overflow-hidden">
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Email Us</span>
                        <span className="font-bold text-white text-xs truncate block">{COMPANY_INFO.email}</span>
                      </div>
                    </a>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Mon - Fri: <strong className="text-white font-medium">10:00 - 16:00</strong></span>
                    </div>
                    <span className="text-slate-400">Sat: <strong className="text-white font-medium">12:00 - 15:00</strong></span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5 border-t border-slate-800">
                  <a
                    id="hero-directions-link"
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuoteModal()}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs transition-colors border border-slate-700"
                    >
                      Quick Freight Rate
                    </button>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>WhatsApp Desk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 p-6 sm:p-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 sm:p-6 text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Spotlight (Exact content from original superittefaqlogistics.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <span>About Super Ittefaq</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
                We Deliver Reliable Transport Solutions
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Super Ittefaq Logistics provides end-to-end transport and freight services for businesses and individuals. Our primary focus is safety, on-time performance, and complete shipment visibility.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We combine a modern fleet, reliable dispatch coordination, and experienced operations teams to ensure secure handling and on-time delivery across Pakistan and international routes.
            </p>

            {/* Core Values 3-column cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">Safety</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We prioritize the safety of our drivers, cargo, and communities at every step.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <Headphones className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">Customer Service</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We are committed to exceptional customer service with transparent communication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wide">Integrity</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  We operate with honesty, transparency, and accountability in every shipment.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex items-center gap-2"
              >
                <span>Learn More About Our Company</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

          {/* Right Visual Box with Depot Address */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                alt="Logistics Operations"
                className="w-full h-80 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Depalpur Central Operations Hub</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans">
                    Super Ittefaq Mini Goods & Freight
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Razvi Chowk, Dipalpur Okara Road, Depalpur, Pakistan
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium">
                    <span className="text-slate-300">Helpline: +92 300 6967450</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-emerald-400 font-bold">24/7 Dispatch Desk</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid ("We Are Specialists In - What We Do") */}
      <section className="bg-slate-100 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              We Are Specialists In
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
              Comprehensive Transport & Logistics Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From dedicated high-capacity FTL carriers to temperature-regulated pharma cold chain and regional mini goods transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {service.badge && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-amber-500 text-slate-950 shadow-sm">
                        {service.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {service.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-500">
                          <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs transition-colors"
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>Explore All 6 Logistics Divisions</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Corporate Governance & Technology
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight mt-1">
              Company Leadership
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Experienced fleet leadership paired with dedicated software engineering for reliable dispatch operations.
            </p>
          </div>
          <button
            onClick={() => onNavigate('team')}
            className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Meet Full Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-900 shrink-0 relative shadow-inner">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 left-1 right-1 px-1.5 py-0.5 rounded bg-slate-950/85 text-amber-400 text-[9px] font-bold uppercase text-center truncate">
                  {member.role}
                </div>
              </div>

              <div className="space-y-2 flex-1 min-w-0">
                <div>
                  <h3 className="text-lg font-black text-slate-900 truncate">
                    {member.name}
                  </h3>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wide">
                    {member.title}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>

                {member.skills && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {member.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact & Working Hours Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-amber-500 p-8 sm:p-12 text-slate-950 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <span className="px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-bold uppercase tracking-wider">
              Ready to Book Your Freight?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-sans tracking-tight">
              Get an Instant Quote in Under 10 Minutes
            </h2>
            <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
              Our dispatch desk in Depalpur operates 7 days a week. Connect directly via WhatsApp or phone to reserve dedicated trucks, reefer units, or scheduled LTL slots.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Online Quote Form
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
