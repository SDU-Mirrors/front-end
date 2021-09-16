import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from "@ant-design/icons";
import {ReactComponent as OopsSVG} from "../source/Oops.svg";
import {Grid, Link} from "@material-ui/core";
import sduLogo from "../source/sduLogo.jpg"
import linux from "../source/linux.png"
import docs from "../source/docs.png"
import member from "../source/member.png"
import oops from "../source/Oops.png"
import "./avatar.css"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: 'auto',
        },
        flexWrap: "wrap",
        textAlign: "center",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    link: {
        margin: "8px 12px",
        color: '#9c0c13',
    },
    fonts: {
        fontSize: "min(calc(0.5rem + 1vw), 1.5rem)",
        marginTop: 16,
    }
}));

export default function ImageAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div class="box">
                {/*<Avatar alt="开源镜像" className={classes.large} src={'../source/Oops.png'}>*/}
                {/*    /!*<Icon component={OopsSVG}/>*!/*/}
                {/*</Avatar>*/}
                <a href="#/mirror" color="textPrimary" className={classes.link}>
                    <img src={linux} class="icon"></img>
                    <Typography variant="h5" align="center" color="textSecondary" className={classes.fonts} paragraph>
                        开源镜像
                    </Typography>
                </a>

            </div>
            <div class="box">
                <a href="/docs" color="textPrimary" className={classes.link}>
                    <img src={docs} class="icon"></img>
                    <Typography variant="h5" align="center" color="textSecondary" className={classes.fonts} paragraph>
                        博客
                    </Typography>
                </a>

            </div>
            <div class="box">
                <a href="#/about" color="textPrimary" className={classes.link}>
                    <img src={member} class="icon"></img>
                    <Typography variant="h5" align="center" color="textSecondary" className={classes.fonts} paragraph>
                        成员信息
                    </Typography>
                </a>
            </div>
            <div class="box">
                <a href="https://www.nc.sdu.edu.cn/" color="textPrimary" className={classes.link}>
                    <img src={sduLogo} class="large"></img>
                    <Typography variant="h5" align="center" color="textSecondary" className={classes.fonts} paragraph>
                        信息化工作办公室
                    </Typography>
                </a>
            </div>
            <div class="box">
                <a href="https://oops.qd.sdu.edu.cn/" color="textPrimary" className={classes.link}>
                    <img src={"/static/Oops.png"} class="large"></img>
                    <Typography variant="h5" align="center" color="textSecondary" className={classes.fonts} paragraph>
                        Oops计算机社团
                    </Typography>
                </a>
            </div>
        </div>
    );
}