import React, {Fragment} from 'react';
import {Grid, Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import List from './List'
import Right from './Right'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5),
    },
    main: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
    },
    list: {
        flexGrow: 3,
    },
    right: {
        marginLeft: theme.spacing(10),
        flexGrow: 1,
    }
}));

export default function Mirror() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid className={classes.main}>
                <Grid container className={classes.content}>
                    <div className={classes.list}>
                        <List/>
                    </div>
                    <div className={classes.right}>
                        <Right/>
                        {/*<Paper className={classes.right}>*/}
                        {/*    <Right/>*/}
                        {/*</Paper>*/}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}