import Character from 'components/CharactersSection/Character/Character';
import NoCharacterFoundPlaceholder from 'components/NoCharacterFoundPlaceholder/NoCharacterFoundPlaceholder';
import SearchInput from 'components/SearchInput/SearchInput';
import LoadingCharactersPlaceholder from 'components/LoadingContentPlaceholder/LoadingContentPlaceholder';
import React from 'react';
import { People } from 'types';
import cx from 'classnames';
import PreviousPage from './PreviousPage/PreviousPage';
import NextPage from './NextPage/NextPage';

interface CharactersSectionProps {
  characters: People[];
  loading: boolean;
  selectedCharacter?: People;
  onCharacterClick: (character: People) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  fetchNextPage: () => Promise<void>;
  fetchPreviousPage: () => Promise<void>;
}

const CharactersSection: React.FC<CharactersSectionProps> = ({
  characters = [],
  onCharacterClick,
  onInputChange,
  loading,
  selectedCharacter,
  hasNextPage,
  hasPreviousPage,
  fetchNextPage,
  fetchPreviousPage,
}) => {
  
  return (
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
            <>
              {hasPreviousPage && <PreviousPage onClick={fetchPreviousPage}/>}
              {characters.map(character => 
                <Character
                  className={cx({'selected': character.name === selectedCharacter?.name})}
                  key={character.name}
                  name={character.name}
                  homeWorldUrl={character.homeworld}
                  onClick={() => onCharacterClick(character)}
                  speciesUrls={character.species}
                />)}
              {hasNextPage && <NextPage onClick={fetchNextPage} />}
            </>
          )
        }
      </div>
    </div>
  );
};

export default CharactersSection;