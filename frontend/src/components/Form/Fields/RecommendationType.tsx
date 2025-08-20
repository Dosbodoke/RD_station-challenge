import React, { useState } from "react";
import Checkbox from "../../ui/Checkbox";

interface RecommendationTypeProps {
  onRecommendationTypeChange: (type: string) => void;
  selectedRecommendation: string;
}

export const RecommendationType: React.FC<RecommendationTypeProps> = ({
  onRecommendationTypeChange,
  selectedRecommendation,
}) => {
  const [currentRecomendation, setCurrentRecomendation] = useState(
    selectedRecommendation
  );

  const handleRecommendationTypeChange = (type: string) => {
    setCurrentRecomendation(type);
    onRecommendationTypeChange(type);
  };

  return (
    <fieldset className="mb-6">
      <legend className="text-base font-semibold text-gray-900 mb-4">
        Tipo de Recomendação
      </legend>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Checkbox
          type="radio"
          name="recommendationType"
          label="Produto Único"
          description="Recomendar o melhor produto."
          value="SingleProduct"
          checked={currentRecomendation === "SingleProduct"}
          noCheckmarkIcon
          onChange={() => handleRecommendationTypeChange("SingleProduct")}
        />
        <Checkbox
          type="radio"
          name="recommendationType"
          label="Múltiplos Produtos"
          description="Recomendar uma lista de opções."
          value="MultipleProducts"
          checked={currentRecomendation === "MultipleProducts"}
          noCheckmarkIcon
          onChange={() => handleRecommendationTypeChange("MultipleProducts")}
        />
      </div>
    </fieldset>
  );
};
