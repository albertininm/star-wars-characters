import { useFetch } from 'hooks';
import React from 'react';
import { Planet } from 'types';
import WorldData from './WorldData/WorldData';
import './WorldInfo.scss';

interface WorldInfoProps {
  homeWorldUrl: string;
  name: string;
  population: string;
}

const WorldInfo: React.FC<WorldInfoProps> = ({homeWorldUrl}) => {
  const {data, loading} = useFetch<Planet>(homeWorldUrl);

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