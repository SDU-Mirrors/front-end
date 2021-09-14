import React from "react"
import { Container, ListGroup } from "react-bootstrap"
import "./Content/TagArea.css"
import "../css/card.css"
export default function Category(props) {
  // console.log(props.tags_list);
  const tags_list = props.tags_list;
  document.title = '博客列表 - 山东大学镜像站';
    return (
    <Container className="docs-category-body">
      <h4 className="center-text">标签</h4>

      <ul className="tags-list">
        {
          tags_list.map((v, i) => {
            if (v != null)
              return (
                <li className="tags" key={i}>
                  <a href={'/docs/' + v}>
                    &lt; {v} /&gt;
                  </a>
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