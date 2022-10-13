import { useEffect, useState } from 'react';

const useFetch = <DataType>(url: string) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    const triggerRequest = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const responseData = await response.json() as DataType;

        setData(responseData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    triggerRequest();
  }, [url]);

  return { error, loading, data };
};

export default useFetch;
