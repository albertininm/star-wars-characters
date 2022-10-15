import React from 'react';
import './ReleaseDate.scss';

interface ReleaseDateProps {
  date: string;
}

const ReleaseDate: React.FC<ReleaseDateProps> = ({date}) => {
  return (
    <div className="release-info">
      <div className="release-info__title">
        <i className="fa fa-calendar" /> Release date
      </div>
      <div className="release-info__date">{date}</div>
    </div>
  );
};

export default ReleaseDate;