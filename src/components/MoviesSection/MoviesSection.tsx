import MovieItem from 'components/MoviesSection/MovieItem/MovieItem';
import LoadingContentPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import React, { useState } from 'react';
import { Movie } from 'types';
import './MoviesSection.scss';
import { sortMovies } from 'helpers/movies';
import Badge from 'components/Badge/Badge';
import cx from 'classnames';

interface MoviesSectionProps {
  movies: Movie[];
  skeleton?: boolean;
  skeletonNumberOfItems?: number;
}

export type SortType = 'newest' | 'oldest';

const MoviesSection: React.FC<MoviesSectionProps> = ({movies, skeleton, skeletonNumberOfItems}) => {
  const [sortType, setSortType] = useState<SortType>('newest');


  sortMovies({movies, sortType});

  return (
    <div className="movies-section">
      <div className="movies-section-header">
        <h1 className="section-title">Select a character to see the list of films it participated</h1>
        <div className="sort-selector">
          <span>Sorted by</span>
          <Badge className={cx('newest', {'selected': sortType === 'newest'})} content={'Newest'} color="gray" onClick={() => setSortType('newest')} />
          <Badge className={cx('oldest',{'selected': sortType === 'oldest'})} content={'Oldest'} color="gray" onClick={() => setSortType('oldest')} /> 
        </div>
      </div>

      <div className="movies-section-body">
        {skeleton ? <LoadingContentPlaceholder contentName="movies" /> :
          <div className="movie-list">
            {movies.map(movie => <MovieItem key={movie.title} title={movie.title} synopsis={movie.opening_crawl} releaseDate={movie.release_date} />)}
          </div>
        }
      </div>

    </div>
  );
};

export default MoviesSection;