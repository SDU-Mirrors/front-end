import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid,Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoBig from '../source/logoBig.png'

import CustomizedTimeline from './Timeline/CustomizedTimeline'
import ImageAvatars from './Avatar/ImageAvatars'
import Picture from './Picture/Picture';
import Blog from './Blog/Blog';

const useStyles = makeStyles((theme) => ({
    image:{
        maxWidth:600, 
        height:'auto',
    },
    Picture:{
        width:400, 
        height:'auto', 

    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      //backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(15, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home(){
    const classes=useStyles();
    return(
        <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <img src={logoBig} alt= ""  className={classes.image} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              这里是山东大学镜像站，这里将提供给您丰富的镜像资源,相关的学习、帮助资料。并且提供我们相关的动态。
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <ImageAvatars/>
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              [ ]博客站
            </Typography>
          <Grid container spacing={4}>
              <Blog/>
          </Grid>
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              [ ]镜像站时间记录轴
            </Typography>
          <Grid container spacing={4}>
              <CustomizedTimeline/>
          </Grid>
        </Container>

        
      </main>
    )
}