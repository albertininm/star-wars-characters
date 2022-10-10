import { apiUrls } from '@/helpers/urls';
import { Planet } from '@/types';
import useDebounce from './useDebounce';
import useFetch from './useFetch';

const useFetchPlanets = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<Planet>(apiUrls.films(debouncedSearch));
};

export default useFetchPlanets;