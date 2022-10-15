import ParagraphSkeleton from 'components/ParagraphSkeleton/ParagraphSkeleton';
import { getColorFromText } from 'helpers/colors';
import React from 'react';
import cx from 'classnames';
import Globe from 'components/Globe/Globe';
import './WorldData.scss';

const WorldDataSkeleton: React.FC = () => (
  <>
    <ParagraphSkeleton style={{marginLeft: '3px'}} variation="medium" width={55} />
    <ParagraphSkeleton style={{marginLeft: '3px', marginTop: '3px'}} variation="thin" width={65} />
  </>
);

interface WorldDataProps {
  name?: string;
  population?: number;
}

interface WorldDataInterface extends React.FC<WorldDataProps> {
  Skeleton: typeof WorldDataSkeleton;
}

const WorldData: WorldDataInterface = ({name = '', population = 0}) => {
  let formattedPopulation;

  if(Number.isNaN(population)) {
    formattedPopulation = 'Unknown';
  } else {
    formattedPopulation = `${population.toLocaleString()} hab`;
  }

  const planetColor = getColorFromText(name);

  const classes = cx('world-data', planetColor);

  return (
    <div className={classes}>
      <div className="name-wrapper">
        <Globe />
        <div className="world-name truncate" title={name}>
          {name}
        </div>
      </div>
      <div className="world-population truncate" title={formattedPopulation}>{formattedPopulation}</div>
    </div>
  );
};

WorldData.Skeleton = WorldDataSkeleton;

export default WorldData;