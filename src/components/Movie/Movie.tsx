import { getFormattedDate } from 'helpers/date';
import { useFetch } from 'hooks';
import React from 'react';
import { Movie as MovieType } from 'types';
import './Movie.scss';
import ReleaseDate from './ReleaseDate/ReleaseDate';
import useDataContext from 'contexts/CacheContext/useCacheContext';

interface MovieProps {
  releaseDate: string;
  title: string;
  synopsis: string;

  url: string;
}

const Movie: React.FC<MovieProps> = ({releaseDate, synopsis, title, url}) => {
  const {movies, setMovie} = useDataContext();

  const cachedMovie = movies[url];

  const {loading, data} = useFetch<MovieType>({url, 
    skip: Boolean(cachedMovie),
    onRequestFinish: (movie) => {
      if(!cachedMovie) {
        setMovie({movie, url});
      }
    }});


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