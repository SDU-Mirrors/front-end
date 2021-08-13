import React from "react"
import { Component } from "react"
import { Button } from '@material-ui/core';
class BlogNavButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="blog-nav-buttons" style={{display: "flex", justifyContent: "center"}}>
                <div>
                    {
                    this.props.previous && (
                        <Button href={"/docs" + this.props.previous.fields.slug} variant="contained" color="primary">
                        ← {this.props.previous.frontmatter.title}
                        </Button>
                    )
                    }
                </div>
                <div>
                    {this.props.next && (
                        <Button href={"/docs" + this.props.next.fields.slug} variant="contained" color="primary">
                        {this.props.next.frontmatter.title} →
                        </Button>
                        )}
                </div>

            </div>
        );
    }
}

export default BlogNavButton;