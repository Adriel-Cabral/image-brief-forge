
export const generateStructuredPrompt = async (briefing: string, apiUrl?: string): Promise<string> => {
  // Se não for fornecida uma URL da API, usa o gerador local
  if (!apiUrl) {
    return generateLocalPrompt(briefing);
  }

  try {
    console.log('Fazendo requisição para:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        briefing: briefing.trim(),
        timestamp: new Date().toISOString(),
        request_type: 'prompt_generation'
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Resposta da API:', data);
    
    // Assume que a API retorna um objeto com uma propriedade 'prompt'
    return data.prompt || data.result || data.generated_prompt || generateLocalPrompt(briefing);
    
  } catch (error) {
    console.error('Erro ao fazer requisição:', error);
    // Fallback para geração local em caso de erro
    return generateLocalPrompt(briefing);
  }
};

// Função local mantida como fallback
const generateLocalPrompt = (briefing: string): string => {
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
