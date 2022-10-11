import { getInitialsFromName } from 'helpers/string';
import React from 'react';
import './Avatar.scss';
import cx from 'classnames';

interface AvatarProps {
  classNames?: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({classNames, name}) => {
  const classes = cx('avatar', classNames);

  const initials = getInitialsFromName(name);

  return (
    <div className={classes}>
      {initials}
    </div>
  );
};

export default Avatar;
