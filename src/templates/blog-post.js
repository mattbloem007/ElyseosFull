import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/common/layout/layout"
import SEO from "../components/seo"
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
        <SEO title={data.wpPost.title} description={data.wpPost.excerpt} image={data.wpPost.featuredImage.node.sourceUrl} url={"https://elyseos.com/" + data.wpPost.slug} />
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
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
    }
  }
`

// export const query = graphql`
// query GET_POSTS($id: ID!) {
//
// wpgraphql {
// post(id: $id) {
//   id
//   postId
//   title
//   date
//   uri
//   excerpt
//   content
//   featuredImage {
//     sourceUrl
//     title
//   }
//
// }
// }
// }
// `;
