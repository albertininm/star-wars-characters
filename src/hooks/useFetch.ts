import { useEffect, useState } from 'react';

interface UseFetchProps<CallbackParamType> {
  url: string;
  skip?: boolean;
  onRequestFinish?: (data: CallbackParamType | undefined) => void;
}

const useFetch = <DataType>({url, onRequestFinish, skip}: UseFetchProps<DataType>) => {
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    if(skip) {
      return;
    }

    const triggerRequest = async () => {
      setLoading(true);

      let responseData;

      try {
        const response = await fetch(url);
        responseData = await response.json() as DataType;

        setData(responseData);

        if(onRequestFinish) {
          onRequestFinish(responseData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    triggerRequest();
  }, [url, skip, onRequestFinish]);

  return { error, loading, data };
};

export default useFetch;
