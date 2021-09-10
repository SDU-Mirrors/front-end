import React, { Fragment } from 'react'
import { Header, Footer } from './Layouts'
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import { Container, Row } from 'react-bootstrap'
import 'prismjs/themes/prism.css'
import "../css/card.css"
const useStyles = makeStyles((theme) => ({
    Layout: {
        marginTop: 100
    },
    Div: {
        display: "flex",
    }
}));

export default function DivApp({ location, children }) {
    const classes = useStyles();

    return (
        <div >
            <Fragment>
                <Header />
                <Container className={classes.Layout}>
                    <div className="div-app">
                        {children}
                    </div>
                </Container>
                <Footer />
            </Fragment>
        </div>
    )
}