import * as React from "react"
import { Button } from '@material-ui/core';
import { Container, Nav, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import App from "../components/App"
import { Drawer, Paper } from '@material-ui/core';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log(post.tableOfContents);
  return (
    <App>
      <Container>
          {/* <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          > */}
            <header>
              <h1 itemProp="headline">{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header>
            <br></br>
            <Container className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody">
            </Container>
            <hr />
          {/* </article> */}
      </Container>
      {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`
            // display: `flex`,
            // flexWrap: `wrap`,
            // justifyContent: `space-between`,
            // listStyle: `none`,
            // padding: 0,
          }}
        >
          
          <li>
            {previous && (
              <Button href={"/docs/" + previous.fields.slug} variant="contained" color="primary">
                ← {previous.frontmatter.title}
              </Button>
            )}
          </li>
          <li>
            {next && (
              <Button href={"/docs/" + next.fields.slug} variant="contained" color="primary">
                {next.frontmatter.title} →
              </Button>
            )}
          </li>
        </ul>
        
      </nav> */}

          <Container fluid={true}>
            <Row fluid={true}>
              <Col>{previous && (
                        <Button href={"/docs" + previous.fields.slug} variant="contained" color="primary">
                          ← {previous.frontmatter.title}
                        </Button>
                      )}</Col>
              <Col xs={6}></Col>
              <Col fluid={true}>{next && (
                        <Button href={"/docs" + next.fields.slug} variant="contained" color="primary">
                          {next.frontmatter.title} →
                        </Button>
                      )}</Col>
            </Row>
          </Container>
    </App>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
