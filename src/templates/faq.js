import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Banner from "../components/sections/banner"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"

import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { BLOCKS, MARKS } from "@contentful/rich-text-types"

import { Section, Container } from "../components/global"
import ti from '../images/iboga-white-icon.png'
import sp from '../images/sanpedro-white-icon.png'
import am from '../images/amanita-icon-white-1.png'
import cacao from '../images/cacao-white-icon.png'
import aya from '../images/aya-white-icon.png'
import canna from '../images/cannabis-white-icon.png'
import psilo from '../images/psilocybin-trans-white.png'
import salvia from '../images/salvia-white-icon.png'

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


class FAQPage extends React.Component {
  render() {
    const data = this.props.data
    console.log("Feature", data)
    return (
      <Layout>
        <SEO title={data.contentfulFaqPage.title} />
        <Navigation />
        <Section id="features">
        <Banner/>
          <StyledSection>
          <SectionTitle style={{color: "white"}}>{data.contentfulFaqPage.title}</SectionTitle>
          <Subtitle>{data.contentfulFaqPage.subtitle}</Subtitle>
          <IntroContainer>
            <SacramentSymbolsContainer>
              <SacramentSymbol src={ti} />
              <SacramentSymbol src={sp} />
              <SacramentSymbol src={am} />
              <SacramentSymbol src={cacao} />
            </SacramentSymbolsContainer>
            <FeaturesGrid>
            {
              data.contentfulFaqPage.featureItem.map(item => {
                return (
                  <FeatureItem>
                      <ItemContainer>
                        <FeatureTitle>{item.title}</FeatureTitle>
                      </ItemContainer>
                      {documentToReactComponents(JSON.parse(item.answer.raw, options))}
                  </FeatureItem>
                )
              })
            }
            </FeaturesGrid>
            <SacramentSymbolsContainer>
              <SacramentSymbol src={aya} />
              <SacramentSymbol src={canna} />
              <SacramentSymbol src={psilo} />
              <SacramentSymbol src={salvia} />
            </SacramentSymbolsContainer>
          </IntroContainer>
          </StyledSection>
        </Section>
        <Footer />
      </Layout>
    )
  }
}

export default FAQPage

export const pageQuery = graphql`
  query FAQPageQuery($slug: String!) {
    contentfulFaqPage (slug: { eq: $slug } ){
      title
      subtitle
      slug
      featureItem {
        title
        answer {
          raw
        }
      }
    }
  }
`
const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 64px;
    justify-content: flex-start;
    text-align: start;
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 64px;
    justify-content: flex-start;
    text-align: start;
  }
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

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const ImageandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-left: 0px;
    padding-right: 0px;
  }

`

const ItemContainer = styled.div`
  display: flex;

`

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
    visibility: hidden;
  }
`

const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  padding-right: 30px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
    visibility: hidden;
  }
`

const IntroText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`
