
import { Copy, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const BriefingExamples = () => {
  const examples = [
    {
      category: "E-commerce",
      briefing: "Crie uma imagem promocional para tênis de corrida premium voltado para corredores urbanos. O visual deve ser moderno e dinâmico, com cores vibrantes como azul elétrico e laranja. Mostre o tênis em movimento em um cenário urbano noturno com luzes da cidade ao fundo. Adicione elementos que transmitam velocidade e performance.",
      description: "Exemplo focado em produto específico com público-alvo definido"
    },
    {
      category: "Alimentação",
      briefing: "Desenvolva uma foto apetitosa de um hambúrguer gourmet artesanal para restaurante sofisticado. O ambiente deve ser elegante com iluminação quente e aconchegante. Inclua ingredientes frescos visíveis, pão brioche dourado e apresentação profissional em prato de cerâmica. O estilo deve ser clean e minimalista para atrair público adulto de classe média alta.",
      description: "Briefing detalhado sobre apresentação e ambiente"
    },
    {
      category: "Tecnologia",
      briefing: "Crie uma imagem conceitual para aplicativo de meditação direcionado a jovens profissionais estressados. Use tons pastéis suaves como lavanda e mint, com elementos zen como pedras empilhadas e folhas. A composição deve transmitir calma e serenidade, com uma estética minimalista e moderna. Adicione sutil referência tecnológica sem ser invasiva.",
      description: "Exemplo que combina conceito abstrato com público específico"
    },
    {
      category: "Moda",
      briefing: "Desenvolva uma campanha visual para coleção de roupas sustentáveis voltada para mulheres conscientes de 25-35 anos. Use cenário natural com luz solar suave, cores terrosas como bege e verde oliva. A modelo deve transmitir confiança e naturalidade, usando peças fluidas e confortáveis. Inclua elementos que remetam à sustentabilidade sem ser literal.",
      description: "Briefing completo com perfil demográfico e valores da marca"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Briefing copiado!', {
      description: 'O exemplo foi copiado para sua área de transferência'
    });
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
          <Lightbulb className="w-8 h-8 text-green-500" />
          Exemplos de Briefings Eficazes
        </h2>
        <p className="text-gray-600 text-lg">
          Inspire-se com estes exemplos práticos de briefings bem estruturados
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-green-700 text-lg">
                  {example.category}
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(example.briefing)}
                  className="flex items-center gap-2 hover:bg-green-50"
                >
                  <Copy className="w-4 h-4" />
                  Copiar
                </Button>
              </div>
              <CardDescription className="text-sm text-gray-600 italic">
                {example.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-sm">
                "{example.briefing}"
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            💡 Dica Extra
          </h3>
          <p className="text-gray-700">
            Clique em "Copiar" em qualquer exemplo acima e cole no campo de briefing para testar!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BriefingExamples;
