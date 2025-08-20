import React, { useState } from "react";

import Checkbox from "../../ui/Checkbox";

interface FeaturesProps {
  features: string[];
  selectedFeatures?: string[];
  onFeatureChange: (features: string[]) => void;
}

export const Features: React.FC<FeaturesProps> = ({
  features,
  selectedFeatures = [],
  onFeatureChange,
}) => {
  const [currentFeatures, setCurrentFeatures] = useState(selectedFeatures);

  const handleFeatureChange = (feature: string) => {
    const updatedFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter((pref) => pref !== feature)
      : [...currentFeatures, feature];

    setCurrentFeatures(updatedFeatures);
    onFeatureChange(updatedFeatures);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Funcionalidades:</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              type="checkbox"
              value={feature}
              checked={currentFeatures.includes(feature)}
              onChange={() => handleFeatureChange(feature)}
            >
              {feature}
            </Checkbox>
          </li>
        ))}
      </ul>
    </div>
  );
};
