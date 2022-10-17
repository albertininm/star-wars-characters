import React from 'react';
import { render, screen, within } from '@testing-library/react';
import ReleaseDate from './ReleaseDate';

describe('Components: MoviesSection/MovieItem/ReleaseDate', () => {
  it('should render date with right format', async () => {
    const date = '2022-10-17';

    render(<ReleaseDate date={date} />);

    const element = screen.getByTitle('released date');

    expect(element).toBeInTheDocument();

    const withinElement = within(element);
  
    expect(withinElement.getByLabelText('calendar icon')).toBeInTheDocument();
    expect(withinElement.getByText(/Release date/)).toBeInTheDocument();
    expect(withinElement.getByText(date)).toBeInTheDocument();
  });
});