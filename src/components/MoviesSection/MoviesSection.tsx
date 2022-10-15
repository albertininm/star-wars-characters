import MovieItem from 'components/MoviesSection/MovieItem/MovieItem';
import React, { useState } from 'react';
import { Movie } from 'types';

interface MoviesSectionProps {
  movies: Movie[];
  skeleton?: boolean;
  skeletonNumberOfItems?: number;
}

export type SortType = 'newest' | 'oldest';

const MoviesSection: React.FC<MoviesSectionProps> = ({movies, skeleton, skeletonNumberOfItems}) => {
  const [sort, setSort] = useState<SortType>('newest');

  if(skeleton) {
    return <>
      {new Array(skeletonNumberOfItems).fill(null).map(() => {
        <>MOVIE SKELETON</>;
      })}
    </>;
  }

  return <div className="movie-list">
    {movies.map(movie => <MovieItem key={movie.title} title={movie.title} synopsis={movie.opening_crawl} releaseDate={movie.release_date} />)}
  </div>;
};

export default MoviesSection;