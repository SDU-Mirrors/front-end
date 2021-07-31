import React from "react"
import { Component } from "react"
import { Container, Row, Col } from "react-bootstrap";
import { Button } from '@material-ui/core';
class BlogNavButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Container fluid={true}>
                <Row fluid={true}>
                    <Col>
                        {
                        this.props.previous && (
                            <Button href={"/docs" + this.props.previous.fields.slug} variant="contained" color="primary">
                            ← {this.props.previous.frontmatter.title}
                            </Button>
                        )
                        }
                    </Col>
                    <Col xs={6}></Col>
                    <Col fluid={true}>
                        {this.props.next && (
                            <Button href={"/docs" + this.props.next.fields.slug} variant="contained" color="primary">
                            {this.props.next.frontmatter.title} →
                            </Button>
                         )}
                    </Col>

                </Row>
            </Container>
        );
    }
}

export default BlogNavButton;