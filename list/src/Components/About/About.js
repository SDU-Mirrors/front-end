import Grid  from "@material-ui/core/Grid";
import Box  from "@material-ui/core/Box";
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import './card.css'

export default function About() {
    const classes = styles();
    return (
        <React.Fragment>
            <Container maxWidth="lg" className={classes.authorContainer}>
                {render_all(data)}
            </Container>
        </React.Fragment>
    );
}


const data = [
    {
        name: "icy",
        position: "123",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name:"yci",
        position:"456",
        description: "",
        image: "https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name: "icy",
        position: "123",
        description: "",
        image:"https://icys.top/images/avatar/teafrogsf.jpg"
    }, {
        name:"yci",
        position:"456",
        description: "",
        image: "https://icys.top/images/avatar/teafrogsf.jpg"
    }
]

function render_item(item) {
    const classes = styles();
    return <div id="card">
        <div className={classes.card1}>
            <div className={classes.inner}>
                <div className={classes.title}>
                    <img className={classes.img} src={item.image} alt="img"></img>
                        <div className={classes.divs}>
                            <h1 className={classes.name}>
                                {item.name}
                            </h1>
                            <p className={classes.p}>
                                {item.position}
                            </p>
                        </div>
                </div>
            </div>
        </div>
    </div>
}

function render_all(list) {
    return list.map(item => render_item(item));
}

const styles = makeStyles((themes) => ({
    p:{
        position:'relative',
        top:"-35px",
    },
    authorContainer:{
        marginBottom: "30px",
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
        paddingBottom: "5px",
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
        margin: "20px 10px",
        borderRadius: "8px",
    },

}));