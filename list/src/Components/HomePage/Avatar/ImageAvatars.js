import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from "@ant-design/icons";
import {ReactComponent as OopsSVG} from "../source/Oops.svg";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: 'auto',
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        marginBottom: theme.spacing(1),
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} justifyContent="center" alignItems="center">
            <div>
                <Avatar alt="开源镜像" className={classes.large} src={'../source/Oops.png'}>
                    {/*<Icon component={OopsSVG}/>*/}
                </Avatar>
                <Typography variant="h5" align="center" color="rgba(0,0,0,0.7)" paragraph>
                    开源镜像
                </Typography>
            </div>
            <div>
                <Avatar alt="博客" src="/static/images/avatar/1.jpg" className={classes.large}>

                </Avatar>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    博客
                </Typography>
            </div>
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    成员信息
                </Typography>
            </div>
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    信息办
                </Typography>
            </div>
            <div>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large}/>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    oops
                </Typography>
            </div>
        </Grid>
    );
}