import React from 'react';
import { render } from '@testing-library/react';

import LanguageSelectDropdown from './language-select-dropdown';

describe('LanguageSelectDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LanguageSelectDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
