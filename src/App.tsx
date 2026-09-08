import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TeamPage } from './pages/TeamPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);

  // Sync with browser URL hash for true multi-page static site feel
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'projects', 'team', 'faq', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setQuoteServiceId(serviceId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white">
      {/* Primary Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Content Area with Page Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'team' && (
          <TeamPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={navigateTo}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive WhatsApp Helpdesk Popup (Matching original site) */}
      <WhatsAppWidget />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialServiceId={quoteServiceId}
      />
    </div>
  );
}
