
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: "Bonjour ! Je suis l'assistant d'EliteWeb. Quel type de projet souhaitez-vous lancer ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold text-primary-500 uppercase tracking-[0.3em] mb-4">Innovation</h2>
        <p className="text-4xl font-extrabold mb-4">Besoin d'un <span className="gradient-text">conseil</span> ?</p>
        <p className="text-slate-400">Notre IA est formée pour vous orienter vers la solution la plus adaptée à vos besoins.</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 bg-white/5 border-b border-white/10 flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-semibold tracking-wide uppercase opacity-70">Agent de Consultation EliteWeb</span>
        </div>

        <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-primary-600 text-white rounded-tr-none' 
                : 'bg-white/10 text-slate-200 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex space-x-2">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white/5 border-t border-white/10 flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Décrivez votre besoin..."
            className="flex-1 bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 text-white rounded-xl font-bold transition-all"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIConsultant;
