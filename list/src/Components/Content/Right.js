import React,{Fragment} from 'react';
import {Grid,Button,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

export default function Right(){
    const classes=useStyles();

    return(
        <div>
            <Grid>
                <Grid>
                    <Typography variant="h5" align="left" color="textSecondary" paragraph>
                        [ ]新闻公告：
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5" align="left" color="textSecondary" paragraph>
                        [ ]下载链接：
                    </Typography>
                    <Typography  align="left" color="textSecondary" paragraph>
                        各大主流Linux发行版的ISO文件下载
                    </Typography>
                    <Button variant="outlined" color="secondary">
                        获取下载链接
                    </Button>
                </Grid>
                <Grid>
                    <Typography variant="h5" align="left" color="textSecondary" paragraph>
                        [ ]配置生成：
                    </Typography>
                    <Typography  align="left" color="textSecondary" paragraph>
                        生成发行版的配置文件
                    </Typography>
                    <Button variant="outlined" color="secondary">
                        配置生成器
                    </Button>
                </Grid>
                <Grid>
                    <Typography variant="h5" align="left" color="textSecondary" paragraph>
                        [ ]联系我们：
                    </Typography>
                    <Typography  align="left" color="textSecondary" paragraph>
                        GitHub：
                        镜像站开放QQ群：
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}