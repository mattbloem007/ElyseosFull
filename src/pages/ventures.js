import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Venture from "../components/sections/venture"
import Footer from "../components/sections/footer"
import Banner from "../components/sections/banner"
import LayoutOne from "../components/sections/layoutOne"

const Ventures = () => (
  <Layout>
    <SEO title="Ventures" />
    <Navigation />
    <Banner />
    <Venture />
    <Footer />
  </Layout>
)

export default Ventures
