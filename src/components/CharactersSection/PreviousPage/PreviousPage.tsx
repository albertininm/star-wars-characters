import React from 'react';
import './PreviousPage.scss';

interface PreviousPageProps {
  onClick: () => Promise<void>;
}

const PreviousPage: React.FC<PreviousPageProps> = ({onClick}) => {

  return (
    <div className="previous-page" onClick={onClick}>
      <div className="previous-page__action">
        <i className="fas fa-angle-left icon" />
        <div>Previous</div>
      </div>
    </div>
  );
};

export default PreviousPage;