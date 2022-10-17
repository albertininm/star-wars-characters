import React from 'react';
import { render, screen, within } from '@testing-library/react';
import SortSelector from './SortSelector';
import userEvent from '@testing-library/user-event';

describe('Components: MoviesSection/SortSelector', () => {
  let onNewestSelected = jest.fn();
  let onOldestSelected = jest.fn();

  beforeEach(() => {
    onNewestSelected = jest.fn();
    onOldestSelected = jest.fn();
  });

  afterEach(() => {
    onNewestSelected.mockReset();
    onOldestSelected.mockReset();
  });

  it('should render with proper styling and params', async () => {  
    render(
      <SortSelector
        selectedSortType="newest"
        onNewestSelected={onNewestSelected}
        onOldestSelected={onOldestSelected}
      />
    );

    const element = screen.getByTitle('sort selection');
    expect(element).toBeInTheDocument();

    const withinElement = within(element);

    const newestElement = withinElement.getByTitle('Newest');
    expect(newestElement).toBeInTheDocument();
    expect(newestElement).toHaveClass('selected');
  });

  it('should select "oldest" when clicking on it', async () => {  
    render(
      <SortSelector
        selectedSortType="newest"
        onNewestSelected={onNewestSelected}
        onOldestSelected={onOldestSelected}
      />
    );

    const element = screen.getByTitle('sort selection');
    expect(element).toBeInTheDocument();

    const withinElement = within(element);

    const newestElement = withinElement.getByTitle('Newest');
    expect(newestElement).toHaveTextContent('Newest');
    expect(newestElement).toBeInTheDocument();
    
    const oldestElement = screen.getByTitle('Oldest');

    expect(oldestElement).toHaveTextContent('Oldest');
    expect(oldestElement).toBeInTheDocument();
    
    expect(onOldestSelected).not.toHaveBeenCalled();
    
    userEvent.click(within(oldestElement).getByText('Oldest'));
    
    expect(onOldestSelected).toHaveBeenCalledTimes(1);
  });
});