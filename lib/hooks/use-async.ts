import { useCallback, useEffect, useState } from "react";

export default function useAsync(callback: Function, dependencies = []) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  /**************************************************************************
    data: The data returned from the callback
    error: The error thrown from the callback
    loading: A boolean indicating if the callback is currently loading
    fetchData: A function to manually trigger a refetch of the callback
  **************************************************************************/

  return { loading, error, data, fetchData: callbackMemoized };
}
