import { useState } from "react";

export const UseForm = (initialState = {}) => {
  const [form, setform] = useState(initialState);

  const hanndleForm = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const reset = () => {
    setform(initialState);
  };

  return [form, hanndleForm, reset];
};
