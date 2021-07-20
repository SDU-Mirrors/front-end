import React from "react"
import {Container, ListGroup} from "react-bootstrap"

export default function Catagory(props){
    console.log(props.tags_list);
    const tags_list = props.tags_list;
    return (
<Container>
          <h3>Catagory</h3>
          <ListGroup>
          {
            tags_list.map((v, i) => {
                return (<ListGroup.Item key={i}><a href={'/'+v}>{v}</a></ListGroup.Item>);
            })
          }
          </ListGroup>
        </Container>);
}