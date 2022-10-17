import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Components: Avatar', () => {
  it('should render only first letter of given name', () => {
    const name = 'Yoda';

    render(<Avatar name={name} />);

    expect(screen.queryByText(name[0])).toBeInTheDocument();
    expect(screen.queryByText(name)).not.toBeInTheDocument();
  });

  it('should accept custom className', () => {
    const name = 'Yoda';
    const customClass = 'class-custom';

    render(<Avatar className={customClass} name={name} />);
    
    const avatarElement = screen.queryByText(name[0]);

    expect(avatarElement).toHaveClass('avatar', customClass);
  });
});