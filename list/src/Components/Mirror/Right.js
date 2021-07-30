import React, {Component, Fragment} from 'react';
import DownloadFormCard from "./downloadFormCard";
import ConfigGeneratorCard from "./configGeneratorCard";
import axios from "axios";
import "./Right.css";
import {Typography} from "antd";

import GitHubIcon from '@material-ui/icons/GitHub';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import CallIcon from '@material-ui/icons/Call';

export default class Right extends Component{
    //const classes=useStyles();
    state = {
        // ISO下载链接
        isoLinks: null,
        // 发行版的版本名，及对应的版本号或版本别名
        config: null
    };

    /**
     * 获取ISO下载链接
     */
    fetch_iso_links = () => {
        this.setState({
            fetching_slots: true
        });
        axios({
            url: "/static/isoLinks.json",
            method: "get"
        }).then(response => {
            const isoLinks = response.data;
            console.log(isoLinks);
            this.setState({
                isoLinks: isoLinks
            });
        });
    };

    /**
     * 获取发行版的版本名，及对应的版本号或版本别名
     */
    fetch_config = () => {
        this.setState({
            fetching_slots: true
        });
        axios({
            url: "/static/config.json",
            method: "get"
        }).then(response => {
            const config = response.data;
            console.log(config);
            this.setState({
                config: config
            });
        });
    };

    componentDidMount() {
        this.fetch_iso_links();
        console.log(this.state.isoLinks)
        this.fetch_config();
    }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            <AnnouncementIcon color="secondary" />新闻公告：
                        </Typography>
                    </div>
                    <div className="side-card">
                        <DownloadFormCard isoLinks={this.state.isoLinks} />
                    </div>
                    <div className="side-card">
                        <ConfigGeneratorCard config={this.state.config} />
                    </div>
                    <div>
                        <Typography variant="h5" align="left" color="textSecondary" paragraph>
                            <CallIcon color="secondary" />联系我们：
                        </Typography>
                        <Typography  align="left" color="textSecondary" paragraph>
                            GitHub：<GitHubIcon fontSize="small"/>
                            镜像站开放QQ群：
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}