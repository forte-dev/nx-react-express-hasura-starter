import { Route } from 'react-router-dom';
import React, { ComponentType, ReactChildren } from 'react';

import DefaultLayout from '../../layouts/default-layout/default-layout';

export interface PublicRouteProps {
  component: ComponentType;
  layout?: ComponentType;
  exact?: boolean;
  path: string;
  children?: ReactChildren;
}

export function PublicRoute({
  component: Component,
  layout: Layout,
  ...props
}: PublicRouteProps) {
  Layout =
    Layout === undefined
      ? () => <DefaultLayout>{props.children}</DefaultLayout>
      : Layout;

  const render = () => {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  return <Route {...props} render={render} />;
}

export default PublicRoute;
