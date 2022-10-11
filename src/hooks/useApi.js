import axios from "axios";
import { useState, useCallback, useEffect } from "react";

function useApi(url, default_value=[]) {
  const [data, setData] = useState(default_value);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await axios.get(url);
      setData(resp.data);
      setError(null);
    } catch(e) {
      setError(e);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(()=>{
    fetchData();
  }, [fetchData]);

  return {
    loading,
    error,
    data,
  }
}

export default useApi;