import * as React from "react"
import { graphql } from "gatsby"
import "../css/card.css"
import App from "../components/App"
import BlogList from "../components/BlogList"
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "../components/CategoryList"


const TagsTem = function ({ data, location, pageContext }) {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.edges
  // console.log(posts);
  // console.log(pageContext, posts);
  return (
    <App>
      <div style={{ display: "block" }}>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="docs-body">

            <div>
              <BlogList data={posts} />
            </div>

            <div className="docs-category">
              <Category tags_list={pageContext.tags_list}></Category>
            </div>
          </div>
        </div>
      </div>
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
          }
        }
      }
    }
  }
`
/*
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
 */