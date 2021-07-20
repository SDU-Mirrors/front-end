import * as React from "react"
import { Link } from "gatsby"
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    // <div className="global-wrapper" data-is-root-path={isRootPath}>
    <Container maxWidth="sm">
      {children}
    </Container>
  )
}

export default Layout
