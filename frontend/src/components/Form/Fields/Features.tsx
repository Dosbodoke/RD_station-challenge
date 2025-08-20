import React, { useState } from "react";

import Checkbox from "../../ui/Checkbox";

interface FeaturesProps {
  features: string[];
  onFeatureChange: (feature: string[]) => void;
}

export const Features: React.FC<FeaturesProps> = ({
  features = [],
  onFeatureChange,
}) => {
  const [currentFeatures, setcurrentFeatures] = useState(features);

  const handleFeatureChange = (preference: string) => {
    const updatedPreferences = currentFeatures.includes(preference)
      ? currentFeatures.filter((pref) => pref !== preference)
      : [...currentFeatures, preference];

    setcurrentFeatures(updatedPreferences);
    onFeatureChange(updatedPreferences);
  };

  return (
    <fieldset className="mb-6">
      <h2 className="text-lg font-bold mb-2 text-gray-900">Funcionalidades:</h2>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature}>
            <Checkbox
              type="checkbox"
              name="features"
              label={feature}
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
};
