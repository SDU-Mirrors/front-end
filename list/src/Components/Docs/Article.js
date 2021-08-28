import axios from "axios";
import React from "react";
import MarkdownIt from "markdown-it";
import MarkdownItTOC from "markdown-it-table-of-contents";
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
        axios.get("http://localhost:4000/article/" + this.state.time + "/" + this.state.title).then(
            res=>{
                
                let md = MarkdownIt({
                    html: false,
                    xhtmlOut: true,
                    typographer: true
                }).use( MarkdownItTOC, {listType: "ul", transformLink:transformLink});
                  this.setState({
                      markdown: res.data.markdown,
                      body: md.render(res.data.markdown + " \[\[TOC\]\]")
                    });
                console.log(res);
            },
            error=>{
                console.log("cannot get this article");
            }
        )
    }
    render(){
        return (<div className="blog-post" dangerouslySetInnerHTML={{__html: this.state.body}}></div>);
    }
}

export default Article;