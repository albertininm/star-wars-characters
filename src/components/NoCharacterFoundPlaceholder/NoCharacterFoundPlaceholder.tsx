import React from 'react';
import './NoCharacterFoundPlaceholder.scss';

const NoCharacterFoundPlaceholder: React.FC = () => {
  return (
    <div className="empty-search-result-placeholder">
      <h1 className="title">No character found</h1>
      <p className="description">Change your search to run another </p>
    </div>
  );
};

export default NoCharacterFoundPlaceholder;