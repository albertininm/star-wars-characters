import MovieItem from 'components/MoviesSection/MovieItem/MovieItem';
import LoadingContentPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import React, { useState } from 'react';
import { Movie } from 'types';
import './MoviesSection.scss';
import { sortMovies } from 'helpers/movies';
import SortSelector, { SortType } from './SortSelector/SortSelector';

interface MoviesSectionProps {
  movies: Movie[];
  skeleton?: boolean;
  skeletonNumberOfItems?: number;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({movies, skeleton, skeletonNumberOfItems}) => {
  const [sortType, setSortType] = useState<SortType>('newest');


  sortMovies({movies, sortType});

  return (
    <div className="movies-section">
      <div className="movies-section-header">
        <h1 className="section-title">Select a character to see the list of films it participated</h1>
    
        {movies.length > 0 ?  
          <SortSelector
            selectedSortType={sortType}
            onNewestSelected={() => setSortType('newest')}
            onOldestSelected={() => setSortType('oldest')}
          />
          : null}
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