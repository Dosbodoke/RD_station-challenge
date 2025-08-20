import { createContext, useContext, useState } from "react";
import recommendationService from "../services/recommendation.service";
import type { Product } from "../services/product.service";
import type { FormData } from "../hooks/useForm";

interface RecommendationContextType {
  recommendations: Product[];
  generateRecommendations: (formData: FormData, products: Product[]) => void;
  clearRecommendations: () => void;
}

const RecommendationContext = createContext<RecommendationContextType>({
  recommendations: [],
  generateRecommendations: () => {},
  clearRecommendations: () => {},
});

export const RecommendationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const generateRecommendations = (formData: FormData, products: Product[]) => {
    const recommendations = recommendationService.getRecommendations(
      formData,
      products
    );
    setRecommendations(recommendations);
  };

  const clearRecommendations = () => {
    setRecommendations([]);
  };

  const value = {
    recommendations,
    generateRecommendations,
    clearRecommendations,
  };

  return (
    <RecommendationContext.Provider value={value}>
      {children}
    </RecommendationContext.Provider>
  );
};

export const useRecommendation = () => {
  const context = useContext(RecommendationContext);

  if (!context) {
    throw new Error(
      "useRecommendation must be used within a RecommendationProvider"
    );
  }

  return context;
};

export default RecommendationContext;
