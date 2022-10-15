import Spinner from 'components/Spinner/Spinner';
import React from 'react';
import './LoadingCharactersPlaceholder.scss';

const LoadingCharactersPlaceholder = () => {
  return (
    <div className="loading-characters-placeholder">
      <Spinner />
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingCharactersPlaceholder;