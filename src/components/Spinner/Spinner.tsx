import cx from 'classnames';
import React from 'react';
import './Spinner.scss';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({className}) => {
  const classes = cx('spinner', className);

  return <div className={classes} title="loading..."></div>;
};

export default Spinner;