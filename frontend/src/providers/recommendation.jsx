import { createContext, useContext, useState } from "react";
import recommendationService from "../services/recommendation.service";

const RecommendationContext = createContext({
  recommendations: [],
  generateRecommendations: () => {},
  clearRecommendations: () => {},
});

export const RecommendationProvider = ({ children }) => {
  const [recommendations, setRecommendations] = useState([]);

  const generateRecommendations = (formData, products) => {
    const recommendations = recommendationService.getRecommendations(formData, products);
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
