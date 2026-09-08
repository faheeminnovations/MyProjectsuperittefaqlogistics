import React, { useState } from 'react';
import {
  MapPin,
  Truck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  PackageCheck,
  Building2,
  Clock,
} from 'lucide-react';
import { PROJECTS_DATA, COMPANY_INFO } from '../data/logisticsData';
import { PageId, ProjectItem } from '../types';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenQuoteModal,
}) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Commercial', 'Cold Chain', 'Freight', 'Mini Goods'];

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* Header */}
      <section className="bg-slate-950 text-white py-14 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <span>Work of Excellence</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-sans tracking-tight">
            Commercial Projects & Case Studies
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Discover how Super Ittefaq Logistics delivers mission-critical freight distribution, refrigerated cold chains, and intercity supply lines across Pakistan.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                  filter === cat
                    ? 'bg-slate-900 text-amber-400 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <span className="font-bold text-slate-900">{filteredProjects.length}</span> verified logistics projects
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase bg-slate-900/90 backdrop-blur-xs text-amber-400 border border-slate-700 shadow-sm">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded text-[10px] font-semibold bg-emerald-600 text-white shadow-sm">
                    {project.status}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-600 block uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-800">Corridor:</span>
                      <span className="text-slate-600 truncate">{project.route}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Truck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-800">Fleet:</span>
                      <span className="text-slate-600 truncate">{project.fleetUsed}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-semibold text-slate-800">Throughput:</span>
                      <span className="text-slate-600 truncate">{project.volume}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Enterprise & Industrial Shippers
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-sans">
                Looking for a Tailored Logistics Contract?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                We partner with agricultural processors, textile mills, pharmaceutical firms, and FMCG brands across Pakistan to design dedicated freight routes, cross-dock platforms, and guaranteed capacity contracts.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-lg"
              >
                Submit RFP / Contract Request
              </button>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors text-center border border-slate-700"
              >
                Call Leadership: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
