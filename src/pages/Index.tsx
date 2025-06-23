
import { useState } from 'react';
import BriefingForm from '@/components/BriefingForm';
import PromptCard from '@/components/PromptCard';
import BriefingTips from '@/components/BriefingTips';
import BriefingExamples from '@/components/BriefingExamples';
import { generateStructuredPrompt } from '@/utils/promptGenerator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Index = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [originalBriefing, setOriginalBriefing] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiUrl, setApiUrl] = useState<string>('');

  const handleGeneratePrompt = async (briefing: string) => {
    setIsLoading(true);
    setOriginalBriefing(briefing);
    
    try {
      console.log('Gerando prompt...', { briefing, apiUrl });
      
      const prompt = await generateStructuredPrompt(briefing, apiUrl || undefined);
      setGeneratedPrompt(prompt);
      
      if (apiUrl) {
        toast.success('Prompt gerado com sucesso!', {
          description: 'Requisição à API da OpenAI realizada com sucesso'
        });
      }
    } catch (error) {
      console.error('Erro ao gerar prompt:', error);
      toast.error('Erro ao gerar prompt', {
        description: 'Usando geração local como fallback'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-white text-center">
            🎨 Prompt Generator
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforme seu briefing em um{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              prompt de imagem com IA
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Converta suas ideias e briefings em prompts estruturados e otimizados 
            para ferramentas de geração de imagem com inteligência artificial.
          </p>
        </div>

        {/* API Configuration */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <Label htmlFor="api-url" className="text-lg font-medium text-gray-200 mb-3 block">
              URL da API da OpenAI (opcional):
            </Label>
            <Input
              id="api-url"
              type="url"
              value={apiUrl}
              onChange={(e) => setApiUrl(e.target.value)}
              placeholder="https://api.openai.com/v1/chat/completions"
              className="text-base bg-gray-700 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 transition-colors duration-200"
            />
            <p className="text-sm text-gray-400 mt-2">
              Se não fornecida, será usado o gerador local. Lembre-se de substituir SUA_CHAVE_DA_API no código pela sua chave real.
            </p>
          </div>
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
              <h2 className="text-3xl font-semibold text-white mb-3">
                ✨ Seu Prompt Está Pronto!
              </h2>
              <p className="text-gray-300">
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
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
              <span className="text-lg text-gray-300">
                {apiUrl ? 'Consultando API da OpenAI...' : 'Estruturando seu prompt...'}
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
      <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Criado para facilitar a geração de prompts para IA de imagens
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
