import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"
import ti from '../../images/sanpedro-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/cacao-white-icon.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/cannabis-white-icon.png'
import salvia from '../../images/salvia-white-icon.png'

const Features = () => (
  <Section id="features">
    <StyledSection>
      <FeaturesGrid>
        <FeatureItem>
          <ImageandTitle>
            <SacramentSymbol src={aya} />
            <FeatureTitle>Wings & Roots </FeatureTitle>
          </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={canna} />
          <FeatureTitle>Muti Market</FeatureTitle>
        </ImageandTitle>
        <FeatureText style={{color: "white"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={sp} />
          <FeatureTitle>Thou Art </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={ti} />
          <FeatureTitle>ELYS Token </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={cacao} />
          <FeatureTitle>Thokosa Bokaye </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={am} />
          <FeatureTitle>Medicine Basket </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={aya} />
          <FeatureTitle>Wisdom Holders </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
        <ImageandTitle>
          <SacramentSymbol src={salvia} />
          <FeatureTitle>Elyseos Foundation </FeatureTitle>
        </ImageandTitle>
          <FeatureText style={{color: "white"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledSection>
  </Section>
)

export default Features

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
  align-items: flex-start;

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
