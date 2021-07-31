import React from "react"
import {Container, ListGroup} from "react-bootstrap"
import "./Content/TagArea.css"
export default function Catagory(props){
    // console.log(props.tags_list);
    const tags_list = props.tags_list;
    return (
        <Container>
          <h4 className="center-text">标签</h4>
          <ListGroup>
          {
            tags_list.map((v, i) => {
                if(v != null)
                return (<ListGroup.Item className="tags" key={i}><a href={'/docs/'+v}>{v}</a></ListGroup.Item>);
                else
                  return "";
            })
          }
          </ListGroup>
        </Container>
    );
}