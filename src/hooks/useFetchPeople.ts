import { People } from '../types';
import { apiUrls } from '../helpers/urls';
import { useDebounce, useFetch } from '../hooks';

const useFetchPeople = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<People>(apiUrls.people(debouncedSearch));
};

export default useFetchPeople;
