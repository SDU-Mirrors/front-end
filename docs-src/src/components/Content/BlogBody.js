import React from "react"
import { Component } from "react";
import { Container } from "react-bootstrap";
import BlogNavButton from "./BlogNavButton";
import "../../css/blog.css"
class BlogBody extends Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        const post = this.props.article;
        return (
            <div className={"blog-body-" + this.props.table}>
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p>{post.frontmatter.date}</p>
                <br/>
                <Container className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody">
                </Container>
                <hr />
                <BlogNavButton previous={this.props.previous} next={this.props.next}/>
            </div>
        
        );
    }
}
export default BlogBody;