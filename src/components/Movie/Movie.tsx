import { getFormattedDate } from 'helpers/date';
import React from 'react';
import './Movie.scss';
import ReleaseDate from './ReleaseDate/ReleaseDate';

interface MovieProps {
  releaseDate: string;
  title: string;
  synopsis: string;
}

const Movie: React.FC<MovieProps> = ({releaseDate, synopsis, title}) => {
  const {date, year} = getFormattedDate(releaseDate);

  return (
    <div className="movie">
      <div className="release-year">{year}</div>
      <h4 className="title">{title}</h4>
      <div className="details">
        <ReleaseDate date={date} />
        <p className="synopsis">{synopsis}</p>
      </div>
    </div>
  );
};

export default Movie;