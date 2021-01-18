import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Switch } from 'react-router-dom';

import {
  AppLayout,
  saveState,
  FullPageLayout,
  AdminLayout,
  PublicRoute,
  PrivateRoute,
} from '@forte-dev/ui';

import LandingPage from './pages/landing-page';
import DashboardPage from './pages/dashboard-page';

// Initialize Google Analytics
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.NX_GOOGLE_ANALYTICS);
}

const trackPage = (page, options) => {
  ReactGA.set({ page, ...options });
  ReactGA.pageview(page);
};

export const App = () => {
  const location = useLocation();
  const authentication = useSelector((store) => store.authentication);

  useEffect(() => {
    window.addEventListener('unload', () => {
      saveState({ authentication });
    });

    return () =>
      window.removeEventListener('unload', () => {
        saveState({ authentication });
      });
  }, [authentication]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const page = location.pathname;
      trackPage(page, { debug: true });
    }
  }, [location]);

  return (
    <AppLayout>
      <Switch>
        <PublicRoute
          exact
          path="/"
          component={LandingPage}
          layout={FullPageLayout}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          component={DashboardPage}
          layout={AdminLayout}
        />
      </Switch>
    </AppLayout>
  );
};

export default App;
