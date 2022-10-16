
import React from 'react';
import { useState } from 'react';
import './App.scss';
import './globals.scss';
import { useFetchPeople } from './hooks';
import { Movie, People } from 'types';
import AppBackground from 'components/AppBackground/AppBackground';
import useFetchMovies from 'hooks/useFetchMovies';
import MoviesSection from 'components/MoviesSection/MoviesSection';
import CharactersSection from 'components/CharactersSection/CharactersSection';

function App() {
  const [inputText, setInputText] = useState('');

  const [movies, setMovies] = useState<Movie[]>([]);
  const {loading: loadingMovies, fetchMovies} = useFetchMovies();

  const {
    results: characters = [],
    loading: loadingCharacters,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useFetchPeople(inputText);
  const [selectedCharacter, setSelectedCharacter] = useState<People>();

  return (
    <div className="App">
      <AppBackground />
      <div className="app-layout">
        <div className="app-content">
          <CharactersSection
            characters={characters}
            loading={loadingCharacters}
            onCharacterClick={async (character: People) => {
              const isCharacterAlreadySelected = character.name === selectedCharacter?.name;
              
              if(isCharacterAlreadySelected) {
                setSelectedCharacter(undefined);
                setMovies([]);

                return;
              }

              setSelectedCharacter(character);
              const fetchedMovies = await fetchMovies(character.films);
              setMovies(fetchedMovies);
            }}
            onInputChange={(e) => {
              const searchText = e.target.value;

              setInputText(searchText);
              setSelectedCharacter(undefined);
              setMovies([]);
            }}
            selectedCharacter={selectedCharacter}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
            fetchNextPage={fetchNextPage}
            fetchPreviousPage={fetchPreviousPage}
          />
          <MoviesSection
            characters={characters}
            movies={movies}
            selectedCharacter={selectedCharacter}
            skeleton={loadingMovies}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
