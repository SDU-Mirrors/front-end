import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {  graphql } from "gatsby"
import DivApp from "../components/DivApp"
import App from "../components/App";
import "../css/blog.css"
import BlogBody from "../components/Content/BlogBody";
import TocBody from "../components/Content/TocBody";
import BlogNavButton from "../components/Content/BlogNavButton";
const BlogPostTemplate = ({data}) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  console.log(post.tableOfContents);
  return (
    <App>
      <div className="div-app">
      {
        post.tableOfContents !== "" 
        ? <BlogBody article={post} previous={previous} next={next} table="with-table" /> 
        : <BlogBody article={post} previous={previous} next={next} table="without-table" />
      }
      {post.tableOfContents !== "" && <TocBody table={post.tableOfContents}/>}
      </div>
      <BlogNavButton previous={previous} next={next}/>

      
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
      tableOfContents(
        maxDepth: 3
      )
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
