import React from "react";
import axios from "axios";
import "./Config.js"
import BlogList from "./Components/BlogList";
import Category from "./Components/CategoryList";
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tagName: this.props.match.params.tag,
            fileList: [],
            tagList: []
        };
    }
    componentDidMount(){
        axios.get(global.getList()).then(res=>{
            console.log(res);
            let tmpList = [];
            res.data.forEach((item) => {
                if(item.tag == this.state.tagName)
                    tmpList.push(item);
            });
            let tmpTagList = [];
            res.data.forEach((item) => {
                console.log(item);
                var flag = false;
                tmpTagList.forEach((x) => {flag = flag || (x == item.tag)});
                if(flag == false)
                tmpTagList.push(item.tag);
            });
            console.log(tmpList);
            global.sortByLogicalPath(tmpList);
            this.setState({
                fileList: tmpList,
                tagList: tmpTagList
            });
        },
        error=>{
            console.log("get list failed");
        });
    }
    render(){
        return (
            <div style={{display: "block"}}>
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <div className="docs-body">
                    
                        <div>
                        <BlogList data = {this.state.fileList}></BlogList>
                        </div>

                        <div className="docs-category">
                        <Category tagList={this.state.tagList}></Category>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Page;