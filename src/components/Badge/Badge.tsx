import React, { MouseEventHandler, PropsWithChildren } from 'react';
import cx from 'classnames';
import './Badge.scss';
import { getColorFromText, Colors } from 'helpers/colors';
import ParagraphSkeleton from 'components/ParagraphSkeleton/ParagraphSkeleton';

interface BadgeSkeletonProps {
  className?: string;
  content?: React.ReactNode;
}

const BadgeSkeleton: React.FC<PropsWithChildren<BadgeSkeletonProps>> = ({className}) => {
  const classes = cx('badge', 'skeleton', 'gray', className);
  
  return <div className={classes} title="Loading..."><ParagraphSkeleton variation="thin" width={40} /></div>;
};

interface BadgeProps {
  className?: string;
  content?: string;
  color?: typeof Colors[number];
  onClick?: MouseEventHandler | undefined;
}

interface BadgeInterface extends React.FC<BadgeProps>{
  Skeleton: typeof BadgeSkeleton;
}

const Badge: BadgeInterface = ({className, content = '', color, onClick}) => {
  const colorClassName = color || getColorFromText(content);

  const classes = cx('badge', 'truncate', colorClassName, className);

  return (
    <div className={classes} title={content} onClick={onClick}>
      <div className="content truncate">
        {content}
      </div>
    </div>
  );
};

Badge.Skeleton = BadgeSkeleton;

export default Badge;