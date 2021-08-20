import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid} from '@material-ui/core';
import logo from '../source/logo.png'
import sduMirror from '../source/SDUMirror.png'
import oops from '../source/oops.jpg'
import sna from '../source/sna.jpg'

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  ALL:{
    marginLeft:100,
  },
  left:{
    marginTop:30,
  },
  typographyBody:{
    fontSize:12,
  },
  typographyTitle:{
    
  },
  typographyFooter:{
    fontSize:10,
  },
  image:{
    maxWidth:100, 
    padding: theme.spacing(5, 0),
    height:'auto',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (

    <footer  className={classes.footer}>
      <Container >
        <Grid container spacing={3} className={classes.ALL}>
          <Grid item xs={6} sm={6}>
            <Grid item xs={8} sm={8} className={classes.left} >
              <Typography variant="body" className={classes.typographyBody}>
                山东大学镜像站是由山东大学（青岛）学生oops计算机社团在山东大学（青岛）信息化工作办公室指导下立项，由山东大学（青岛）网管会镜像站学生运营团队运营的开源镜像站平台。
              </Typography>
            </Grid>

            <Grid item xs={8} sm={8} className={classes.left}>
              <Typography variant="body" className={classes.typographyBody}>
                本镜像站为技术爱好者、工程师、科研人员等开源爱好者提供开源软件镜像服务，致力于打造以山东大学为中心的开源爱好者社区，提高山东大学影响力。
              </Typography>
            </Grid>
            
          </Grid>

          <Grid item  xs={6} sm={6}>
            <Grid item >
              <Typography variant="h4" className={classes.typographyTitle}>
                联系我们
              </Typography>
            </Grid>
            <Grid container justifyContent="center" xs={8} sm={8}>
              <Grid item  xs={4} sm={4}>
                <img src={sduMirror} alt= ""  className={classes.image} />
              </Grid>
              <Grid item  xs={4} sm={4}>
                <img src={oops} alt= ""  className={classes.image} />
              </Grid>
              <Grid item  xs={4} sm={4}>
                <img src={sna} alt= ""  className={classes.image} />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" xs={8} sm={8} >
              <Grid item xs={8} sm={8} >
                  <Typography variant="body" className={classes.typographyFooter}>
                    Copyright @ 2012-2015 ALL rights reserved  
                  </Typography>
              </Grid>
              <Grid item xs={4} sm={4}>
                  <Typography variant="body" className={classes.typographyFooter}>
                    鲁ICP备案XXXXX号
                  </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>

  );
}