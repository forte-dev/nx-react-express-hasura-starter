import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

/* eslint-disable-next-line */
export interface HomepageHeroProps {}

const useStyles = makeStyles((theme) => {
  return {
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
  };
});

export function HomepageHero(props: HomepageHeroProps) {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        Forte.dev
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" component="p">
        Follow your Passion. Build your Dream. Make code your Forte.
      </Typography>
    </Container>
  );
}

export default HomepageHero;
