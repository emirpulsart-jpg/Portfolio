
import { GoogleGenAI } from "@google/genai";

// Always initialize GoogleGenAI with a named parameter using the pre-configured API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userMessage: string) => {
  try {
    // Calling generateContent with the model name and parameters directly.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `Vous êtes l'assistant IA d'EliteWeb Studio, une agence de développement web haut de gamme. 
        Votre rôle est de conseiller les clients potentiels sur leurs projets numériques.
        EliteWeb propose 3 types principaux de sites :
        1. Site Vitrine Sombre Pro : Élégant, rapide, performant pour les entreprises établies.
        2. Expérience Immersive : Animations 3D, interactions ludiques, idéal pour les marques créatives.
        3. Solution IA Minimaliste : Design épuré N&B avec chat IA intégré et paramétrable.
        
        Ne parlez JAMAIS de prix spécifiques. Dites toujours que "chaque projet est unique et mérite une étude personnalisée". 
        Restez professionnel, inspirant et axé sur la valeur business. Répondez en français de manière concise.`,
        temperature: 0.7,
      },
    });
    // The text property of GenerateContentResponse provides the generated string directly.
    return response.text;
  } catch (error) {
    console.error("AI Consultation Error:", error);
    return "Je suis désolé, je rencontre une petite difficulté technique. Pourriez-vous reformuler votre question ?";
  }
};