import React,{Fragment} from 'react';
import {Grid,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {List,Right} from '../Content/index'

const useStyles = makeStyles((theme) => ({
    content:{
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(5),
        marginLeft:theme.spacing(2),
        marginRight:theme.spacing(20),
    },
}));

export default function Content(){
    const classes=useStyles();
    return(
        <Grid container spacing={2} className={classes.content}>
            <Grid item sm>
                <Paper>
                    <List/>
                </Paper>
            </Grid>
            <Grid item sm>
                <Paper>
                    <Right/>
                </Paper>
            </Grid>
        </Grid>
    )
}