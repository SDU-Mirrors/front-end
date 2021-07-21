import React from "react"
import {Container, ListGroup} from "react-bootstrap"

export default function Catagory(props){
    console.log(props.tags_list);
    const tags_list = props.tags_list;
    return (
<Container>
          <h3>Category</h3>
          <ListGroup>
          {
            tags_list.map((v, i) => {
                if(v != null)
                return (<ListGroup.Item key={i}><a href={'/docs/'+v}>{v}</a></ListGroup.Item>);
                else
                  return "";
            })
          }
          </ListGroup>
        </Container>);
}