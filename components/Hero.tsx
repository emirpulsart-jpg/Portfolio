
import React from 'react';

const Hero: React.FC = () => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[128px] -z-10 animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-400 text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          <span>Prêt pour le futur du web</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
          Concevons votre <br />
          <span className="gradient-text">Signature Numérique</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
          Nous créons des expériences web immersives, performantes et intelligentes pour les marques qui refusent la médiocrité. Pas de compromis, juste l'excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary-900/20"
          >
            Découvrir nos démos
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
          <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Immersif</div>
          <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">IA-Ready</div>
          <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Ultra-Rapide</div>
          <div className="text-sm font-semibold uppercase tracking-widest text-slate-500">Sur-mesure</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
