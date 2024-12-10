import { Crown } from "lucide-react";

export const PremiumBenefits = () => {
  return (
    <div>
      <h4 className="text-3xl font-serif text-gold mb-8">
        Benefícios Premium
      </h4>
      <ul className="space-y-6">
        <li className="flex items-start gap-4 text-gray-300 group">
          <div className="p-2 rounded-lg bg-black/30 border border-gold/20 group-hover:border-gold/40 transition-colors">
            <Crown className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h5 className="font-medium text-white mb-1">Atendimento VIP</h5>
            <p className="text-sm text-gray-400">Agendamento prioritário e serviço personalizado</p>
          </div>
        </li>
        <li className="flex items-start gap-4 text-gray-300 group">
          <div className="p-2 rounded-lg bg-black/30 border border-gold/20 group-hover:border-gold/40 transition-colors">
            <Crown className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h5 className="font-medium text-white mb-1">Produtos Premium</h5>
            <p className="text-sm text-gray-400">Linha exclusiva de produtos importados</p>
          </div>
        </li>
        <li className="flex items-start gap-4 text-gray-300 group">
          <div className="p-2 rounded-lg bg-black/30 border border-gold/20 group-hover:border-gold/40 transition-colors">
            <Crown className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h5 className="font-medium text-white mb-1">Serviços Ilimitados</h5>
            <p className="text-sm text-gray-400">Todos os serviços sem restrições</p>
          </div>
        </li>
      </ul>
    </div>
  );
};