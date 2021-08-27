import React from "react"
import { Component } from "react";
import './TagArea.css'
import { Link } from "react-router-dom";
// export default function TagArea(props){
//     // console.log('lalal')
//     console.log(props.tags);
//     return (<div> </div>);
// }

class TagArea extends Component{
    constructor(props){
        super(props);
        // console.log(props);
        // console.log(style);
    }
    render(){
        // console.log(this.props.tags);
        let tag = this.props.tag;
        if(tag === undefined || tag === null){
            return (<div></div>);
        }else{
            return (<div className="tag">
                <span role="img" aria-label="tag">🔖<Link to={"/docs/tag/" + tag}>tag</Link></span>

            </div>
            );
        }
    }
}

export default TagArea;