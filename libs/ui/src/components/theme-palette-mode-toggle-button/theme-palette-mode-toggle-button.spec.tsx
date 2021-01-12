import React from 'react';
import { render } from '@testing-library/react';

import ThemePaletteModeToggleButton from './theme-palette-mode-toggle-button';

describe('ThemePaletteModeToggleButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemePaletteModeToggleButton />);
    expect(baseElement).toBeTruthy();
  });
});
