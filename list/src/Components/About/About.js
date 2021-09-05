import Grid  from "@material-ui/core/Grid";
import Box  from "@material-ui/core/Box";
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import './card.css'
import logoBig from '../source/logobig.png'


export default function About() {
    const classes = styles();
    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <img src={logoBig} alt="" className={classes.image}/>
            </Container>
            <Container maxWidth="lg" style={{marginBottom: "80px"}}>
                {render_all(group1, "镜像站第一届运营成员")}
                <div className={classes.devider}></div>
                {render_all(group2, "镜像站第二届运营成员·技术组")}
                <div className={classes.devider}></div>
                {render_all(group3, "镜像站第二届运营成员·宣传组")}
            </Container>

        </React.Fragment>
    );
}


const group1 = [
    {
        name: "齐划一",
        short: "qhy",
        position: "后端维护",
        description: "",
    }, {
        name:"苏晓斌",
        short: "sxb",
        position:"前端搭建",
        description: "",
    }, {
        name: "薛天扬",
        short: "xty",
        position: "运营维护",
        description: "",
    },
]

const group2 = [
    {
        name: "齐划一",
        short: "qhy",
        position: "技术组组长",
        description: "",
    }, {
        name:"于逸潇",
        short: "yyx",
        position:"前后端维护",
        description: "",
    }, {
        name: "张祖源",
        short: "zzy",
        position: "前端搭建",
        description: "",
    }, {
        name: "洪吉祥",
        short: "hjx",
        position: "前后端维护",
        description: "",
    }, {
        name: "冉德龙",
        short: "rdl",
        position: "前后端维护",
        description: "",
    }, {
        name: "顿凯",
        short: "dk",
        position: "前后端维护",
        description: "",
    }, {
        name: "宋家庆",
        short: "sjq",
        position: "前后端维护",
        description: "",
    }, {
        name: "邵嘉明",
        short: "sjm",
        position: "前后端维护",
        description: "",
    },
]

const group3 = [
    {
        name: "黄敬成",
        short: "hjc",
        position: "宣传组组长",
        description: "",
    }, {
        name:"李星烁",
        short: "lxs",
        position:"视频录制",
        description: "",
    }, {
        name: "从春雨",
        short: "ccy",
        position: "推文制作",
        description: "",
    }, {
        name: "倪士平",
        short: "nsp",
        position: "图案设计",
        description: "",
    }, {
        name: "刘姿彤",
        short: "lzt",
        position: "视频配音",
        description: "",
    }, {
        name: "高恺琦",
        short: "gkq",
        position: "视频制作",
        description: "",
    }, {
        name: "张炳琪",
        short: "zbq",
        position: "视频后期",
        description: "",
    }, {
        name: "高子寒",
        short: "gzh",
        position: "视频策划",
        description: "",
    },
]


function render_item(item) {
    const classes = styles();
    console.log(item.name);
    let short = require("./images/" + item.short + ".jpg");
    console.log(short);
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
                            {item.position}<br/>
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
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
        backgroundImage: "linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)",
        // border: "1px solid #000",
        padding: "0 0.75rem",
        margin: "10px",
        borderRadius: "8px",
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
        maxWidth: "600px",
        height: "auto",
        marginTop: "120px",
        marginBottom: "80px",
        marginLeft: "-25px",
    },
}));