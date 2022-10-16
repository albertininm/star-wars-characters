import Badge from 'components/Badge/Badge';
import React from 'react';
import './SortSelector.scss';
import cx from 'classnames';

export type SortType = 'newest' | 'oldest';

interface SortSelectorProps {
  selectedSortType: SortType;
  onNewestSelected: () => void;
  onOldestSelected: () => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({selectedSortType, onNewestSelected, onOldestSelected}) => {
  return (
    <div className="sort-selector">
      <span>Sorted by</span>
      <Badge className={cx('newest', {'selected': selectedSortType === 'newest'})} content={'Newest'} color="gray" onClick={onNewestSelected} />
      <Badge className={cx('oldest',{'selected': selectedSortType === 'oldest'})} content={'Oldest'} color="gray" onClick={onOldestSelected} /> 
    </div>
  );
};

export default SortSelector;