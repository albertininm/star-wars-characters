import React from 'react';
import './NextPage.scss';

interface NextPageProps {
  onClick: () => Promise<void>;
}

const NextPage: React.FC<NextPageProps> = ({onClick}) => {

  return (
    <div className="next-page" onClick={onClick}>
      <div className="next-page__action">
        <i className="fas fa-angle-right icon" />
        <div>Next</div>
      </div>
    </div>
  );
};

export default NextPage;