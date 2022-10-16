
import Character from 'components/CharactersSection/Character/Character';
import React from 'react';
import { useState } from 'react';
import './App.scss';
import './globals.scss';
import { useFetchPeople } from './hooks';
import { Movie, People } from 'types';
import SearchInput from 'components/SearchInput/SearchInput';
import AppBackground from 'components/AppBackground/AppBackground';
import LoadingCharactersPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import NoCharacterFoundPlaceholder from 'components/NoCharacterFoundPlaceholder/NoCharacterFoundPlaceholder';
import useFetchMovies from 'hooks/useFetchMovies';
import MoviesSection from 'components/MoviesSection/MoviesSection';

function App() {
  const [inputText, setInputText] = useState('');

  const [movies, setMovies] = useState<Movie[]>([]);
  const {loading: loadingMovies, fetchMovies} = useFetchMovies();

  const { results: characters = [], loading } = useFetchPeople(inputText);
  const [selectedCharacter, setSelectedCharacter] = useState<People>();

  return (
    <div className="App">
      <AppBackground />
      <div className="app-layout">
        <div className="app-content">
          <div className="characters-section">
            <div className="section-title">
              <h1 className="title">Star Wars</h1>
              <h1 className="subtitle">Characters Wiki</h1>
            </div>
            <div className="character-search">
              <SearchInput
                onChange={(e) => {
                  const searchText = e.target.value;

                  setInputText(searchText);
                  setSelectedCharacter(undefined);
                  setMovies([]);
                }}
              />
            </div>
            <div className="characters-wrapper">
              {loading? 
                <LoadingCharactersPlaceholder contentName="characters" />
                :
                (characters.length === 0 ? <NoCharacterFoundPlaceholder /> :
                  characters.map(character => 
                    <Character
                      key={character.name}
                      name={character.name}
                      homeWorldUrl={character.homeworld}
                      onClick={async () => {
                        setSelectedCharacter(character);
                        const fetchedMovies = await fetchMovies(character.films);
                        setMovies(fetchedMovies);
                      }}
                      speciesUrls={character.species}
                    />)
                )
              }
            </div>
          </div>
          <MoviesSection
            movies={movies}
            skeleton={loadingMovies}
            skeletonNumberOfItems={selectedCharacter?.films.length ?? 0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
