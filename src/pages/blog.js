import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation/navigation"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import Archives from "../components/sections/archives"
import Banner from "../components/sections/banner"


const Blog = () => {
  const data = useStaticQuery(
    graphql`
    query PostsQuery {
      allWpPost {
       nodes {
         id
         uri
         content
         slug
         title
         excerpt
         featuredImage {
          node {
            sourceUrl
          }
        }
       }
     }
}
`)
  return (
    <Layout>
      <SEO title="Elyseos Blog" description="A place to explore all things on Elyseos and plant sacrements"/>
      <Navigation />
      <Banner />
      <Archives data={data}/>
      <Footer/>
    </Layout>
  )
}

export default Blog
