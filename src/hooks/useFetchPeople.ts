import { People } from '../types';
import { apiUrls } from '../helpers/urls';
import { useDebounce, useFetchSearch } from '../hooks';

const useFetchPeople = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetchSearch<People>(apiUrls.people(debouncedSearch));
};

export default useFetchPeople;
