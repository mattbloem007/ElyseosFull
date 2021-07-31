import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"
import ContactForm from "../form"
import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'

const GetStarted = () => (
  <Section id="features">
    <StyledSection>
      <SectionTitle style={{color: "white"}}>Presale</SectionTitle>
      <Subtitle style={{color: "#ED6F1B"}}>Sacramental Ecosystem</Subtitle>
      <IntroContainer>
        <SacramentSymbolsContainer>
          <SacramentSymbol src={ti} />
          <SacramentSymbol src={sp} />
          <SacramentSymbol src={am} />
          <SacramentSymbol src={cacao} />
        </SacramentSymbolsContainer>
        <IntroText style={{color: "white"}}>
          Here is where you can buy tokens for the presale
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
        <FeatureText style={{color: "#ED6F1B", fontStyle: "italic"}}>Tokens are the new GOLD</FeatureText>
      </IntroText>
      </IntroContainer>
      <GetStartedContainer>
        <ExchangeBox>
          <FeatureText>FTM/USD now = $ </FeatureText>
        </ExchangeBox>
        <FeaturesGrid>
        <FeatureItem>
          <ContactForm />
        </FeatureItem>
        </FeaturesGrid>
      </GetStartedContainer>
    </StyledSection>
  </Section>
)

export default GetStarted

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

const ExchangeBox = styled.div`
  width: 379px;
  height: 60px;
  background: #ED6F1B 0% 0% no-repeat padding-box;
  opacity: 1;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 0px 0 40px;
  width: 1094px;
  height: 900px;
  margin-bottom: 300px;
  background: #ED6F1B00 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;
`

const GetStartedTitle = styled.h3`
  margin: 0 auto 32px;
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
  margin-top: 20px;
  padding-right: 30px;
`

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;
`
