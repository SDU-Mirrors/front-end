import React from "react";

import "./Components/blog.css"
import "./Components/card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import Page from "./Page";
import Tag from "./Tag"
class Docs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log("abba");
        
        return (
        <Container>
            <Route exact path="/docs">
                <Redirect to="/docs/page/1" />
            </Route>
            <Route path="/docs/page/:number" component={Page}></Route>
            <Route path="/docs/tag/:tag" component={Tag}></Route>
            <Route path="/docs/article/:article" component={Article}></Route>
        </Container>);
        
    }
}

export default Docs;