import React from 'react';
import {
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  Briefcase,
} from 'lucide-react';
import { TEAM_DATA, COMPANY_INFO } from '../data/logisticsData';
import { PageId } from '../types';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Our People & Leadership</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Meet the Professionals Behind Every Mile
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            From executive leadership and fleet engineers to certified heavy drivers, our dedicated team ensures your cargo arrives securely and on time.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Executive & Engineering Management
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-sans tracking-tight">
            Our Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Guiding Super Ittefaq Logistics with proven operational experience, software engineering innovation, and ISO-certified quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEAM_DATA.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-all"
            >
              <div className="sm:w-2/5 h-72 sm:h-auto overflow-hidden bg-slate-900 relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-500/30">
                  {member.role}
                </div>
              </div>

              <div className="sm:w-3/5 p-6 sm:p-7 space-y-4 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 font-sans">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-0.5">
                      {member.title}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Member Email */}
                  {member.email && (
                    <div className="pt-1">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-amber-600 font-medium transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="underline">{member.email}</span>
                      </a>
                    </div>
                  )}

                  {/* Skills / Expertise Tags */}
                  {member.skills && (
                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {member.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 border border-slate-200/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Operational Focus:
                  </div>
                  <div className="space-y-1.5">
                    {member.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operational & Field Coordination Structure */}
      <section className="bg-slate-100 py-16 px-4 sm:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
              Operations & Technical Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
              24/7 Dispatch Control & Engineering Support
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Reporting directly to executive management, our operational divisions coordinate continuous linehauls and driver dispatch nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Depalpur Dispatch Desk</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Around-the-clock coordinator team assigning vehicles, logging departure waybills, and issuing highway clearance.
              </p>
              <div className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded inline-block">
                24/7 Active
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Fleet Safety & Maintenance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified vehicle mechanics ensuring brakes, tires, and mechanical systems satisfy national motorway standards.
              </p>
              <div className="text-[10px] font-bold text-sky-600 uppercase bg-sky-50 px-2 py-0.5 rounded inline-block">
                Daily Audits
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Cold Chain Technicians</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized cooling engineers maintaining Thermo King reefer units at strict pharmaceutical & food temperatures.
              </p>
              <div className="text-[10px] font-bold text-purple-600 uppercase bg-purple-50 px-2 py-0.5 rounded inline-block">
                Temp Certified
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-slate-900">Commercial Client Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated client managers providing instant route quotes, electronic delivery receipts, and billing coordination.
              </p>
              <div className="text-[10px] font-bold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded inline-block">
                Direct Helpline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Safety & Professional Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Safety & Driver Culture
            </span>
            <h3 className="text-xl sm:text-3xl font-black font-sans">
              100% Verified Commercial Heavy Drivers
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every driver operating a Super Ittefaq Logistics vehicle undergoes verified background checks, defensive driving assessments, and ongoing training on national motorway regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-amber-400 font-bold text-sm">Strict Rest Cycles</div>
              <p className="text-[11px] text-slate-400">Mandated rest stops every 4 hours along national highway routes.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-emerald-400 font-bold text-sm">Alcohol & Drug Zero-Tolerance</div>
              <p className="text-[11px] text-slate-400">Regular random screening and compliance audits for all transport crew.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <div className="text-sky-400 font-bold text-sm">Electronic Trip Logging</div>
              <p className="text-[11px] text-slate-400">Live speed, braking, and GPS coordinates tracked directly by dispatch.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
