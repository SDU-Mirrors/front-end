import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container,Typography,Grid} from '@material-ui/core';
import logo from '../source/logo.png'

  
const useStyles = makeStyles((theme) => ({
  footer: {
    marginLeft:theme.spacing(-1),
    marginRight:theme.spacing(-1),
    marginBottom:theme.spacing(-1),
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  typographyBody:{
    fontSize:12,
  },
  typographyTitle:{
    
  },
  typographyFooter:{

  },
  image:{
    marginLeft:100,
    maxWidth:200, 
    height:'auto',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer position="absolute" className={classes.footer}>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item sm>
            <Typography variant="h4" className={classes.typographyTitle}>
              山东大学镜像站
            </Typography>
            <Typography variant="body" className={classes.typographyBody}>
              山东大学镜像站是由山东大学（青岛）学生oops计算机社团在山东大学（青岛）信息化工作办公室指导下建立，为技术爱好者、工程师、科研人员等提供开源软件镜像服务。
            </Typography>
            <Grid item sm>
              <Typography className={classes.typographyFooter}>
                相关链接
              </Typography>
            </Grid>
            <Grid item sm>
              <Typography className={classes.typographyFooter}>
                山东大学
              </Typography>
            </Grid>
            <Grid item sm>
              <Typography className={classes.typographyFooter}>
                XXXXX
              </Typography>
            </Grid>
            <Grid item sm>
              <Typography className={classes.typographyFooter}>
                山东大学（青岛）学生oop计算机社团
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm>
            <img src={logo} alt= ""  className={classes.image} />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}