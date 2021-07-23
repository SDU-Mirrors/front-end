import React,{Fragment} from 'react';
import {Grid,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {List,Right} from '../Content/index'

const useStyles = makeStyles((theme) => ({
    content:{
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(5),
        marginLeft:theme.spacing(2),
        marginRight:theme.spacing(0),
    },
    list:{
        marginLeft:theme.spacing(15),
        marginRight:theme.spacing(-10),
    },
    right:{
        marginLeft:theme.spacing(20),
        marginRight:theme.spacing(25),
    }
}));

export default function Content(){
    const classes=useStyles();
    return(
        <Grid container spacing={2} className={classes.content}>
            <Grid item sm className={classes.list}>
                    <List />
            </Grid>
            <Grid item sm>
                <Paper className={classes.right}>
                    <Right />
                </Paper>
            </Grid>
        </Grid>
    );
}