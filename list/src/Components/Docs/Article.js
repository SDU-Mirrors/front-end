import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import MarkdownItTOC from "markdown-it-table-of-contents";
import { Container } from "react-bootstrap";
import TocBody from "./Components/TocBody";
import "./Config.js"
function transformLink(link) {
    return "javascript:return false;";
  }
  

class Article extends React.Component{
    constructor(props){
        super(props);
        console.log("here article");
        this.state = {
            logicalPath: this.props.match.params.article,
            time: this.props.match.params.article.substring(0, 8),
            title: this.props.match.params.article.substring(8),
            markdown: "",
            body:""
        };
    }
    componentDidMount(){
        axios.get(global.getArticle(this.state.time, this.state.title)).then(
            res=>{
                let md = MarkdownIt({
                    html: false,
                    xhtmlOut: true,
                    typographer: true
                }).use( MarkdownItTOC, {listType: "ul", transformLink:transformLink});

                let body_with_toc = md.render(res.data.markdown + "\n\[\[TOC\]\]")
                let tocLoc = body_with_toc.lastIndexOf("<p><div class=\"table-of-contents\">");
                let toc = body_with_toc.substring(tocLoc)
                .replace(/<a href=\"javascript:return false;">/g, "<p>")
                .replace(/<\/a>/g, "</p>");
                this.setState({
                      markdown: res.data.markdown,
                      body: md.render(res.data.markdown),
                      toc: toc
                }, ()=>{
                    console.log(this.state);
                });
                
            },
            error=>{
                console.log("cannot get this article");
            }
        )
    }
    render(){
        return (
        <div className="div-app">
            <div className=".blog-post blog-body-with-table" dangerouslySetInnerHTML={{__html: this.state.body}}></div>
            {this.state.toc == "" ? <div></div> : 
                <TocBody toc={this.state.toc}></TocBody>
            }
        </div>
        );
    }
}

export default Article;