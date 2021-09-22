import React from "react"
import { graphql } from 'gatsby'

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
        <BlogContent data={data}/>
        <Footer />
      </Layout>
    )
  }
}



export default BlogPost

export const query = graphql`
query GET_POSTS($id: ID!) {

wpgraphql {
post(id: $id) {
  id
  postId
  title
  date
  uri
  excerpt
  content
  featuredImage {
    sourceUrl
    title
  }

}
}
}
`;
