import React from 'react';
import { render } from '@testing-library/react';

import HomepageMain from './homepage-main';

describe('HomepageMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomepageMain />);
    expect(baseElement).toBeTruthy();
  });
});
