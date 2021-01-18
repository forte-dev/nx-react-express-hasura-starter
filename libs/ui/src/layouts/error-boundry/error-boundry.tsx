import Box from '@material-ui/core/Box';
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class ErrorBoundary extends Component<
  { value?: string },
  Record<string, unknown>
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    /* eslint-disable no-console */
    console.error(error);
    console.error(errorInfo);
    /* eslint-enable no-console */
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              Something went wrong.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Please reload the current page
            </Typography>
          </Container>
        </Box>
      );
    }

    return this.props.children;
  }
}
