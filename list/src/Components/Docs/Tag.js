import React from "react";
import axios from "axios";
import BlogList from "./Components/BlogList";
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tagName: this.props.match.params.tag,
            fileList: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:4000/list').then(res=>{
            console.log(res);
            let tmpList = [];
            res.data.forEach((item) => {
                if(item.tag == this.state.tagName)
                    tmpList.push(item);
            });
            console.log(tmpList);
            this.setState({fileList: tmpList});
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