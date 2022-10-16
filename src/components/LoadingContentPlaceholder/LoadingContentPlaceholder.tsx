import Spinner from 'components/Spinner/Spinner';
import React from 'react';
import './LoadingContentPlaceholder.scss';

interface LoadingContentPlaceholderProps {
  contentName?: string;
}

const LoadingContentPlaceholder: React.FC<LoadingContentPlaceholderProps> = ({contentName = ''}) => {
  const contentStr = `Loading${contentName ? ` ${contentName}` : ''}...`;

  return (
    <div className="loading-content-placeholder">
      <Spinner />
      <h1>{contentStr}</h1>
    </div>
  );
};

export default LoadingContentPlaceholder;