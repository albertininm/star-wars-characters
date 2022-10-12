import React, { PropsWithChildren } from 'react';
import cx from 'classnames';
import './Badge.scss';
import { getNumberFromString, HashableColors } from 'helpers/colors';

interface BadgeProps {
  className?: string;
  content: string;
}

const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({className, content}) => {
  const colorIndex = getNumberFromString(content);

  console.log(colorIndex);

  const classes = cx('badge', 'truncate', HashableColors[colorIndex], className);

  return <div className={classes} title={content}>{content}</div>;
};

export default Badge;