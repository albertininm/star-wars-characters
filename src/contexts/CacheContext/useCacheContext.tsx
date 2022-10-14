import { useContext } from 'react';
import { CacheContext } from './CacheContext';

const useCacheContext = () => {
  return useContext(CacheContext);
};

export default useCacheContext;