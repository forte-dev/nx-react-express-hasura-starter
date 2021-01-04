import React, { useEffect, useState } from 'react';

import { Message } from '@forte-dev/api-interfaces';
import { AppLayout } from '@forte-dev/app-layout';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <AppLayout>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to client!</h1>
        <img width="450" src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" />
      </div>
      <div>{m.message}</div>
    </AppLayout>
  );
};

export default App;
