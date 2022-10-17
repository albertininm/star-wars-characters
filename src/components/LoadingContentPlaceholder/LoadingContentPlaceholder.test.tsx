import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingContentPlaceholder from './LoadingContentPlaceholder';

describe('Components: LoadingContentPlaceholder', () => {
  it('should render with right default style', () => {
    const {container} = render(<LoadingContentPlaceholder />);

    expect(screen.queryByRole('heading', {name: 'Loading...'})).toBeInTheDocument();
    expect(container.getElementsByClassName('spinner')).toHaveLength(1);
  });

  it('should accept custom "contentName"', () => {
    const contentName = 'characters';
    const expectedContent = `Loading ${contentName}...`;

    render(<LoadingContentPlaceholder contentName={contentName}/>);

    expect(screen.queryByRole('heading', {name: expectedContent})).toBeInTheDocument();
  });
});