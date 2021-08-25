import React from 'react';
import {AppBar,Toolbar, Typography,Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../source/logo1.png'
import oops_logo from '../source/oops_logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    App: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    appBar: {
        position: 'relative',
        borderBottom: `1px solid ${theme.palette.divider}`,
        //backgroundColor:'#9c0c13',
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    toolbar: {
        flexWrap: 'wrap',
    },
        toolbarTitle: {
          flexGrow: 1,
      },
      link: {
          margin: theme.spacing(1, 1.5),
          color:'#9c0c13'
      },
}));


export default function Header(){
    const classes=useStyles();
    
    return(
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <img src={oops_logo} alt= "" style={{maxWidth:200, height:50}} />
                <img src={logo} alt= "" style={{maxWidth:200, height:50}} />
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

                </Typography>
                <nav>
                    <Link to="" variant="button" color="textPrimary" href="/index.html#/home" className={classes.link}>
                        主页
                    </Link>
                    <Link to="" variant="button" color="textPrimary" href="/index.html#/home" className={classes.link}>
                        镜像
                    </Link>
                    {/* <a className={classes.link} variant="button" color="textPrimary" href="/docs">文档</a> */}
                    <Link to="" variant="button" color="textPrimary" href="/docs" className={classes.link}>
                            文档                     
                    </Link>
                    <Link to="" variant="button" color="textPrimary" href="/index.html#/home" className={classes.link}>
                        帮助
                    </Link>
                    <Link to="" variant="button" color="textPrimary" href="/index.html#/home" className={classes.link}>
                        关于
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}