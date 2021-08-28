import React from "react"
import { Component } from "react"
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Config"
class BlogNavButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container>
                <div>
                    {
                        this.props.pre != "" && (
                            <Link to={"/docs/article/" + this.props.pre}>←</Link>
                        )
                    }
                </div>
                <div>
                    {
                        this.props.next != "" && (
                            <Link to={"/docs/article/" + this.props.next}>→</Link>
                        )
                    }
                </div>

            </Container>
        );
    }
}

export default BlogNavButton;