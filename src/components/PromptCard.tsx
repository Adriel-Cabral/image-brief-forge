
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PromptCardProps {
  prompt: string;
  originalBriefing: string;
}

const PromptCard = ({ prompt, originalBriefing }: PromptCardProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast({
        title: "Prompt copiado!",
        description: "O prompt foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o prompt. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <Card className="shadow-xl border-0 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-semibold text-gray-800 flex items-center justify-between">
            Prompt Estruturado Gerado
            <Button
              onClick={handleCopy}
              variant="outline"
              size="sm"
              className="ml-4 hover:bg-blue-50 border-blue-200 transition-colors duration-200"
            >
              {copied ? (
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              ) : (
                <Copy className="w-4 h-4 mr-2" />
              )}
              {copied ? 'Copiado!' : 'Copiar'}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              🎯 Prompt Otimizado:
            </h3>
            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-base">
              {prompt}
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-600 mb-2">
              📝 Briefing Original:
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              {originalBriefing}
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="text-sm font-medium text-blue-800 mb-2">
              💡 Dica de Uso:
            </h4>
            <p className="text-blue-700 text-sm">
              Copie este prompt e use em ferramentas de IA como DALL-E, Midjourney, Stable Diffusion ou outras para gerar imagens incríveis!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptCard;
