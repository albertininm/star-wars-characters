import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import userEvent from '@testing-library/user-event';

describe('Components: Badge', () => {
  it('should render with right default style', () => {
    const content = 'content';

    render(<Badge content={content} />);

    const badgeElement = screen.getByTitle(content);
    
    expect(badgeElement).toHaveTextContent(content);
    expect(badgeElement).toHaveAttribute('title', content);
    expect(badgeElement).toHaveClass('truncate');
  });
  
  it('should call onClick callback when clicking on it', async () => {
    const onClickFake = jest.fn();
    const content = 'content';
    
    render(<Badge onClick={onClickFake} content={content} />);
    
    const badgeElement = screen.getByTitle(content);

    await userEvent.click(badgeElement);

    expect(onClickFake).toHaveBeenCalledTimes(1);
  });
});