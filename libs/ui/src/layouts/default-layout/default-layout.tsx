import PropTypes from 'prop-types';
import React, { ReactChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ErrorBoundary from '../error-boundry/error-boundry';

export interface DefaultLayoutProps {
  children: ReactChildren;
}

DefaultLayout.prototype = {
  children: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}));

export function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <div className={classes.content}>{children}</div>
    </ErrorBoundary>
  );
}

export default DefaultLayout;
