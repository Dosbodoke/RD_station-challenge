import { useRecommendation } from "../../providers/recommendation";
import type { Product } from "../../services/product.service";

function RecommendationList() {
  const { recommendations } = useRecommendation();

  if (recommendations.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 border rounded-lg sticky top-4">
        Nenhuma recomendação encontrada.
      </div>
    );
  }

  return (
    <div className="sticky top-4">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações</h2>
      <ul className="space-y-4">
        {recommendations.map((recommendation: Product, index) => (
          <RecommendationItem
            key={recommendation.id}
            index={index}
            {...recommendation}
          />
        ))}
      </ul>
    </div>
  );
}

type RecommendationItemProps = Product & { index: number };

function RecommendationItem({
  name,
  category,
  preferences,
  features,
  index,
}: RecommendationItemProps) {
  return (
    <li
      style={{ animationDelay: `${index * 100}ms` }}
      className="p-4 border rounded-lg shadow-sm bg-white opacity-0 animate-fade-in-up"
    >
      <h3 className="text-md font-semibold">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{category}</p>

      <div className="mb-2">
        <h4 className="text-sm font-medium">Preferências:</h4>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {preferences.map((pref, idx) => (
            <li key={idx}>{pref}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-medium">Funcionalidades:</h4>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default RecommendationList;
