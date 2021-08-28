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
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    list: {
        marginLeft: theme.spacing(15),

    },
    right: {
        marginLeft: theme.spacing(15),
        marginRight: theme.spacing(25),
    }
}));

export default function Mirror() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container spacing={2} className={classes.content}>
                <Grid item sm className={classes.list}>
                    <List/>
                </Grid>
                <Grid item sm>
                    <Paper className={classes.right}>
                        <Right/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}