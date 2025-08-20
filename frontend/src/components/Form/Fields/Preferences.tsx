import React, { useState } from "react";

import Checkbox from "../../ui/Checkbox";

interface PreferencesProps {
  preferences: string[];
  onPreferenceChange: (preferences: string[]) => void;
}

export const Preferences: React.FC<PreferencesProps> = ({
  preferences,
  onPreferenceChange,
}) => {
  const [currentPreferences, setCurrentPreferences] = useState<string[]>([]);

  const handlePreferenceChange = (preference: string) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 text-gray-900">Preferências:</h2>
      <ul>
        {preferences.map((preference, index) => (
          <li key={index} className="mb-2">
            <Checkbox
              type="checkbox"
              name="features"
              label={preference}
              value={preference}
              checked={currentPreferences.includes(preference)}
              onChange={() => handlePreferenceChange(preference)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
