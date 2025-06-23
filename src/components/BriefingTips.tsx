
import { Lightbulb, Target, Users, Palette, MessageSquare } from 'lucide-react';

const BriefingTips = () => {
  const tips = [
    {
      icon: Target,
      title: "Seja específico sobre o produto",
      description: "Ex: \"tênis de corrida leve para iniciantes\" em vez de apenas \"tênis\"",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Indique o público-alvo",
      description: "Ex: \"para jovens atletas\" ou \"voltado para mães modernas\"",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Palette,
      title: "Diga o tom visual desejado",
      description: "Ex: \"visual divertido e colorido\" ou \"estilo minimalista e elegante\"",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Evite frases genéricas",
      description: "Seja detalhado e criativo. Quanto mais contexto, melhor o resultado!",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3 flex items-center justify-center gap-2">
          <Lightbulb className="w-8 h-8 text-yellow-500" />
          Dicas para melhorar seu briefing
        </h2>
        <p className="text-gray-600 text-lg">
          Transforme suas ideias em prompts mais eficazes seguindo essas sugestões
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip, index) => {
          const IconComponent = tip.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${tip.color} flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            ✨ Lembre-se
          </h3>
          <p className="text-gray-700">
            Quanto mais detalhes você fornecer, mais preciso e criativo será o prompt gerado!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BriefingTips;
