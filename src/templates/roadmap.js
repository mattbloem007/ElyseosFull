import React from "react"
import styled from "styled-components"

import { Container, Section } from "../components/global"
import ContactForm from "../components/form"
import RoadNav from "../components/common/roadmapNav/roadNav.js"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Banner from "../components/sections/banner"
import Footer from "../components/sections/footer"

import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"


const Bold = ({ children }) => <span style={{color: "white"}}>{children}</span>
const Text = ({ children }) => <p style={{color: "white", textAlign: "center"}}>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

class Roadmap extends React.Component {
  render() {
    const data = this.props.data
    console.log ("Temp rm data", data)
    return (
      <Layout>
        <SEO title={data.contentfulRoadmap.title} />
        <Navigation />
        <Section id="features">
        <Banner />
      <StyledSection>
        <SectionTitle style={{color: "white"}}>Roadmap Epoch 1</SectionTitle>
        <Subtitle>Timing is everything</Subtitle>
        <IntroContainer>
          <IntroText>
          <FeatureText style={{color: "white"}}> The Elyseos DAO has a rhythm to its operations known as Epochs. At the beginning of each Epoch we have an opportunity to set growth, engagement, service and other goals, at the end of each Epoch there is a further issuance of ELYS tokens Epochs run from 6-18 months based on votes within the DAO.
          </FeatureText>
          </IntroText>
        </IntroContainer>
        <RoadNav data={data}/>
      </StyledSection>
      </Section>
      <Footer />
    </Layout>
    )
  }
}

export default Roadmap

export const roadmapQuery = graphql`
  query roadmapQuery($title: String!) {
    contentfulRoadmap (title: { eq: $title } ){
      slogan
      title
      timelineNodes {
        title
        description
      }
      slug
      description {
        raw
      }
    }
  }
`

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const IntroText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.background.white};
`
const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 0 40px;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
