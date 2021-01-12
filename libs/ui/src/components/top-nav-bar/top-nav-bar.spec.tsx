import React from 'react';
import { render } from '@testing-library/react';

import TopNavBar from './top-nav-bar';

describe('TopNavBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopNavBar />);
    expect(baseElement).toBeTruthy();
  });
});
