import React from "react"
import styled from "styled-components"
import Layout from "../components/components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import Banner from "../components/sections/banner"

import { Section, Container } from "../components/global"

const Page = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulPage.title} />
      <Navigation />
      <Section id="features">
        <StyledSection>
          <SectionTitle style={{color: "white"}}>{props.data.contentfulPage.title}</SectionTitle>
          <Subtitle>{props.data.contentfulPage.subtitle}</Subtitle>
          <IntroContainer>
            <SacramentSymbolsContainer>
              <SacramentSymbol src={ti} />
              <SacramentSymbol src={sp} />
              <SacramentSymbol src={am} />
              <SacramentSymbol src={cacao} />
            </SacramentSymbolsContainer>
            <IntroText>
            <FeatureText style={{color: "white"}}>{props.data.contentfulPage.featureText1}</FeatureText>
            <FeatureText style={{color: "white"}}>{props.data.contentfulPage.featureText2}</FeatureText>
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
            <FeatureText style={{color: "#ED6F1B", fontStyle: "italic"}}>{props.data.contentfulPage.slogan}</FeatureText>
          </IntroText>
          </IntroContainer>
        </StyledSection>
      </Section>
      {children}
    </Layout>
  )
}

export default Page

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
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
