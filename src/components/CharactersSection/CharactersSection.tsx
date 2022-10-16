import Character from 'components/CharactersSection/Character/Character';
import NoCharacterFoundPlaceholder from 'components/NoCharacterFoundPlaceholder/NoCharacterFoundPlaceholder';
import SearchInput from 'components/SearchInput/SearchInput';
import LoadingCharactersPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import React from 'react';
import { People } from 'types';

interface CharactersSectionProps {
  characters: People[];
  loading: boolean;
  onCharacterClick: (character: People) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CharactersSection: React.FC<CharactersSectionProps> = ({characters = [], onCharacterClick, onInputChange, loading}) =>  (
  <div className="characters-section">
    <div className="section-title">
      <h1 className="title">Star Wars</h1>
      <h1 className="subtitle">Characters Wiki</h1>
    </div>
    <div className="character-search">
      <SearchInput
        onChange={onInputChange}
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
              onClick={() => onCharacterClick(character)}
              speciesUrls={character.species}
            />)
        )
      }
    </div>
  </div>
);

export default CharactersSection;