import React from "react"
import { Component } from "react"
import "../../css/card.css"


class TocBody extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <aside>
                <div className="css-aside-body">
                <h5 className="css-aside-top">目录</h5>
                <div  className="css-aside" dangerouslySetInnerHTML={{ __html: this.props.table }}>

                </div>
                </div>
                
            </aside>
        );
    }
}

export default TocBody;