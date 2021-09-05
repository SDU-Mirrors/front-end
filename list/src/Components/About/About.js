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
        position: "后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name:"苏晓斌",
        position:"前端搭建",
        description: "",
        image: "https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "薛天扬",
        position: "运营维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    },
]

const group2 = [
    {
        name: "齐划一",
        position: "技术组组长",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name:"于逸潇",
        position:"前后端维护",
        description: "",
        image: "https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "张祖源",
        position: "前端搭建",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "洪吉祥",
        position: "前后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "顿凯",
        position: "前后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "宋家庆",
        position: "前后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "冉德龙",
        position: "前后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "邵嘉明",
        position: "前后端维护",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    },
]

const group3 = [
    {
        name: "黄敬成",
        position: "宣传组组长",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name:"李星烁",
        position:"视频录制",
        description: "",
        image: "https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "从春雨",
        position: "推文制作",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "倪士平",
        position: "图案设计",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "刘姿彤",
        position: "视频配音",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "高恺琦",
        position: "视频制作",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "张炳琪",
        position: "视频后期",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "高子寒",
        position: "视频策划",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    },
]

function render_item(item) {
    const classes = styles();
    return <div id="card">
        <div className={classes.card1}>
            <div className={classes.inner}>
                <div className={classes.title}>
                    <img className={classes.img} src={item.image} alt="img"/>
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
        <div className={classes.authorContainer}>
            {list.map(item => render_item(item))}
        </div>
    </div>
}

const styles = makeStyles((themes) => ({
    p:{
        position:'relative',
        top:"-30px",
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
        top: "-15px",
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
        marginTop: "100px",
        marginBottom: "80px",
    },
}));