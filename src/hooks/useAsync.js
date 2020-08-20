import { useEffect, useState } from "react";

function useAsync(asyncFunction) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function doFetch() {
      try {
        setLoading(true);
        setError(false);
        setData(null);
        const data = await asyncFunction();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    doFetch();
  }, [asyncFunction]);

  return { data, loading, error };
}

export default useAsync;
