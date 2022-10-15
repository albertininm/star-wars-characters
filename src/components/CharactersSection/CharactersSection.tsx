import Character from 'components/Character/Character';
import NoCharacterFoundPlaceholder from 'components/NoCharacterFoundPlaceholder/NoCharacterFoundPlaceholder';
import React, { MouseEventHandler } from 'react';
import { People } from 'types';

interface CharactersSectionProps {
  characters: People[];
  onCharacterClick?: MouseEventHandler | undefined;
}

const CharactersSection: React.FC<CharactersSectionProps> = ({characters = [], onCharacterClick}) => {
  if(characters.length === 0) {
    return <NoCharacterFoundPlaceholder />;
  }

  return (
    <>
      {characters.map(character => 
        <Character
          key={character.name}
          name={character.name}
          homeWorldUrl={character.homeworld}
          onClick={onCharacterClick}
          speciesUrls={character.species}
        />)
      }
    </>
  );
};

export default CharactersSection;