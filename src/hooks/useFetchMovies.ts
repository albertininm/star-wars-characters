/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';
import { Movie } from 'types';
import useDataContext from 'contexts/CacheContext/useCacheContext';


const useFetchMovies = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const {movies, setMovie} = useDataContext();

  const fetchMovies = async (urls: string[]) => {
    const moviesToReturn: Movie[] = [];

    const notCachedMoviesRequests = urls.filter(url => {
      if(movies[url]) {
        // Already cached movie
        moviesToReturn.push(movies[url]!);
        return false;
      }

      return true;
    }).map(url => fetch(url));

    if(notCachedMoviesRequests.length === 0) {
      return moviesToReturn;
    }

    try {
      setLoading(true);

      const responses = await Promise.all(notCachedMoviesRequests);
      const responsesData = await Promise.all(responses.map(response => response.json()));

      // Update cache
      responsesData.forEach(movie => setMovie({url: movie.url, movie}));

      moviesToReturn.concat(responsesData);
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