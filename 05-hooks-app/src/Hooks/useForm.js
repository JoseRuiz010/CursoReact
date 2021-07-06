import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const handleInpitchange = ({ target }) => {
    setvalues({
      ...values,
      [target.name]: target.value,
    });
    // console.log(values);
  };
  return [values, handleInpitchange];
};
