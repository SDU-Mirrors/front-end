import React from "react"
import { Component } from "react";
import './TagArea.css'
// export default function TagArea(props){
//     // console.log('lalal')
//     console.log(props.tags);
//     return (<div> </div>);
// }

class TagArea extends Component{
    constructor(props, context){
        super(props);
        console.log(props);
        // console.log(style);
    }
    render(){
        console.log(this.props.tags);
        let tags = this.props.tags;
        if(tags === undefined || tags === null){
            return (<div></div>);
        }else{
            return (<div className="tags">
                <span role="img" aria-label="tags">🔖</span>
                {
                    tags.map((v, i) => {
                        if(i !== 0){
                            return (<a href={"/docs/" + v}>{v}</a>)
                        }else{
                            return (<a href={"/docs/" + v}>{v}</a>)
                        }
                    })
                }
            </div>
            );
        }
    }
}

export default TagArea;