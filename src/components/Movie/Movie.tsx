import React from 'react';
import './Movie.scss';
import ReleaseDate from './ReleaseDate/ReleaseDate';

const Movie: React.FC = () => {
  return (
    <div className="movie">
      <div className="release-year">1997</div>
      <div className="title">A New Hope</div>
      <div className="details">
        <ReleaseDate date="May 27, 1997" />
        <div className="sinopse">It is a period of civil war.Rebel spaceships, strikingfrom a hidden base, have wontheir first victory againstthe evil Galactic Empire.During the battle...</div>
      </div>
    </div>
  );
};

export default Movie;