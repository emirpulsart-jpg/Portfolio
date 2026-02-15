
import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 my-4 rounded-2xl md:mx-auto md:max-w-5xl">
      <div className="px-6 py-4 flex items-center justify-between">
        <button 
          onClick={(e) => scrollToSection(e, 'home')}
          className="text-2xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity bg-transparent border-none cursor-pointer p-0"
        >
          ELITE<span className="text-primary-500">WEB</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={(e) => scrollToSection(e, 'home')}
            className={`text-sm font-medium transition-colors hover:text-primary-400 bg-transparent border-none cursor-pointer ${
              activeSection === 'home' ? 'text-primary-500' : 'text-slate-400'
            }`}
          >
            Accueil
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className={`text-sm font-medium transition-colors hover:text-primary-400 bg-transparent border-none cursor-pointer ${
              activeSection === 'contact' ? 'text-primary-500' : 'text-slate-400'
            }`}
          >
            Contact
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary-900/20 border-none cursor-pointer"
          >
            Nous contacter
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-100 bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 space-y-4 border-t border-white/10 glass-card rounded-b-2xl flex flex-col items-start">
          <button
            onClick={(e) => scrollToSection(e, 'home')}
            className="block w-full text-left text-slate-300 hover:text-white bg-transparent border-none py-2"
          >
            Accueil
          </button>
          <button
            onClick={(e) => scrollToSection(e, 'contact')}
            className="block w-full text-left text-slate-300 hover:text-white bg-transparent border-none py-2"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
