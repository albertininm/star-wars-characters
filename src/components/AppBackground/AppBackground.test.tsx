import React from 'react';
import { render } from '@testing-library/react';
import AppBackground from './AppBackground';

describe('Components: AppBackground', () => {
  it('should render with right default style', () => {
    const {container} = render(<AppBackground />);

    expect(container.getElementsByClassName('app-background')).toHaveLength(1);
  });
});