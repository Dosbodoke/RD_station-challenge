import React from "react";

import useForm from "../../hooks/useForm";
import useProducts from "../../hooks/useProducts";
import { useRecommendation } from "../../providers/recommendation";
import { SubmitButton } from "../ui/SubmitButton";
import { Features } from "./Fields/Features";
import { Preferences } from "./Fields/Preferences";
import { RecommendationType } from "./Fields/RecommendationType";

function Form() {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  });

  const { generateRecommendations } = useRecommendation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateRecommendations(formData, products);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange("selectedPreferences", selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange("selectedFeatures", selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange("selectedRecommendationType", selected)
        }
      />
      <SubmitButton>Obter recomendação</SubmitButton>
    </form>
  );
}

export default Form;
