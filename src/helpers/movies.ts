import { SortType } from 'components/MoviesSection/SortSelector/SortSelector';
import {Movie} from 'types';

export const sortMovies = ({movies, sortType = 'newest'}: {movies: Movie[]; sortType?: SortType}) => {
  movies.sort((m1, m2) => {
    const milliseconds1 = new Date(m1.release_date).getTime();
    const milliseconds2 = new Date(m2.release_date).getTime();

    return sortType === 'newest' ? milliseconds2 - milliseconds1 : milliseconds1 - milliseconds2;
  });

  return movies;
};