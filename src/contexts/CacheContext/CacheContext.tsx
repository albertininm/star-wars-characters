import React, { PropsWithChildren, useCallback, useState } from 'react';
import { Movie, Planet, Specie } from 'types';

interface CacheContextInterface {
  species: Record<string, Specie | undefined>;
  setSpecie: ({specie, url}: {specie?: Specie , url: string}) => void;
  movies: Record<string, Movie | undefined>;
  setMovie: ({movie, url}: {movie?: Movie, url: string}) => void;
  planets: Record<string, Planet | undefined>;
  setPlanet: ({planet, url}: {planet?: Planet, url: string}) => void;
}

export const CacheContext = React.createContext<CacheContextInterface>({
  species: {},
  setSpecie: () => null,
  movies: {},
  setMovie: () => null,
  planets: {},
  setPlanet: () => null,
});

const CacheContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [species, setSpecies] = useState<Record<string, Specie | undefined>>({});
  const [movies, setMovies] = useState<Record<string, Movie | undefined>>({});
  const [planets, setPlanets] = useState<Record<string, Planet | undefined>>({});

  const setMovie = useCallback(({movie, url}: {movie?: Movie, url: string}) => {
    setMovies((currmovies) => ({...currmovies, [url]: movie}));
  }, []);

  const setSpecie = useCallback(({specie, url}: {specie?: Specie, url: string}) => {
    setSpecies((currSpecies) => ({...currSpecies, [url]: specie}));
  }, []);

  const setPlanet = useCallback(({planet, url}: {planet?: Planet, url: string}) => {
    setPlanets((currPlanets) => ({...currPlanets, [url]: planet}));
  }, []);

  return (
    <CacheContext.Provider value={{species, movies, planets, setMovie, setPlanet, setSpecie}}>
      {children}
    </CacheContext.Provider>
  );
};

export default CacheContextProvider;