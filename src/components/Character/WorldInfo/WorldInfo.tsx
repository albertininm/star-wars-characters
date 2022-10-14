import useDataContext from 'contexts/DataContext/useDataContext';
import { useFetch } from 'hooks';
import React from 'react';
import { Planet } from 'types';
import WorldData from './WorldData/WorldData';
import './WorldInfo.scss';

interface WorldInfoProps {
  url: string;
}

const WorldInfo: React.FC<WorldInfoProps> = ({url}) => {
  const {planets} = useDataContext();
  
  const cachedWorld = planets[url];

  const {data, loading} = useFetch<Planet>({url, options: {skip: Boolean(cachedWorld)}});

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