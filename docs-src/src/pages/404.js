import * as React from "react"
import { graphql } from "gatsby"


const NotFoundPage = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata.title

  return (
    <div>404 not found.</div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
