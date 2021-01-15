import React from 'react';
import { render } from '@testing-library/react';

import LoginModal from './login-modal';

describe('LoginModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LoginModal
        open={true}
        onClose={() => console.log('onClose')}
        onSubmit={() => console.log('onSubmit')}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
