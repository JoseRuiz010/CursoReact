import React, { useEffect, useState } from "react";
import "../Components/02-useEffect/efect.css";
export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setstate({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);

  return state;
};
