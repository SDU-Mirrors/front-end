import React from "react";

class Article extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logicalPath: this.props.match.params.article
        };
    }
    componentDidMount(){
        
    }
    render(){

    }
}