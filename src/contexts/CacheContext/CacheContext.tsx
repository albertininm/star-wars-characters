import React, { PropsWithChildren, useCallback, useState } from 'react';
import { Film, Planet, Specie } from 'types';

interface CacheContextInterface {
  species: Record<string, Specie | undefined>;
  setSpecie: ({specie, url}: {specie?: Specie , url: string}) => void;
  films: Record<string, Film | undefined>;
  setFilm: ({film, url}: {film?: Film, url: string}) => void;
  planets: Record<string, Planet | undefined>;
  setPlanet: ({planet, url}: {planet?: Planet, url: string}) => void;
}

export const CacheContext = React.createContext<CacheContextInterface>({
  species: {},
  setSpecie: () => null,
  films: {},
  setFilm: () => null,
  planets: {},
  setPlanet: () => null,
});

const CacheContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [species, setSpecies] = useState<Record<string, Specie | undefined>>({});
  const [films, setFilms] = useState<Record<string, Film | undefined>>({});
  const [planets, setPlanets] = useState<Record<string, Planet | undefined>>({});

  const setFilm = useCallback(({film, url}: {film?: Film, url: string}) => {
    setFilms((currFilms) => ({...currFilms, [url]: film}));
  }, []);

  const setSpecie = useCallback(({specie, url}: {specie?: Specie, url: string}) => {
    setSpecies((currSpecies) => ({...currSpecies, [url]: specie}));
  }, []);

  const setPlanet = useCallback(({planet, url}: {planet?: Planet, url: string}) => {
    setPlanets((currPlanets) => ({...currPlanets, [url]: planet}));
  }, []);

  return (
    <CacheContext.Provider value={{species, films, planets, setFilm, setPlanet, setSpecie}}>
      {children}
    </CacheContext.Provider>
  );
};

export default CacheContextProvider;