import React from 'react';
import { render, screen } from '@testing-library/react';
import ParagraphSkeleton from './ParagraphSkeleton';

describe('Components: ParagraphSkeleton', () => {
  it('should render with right default style', async () => {
    render(<ParagraphSkeleton />);

    const paragraphSkeletonElement = screen.getByLabelText('loading...');

    expect(paragraphSkeletonElement).toHaveClass('paragraph-skeleton', 'medium');
    expect(paragraphSkeletonElement).toHaveStyle('width:30px;');
  });

  it('should render with custom className, style, and variation', async () => {
    const customClassName = 'custom-class';

    render(<ParagraphSkeleton className={customClassName} variation="thick" style={{opacity: '0.5'}}  />);

    const paragraphSkeletonElement = screen.getByLabelText('loading...');

    expect(paragraphSkeletonElement).toHaveClass('paragraph-skeleton', 'thick');
    expect(paragraphSkeletonElement).toHaveStyle('opacity:0.5;');
    expect(paragraphSkeletonElement).toHaveClass(customClassName);
  });
});