import React from "react"
import styled from "styled-components"
import Layout from "../common/layout/layout"
import SEO from "../common/layout/seo"
import Navigation from "../common/navigation/navigation"
import Banner from "./banner"

import { Section, Container } from "../global"
import ti from '../../images/sanpedro-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/cacao-white-icon.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/cannabis-white-icon.png'
import salvia from '../../images/salvia-white-icon.png'

const LayoutOne = ({ children }) => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Banner />
  <Section id="features">
    <StyledSection>
      <SectionTitle style={{color: "white"}}>Welcome To Elyseos</SectionTitle>
      <Subtitle>Sacramental Ecosystem</Subtitle>
      <IntroContainer>
        <SacramentSymbolsContainer>
          <SacramentSymbol src={ti} />
          <SacramentSymbol src={sp} />
          <SacramentSymbol src={am} />
          <SacramentSymbol src={cacao} />
        </SacramentSymbolsContainer>
        <IntroText>
        <FeatureText style={{color: "white"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </FeatureText>
        <FeatureText style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</FeatureText>
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
        <FeatureText style={{color: "#ED6F1B", fontStyle: "italic"}}> Honor to our allies and teachers, the Master Sacraments, the Blessed Medicines, the Wisdom Poisons. The animal, fungi and plant guides who show us the way with such fierce grace and unwavering compassion. May we serve you well.
        </FeatureText>
      </IntroText>
      </IntroContainer>
    </StyledSection>
  </Section>
  {children}
  </Layout>
)

export default LayoutOne

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
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
