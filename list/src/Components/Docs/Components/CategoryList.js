import React from "react"
import {Container, ListGroup} from "react-bootstrap"
import { Link } from "react-router-dom";
import "./TagArea.css"
export default function Category(props){
    console.log(props);
    const tags_list = props.tagList;
    return (
        <Container className="docs-category-body">
          <h4 className="center-text">标签</h4>

          <ul className="tags-list">
          {
            tags_list.map((v, i) => {
                if(v != null)
                return (
                  <li className="tags" key={i}>
                    <Link to={"/docs/tag/" + v}>&lt; {v} /&gt;</Link>
                  </li>
                );
                else
                  return "";
            })
          }
          </ul>
        </Container>
    );
}