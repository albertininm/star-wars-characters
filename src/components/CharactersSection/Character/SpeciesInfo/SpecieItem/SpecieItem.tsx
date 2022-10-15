import Badge from 'components/Badge/Badge';
import useDataContext from 'contexts/CacheContext/useCacheContext';
import {useFetch} from 'hooks';
import React from 'react';
import { Specie } from 'types';

interface SpecieItemProps {
  url: string;
}

interface SpecieItemInterface extends React.FC<SpecieItemProps> {
  Unknown: typeof UnknownSpecie;
}

const UnknownSpecie = () => <Badge content="Unknown" color="gray" />;

const SpecieItem: SpecieItemInterface = ({url}) => {
  const {species, setSpecie} = useDataContext();

  const cachedSpecie = species[url];

  const {loading, data} = useFetch<Specie>({url, 
    skip: Boolean(cachedSpecie),
    onRequestFinish: (specie) => {
      if(!cachedSpecie) {
        setSpecie({specie, url});
      }
    }});

  if(loading) {
    return <Badge.Skeleton />;
  }

  return <Badge content={cachedSpecie?.name || data?.name} />;
};

SpecieItem.Unknown = UnknownSpecie;

export default SpecieItem;