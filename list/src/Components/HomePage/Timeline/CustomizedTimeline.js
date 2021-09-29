import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {colors} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
        textAlign: "left"
    },
    connector: {
        backgroundColor: '#e1e5f2',
    },
}));

export default function CustomizedTimeline() {
    const classes = useStyles();

    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2019年4月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#706DFF"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            由山东大学（青岛）信息化工作办公室帮助，镜像站服务器在校园网内网上线。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2020年1月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#FF70A6"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站受到内测同学好评，镜像站硬盘由 1 TB 扩容至 2 TB。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年2月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#FF9770"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站运营团队列入山东大学（青岛）信息化工作办公室勤工助学技术岗名单。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年3月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#FFD670"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站由虚拟机改为使用实体机，镜像站硬盘扩容至 4 TB，并申请了山大官方域名 <a href={"/"}>mirrors.sdu.edu.cn</a> 。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年5月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#9EB3C2"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站对校外进行开放，并启用了 IPv6 协议访问。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年7月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#706DFF"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站运营团队并入山东大学（青岛）网管会，镜像站硬盘扩容至 10 TB。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年8月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#FF70A6"}}>
                    </TimelineDot>
                    <TimelineConnector className={classes.connector}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站第一期视频《WSL的安装》在b站上线。
                    </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2021年9月
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                    </TimelineDot>
                    {/*<TimelineConnector/>*/}
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            镜像站新前端上线，关于镜像站的介绍登上“山东大学”官方公众号。
                        </Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>


        </Timeline>
    );
}