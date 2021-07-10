import  { useEffect, useRef, useState } from "react";
import "../Components/02-useEffect/efect.css";
export const useFetch = (url) => {
  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setstate({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setTimeout(() => {
            setstate({
              loading: false,
              error: null,
              data,
            });
          }, 4000);
        }
      });
  }, [url]);

  return state;
};
