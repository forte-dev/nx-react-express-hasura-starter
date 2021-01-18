import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { BoxTypeMap } from '@material-ui/core';

/* eslint-disable-next-line */
export interface CopyrightProps {}

export function Copyright(props: any) {
  return (
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
