import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

import theme from "../../../styles/theme"
import GlobalStyles from "../../../styles/GlobalStyles"
import "../../../static/fonts/fonts.css"
import Transition from '../../transition'

const Layout = ({ children, location }) => {
  console.log("Location", location)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Transition location={location}>
          {children}
        </Transition>
      </>
    </ThemeProvider>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
