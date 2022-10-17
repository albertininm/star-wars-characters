import React from 'react';
import { render, screen } from '@testing-library/react';
import NoCharacterFoundPlaceholder from './NoCharacterFoundPlaceholder';

describe('Components: NoCharacterFoundPlaceholder', () => {
  it('should render with right default style', async () => {
    render(<NoCharacterFoundPlaceholder />);

    expect(screen.queryByText('No character found')).toBeInTheDocument();
    expect(screen.queryByText('Change your search to run another')).toBeInTheDocument();
  });
});