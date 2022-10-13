import Badge from 'components/Badge/Badge';
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
  const {loading, data} = useFetch<Specie>(url);

  if(loading) {
    return <Badge.Skeleton />;
  }

  return <Badge content={data?.name || 'CRANCKY'} />;
};

SpecieItem.Unknown = UnknownSpecie;

export default SpecieItem;