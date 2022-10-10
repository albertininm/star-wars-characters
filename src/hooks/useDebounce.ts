import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearInterval(timeoutId);
  }, [value]);

  return debouncedValue;
};

export default useDebounce;