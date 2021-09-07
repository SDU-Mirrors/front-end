import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from "@ant-design/icons";
import {ReactComponent as OopsSVG} from "../source/Oops.svg";
import {Grid, Link} from "@material-ui/core";
import sduLogo from "../source/sduLogo.jpg"

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
        marginBottom: theme.spacing(1.7),
        borderRadius: "50%"
    },
    link: {
        margin: theme.spacing(1, 1.5),
        color: '#9c0c13'
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} justifyContent="center" alignItems="center">
            <div>
                {/*<Avatar alt="开源镜像" className={classes.large} src={'../source/Oops.png'}>*/}
                {/*    /!*<Icon component={OopsSVG}/>*!/*/}
                {/*</Avatar>*/}
                <a href="#/mirror" color="textPrimary" className={classes.link}>
                    <img src={"/static/Oops.png"} className={classes.large}></img>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        开源镜像
                    </Typography>
                </a>

            </div>
            <div>
                <a href="/docs" color="textPrimary" className={classes.link}>
                    <img src={"/static/Oops.png"} className={classes.large}></img>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        博客
                    </Typography>
                </a>

            </div>
            <div>
                <a href="#/about" color="textPrimary" className={classes.link}>
                    <img src={"/static/Oops.png"} className={classes.large}></img>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        成员信息
                    </Typography>
                </a>
            </div>
            <div>
                <a href="https://www.nc.sdu.edu.cn/" color="textPrimary" className={classes.link}>
                    <img src={sduLogo} className={classes.large}></img>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        信息化工作办公室
                    </Typography>
                </a>
            </div>
            <div>
                <a href="https://oops-sdu.cn/" color="textPrimary" className={classes.link}>
                    <img src={"/static/Oops.png"} className={classes.large}></img>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Oops计算机社团
                    </Typography>
                </a>
            </div>
        </Grid>
    );
}