import Movie from 'components/Movie/Movie';
import Character from 'components/Character/Character';
import React from 'react';
import { useState } from 'react';
import './App.scss';
import './globals.scss';
import { useFetchPeople } from './hooks';
import ParagraphSkeleton from 'components/ParagraphSkeleton/ParagraphSkeleton';
import { People } from 'types';

function App() {
  const [inputText, setInputText] = useState('');

  const { results: characters = [] } = useFetchPeople(inputText);
  const [selectedCharacter, setSelectedCharacter] = useState<People>();

  return (
    <div className="App">
      <div>App Body</div>
      <input
        onChange={(e) => {
          const searchText = e.target.value;

          setInputText(searchText);
          setSelectedCharacter(undefined);
        }}
        type="text"
      />
      <div className="characters-wrapper">
        {/* <Movie
          releaseDate="1997-05-25"
          title="A New Hope"
          synopsis="It is a period of civil war.Rebel spaceships, strikingfrom a hidden base, have wontheir first victory againstthe evil Galactic Empire.During the battle..."
        /> */}

        {characters.map(character => 
          <Character
            key={character.name}
            name={character.name}
            homeWorldUrl={character.homeworld}
            onClick={() => setSelectedCharacter(character)}
            speciesUrls={character.species}
          />
        )}
        {/* <Character name='Yoda' homeWorldUrl='https://swapi.dev/api/planets/15/' speciesUrls={['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/']}/> */}
      </div>
    </div>
  );
}

export default App;
