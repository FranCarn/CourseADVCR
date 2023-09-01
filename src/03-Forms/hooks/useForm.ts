import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialValue: T) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    ...formData,
    formData,
    handleChange,
  };
};
