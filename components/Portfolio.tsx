
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'L’Élégance Sombre',
    description: 'Site vitrine premium pour entreprises exigeantes.',
    longDescription: 'Une architecture épurée, un temps de chargement éclair et un design sombre qui respire le professionnalisme. Idéal pour les cabinets de conseil, avocats ou agences de luxe.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    link: 'https://site-demo-1-psi.vercel.app/#/',
    tags: ['Premium', 'Performance'],
    features: ['Design Responsive', 'SEO Optimisé', 'Animations Subtiles'],
    theme: 'dark'
  },
  {
    id: '2',
    title: 'Expérience Immersive',
    description: 'Interactions 3D et navigation ludique.',
    longDescription: 'Un site qui brise les codes du web traditionnel. Des interactions 3D fluides qui captivent l’attention de l’utilisateur et créent une mémorabilité immédiate pour votre marque.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    link: 'https://site-demo-2-j84l.vercel.app/#/',
    tags: ['Creative', '3D Effects', 'Interactive'],
    features: [
      'Moteur 3D temps réel', 
      'Micro-interactions fluides', 
      'Effets de Parallaxe avancés',
      'Narration visuelle captivante',
      'Optimisation mobile sans compromis',
      'Identité visuelle forte'
    ],
    theme: 'creative'
  },
  {
    id: '3',
    title: 'Minimalisme Intelligent',
    description: 'Design N&B avec IA conversationnelle intégrée.',
    longDescription: 'L’alliance parfaite entre esthétique minimaliste et intelligence artificielle. Intègre un chat IA 100% paramétrable pour répondre instantanément à vos clients et qualifier vos leads.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    link: 'https://site-demo-3-moql.vercel.app/#/',
    tags: ['IA', 'Minimalist', 'Next-Gen'],
    features: [
      'IA conversationnelle 24/7', 
      'Design Monochrome intemporel', 
      'Interface ultra-intuitive',
      'Qualité de lead automatisée',
      'Performance de chargement record',
      'Accessibilité AA native'
    ],
    theme: 'minimalist'
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">Nos Démos</h2>
        <p className="text-4xl md:text-5xl font-extrabold">Des solutions pour chaque <span className="gradient-text">ambition</span>.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative glass-card rounded-3xl overflow-hidden transition-all hover:translate-y-[-8px] flex flex-col h-full">
            <div className="aspect-video w-full overflow-hidden shrink-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary-500/10 text-primary-400 rounded-md border border-primary-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                {project.longDescription}
              </p>
              
              <ul className="mb-8 space-y-2">
                {project.features.map(feat => (
                  <li key={feat} className="flex items-center text-xs text-slate-300">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center w-full py-4 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold transition-all text-sm group/btn"
              >
                Voir la démo
                <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
