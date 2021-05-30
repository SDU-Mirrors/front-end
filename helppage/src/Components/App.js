import React,{Fragment} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {Content} from './Layouts/Content'

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
                <CssBaseline />
                <Content/>
            </Fragment>
        </div>
    )
}