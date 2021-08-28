import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import MarkdownItTOC from "markdown-it-table-of-contents";
import BlogNavButton from "./Components/BlogNavButton";
import { Container } from "react-bootstrap";
import TocBody from "./Components/TocBody";
import "./Config.js"
import BlogBody from "./Components/BlogBody";
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
            body:"",
            toc: "",
            pre: "",
            next: ""
        };
    }
    componentDidMount(){
        axios.get(global.getArticle(this.state.time, this.state.title)).then(
            res=>{
                let md = MarkdownIt({
                    html: false,
                    xhtmlOut: true,
                    typographer: true
                }).use( MarkdownItTOC, 
                    {
                        listType: "ul",
                        transformLink:transformLink,
                        includeLevel: [1, 3]
                    });

                let body_with_toc = md.render(res.data.markdown + "\n\[\[TOC\]\]")
                console.log("with-toc", body_with_toc);
                let tocLoc = body_with_toc.lastIndexOf("<div class=\"table-of-contents\">");
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

        axios.get(global.getList()).then(res=>{
            global.sortByLogicalPath(res.data);
            let loc = -1;
            res.data.forEach((item, i) => {
                if(item.logicalPath == this.state.logicalPath){
                    loc = i;
                }
            });
            console.log("number", loc);
            this.setState({
                pre: loc == 0 ? "" : res.data[loc - 1].logicalPath,
                next: loc == res.data.length-1 ? "" : res.data[loc + 1].logicalPath
            }, ()=>{
                console.log(this.state);
            });
        },
        error=>{
            console.log("get list failed");
        });
    }
    render(){
        return (
        <div className="div-app">
            <div>
                <BlogBody date={this.state.time} title={this.state.title} html={this.state.body}></BlogBody>
                <BlogNavButton pre={this.state.pre} next={this.state.next}></BlogNavButton>
            </div>
            {/* <div className=".blog-post blog-body-with-table" dangerouslySetInnerHTML={{__html: this.state.body}}></div> */}
            {this.state.toc.lastIndexOf("</li>") == -1 ? <div></div> : 
                <TocBody toc={this.state.toc}></TocBody>
            }
        </div>
        );
    }
}

export default Article;