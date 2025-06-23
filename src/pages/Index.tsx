import { useState } from 'react';
import BriefingForm from '@/components/BriefingForm';
import PromptCard from '@/components/PromptCard';
import BriefingTips from '@/components/BriefingTips';
import BriefingExamples from '@/components/BriefingExamples';
import { generateStructuredPrompt } from '@/utils/promptGenerator';

const Index = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [originalBriefing, setOriginalBriefing] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGeneratePrompt = async (briefing: string) => {
    setIsLoading(true);
    setOriginalBriefing(briefing);
    
    // Simula um delay de processamento para melhor UX
    setTimeout(() => {
      const prompt = generateStructuredPrompt(briefing);
      setGeneratedPrompt(prompt);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            🎨 Prompt Generator
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Transforme seu briefing em um{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              prompt de imagem com IA
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Converta suas ideias e briefings em prompts estruturados e otimizados 
            para ferramentas de geração de imagem com inteligência artificial.
          </p>
        </div>

        {/* Form Section */}
        <div className="mb-16">
          <BriefingForm 
            onGeneratePrompt={handleGeneratePrompt} 
            isLoading={isLoading}
          />
        </div>

        {/* Results Section */}
        {generatedPrompt && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-3">
                ✨ Seu Prompt Está Pronto!
              </h2>
              <p className="text-gray-600">
                Agora você pode usar este prompt em qualquer ferramenta de IA para gerar imagens incríveis.
              </p>
            </div>
            <PromptCard 
              prompt={generatedPrompt} 
              originalBriefing={originalBriefing}
            />
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="text-lg text-gray-600">
                Estruturando seu prompt...
              </span>
            </div>
          </div>
        )}

        {/* Tips Section */}
        <BriefingTips />

        {/* Examples Section */}
        <BriefingExamples />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            Criado para facilitar a geração de prompts para IA de imagens
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
