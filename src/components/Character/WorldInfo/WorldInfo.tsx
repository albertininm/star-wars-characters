import useDataContext from '../../../contexts/CacheContext/useCacheContext';
import { useFetch } from 'hooks';
import React from 'react';
import { Planet } from 'types';
import WorldData from './WorldData/WorldData';
import './WorldInfo.scss';

interface WorldInfoProps {
  url: string;
}

const WorldInfo: React.FC<WorldInfoProps> = ({url}) => {

  const {planets, setPlanet} = useDataContext();

  const cachedPlanet = planets[url];

  const {loading, data} = useFetch<Planet>({url,
    skip: Boolean(cachedPlanet),
    onRequestFinish: (planet) => {
      if(!cachedPlanet) {
        setPlanet({planet, url});
      }
    },
  });

  return (
    <div className="home-world">
      <div className="title">Home Planet</div>
      <div className="content" title="Home planet">
        <div className="text-content">
          {loading ? (
            <WorldData.Skeleton />
          ) : (
            <WorldData
              name={data?.name}
              population={Number(data?.population)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldInfo;