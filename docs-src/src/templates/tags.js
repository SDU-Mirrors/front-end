import * as React from "react"
import { Link, graphql } from "gatsby"
import {Card, CardDeck, CardColumns, CardGroup, Row, Col, Container, ListGroup} from "react-bootstrap"
import "../css/card.css"
import {Paper} from '@material-ui/core'
import App from "../components/App"
import Page from "../components/pagination"
import BlogList from "../components/blog-list"
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "gatsby-image"
import Catagory from "../components/catagory_list"
var _currentPage = -1;

function pageChanged(event, pageNum){
  if(pageNum != _currentPage && _currentPage != -1){
    if(pageNum == 1){
      window.location.href = "/";
    }else{
      window.location.href = "/"+pageNum;
    }
  }
}

const TagsTem = function({ data, location,  pageContext }){
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges
  console.log(posts);
//   const { totalPage, currentPage } = pageContext

//   _currentPage = currentPage;
  console.log(pageContext, posts);

  return (
    <App>
      
      

      <Col>
        <BlogList data={posts}/>
      </Col>
      <Col xl="3" >
        <Catagory tags_list={pageContext.tags_list}></Catagory>
      </Col>

    </App>
  )
}

export default TagsTem

export const pageQuery = graphql`
  query($tags: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tags] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`