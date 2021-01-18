import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import React, { ReactChildren, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopNavBar from '../../components/top-nav-bar/top-nav-bar';
import ErrorBoundary from '../error-boundry/error-boundry';
import Footer from '../../components/footer/footer';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 3,
  },
  appBarSpacer: {
    minHeight: theme.mixins.toolbar.minHeight,
  },
  content: {
    flexGrow: 1,
  },
}));

export interface FullPageLayoutProps {
  children: ReactChildren;
}

FullPageLayout.prototype = {
  children: PropTypes.node,
};

export function FullPageLayout(props: FullPageLayoutProps) {
  const { children } = props;
  const classes = useStyles();

  return (
    <ErrorBoundary>
      <TopNavBar
        className={classes.appBar}
        position="static"
        color="default"
        elevation={0}
      />

      <div className={classes.content}>
        <div className={classes.appBarSpacer} />

        {children}
      </div>

      <Footer />
    </ErrorBoundary>
  );
}

export default FullPageLayout;
