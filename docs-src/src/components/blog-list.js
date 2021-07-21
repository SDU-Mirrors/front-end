import {Card, CardDeck, CardColumns, CardGroup, Row, Col, Container, ListGroup} from "react-bootstrap"
import React from "react"
export default function BlogList(props){
    // console.log(props);
    const posts = props.data;
    // const posts = props;
    return (
        <Container>{
            posts.map((post, index) => {
                post = post.node;
                const title = post.frontmatter.title || post.fields.slug;
                let s = "";
                if(post.frontmatter.tags != undefined)
                  post.frontmatter.tags.forEach((v)=>{s = s + ' ' + "<a href='/docs/" + v + "'>" + v + "</a>";});
                return (
                  <div key={index}>
                      <div>
                        <h3>{post.frontmatter.title}</h3>
                        <small>Date: {post.frontmatter.date}    </small>
                        {/* <br/> */}
                        <small>| Tags: <small dangerouslySetInnerHTML={{__html: s}}></small></small>
                      </div>
    
                      <Row>
                        
                        {post.frontmatter.featuredImage != undefined && <Col  bsPrefix="img-col col" xl={2}>
                          <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src}/>
                        </Col>}
                        <Col>
                          <div dangerouslySetInnerHTML={{
                                        __html: post.frontmatter.description == null ? post.excerpt : post.frontmatter.description,}}></div>
                          <a href={"/docs" + post.fields.slug}>阅读全文</a>
                        </Col>  
                        
                      </Row>
                    <hr />
                  </div>
                )
              }
            )
          }</Container>
    );
}