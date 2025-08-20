import { useState } from "react";

export interface FormData {
  selectedPreferences: string[];
  selectedFeatures: string[];
  selectedRecommendationType: string;
}

const useForm = (initialState: FormData) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData({ ...formData, [field]: value });
  };

  return { formData, handleChange };
};

export default useForm;
