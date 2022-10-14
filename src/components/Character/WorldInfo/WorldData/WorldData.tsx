import ParagraphSkeleton from 'components/ParagraphSkeleton/ParagraphSkeleton';
import React from 'react';

const WorldDataSkeleton: React.FC = () => (
  <>
    <ParagraphSkeleton style={{marginLeft: '3px'}} variation="medium" width={55} />
    <ParagraphSkeleton style={{marginLeft: '3px', marginTop: '3px'}} variation="thin" width={65} />
  </>
);

interface WorldDataProps {
  name?: string;
  population?: string;
}

interface WorldDataInterface extends React.FC<WorldDataProps> {
  Skeleton: typeof WorldDataSkeleton;
}

const WorldData: WorldDataInterface = ({name, population}) => {
  const formattedPopulation = `${population} hab`;

  return (
    <>
      <div className="world-name truncate" title={name}>{name}</div>
      <div className="world-population truncate" title={formattedPopulation}>{formattedPopulation}</div>
    </>
  );
};

WorldData.Skeleton = WorldDataSkeleton;

export default WorldData;