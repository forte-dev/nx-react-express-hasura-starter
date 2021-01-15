import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

// noinspection ES6PreferShortImport
import { Copyright } from '../copyright/copyright';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;
