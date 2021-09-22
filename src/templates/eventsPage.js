import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import EventContent from "../components/sections/eventcontent"
import Banner from "../components/sections/banner"

class EventPost extends React.Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <SEO title="Home" />
        <Navigation />
        <EventContent data={data}/>
        <Footer />
      </Layout>
    )
  }
}



export default EventPost

export const query = graphql`
query GET_EVENT_POSTS($id: String) {

  contentfulEventsPage(id: {eq: $id}) {
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
`;
