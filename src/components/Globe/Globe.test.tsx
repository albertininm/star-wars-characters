import { render, screen } from '@testing-library/react';
import React from 'react';
import Globe from './Globe';

describe('Components: Globe', () => {
  it('should render Globe icon', () => {
    render(<Globe />);

    const svgIcon = screen.getByRole('img');
    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveAttribute('data-testid', 'globe-icon');
  });

  it('should accept custom height and width', () => {
    const height = 10;
    const width = 20;

    render(<Globe height={height} width={width} />);

    const svgIcon = screen.getByRole('img');

    expect(svgIcon).toBeInTheDocument();
    expect(svgIcon).toHaveAttribute('height', String(height));
    expect(svgIcon).toHaveAttribute('width', String(width));
  });
});