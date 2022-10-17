/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRef, useState } from 'react';
import { Movie } from 'types';
import useDataContext from 'contexts/CacheContext/useCacheContext';


const useFetchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const {movies, setMovie} = useDataContext();

  const requestController = useRef(new AbortController());

  const fetchMovies = async (urls: string[]) => {
    requestController.current.abort();
    requestController.current = new AbortController();

    const moviesToReturn: Movie[] = [];

    const notCachedMoviesRequests = urls.filter(url => {
      if(movies[url]) {
        // Already cached movie
        moviesToReturn.push(movies[url]!);
        return false;
      }

      return true;
    }).map(url => fetch(url, {signal: requestController.current.signal}));

    if(notCachedMoviesRequests.length === 0) {
      return moviesToReturn;
    }

    try {
      setLoading(true);

      const responses = await Promise.all(notCachedMoviesRequests);
      const responsesData = await Promise.all(responses.map(response => response.json()));

      // Update cache
      responsesData.forEach(movie => setMovie({url: movie.url, movie}));

      moviesToReturn.push(...responsesData);
    } catch(error) {
      setError(error);
    } finally {
      setLoading(false);
    }

    return moviesToReturn;
  };

  return {loading, fetchMovies, error};
};

export default useFetchMovies;