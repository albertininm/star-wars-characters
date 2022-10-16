import { getFormattedDate } from 'helpers/date';
import { getFormattedSynopsis } from 'helpers/string';
import React from 'react';
import './MovieItem.scss';
import ReleaseDate from './ReleaseDate/ReleaseDate';

interface MovieItemProps {
  releaseDate: string;
  title: string;
  synopsis: string;
}

const MovieItem: React.FC<MovieItemProps> = ({releaseDate, synopsis, title}) => {
  const {date, year} = getFormattedDate(releaseDate);
  const formattedSynopsis = getFormattedSynopsis(synopsis);

  return (
    <div className="movie-item">
      <div className="release-year">{year}</div>
      <h4 className="title">{title}</h4>
      <div className="details">
        <ReleaseDate date={date} />
        <p className="synopsis">{formattedSynopsis}</p>
      </div>
    </div>
  );
};

export default MovieItem;