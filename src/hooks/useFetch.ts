import { useEffect, useState } from 'react';

interface FetchOptions<CallbackParamType> {
  onRequestFinish?: (data: CallbackParamType | undefined) => void;
  skip?: boolean;
}

interface UseFetchProps<CallbackParamType> {
  url: string;
  options?: FetchOptions<CallbackParamType>;
}

const useFetch = <DataType>({url, options}: UseFetchProps<DataType>) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if(options?.skip) {
      return;
    }

    const triggerRequest = async () => {
      setLoading(true);

      let responseData;

      try {
        const response = await fetch(url);
        responseData = await response.json() as DataType;

        setData(responseData);

        if(options?.onRequestFinish) {
          options?.onRequestFinish(responseData);
        }
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
