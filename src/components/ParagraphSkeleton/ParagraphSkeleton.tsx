import React from 'react';
import cx from 'classnames';
import './ParagraphSkeleton.scss';

type ParagraphSkeletonVariation = 'thin' | 'medium' | 'thick';

interface ParagraphSkeleton {
  className ?: string;
  style ?: React.CSSProperties;
  variation ?: ParagraphSkeletonVariation;
  width ?: number;
}

const ParagraphSkeleton: React.FC<ParagraphSkeleton> = ({className, variation = 'medium', width = 30, style}) => {
  const classes = cx('paragraph-skeleton', className, variation);

  return <div className={classes} aria-label="loading..." style={{width, ...style}}/>;
};

export default ParagraphSkeleton;