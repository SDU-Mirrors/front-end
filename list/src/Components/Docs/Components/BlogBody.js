import React from "react"
import { Component } from "react";
import { Container } from "react-bootstrap";
import "../Config"
class BlogBody extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        const post = this.props;
        console.log(post);
        return (
            <div className={"blog-body-with-table .blog-post"}>
                <h1 itemProp="headline">{post.title}</h1>
                <p>{global.parseDate(post.date)}</p>
                <br/>
                <Container className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody">
                </Container>
                <hr />
            </div>
            
        
        );
    }
}
export default BlogBody;