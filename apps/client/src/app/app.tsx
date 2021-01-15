import React, { useState } from 'react';
import {
  AppLayout,
  TopNavBar,
  HomepageMain,
  HomepageHero,
  Footer,
  LoginModal,
} from '@forte-dev/ui';

export const App = () => {
  const [openLoginDialog, setLoginDialog] = useState(false);

  const handleLoginClick = () => {
    setLoginDialog(!openLoginDialog);
  };

  const handleLoginUser = async (values, actions) => {
    await new Promise((r) => setTimeout(r, 500));
    console.log('values, actions', values, actions);

    actions.setTouched({});
    actions.setSubmitting(false);
  };

  return (
    <AppLayout>
      <TopNavBar handleLoginClick={handleLoginClick} />
      <HomepageHero />
      <HomepageMain />
      <Footer />
      <LoginModal
        onSubmit={handleLoginUser}
        open={openLoginDialog}
        onClose={handleLoginClick}
      />
    </AppLayout>
  );
};

export default App;
