import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Section, Container } from "../global"
import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'
import presaleButton from '../../images/ELYS_pre-sale.png'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {BrowserView, MobileView} from 'react-device-detect';

import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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

const Features = ({data}) => {
  console.log("Data feature: ", data)

  return (
  <Section id="features">
    <StyledSection>
      <FeaturesGrid>
      {
        data ? data.map(contentItem => {
          return (
            <FeatureItem>
              <ImageandTitle>
                <SacramentSymbol src={contentItem.sacramentIcon.file.url} />
                <FeatureTitle>{contentItem.title}</FeatureTitle>
              </ImageandTitle>
              {documentToReactComponents(JSON.parse(contentItem.body.raw, options))}
              {contentItem.title === "Get ELYS"
              ?
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
            }
            </FeatureItem>
          )
        }) : null
      }
      </FeaturesGrid>
    </StyledSection>
  </Section>
  )
}

export default Features

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  margin-bottom: 300px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
`

const ImageandTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  flex-direction: row;
  height: 60px;
`

//Position relative is a bit of a hack to align
const FeatureTitle = styled.h5`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  font-size: 25px;
  position: relative;
  top: -5px;
`

const FeatureText = styled.p`
`

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  padding-right: 30px;
`

const IntroText = styled.div`
  padding-left: 100px;
  padding-right: 100px;
`
