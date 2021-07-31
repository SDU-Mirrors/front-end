import * as React from "react"
import { graphql } from "gatsby"
import { Col } from "react-bootstrap"
import "../css/card.css"
import App from "../components/App"
import Page from "../components/Pagination"
import BlogList from "../components/BlogList"
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "../components/CategoryList"

var _currentPage = -1;

function pageChanged(event, pageNum){
  if(pageNum !== _currentPage && _currentPage !== -1){
    if(pageNum === 1){
      window.location.href = "/";
    }else{
      window.location.href = "/"+pageNum;
    }
  }
}

const BlogIndex = function({ data, location,  pageContext }){
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges
  const { totalPage, currentPage } = pageContext
  _currentPage = currentPage;
  // console.log(data, posts);

  return (
    <App>
      <div style={{display: "block"}}>
        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <div className="docs-body">
          
            <div>
              <BlogList data={posts}/>
            </div>

            <div className="docs-category">
              <Category tags_list={pageContext.tags_list}></Category>
            </div>
          </div>  
        </div>
        <Page totalPage={totalPage} defaultPage={currentPage} onChange={pageChanged}></Page>
      </div>
    </App>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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