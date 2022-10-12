import React, { PropsWithChildren } from 'react';
import cx from 'classnames';
import './Badge.scss';
import { getColorFromText, Colors } from 'helpers/colors';

interface BadgeProps {
  className?: string;
  content: string;
  color?: typeof Colors[number];
}

const Badge: React.FC<PropsWithChildren<BadgeProps>> = ({className, content, color}) => {
  const colorClassName = color || getColorFromText(content);

  const classes = cx('badge', 'truncate', colorClassName, className);

  return <div className={classes} title={content}>{content}</div>;
};

export default Badge;