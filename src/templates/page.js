import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import SEO from "../components/seo"
import Navigation from "../components/common/navigation/navigation"
import Banner from "../components/sections/banner"
import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import axios from 'axios'
import fileDownload from 'js-file-download'
import {BrowserView, MobileView} from 'react-device-detect';

import { graphql, Link } from "gatsby"
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
import presaleButton from '../images/ELYS_pre-sale.png'

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

class Page extends React.Component {

  handleDownload = (url, filename) => {
    console.log(url, " ", filename)
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    console.log("RESULT :", res)
    fileDownload(res.data, filename)
  })
}

  render() {
    const data = this.props.data
    console.log("Page", data)
    return (
      <Layout>
        <SEO title={data.contentfulPage.title} url={"https://elyseos.com/" + data.contentfulPage.slug}/>
        <Navigation />
        <Section id="features">
        <Banner/>
          <StyledSection>
            <SectionTitle style={{color: "white"}}>{data.contentfulPage.title}</SectionTitle>
            <Subtitle>{data.contentfulPage.subtitle}</Subtitle>
            <IntroContainer>
              <SacramentSymbolsContainer>
                <SacramentSymbol src={ti} />
                <SacramentSymbol src={sp} />
                <SacramentSymbol src={am} />
                <SacramentSymbol src={cacao} />
              </SacramentSymbolsContainer>
              <IntroText>
              {data.contentfulPage.featureText1 ? documentToReactComponents(JSON.parse(data.contentfulPage.featureText1.raw, options)) : null}
              {data.contentfulPage.featureText2 ? documentToReactComponents(JSON.parse(data.contentfulPage.featureText2.raw, options)) : null}
              {data.contentfulPage.featureText1.references[0] ? <StyledButton><a href={data.contentfulPage.featureText1.references[0].file.url} target="_blank" download>Download PDF</a></StyledButton> : null}
              {/**data.contentfulPage.slug === "pre-sale" ?
              <>
           <BrowserView>
               <Link to="https://presale.money/app/#/presale/8"><SacramentSymbol src={presaleButton} /></Link>
           </BrowserView>
           <MobileView>
               <Link to="https://metamask.app.link/dapp/presale.money/app/#/dashboard"><SacramentSymbol src={presaleButton} /></Link>
           </MobileView>
       </>
              :
              null
            */}
              </IntroText>
              <SacramentSymbolsContainer>
                <SacramentSymbol src={aya} />
                <SacramentSymbol src={canna} />
                <SacramentSymbol src={psilo} />
                <SacramentSymbol src={salvia} />
              </SacramentSymbolsContainer>
            </IntroContainer>
            <IntroContainer>
            <IntroText>
              <FeatureText style={{color: "#ED6F1B", fontStyle: "italic"}}>{data.contentfulPage.slogan ? data.contentfulPage.slogan : null}</FeatureText>
            </IntroText>
            </IntroContainer>
          </StyledSection>
        </Section>
        <Footer />
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    contentfulPage (slug: { eq: $slug } ){

      title
      subtitle
      featureText1 {
        raw
        references {
         file {
           url
         }
       }
      }
      slug
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
  grid-template-columns: 1fr 1fr;
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
  align-items: center;
  flex-direction: column;
`

const ImageandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`

const FeatureTitle = styled.h5`
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

export const StyledButton = styled.button`
  width: 142px;
  height: 30px;
  color: #ED6F1B;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 45px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    margin-top: 50px;
  }
`

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 5px;
  }
`

const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-right: 30px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 5px;
  }
`

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    margin-top: 50px;
  }
`
