import { Row, Col, Container } from "react-bootstrap"
import React from "react"
import TagArea from "./Content/TagArea"
import { Button } from "react-bootstrap";
export default function BlogList(props){
    // console.log(props);
    const posts = props.data;
    // const posts = props;
    return (
        <Container>{
            posts.map((post, index) => {
                post = post.node;
                return (
                  <div key={index} className="blog-card">
                      <div>
                        <a className="blog-link" href={"/docs" + post.fields.slug}><h2>{post.frontmatter.title}</h2></a>
                        <hr />
                        <div className="tag-obj">  📅 {post.frontmatter.date}    </div>
                        <Row>
                        
                          {post.frontmatter.featuredImage !== undefined &&post.frontmatter.featuredImage !== null && <Col  bsPrefix="test img-col col" xl={2}>
                            <img className="card-img" alt="这本该是一张图片" src={post.frontmatter.featuredImage.childImageSharp.fluid.src}/>
                          </Col>}
                          <Col>
                            <div dangerouslySetInnerHTML={{
                                          __html: post.frontmatter.description == null || post.frontmatter.description == "" ? post.excerpt : post.frontmatter.description,}}></div>
                          </Col>  
                          
                        </Row>

                        <div className="tag-obj"><TagArea tags={post.frontmatter.tags}/></div>
                      </div>
                    <br />
                   
                  </div>
                )
              }
            )
          }</Container>
    );
}