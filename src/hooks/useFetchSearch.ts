import { useEffect, useRef, useState } from 'react';

const useFetch = <ResultType>(url: string) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [previousUrl, setPreviousUrl] = useState<string>('');
  const [results, setResults] = useState<ResultType[]>([]);
  const [total, setTotal] = useState(0);

  const abortController = useRef(new AbortController());

  useEffect(() => {
    if(!url) {
      return;
    }

    const triggerRequest = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {signal: abortController.current.signal});
        const { results, next, previous, total } = await response.json();

        setResults(results);
        setNextUrl(next);
        setPreviousUrl(previous);
        setTotal(total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    triggerRequest();

    return () => {
      abortController.current.abort();
      abortController.current = new AbortController();
    };
  }, [url]);

  const fetchPage = async (url: string) => {
    setLoading(true);

    try {
      const response = await fetch(url, {signal: abortController.current.signal});
      const { results, next, previous, total } = await response.json();

      setResults(results);
      setNextUrl(next);
      setPreviousUrl(previous);
      setTotal(total);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    loading,
    results,
    total,
    fetchNextPage: () => fetchPage(nextUrl),
    fetchPreviousPage: () => fetchPage(previousUrl),
    hasNextPage: Boolean(nextUrl),
    hasPreviousPage: Boolean(previousUrl),
  };
};

export default useFetch;
