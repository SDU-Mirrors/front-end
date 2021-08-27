import { Row, Col, Container } from "react-bootstrap"
import React from "react"
import TagArea from "./TagArea";
import { Link } from "react-router-dom";
class BlogList extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    
    const posts = this.props.data;
    // const posts = props;
    console.log(posts);
    return (
        <Container>{
            posts.map((post, index) => {
                // post = post.node;
                return (
                  <div key={index} className="blog-card">
                      <div>
                        <Link className="blog-link" to={"/docs/article/" + post.logicalPath}><h4>{post.fileName}</h4></Link>
                        <hr />
                        <div className="tag-obj">  📅 {post.date}    </div>
                        <Row>

                          <Col>
                            <div dangerouslySetInnerHTML={{              __html: post.excerpt}}></div>
                          </Col>  
                          
                        </Row>

                        <div className="tag-obj"><TagArea tag={post.tag}/></div>
                      </div>
                    <br />
                   
                  </div>
                )
              }
            )
          }</Container>
    );
  }
}
export default BlogList;