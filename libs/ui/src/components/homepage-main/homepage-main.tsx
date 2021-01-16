import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

/* eslint-disable-next-line */
export interface HomepageMainProps {}

const infos = [
  {
    title: 'React',
    subheader: 'Frontend',
    description: [
      'Declarative',
      'Component-Based',
      'Learn Once, Write Anywhere',
    ],
    buttonText: 'reactjs.org',
    buttonLink: 'https://reactjs.org/',
    buttonVariant: 'contained',
  },
  {
    title: 'Express',
    subheader: 'Backend',
    description: ['Fast', 'Un-opinionated', 'Minimal and flexible'],
    buttonText: 'expressjs.com',
    buttonLink: 'https://expressjs.com/',
    buttonVariant: 'contained',
  },
  {
    title: 'Hasura + PostgreSQL',
    subheader: 'Data Access Layer',
    description: [
      'Instant Realtime GraphQL APIs',
      'Built-in Granular Authorization',
      'Easily Integrate Business Logic',
    ],
    buttonText: 'hasura.io',
    buttonLink: 'https://hasura.io/',
    buttonVariant: 'contained',
  },
];

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardContainer: {
      '&:last-child': {
        paddingBottom: theme.spacing(8),
      },
    },
  };
});

export function HomepageMain(props: HomepageMainProps) {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
      <Grid
        container
        spacing={5}
        alignItems="flex-end"
        className={classes.cardContainer}
      >
        {infos.map((info) => (
          <Grid item key={info.title} xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title={info.title}
                subheader={info.subheader}
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{
                  align: 'center',
                }}
              />
              <CardContent>
                <ul>
                  {info.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography component="h3" align="center">
                    Learn more at
                  </Typography>

                  <Button
                    fullWidth
                    variant={info.buttonVariant as 'outlined' | 'contained'}
                    href={info.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.buttonText}
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomepageMain;
