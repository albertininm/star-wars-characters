import { apiUrls } from '@/helpers/urls';
import { People } from '@/types';
import useDebounce from './useDebounce';
import useFetch from './useFetch';

const useFetchPeople = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<People>(apiUrls.people(debouncedSearch));
};

export default useFetchPeople;