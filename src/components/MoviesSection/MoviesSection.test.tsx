import React from 'react';
import { render, screen, within } from '@testing-library/react';
import MoviesSection from './MoviesSection';
import { Movie, People } from 'types';

describe('Components: MoviesSection', () => {
  const mockMovies = [{
    release_date: '2022-10-17',
    title: 'Film title 1',
    opening_crawl: 'Film synopsis 1',
  }, {
    release_date: '2022-10-17',
    title: 'Film title 2',
    opening_crawl: 'Film synopsis 2',
  }] as Movie[];

  const yodaCharacter = {
    name: 'Yoda',
    homeworld: 'world1',
    species: ['specie1', 'specie2'], 
    films: ['film1', 'film2']
  };

  const darthVaderCharacter = {
    name: 'Yoda',
    homeworld: 'world1',
    species: ['specie1', 'specie2'], 
    films: ['film1', 'film2']
  };

  const characters = [yodaCharacter, darthVaderCharacter] as People[];

  it('should render nothing if characters is empty array', async () => {  
    render(
      <MoviesSection
        characters={[]}
        movies={mockMovies}
      />
    );

    const titles = screen.queryAllByRole('heading');
    expect(titles).toHaveLength(0);
  });

  it('should render movie components based on the movies array', async () => {  
    render(
      <MoviesSection
        characters={characters}
        movies={mockMovies}
      />
    );

    expect(screen.getByRole('heading', {name: /Select a character to see the list of films it participated/ }));
    expect(screen.getAllByTitle('movie information')).toHaveLength(mockMovies.length);
  });

  it('should render loading state if "skeleton" is truthy', async () => {  
    render(
      <MoviesSection
        characters={characters}
        movies={mockMovies}
        skeleton
      />
    );

    expect(screen.getByTitle('loading...')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: /Loading movies.../})).toBeInTheDocument();
  });

  it('should highlight character name if there is a selected character', async () => {
    render(
      <MoviesSection
        characters={characters}
        movies={mockMovies}
        selectedCharacter={yodaCharacter}
      />
    );

    const sectionTitle = screen.getByRole('heading', {name: /Showing list of movies that/});
    expect(sectionTitle).toBeInTheDocument();
    expect(within(sectionTitle).getByText(yodaCharacter.name)).toBeInTheDocument();
  });
});