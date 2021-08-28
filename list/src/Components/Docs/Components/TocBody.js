import React from "react"
import { Component } from "react"


class TocBody extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <aside>
                <div className="css-aside-body">
                <h4 className="css-aside-top">目录</h4>
                <div  className="css-aside" dangerouslySetInnerHTML={{ __html: this.props.toc }}>

                </div>
                </div>
                
            </aside>
        );
    }
}

export default TocBody;