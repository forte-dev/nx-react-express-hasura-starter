import React from 'react';
import { render } from '@testing-library/react';

import Copyright from './copyright';

describe('Copyright', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Copyright />);
    expect(baseElement).toBeTruthy();
  });
});
