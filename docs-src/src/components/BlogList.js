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
                // const title = post.frontmatter.title || post.fields.slug;
                // let s = "";
                // if(post.frontmatter.tags != undefined)
                //   post.frontmatter.tags.forEach((v)=>{s = s + ' ' + "<a href='/docs/" + v + "'>" + v + "</a>";});
                return (
                  <div key={index}>
                      <div>
                        <h2>{post.frontmatter.title}</h2>
                        <div className="tag-obj">  {post.frontmatter.date}    </div>
                        <Row>
                        
                          {post.frontmatter.featuredImage !== undefined &&post.frontmatter.featuredImage !== null && <Col  bsPrefix="test img-col col" xl={2}>
                            <img className="card-img" alt="这本该是一张图片" src={post.frontmatter.featuredImage.childImageSharp.fluid.src}/>
                          </Col>}
                          <Col>
                            <div dangerouslySetInnerHTML={{
                                          __html: post.frontmatter.description === null ? post.excerpt : post.frontmatter.description,}}></div>
                            {/* <a class="read-all" href={"/docs" + post.fields.slug}>阅读全文</a> */}
                            <Button variant="outline-dark" size="sm" href={"/docs" + post.fields.slug}>阅读全文</Button>
                          </Col>  
                          
                        </Row>

                        <div className="tag-obj"><TagArea tags={post.frontmatter.tags}/></div>
                      </div>
                    <br />
                    <hr />
                    <br />
                  </div>
                )
              }
            )
          }</Container>
    );
}