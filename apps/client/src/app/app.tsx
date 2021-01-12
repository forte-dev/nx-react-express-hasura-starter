import React from 'react';
import { AppLayout, TopNavBar, HomepageMain, HomepageHero, Footer } from '@forte-dev/ui';

export const App = () => {
  return (
    <AppLayout>
      <TopNavBar />
      <HomepageHero />
      <HomepageMain />
      <Footer />
    </AppLayout>
  );
};

export default App;
