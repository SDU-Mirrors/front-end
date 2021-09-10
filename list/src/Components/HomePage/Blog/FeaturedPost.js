import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        // margin: "auto"
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export default function FeaturedPost(props) {
    const classes = useStyles();
    const {post} = props;

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href={post.link}>
                <Card className={classes.card} style={{borderRadius: '3%'}}>
                    <div className={classes.cardDetails}>
                        <CardContent style={{marginTop: 8, marginLeft: 8}}>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1">
                                {post.description}
                            </Typography>

                            <Typography variant="subtitle2" style={{marginTop: 3}}>
                                <a href={post.link}>
                                    查看更多...
                                </a>
                            </Typography>
                        </CardContent>
                    </div>
                    {/*<Hidden xsDown>*/}
                    {/*    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle}/>*/}
                    {/*</Hidden>*/}
                </Card>
            </CardActionArea>
        </Grid>
    );
}

FeaturedPost.propTypes =
    {
        post: PropTypes.object,
    }
;