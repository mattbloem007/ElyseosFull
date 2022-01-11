import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import Thankyou from "../components/sections/thankyou"
import Banner from "../components/sections/banner"
import LayoutOne from "../components/sections/layoutOne"

const Thanks = () => (
  <Layout>
    <SEO title="Thank you" />
    <Banner />
    <Thankyou />
  </Layout>
)

export default Thanks
