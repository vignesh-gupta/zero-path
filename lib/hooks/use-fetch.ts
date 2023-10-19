import { useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | unknown>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, loading, fetchData };
};

export default useFetch;
