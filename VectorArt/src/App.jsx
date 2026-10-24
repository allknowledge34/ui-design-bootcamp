import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import WhatWeDo from './components/WhatWeDo';
import StudioIntro from './components/StudioIntro';
import ScopeBuilder from './components/ScopeBuilder';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import CaseStudyModal from './components/CaseStudyModal';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [scopeBrief, setScopeBrief] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4000);
  };

  const handleOpenInquiry = () => {
    setScopeBrief(null);
    setInquiryOpen(true);
  };

  const handleOpenInquiryWithScope = (scopeData) => {
    setScopeBrief(scopeData);
    setInquiryOpen(true);
  };

  return (
    <div id="top" className="site-wrapper">
      <Navbar onOpenInquiry={handleOpenInquiry} />
      
      <main>
        <Hero onOpenInquiry={handleOpenInquiry} />
        <SelectedWork onSelectProject={(project) => setSelectedCaseStudy(project)} />
        <WhatWeDo onOpenInquiry={handleOpenInquiry} />
        <StudioIntro />
        <ScopeBuilder onOpenInquiryWithScope={handleOpenInquiryWithScope} />
        <FinalCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      <Footer onShowToast={triggerToast} />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialScope={scopeBrief}
        onShowToast={triggerToast}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {toastMessage && (
        <div className="toast-banner" role="status" aria-live="polite">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
