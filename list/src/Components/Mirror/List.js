import React, {Component} from 'react';
import axios from "axios";
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Grid} from '@material-ui/core';
import Title from './Title'
import Input from '@material-ui/core/Input';
import {ReactComponent as ListSVG} from "./source/list.svg"

import Icon from "@ant-design/icons";//material-ui 的icon存在与文字不对齐的问题
import './List.css'


//Unix时间戳转时间
function timeTransfer(last_timestamp) {
    if (last_timestamp == 0)
        return null;
    let unixTimestamp = new Date(last_timestamp * 1000);
    let commonTime = unixTimestamp.toLocaleString();
    return commonTime;
}

//将数字转换成带逗号格式
function formatNumber(num) {
    if (isNaN(+num))
        return "";
    return (num + "").toLocaleString('en-US');
}

//创建表格数据
function createData(name, url, help_url, size, last_timestamp, status) {
    let Name;
    if (help_url != '') {
        Name =
            <div>
                <a href={url}>{name}</a>
                <a href={help_url} class="Help">HELP</a>
            </div>;
    } else {
        Name = <a href={url}>{name}</a>;
    }
    let update_timestamp = timeTransfer(last_timestamp);
    let Size = null;
    if (size != 0) {
        Size = formatNumber(size) + ' MB';
    }
    return {Name, update_timestamp, Size, status};
}


export default class List extends Component {
    state = {
        // 镜像列表
        mirrorsList: null,
        // 是否已经获取了镜像列表
        loaded: false,
        // 搜索
        pattern_value: ''
    };

    /**
     * 获取镜像列表
     */
    fetch_mirrors_list = () => {
        this.setState({
            fetching_slots: true
        });
        axios({
            url: "/static/sync.json",
            method: "get"
        }).then(response => {
            const mirrorsList = response.data;
            mirrorsList.sort((a, b) => {
                return a.name < b.name ? -1 : 1;
            });
            this.setState({
                mirrorsList: mirrorsList,
                loaded: true
            });
            console.log("in fetch_mirrors_list", mirrorsList);
        });
    };

    handleOnChange = (event) => {
        //console.log("on change");
        //console.log(event.target.value);
        this.setState({
            pattern_value: event.target.value
        })
    }

    componentDidMount() {
        this.fetch_mirrors_list();
    }

    render() {
        document.title = '镜像 - 山东大学镜像站';
        const mirrorsList = this.state.mirrorsList;
        const pattern_value = this.state.pattern_value.toLowerCase();
        //console.log(this.state.pattern_value)
        if (mirrorsList == null)
            return null;
        //console.log("in render", mirrorsList);
        //console.log(typeof mirrorsList)
        let rows = [];
        for (let key in mirrorsList) {
            const tmpName = mirrorsList[key]['name'].toLowerCase();
            const help_list = 'archlinux|debian|rockylinux|ubuntu|windows-iso|lxc-images'
            let match = help_list.search(tmpName)
            if(match >= 0){
                mirrorsList[key]['help_url'] = '/docs/guide/' + mirrorsList[key]['name']
            }
            if (tmpName.indexOf(pattern_value) >= 0){
                rows.push(createData(mirrorsList[key]['name'], mirrorsList[key]['url'], mirrorsList[key]['help_url'],
                    mirrorsList[key]['size'], mirrorsList[key]['last_timestamp'], mirrorsList[key]['status']));
            }
            //console.log(mirrorsList[key]['name'])
        }
        return (
            <React.Fragment>
                <Grid container spacing={2} justifyContent="space-between"  style={{marginBottom:3}}>
                    {/*<Grid item sm>*/}
                        <Title><Icon component={ListSVG}/> 镜像列表</Title>
                    {/*</Grid>*/}
                    {/*<Grid item sm>*/}
                    <div>
                        <Input placeholder="搜索" inputProps={{'aria-label': 'description'}}
                               onChange={this.handleOnChange.bind(this)}/>
                    </div>
                    {/*</Grid>*/}
                </Grid>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>镜像名称</TableCell>
                            <TableCell align={"right"}>大小</TableCell>
                            <TableCell align={"right"}>最近同步时间</TableCell>
                            {/*<TableCell>同步状态</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow hover role="checkbox" key={row.id}>
                                <TableCell>{row.Name}</TableCell>
                                <TableCell align={"right"}>{row.Size}</TableCell>
                                <TableCell align={"right"}>{row.update_timestamp}</TableCell>
                                {/*<TableCell>{row.status}</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/*<div className={classes.seeMore}>*/}
                {/*    <Link color="primary" href="#" onClick={preventDefault}>*/}
                {/*        See more orders*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </React.Fragment>
        )
    }
    ;
}
