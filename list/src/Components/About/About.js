import Grid  from "@material-ui/core/Grid";
import Box  from "@material-ui/core/Box";
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import './card.css'
import logoBig from '../source/logobig.png'
import sdu120 from '../source/sdu120.png'

export default function About() {
    const classes = styles();
    document.title = '关于 - 山东大学镜像站';
    return (
        <React.Fragment>
            <Container maxWidth="md" style={{marginTop: "120px", marginBottom: "80px", padding: 0, textAlign: "center"}}>
                <img src={logoBig} alt="" className={classes.image}/>
            </Container>
            <Container maxWidth="lg" style={{marginBottom: "80px"}}>
                {render_all(group1, "镜像站第一届运营成员")}
                <div className={classes.devider}></div>
                {render_all(group2, "镜像站第二届运营成员·技术组")}
                <div className={classes.devider}></div>
                {render_all(group3, "镜像站第二届运营成员·宣传组")}
                <div className={classes.devider}></div>
                {render_all(group4, "镜像站第三届运营成员")}
            </Container>

        </React.Fragment>
    );
}


const group1 = [
    {
        name: "齐划一",
        short: "qhy",
        position: "后端维护",
        description: "泰山学堂",
    }, {
        name:"苏晓斌",
        short: "sxb",
        position:"前端搭建",
        description: "计算机科学与技术学院",
    }, {
        name: "崔晨",
        short: "cc",
        position: "镜像程序编写",
        description: "计算机科学与技术学院",
    }, {
        name: "薛天扬",
        short: "xty",
        position: "运营维护",
        description: "泰山学堂",
    }, {
        name: "李港",
        short: "lg",
        position: "运营维护",
        description: "计算机科学与技术学院",
    },
]

const group2 = [
    {
        name: "齐划一",
        short: "qhy",
        position: "技术组组长",
        description: "计算机科学与技术学院",
    }, {
        name:"于逸潇",
        short: "yyx",
        position:"前后端维护",
        description: "泰山学堂",
    }, {
        name: "张祖源",
        short: "zzy",
        position: "前端搭建",
        description: "泰山学堂",
    }, {
        name: "洪吉祥",
        short: "hjx",
        position: "前后端维护",
        description: "泰山学堂",
    }, {
        name: "冉德龙",
        short: "rdl",
        position: "前后端维护",
        description: "泰山学堂",
    }, {
        name: "顿凯",
        short: "dk",
        position: "前后端维护",
        description: "计算机科学与技术学院",
    }, {
        name: "孙英皓",
        short: "syh",
        position: "防火墙设计",
        description: "网络空间安全学院",
    }, {
        name: "宋家庆",
        short: "sjq",
        position: "前后端维护",
        description: "计算机科学与技术学院",
    },
]

const group3 = [
    {
        name: "黄敬成",
        short: "hjc",
        position: "宣传组组长",
        description: "泰山学堂",
    }, {
        name:"李星烁",
        short: "lxs",
        position:"视频录制",
        description: "计算机科学与技术学院",
    }, {
        name: "从春雨",
        short: "ccy",
        position: "推文制作",
        description: "信息科学与工程学院",
    }, {
        name: "倪士平",
        short: "nsp",
        position: "视觉设计",
        description: "网络空间安全学院",
    }, {
        name: "刘姿彤",
        short: "lzt",
        position: "视频配音",
        description: "计算机科学与技术学院",
    }, {
        name: "高恺琦",
        short: "gkq",
        position: "视频制作",
        description: "计算机科学与技术学院",
    }, {
        name: "张炳琪",
        short: "zbq",
        position: "视频后期",
        description: "泰山学堂",
    }, {
        name: "高子寒",
        short: "gzh",
        position: "视频策划",
        description: "泰山学堂",
    },
]

const group4 = [
    {
        name: "齐划一",
        short:"qhy",
        position:"镜像站组组长",
        description:"泰山学堂",
    }, {
        name:"刘绪波",
        short:"lxb",
        position:"前后端维护",
        description:"计算机科学与技术学院",
    }, {
        name:"谢斌",
        short:"xb",
        position:"前后端维护",
        description:"计算机科学与技术学院",
    }, {
        name:"肖康",
        short:"xk",
        position:"前后端维护",
        description:"网络空间安全学院",
    }, {
        name:"张亦宁",
        short:"zyn",
        position:"前后端维护",
        description:"计算机科学与技术学院",
    }, {
        name:"郑傲宇",
        short:"zay",
        position:"前后端维护",
        description:"网络空间安全学院",
    }, {
        name:"邹晓宇",
        short:"zxy",
        position:"前后端维护",
        description:"计算机科学与技术学院",
    },
]


function render_item(item) {
    const classes = styles();
    // console.log(item.name);
    let short = require("./images/" + item.short + ".jpg");
    // console.log(short);
    return <div id="card">
        <div className={classes.card1}>
            <div className={classes.inner}>
                <div className={classes.title}>
                    <img className={classes.img} src={short.default} alt="img"/>
                    <div className={classes.divs}>
                        <h1 className={classes.name}>
                            {item.name}
                        </h1>
                        <p className={classes.p}>
                            {/*{item.position}<br/>*/}
                            {item.description}<br/>
                        </p>
                    </div>
                </div>

            </div>
            <img className={classes.sdu} src={sdu120} alt="sdu"/>
        </div>

    </div>
}

function render_all(list, name) {
    const classes = styles();
    return <div className={classes.list}>
        <h2 className={classes.h2}>{name}</h2>
        <div className={classes.authorContainer} id="block">
            {list.map(item => render_item(item))}
        </div>
    </div>
}

const styles = makeStyles((themes) => ({
    p:{
        position:'relative',
        top:"-27px",
    },
    authorContainer:{
        display: "flex",
        flexWrap: "wrap",
    },
    img:{
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        flexShrink: 0,
    },
    inner:{
        padding: "10px 20px",
    },
    title:{
        display: "flex",
        alignItems: "center",
        marginBottom: "0rem !important",
    },
    divs:{
        color: "rgba(255,255,255,0.85)",
        paddingLeft: "10px",
    },
    name:{
        paddingBottom: "8px",
        borderBottom: "2px solid #fff",
        position: "relative",
        top: "-12px",
        left: "3px",
        margin: "48px 0 22px -5px",
        fontSize: "2.0rem",
        fontWeight: "bold",
        lineHeight: "2.0rem",
        color: "rgba(255,255,255,0.85)",
    },
    card1:{
        backgroundImage: "linear-gradient(to bottom, rgba(155,13,20,0.75) 0%, #ea5455 100%)",
        // color: "rgba(255,67,67,0.93)";
        // border: "1px solid #000",
        padding: "0 0.75rem",
        margin: "10px",
        borderRadius: "8px",
        position: "relative",
    },
    devider: {
        borderTop: "1px solid rgba(34,36,38,0.15)",
        borderBottom: "1px solid hsla(0,0%,100%,0.1)",
        margin: "10px 0",
    },
    list: {
        display: "block",
    },
    h2: {
        fontWeight: "bold",
    },
    image: {
        width: "80vw",
        maxWidth: "600px",
        height: "auto",
        margin: "auto",
    },
    sdu: {
        position: "absolute",
        right: "10px",
        bottom: "10px",
        height: "40px",
        width: "auto",
        opacity: "85%",
    },
}));