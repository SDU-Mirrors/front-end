import React,{Fragment} from 'react';
import {Grid,Paper} from '@material-ui/core'
import {List} from '../Content/index'

export default ()=>
    <Grid container spacing={2}>
        <Grid item sm>
            <Paper>
                <List/>
            </Paper>
        </Grid>
        <Grid item sm>
            right
        </Grid>
    </Grid>