import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Components: Spinner', () => {
  it('should accept custom className', () => {
    const customClass = 'custom-class';

    render(<Spinner className={customClass} />);

    expect(screen.getByTitle('loading...')).toHaveClass('spinner', customClass);
  });
});