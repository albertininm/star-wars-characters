import { apiUrls } from '../helpers/urls';
import { Film } from '../types';
import { useDebounce, useFetch } from '../hooks';

const useFetchFilms = (search: string) => {
  const debouncedSearch = useDebounce(search);

  return useFetch<Film>(apiUrls.films(debouncedSearch));
};

export default useFetchFilms;
