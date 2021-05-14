import React from 'react';
import {AppBar,Toolbar, Typography,Link} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor:'#9c0c13',
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
        color:"#fff",
        margin: theme.spacing(1, 1.5),
    },
}));


export default function Header(){
    const classes=useStyles();
    
    return(
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        主页
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        博客
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        等
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}