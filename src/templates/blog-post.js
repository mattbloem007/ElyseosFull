import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import BlogContent from "../components/sections/blogcontent"
import Banner from "../components/sections/banner"

class BlogPost extends React.Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Home" />
        <Navigation />
        <Banner />
        <BlogContent />
        <Footer />
      </Layout>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost (slug: { eq: $slug } ){
    id
    postTitle
    excerpt {
      childMarkdownRemark {
        html
      }
    }
    postBody {
      raw
    }
    slug
    }
  }
`
