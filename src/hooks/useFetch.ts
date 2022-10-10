import { useEffect } from 'react';
import { useState } from 'react';

const useFetch = <ResultType>(url: string) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [previousUrl, setPreviousUrl] = useState<string>('');
  const [results, setResults] = useState<ResultType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const triggerRequest = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);
        const {results, next, previous, total} = await response.json();

        setResults(results);
        setNextUrl(next);
        setPreviousUrl(previous);
        setTotal(total);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    triggerRequest();
  }, [url]);

  return {error, loading, nextUrl, previousUrl, results, total};
};

export default useFetch;