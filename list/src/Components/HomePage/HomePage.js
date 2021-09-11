import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Grid, Paper} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logoBig from '../source/logobig.png'
import {ReactComponent as TimelineSVG} from "./source/timeline1.svg"
import {ReactComponent as DocsSVG} from "./source/docs.svg"
import Icon from "@ant-design/icons";


import CustomizedTimeline from './Timeline/CustomizedTimeline'
import ImageAvatars from './Avatar/ImageAvatars'
import Picture from './Picture/Picture';
import Blog from './Blog/Blog';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "80vw",
        maxWidth: "600px",
        height: "auto",
        marginLeft: "max(10vw, calc(50% - 300px))",
        marginRight: "max(10vw, calc(50% - 300px))",
        marginBottom: "30px",
    },
    Picture: {
        width: 400,
        height: 'auto',
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        margin: 'auto',
        padding: theme.spacing(15, 0, 6),
        textAlign: 'center',
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage() {
    const classes = useStyles();
    return (
        <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
                <Container maxWidth="md" style={{padding: 0}}>
                    <img src={logoBig} alt="" className={classes.image}/>
                </Container>
                <Container maxWidth="sm">
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        这里是山东大学镜像站，在这里我们将提供给您丰富的镜像资源，以及相关的学习和帮助资料，并且分享我们相关的动态。
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary" href="#/mirror">
                                    镜 像 资 源
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary" href="#/about">
                                    关 于 我 们
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            <Container maxWidth="lg">
                {/* End hero unit */}
                <ImageAvatars/>
            </Container>

            <Container className={classes.cardGrid} maxWidth="lg">
                {/* End hero unit */}
                <Typography component="h1" variant="h4" align="left" color="textPrimary" gutterBottom>
                    <Icon component={DocsSVG}/> 博客站
                </Typography>
                <Grid container spacing={4} style={{marginTop: 2}}>
                    <Blog/>
                </Grid>
            </Container>

            <Container className={classes.cardGrid} maxWidth="lg">
                {/* End hero unit */}
                <Typography component="h1" variant="h4" align="left" color="textPrimary" gutterBottom>
                    <Icon component={TimelineSVG}/> 镜像站时间记录轴
                </Typography>
                <Grid container spacing={4} style={{marginTop: 2}}>
                    <CustomizedTimeline/>
                </Grid>
            </Container>

        </main>
    )
}