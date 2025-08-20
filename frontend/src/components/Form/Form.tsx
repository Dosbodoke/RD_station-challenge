import React, { useState } from "react";

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
    selectedRecommendationType: "MultipleProducts",
  });

  const { generateRecommendations } = useRecommendation();

  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      preferences: formData.selectedPreferences.length === 0,
      features: formData.selectedFeatures.length === 0,
    };
    const allEmpty = Object.values(newErrors).every(Boolean);

    if (allEmpty) {
      setError(true);
      return;
    }

    setError(false);
    generateRecommendations(formData, products);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200"
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
        selectedRecommendation={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange("selectedRecommendationType", selected)
        }
      />
      <SubmitButton error={error}>Obter recomendação</SubmitButton>
    </form>
  );
}

export default Form;
