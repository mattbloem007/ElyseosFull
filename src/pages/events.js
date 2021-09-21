import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import EventArchives from "../components/sections/eventArchives"
import Banner from "../components/sections/banner"


const Events = () => {
  const data = useStaticQuery(
    graphql`
    query EventsPageQuery {
      allContentfulEventsPage {
        edges {
          node {
            featureText1 {
              raw
            }
            id
            featuredImage{
              file {
                url
              }      
            }
            subtitle
            title
            slug
          }
        }
      }
}
`)
  return (
    <Layout>
      <SEO title="Home" />
      <Navigation />
      <Banner />
      <EventArchives data={data}/>
      <Footer/>
    </Layout>
  )
}

export default Events
