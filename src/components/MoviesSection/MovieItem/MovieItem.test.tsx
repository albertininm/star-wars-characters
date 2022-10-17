import React from 'react';
import { render, screen, within } from '@testing-library/react';
import MovieItem from './MovieItem';

describe('Components: MoviesSection/MovieItem', () => {
  const mockProps = {
    releaseDate: '2022-10-17',
    title: 'Film title',
    synopsis: 'Film synopsis',
  };

  it('should render with proper styling and params', async () => {  

    render(<MovieItem {...mockProps} />);

    const element = screen.getByTitle('movie information');

    expect(element).toBeInTheDocument();

    const withinElement = within(element);
  
    expect(withinElement.getByRole('heading',{name: mockProps.title})).toBeInTheDocument();
    expect(withinElement.getByLabelText('calendar icon')).toBeInTheDocument();
    expect(withinElement.getByText(/Release date/)).toBeInTheDocument();
    expect(withinElement.getByText(/^2022$/)).toBeInTheDocument();
    expect(withinElement.getByText(/Oct 17, 2022/)).toBeInTheDocument();
    expect(withinElement.getByText(`${mockProps.synopsis}...`)).toBeInTheDocument();
  });
});