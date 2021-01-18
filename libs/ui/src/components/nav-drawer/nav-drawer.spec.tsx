import React from 'react';
import { render } from '@testing-library/react';

import NavDrawer from './nav-drawer';

describe('NavDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
