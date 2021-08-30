import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      '& > *': {
          margin: theme.spacing(1),
      },
  },
  small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
  },
  large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      margin: 1
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              开源镜像
            </Typography>
        </div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              博客
            </Typography>
        </div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />

        </div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
        </div>
        <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              成员信息
            </Typography>
        </div>
    </div>
  );
}