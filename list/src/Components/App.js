import React,{Fragment} from 'react'
import {Header,Footer,Content} from './Layouts'
import { makeStyles } from '@material-ui/core/styles';

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
                <Content/>
                <Footer/>
            </Fragment>
        </div>
    )
}