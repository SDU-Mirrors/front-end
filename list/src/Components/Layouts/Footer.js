import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid} from '@material-ui/core';
import logo from '../source/logo.png'

  
const useStyles = makeStyles((theme) => ({
  footer: {
    bottom: 0,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer position="absolute" className={classes.footer}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item sm>
            <Typography variant="body1">
              山东大学开源镜像站
            </Typography>
          </Grid>
          <Grid item sm>
            <img src={logo} alt= "" />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}