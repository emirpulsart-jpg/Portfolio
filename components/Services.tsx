
import React from 'react';

const services = [
  {
    title: "Stratégie Digitale",
    description: "Nous n'écrivons pas seulement du code. Nous analysons votre marché pour créer un outil qui génère des résultats concrets.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  {
    title: "Design UX/UI",
    description: "Des interfaces pensées pour l'utilisateur, où l'esthétique rencontre la fluidité absolue.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L15.657 13" /></svg>
    )
  },
  {
    title: "Intégration IA",
    description: "Donnez une longueur d'avance à votre site avec des agents intelligents capables d'interagir avec vos visiteurs 24/7.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: "Optimisation SEO",
    description: "Un beau site est inutile s'il n'est pas vu. Nous garantissons un référencement technique de premier ordre.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">Expertise</h2>
        <p className="text-4xl font-extrabold max-w-2xl mx-auto">Plus qu'un développeur, votre partenaire <span className="gradient-text">croissance</span>.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary-600/20 text-primary-400 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
