import React,{Fragment} from 'react'
import {Footer} from './Layouts'
import {Mirror} from './Mirror'
import {HomePage} from './HomePage'
import {HelpPage} from './HelpPage'
import { makeStyles } from '@material-ui/core/styles';
import { Route, Redirect, Link,withRouter } from "react-router-dom";

import {AppBar,Toolbar, Typography} from '@material-ui/core'
import logo from './source/logo1.png'
import oops_logo from './source/oops_logo.png'

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
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
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

export default function App(){
    const classes = useStyles();

    return (
        <div className={classes.App}>
            <Fragment>
                <Header/>

                <Route exact path="/">
                    <Redirect to="/mirror" />
                </Route>
                <Route path="/mirror" component={Mirror} />
                <Route path="/home" component={HomePage} />
                <Route path="/help" component={HelpPage} />
                <Footer/>
            </Fragment>
        </div>
    )
}




//下面是Header 代码
function Header(){
    const classes=useStyles();
    
    return(
        <AppBar position="absolute" color="default" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <img src={oops_logo} alt= "" style={{maxWidth:200, height:50}} />
                <img src={logo} alt= "" style={{maxWidth:200, height:50}} />
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>

                </Typography>
                <nav>
                    <Link to="/home" variant="button" color="textPrimary" href="#" className={classes.link}>
                        主页
                    </Link>
                    <Link to="/mirror" variant="button" color="textPrimary" href="#" className={classes.link}>
                        镜像
                    </Link>
                    <Link to="" variant="button" color="textPrimary" href="#" className={classes.link}>
                            文档                     
                    </Link>
                    <Link to="/help" variant="button" color="textPrimary" href="#" className={classes.link}>
                        帮助
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        关于
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}