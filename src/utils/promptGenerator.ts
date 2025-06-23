
export const generateStructuredPrompt = async (briefing: string, apiUrl?: string): Promise<string> => {
  // Se não for fornecida uma URL da API, usa o gerador local
  if (!apiUrl) {
    return generateLocalPrompt(briefing);
  }

  try {
    console.log('Fazendo requisição para a API da OpenAI:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer SUA_CHAVE_DA_API',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Você atua como um especialista em desenvolver prompts eficazes para ferramentas de geração de imagens com inteligência artificial. Com base no briefing apresentado, elabore um prompt bem estruturado e criativo, que traduza com clareza a ideia proposta."
          },
          {
            role: "user",
            content: `Transforme o seguinte briefing em um prompt que será usado por uma IA de geração de imagem:\n\n${briefing.trim()}`
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Resposta da API da OpenAI:', data);
    
    // Extrai o prompt da resposta da OpenAI
    return data.choices?.[0]?.message?.content || generateLocalPrompt(briefing);
    
  } catch (error) {
    console.error('Erro ao fazer requisição para OpenAI:', error);
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
