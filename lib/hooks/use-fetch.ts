import { useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  return { data, error, isLoading, fetchData };
};

export default useFetch;
