import MovieItem from 'components/MoviesSection/MovieItem/MovieItem';
import LoadingContentPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import React, { useState } from 'react';
import { Movie, People } from 'types';
import './MoviesSection.scss';
import { sortMovies } from 'helpers/movies';
import SortSelector, { SortType } from './SortSelector/SortSelector';

interface MoviesSectionProps {
  characters: People[];
  movies: Movie[];
  skeleton?: boolean;
  selectedCharacter?: People;
}

const MoviesSection: React.FC<MoviesSectionProps> = ({characters, movies, selectedCharacter, skeleton}) => {
  const [sortType, setSortType] = useState<SortType>('newest');

  if(characters.length === 0) {
    return null;
  }

  sortMovies({movies, sortType});

  return (
    <div className="movies-section">
      <div className="movies-section-header">
        <h1 className="section-title">
          {selectedCharacter ? <span>Showing list of movies that <span className="selected-character-name">{selectedCharacter.name}</span> participated</span> : 
            'Select a character to see the list of films it participated'}
        </h1>
    
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