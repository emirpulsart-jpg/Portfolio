
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
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
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="text-2xl font-extrabold tracking-tighter mb-6">
              ELITE<span className="text-primary-500">WEB</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              Agence de développement web spécialisée dans les sites vitrines haut de gamme et les expériences numériques d'exception.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                <button key={social} className="text-slate-500 hover:text-white transition-colors text-sm font-medium bg-transparent border-none cursor-pointer">
                  {social}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={(e) => scrollToSection(e, 'home')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors bg-transparent border-none cursor-pointer p-0">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'portfolio')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors bg-transparent border-none cursor-pointer p-0">
                  Démos
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'contact')} className="text-slate-400 hover:text-primary-400 text-sm transition-colors bg-transparent border-none cursor-pointer p-0">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Légal</h4>
            <ul className="space-y-4">
              <li><button className="text-slate-400 hover:text-primary-400 text-sm transition-colors bg-transparent border-none cursor-pointer p-0">Mentions Légales</button></li>
              <li><button className="text-slate-400 hover:text-primary-400 text-sm transition-colors bg-transparent border-none cursor-pointer p-0">Confidentialité</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between text-slate-500 text-xs font-medium">
          <p>© {new Date().getFullYear()} EliteWeb Studio. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0">Contact: emirmehmedovic185@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
