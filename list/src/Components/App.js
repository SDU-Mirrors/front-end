import React,{Fragment} from 'react'
import {Header,Footer} from './Layouts'
import {Mirror} from './Mirror'
import { makeStyles } from '@material-ui/core/styles';
import { Route, Redirect, Link, withRouter } from "react-router-dom";

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
                <Footer/>
            </Fragment>
        </div>
    )
}