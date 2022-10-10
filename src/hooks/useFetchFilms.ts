import { apiUrls } from '@/helpers/urls';
import { Film } from '@/types';
import useDebounce from './useDebounce';
import useFetch from './useFetch';

const useFetchFilms = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<Film>(apiUrls.films(debouncedSearch));
};

export default useFetchFilms;