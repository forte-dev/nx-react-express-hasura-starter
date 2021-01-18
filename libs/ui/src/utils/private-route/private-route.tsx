import { Location } from 'history';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import React, { ComponentType, ReactChildren } from 'react';

import DefaultLayout from '../../layouts/default-layout/default-layout';

export interface PrivateRouteProps {
  component: ComponentType;
  layout?: ComponentType;
  exact?: boolean;
  path: string;
  children?: ReactChildren;
  location?: Location;
}

export function PrivateRoute({
  component: Component,
  layout: Layout,
  ...props
}: PrivateRouteProps) {
  Layout =
    Layout === undefined
      ? () => <DefaultLayout>{props.children}</DefaultLayout>
      : Layout;

  const authentication = useSelector((store) => store.authentication);
  const token = useSelector((store) => store.authentication?.token);

  const render = () => {
    if (token) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }

    return (
      <Redirect
        to={{
          pathname: '/',
          state: { referrer: props.location, ...authentication },
        }}
      />
    );
  };

  return <Route {...props} render={render} />;
}

export default PrivateRoute;
