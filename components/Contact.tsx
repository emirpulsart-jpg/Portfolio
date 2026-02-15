
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">Contact</h2>
          <p className="text-4xl font-extrabold mb-8">Discutons de votre <span className="gradient-text">futur projet</span>.</p>
          
          <p className="text-slate-400 mb-12 leading-relaxed">
            Chaque projet commence par une conversation. Que vous ayez une idée précise ou que vous cherchiez l'inspiration, nous sommes là pour transformer votre vision en réalité numérique d'exception.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Email</p>
                <p className="font-semibold">emirmehmedovic185@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 text-primary-400 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Localisation</p>
                <p className="font-semibold">Annecy, France</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-3xl relative">
          {isSent ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 rounded-3xl z-10 p-8 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Message reçu !</h3>
              <p className="text-slate-400">Nous vous répondrons dans les plus brefs délais pour fixer un rendez-vous.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Nom complet</label>
                <input 
                  required
                  type="text" 
                  value={formState.name}
                  onChange={e => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email professionnel</label>
                <input 
                  required
                  type="email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="jean@entreprise.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Votre projet</label>
                <textarea 
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
                  placeholder="Décrivez-nous brièvement vos objectifs..."
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-900/20"
              >
                Envoyer ma demande
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
