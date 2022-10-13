import React from 'react';
import cx from 'classnames';
import './ParagraphSkeleton.scss';

type ParagraphSkeletonVariation = 'thin' | 'medium' | 'thick';

interface ParagraphSkeleton {
  variation ?: ParagraphSkeletonVariation;
  width?: number;
}

const ParagraphSkeleton: React.FC<ParagraphSkeleton> = ({variation = 'medium', width = 30}) => {
  const classes = cx('paragraph-skeleton', variation);

  return <div className={classes} style={{width}}/>;
};

export default ParagraphSkeleton;