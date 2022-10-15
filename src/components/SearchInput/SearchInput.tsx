import React from 'react';
import './SearchInput.scss';

interface SearchInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInput> = ({onChange}) => {
  return (
    <input
      className="search-input"
      onChange={onChange}
      type="text"
    />
  );
};

export default SearchInput;