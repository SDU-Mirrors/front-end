import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  graphql } from "gatsby"
import App from "../components/App"
import "../css/card.css"
import BlogBody from "../components/Content/BlogBody";
const BlogPostTemplate = ({data}) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log(post.tableOfContents);
  return (
    <App>
      <aside className="css-aside"><div>abab</div></aside>
      <BlogBody article={post} previous={previous} next={next}></BlogBody>
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
