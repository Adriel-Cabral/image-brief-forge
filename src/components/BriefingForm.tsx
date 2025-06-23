
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles } from 'lucide-react';

interface BriefingFormProps {
  onGeneratePrompt: (briefing: string) => void;
  isLoading?: boolean;
}

const BriefingForm = ({ onGeneratePrompt, isLoading = false }: BriefingFormProps) => {
  const [briefing, setBriefing] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (briefing.trim()) {
      onGeneratePrompt(briefing);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto space-y-6">
      <div className="space-y-3">
        <label 
          htmlFor="briefing" 
          className="text-lg font-medium text-gray-700 block"
        >
          Cole ou digite seu briefing aqui:
        </label>
        <Textarea
          id="briefing"
          value={briefing}
          onChange={(e) => setBriefing(e.target.value)}
          placeholder="Exemplo: Preciso de uma imagem para campanha de verão, mostrando uma família feliz na praia, cores vibrantes, estilo fotográfico profissional..."
          className="min-h-[200px] text-base resize-none border-2 border-gray-200 focus:border-blue-400 transition-colors duration-200"
          disabled={isLoading}
        />
      </div>
      
      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={!briefing.trim() || isLoading}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {isLoading ? 'Gerando...' : 'Gerar Prompt'}
        </Button>
      </div>
    </form>
  );
};

export default BriefingForm;
