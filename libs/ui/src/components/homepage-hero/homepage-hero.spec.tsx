import React from 'react';
import { render } from '@testing-library/react';

import HomepageHero from './homepage-hero';

describe('HomepageHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomepageHero />);
    expect(baseElement).toBeTruthy();
  });
});
