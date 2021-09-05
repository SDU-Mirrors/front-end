import React, {Fragment} from 'react';
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import List from './List'
import Right from './Right'

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    main: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    list: {
        marginLeft: theme.spacing(30),
    },
    right: {
        marginLeft: theme.spacing(10),
        //marginRight: theme.spacing(30),
    }
}));

export default function Mirror() {
    const classes = useStyles();
    return (
        <Grid className={classes.main}>
            <Grid container className={classes.content}>
                <Grid item sm className={classes.list}>
                    <List/>
                </Grid>
                <Grid item sm className={classes.right}>
                    <Right/>
                    {/*<Paper className={classes.right}>*/}
                    {/*    <Right/>*/}
                    {/*</Paper>*/}
                </Grid>
            </Grid>
        </Grid>

    );
}