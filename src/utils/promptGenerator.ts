
export const generateStructuredPrompt = (briefing: string): string => {
  // Simula o processamento de um briefing em um prompt estruturado
  // Em uma implementação real, isso seria conectado a uma API de IA
  
  const prompt = `${briefing.trim()}

--ar 16:9 --style raw --v 6.1

Parâmetros técnicos:
- Resolução: Alta qualidade
- Estilo: Fotorrealista profissional
- Iluminação: Natural e bem balanceada
- Composição: Regra dos terços
- Cores: Vibrantes e equilibradas
- Detalhamento: Ultra detalhado, sharp focus`;

  return prompt;
};

export const enhanceBriefing = (briefing: string): string => {
  // Adiciona elementos técnicos ao briefing para melhorar o prompt
  const enhancedElements = [
    "professional photography",
    "high quality",
    "detailed",
    "sharp focus",
    "good lighting",
    "cinematic composition"
  ];

  const randomElements = enhancedElements
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .join(", ");

  return `${briefing}, ${randomElements}`;
};
