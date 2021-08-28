import React from "react";
import axios from "axios";
import BlogList from "./Components/BlogList";
import "./Config.js"
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageNumber: this.props.match.params.number,
            fileList: []
        };
    }
    componentDidMount(){
        axios.get(global.getList()).then(res=>{
            console.log(res);
            this.setState({fileList: res.data});
        },
        error=>{
            console.log("get list failed");
        });
    }
    render(){
        return (<div><BlogList data = {this.state.fileList}></BlogList></div>);
    }
}

export default Page;