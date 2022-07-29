import React from "react"
import styled from "styled-components"

import { Section } from "../global"
import { Link } from "gatsby"
import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'

const Venture = () => (
  <Section>
    <StyledSection>
    <SectionTitle style={{color: "white"}}>Elyseos Ventures</SectionTitle>
    <Subtitle>The Nursery</Subtitle>
    <IntroContainer>
      <SacramentSymbolsContainer>
        <SacramentSymbol src={ti} />
        <SacramentSymbol src={sp} />
        <SacramentSymbol src={am} />
        <SacramentSymbol src={cacao} />
      </SacramentSymbolsContainer>
            <IntroText style={{color: "white"}}>
              Elyseos Ventures is a platform which enables the funding of Ethno Medicine projects via Tokenised Offtake Agreements. EV is part of the Elyseos ecosystem which includes a suite of web 3 tools which facilitate funding, trading & learning about Sacramental Medicines. Learn more at <Link to="https://www.elyseos.com/home"> www.elyseos.com</Link>
            </IntroText>
      <SacramentSymbolsContainer>
        <SacramentSymbol src={aya} />
        <SacramentSymbol src={canna} />
        <SacramentSymbol src={psilo} />
        <SacramentSymbol src={salvia} />
      </SacramentSymbolsContainer>
    </IntroContainer>
    </StyledSection>
  </Section>
)

export default Venture

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.primary};
  padding-bottom: 100px;
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

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
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

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    margin-top: 50px;
  }
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

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 0px;
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
`
