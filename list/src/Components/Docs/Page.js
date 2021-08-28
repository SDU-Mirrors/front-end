import React from "react";
import axios from "axios";
import BlogList from "./Components/BlogList";
import "./Config.js"
import Category from "./Components/CategoryList";
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageNumber: this.props.match.params.number,
            fileList: [],
            tagList: []
        };
    }
    componentDidMount(){
        axios.get(global.getList()).then(res=>{
            console.log(res);
            let tmpList = [];
            res.data.forEach((item) => {
                console.log(item);
                var flag = false;
                tmpList.forEach((x) => {flag = flag || (x == item.tag)});
                if(flag == false)
                    tmpList.push(item.tag);
            });
            global.sortByLogicalPath(res.data);
            this.setState({
                fileList: res.data,
                tagList: tmpList
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