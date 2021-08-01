import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
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
      allContentfulBlogPost {
        edges {
          node {
            id
            featuredImage {
              file {
                url
              }
            }
            excerpt {
              childMarkdownRemark {
                html
              }
            }
            postTitle
            postBody {
              raw
            }
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
      <Archives data={data}/>
      <Footer/>
    </Layout>
  )
}

export default Blog
