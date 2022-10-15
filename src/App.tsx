
import Character from 'components/Character/Character';
import React from 'react';
import { useState } from 'react';
import './App.scss';
import './globals.scss';
import { useFetchPeople } from './hooks';
import { People } from 'types';
import SearchInput from 'components/SearchInput/SearchInput';
import AppBackground from 'components/AppBackground/AppBackground';
import LoadingCharactersPlaceholder from 'components/LoadingCharactersPlaceholder/LoadingCharactersPlaceholder';

function App() {
  const [inputText, setInputText] = useState('');

  const { results: characters = [], loading } = useFetchPeople(inputText);
  const [selectedCharacter, setSelectedCharacter] = useState<People>();

  return (
    <div className="App">
      <AppBackground />
      <div className="app-layout">
        <div className="app-content">
          <div className="character-search">
            <SearchInput
              onChange={(e) => {
                const searchText = e.target.value;

                setInputText(searchText);
                setSelectedCharacter(undefined);
              }}
            />
          </div>

          <div className="characters-wrapper">
            {loading? 
              <LoadingCharactersPlaceholder />
              :
              characters.map(character => 
                <Character
                  key={character.name}
                  name={character.name}
                  homeWorldUrl={character.homeworld}
                  onClick={() => setSelectedCharacter(character)}
                  speciesUrls={character.species}
                />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <Character name='Yoda' homeWorldUrl='https://swapi.dev/api/planets/9/' speciesUrls={['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/']}/> */}
{/* <Movie
      releaseDate="1997-05-25"
      title="A New Hope"
      synopsis="It is a period of civil war.Rebel spaceships, strikingfrom a hidden base, have wontheir first victory againstthe evil Galactic Empire.During the battle..."
    /> */}

export default App;
