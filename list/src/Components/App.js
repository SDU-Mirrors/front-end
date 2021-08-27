import React,{Fragment} from 'react'
import {Footer} from './Layouts'
import {Mirror} from './Mirror'
import {HomePage} from './HomePage'
import {Docs} from './Docs'
import {HelpPage} from './HelpPage'
import { Cards } from './Cards'
import { makeStyles } from '@material-ui/core/styles';
import { Route, Redirect, Link,withRouter } from "react-router-dom";

import {AppBar,Toolbar, Typography,CssBaseline} from '@material-ui/core'
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

export default function App(){
    const classes = useStyles();

    return (
        <div className={classes.App}>
            <Fragment>
                <CssBaseline />
                <Header/>

                <Route className={classes.main} exact path="/">
                    <Redirect className={classes.main} to="/mirror" />
                </Route>
                <Route className={classes.main} path="/mirror" component={Mirror} />
                <Route className={classes.main} path="/home" component={HomePage} />
                <Route className={classes.main} path="/docs" component={Docs} />
                <Route className={classes.main} path="/help" component={HelpPage} />
                <Route className={classes.main} path="/cards" component={Cards} />
                <Footer/>
            </Fragment>
        </div>
    )
}




//下面是Header 代码
function Header(){
    const classes=useStyles();
    
    return(
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
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
                    <Link to="/docs" variant="button" color="textPrimary" href="#" className={classes.link}>
                            文档                     
                    </Link>
                    <Link to="/help" variant="button" color="textPrimary" href="#" className={classes.link}>
                        帮助
                    </Link>
                    <Link to="/cards" variant="button" color="textPrimary" href="#" className={classes.link}>
                        关于
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    )
}