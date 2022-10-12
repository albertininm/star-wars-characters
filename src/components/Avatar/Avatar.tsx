import { getInitialsFromName } from 'helpers/string';
import React from 'react';
import './Avatar.scss';
import cx from 'classnames';

interface AvatarProps {
  className?: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({className, name}) => {
  const classes = cx('avatar', className);

  const initials = getInitialsFromName(name);

  return (
    <div className={classes}>
      {initials}
    </div>
  );
};

export default Avatar;
