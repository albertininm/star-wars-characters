import { apiUrls } from '../helpers/urls';
import { useDebounce, useFetch } from '../hooks';
import { Planet } from '../types';

const useFetchPlanets = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<Planet>(apiUrls.films(debouncedSearch));
};

export default useFetchPlanets;
