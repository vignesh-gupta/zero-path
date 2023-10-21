import useAsync from "./use-async";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(url: string, options = {}, dependencies = []) {
  return useAsync(async () => {
    return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(async (res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    });
  }, dependencies);
}
