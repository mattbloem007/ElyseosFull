import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

import backdrop from '../../images/Elys Banner.png'
import ban from '../../images/Header Banner.png'
import logoWater from '../../images/logo-watermark.png'
const Banner = () => (
  <HeaderWrapper id="features">
    <StyledContainer>
        <BackDrop src={backdrop} />
    </StyledContainer>
  </HeaderWrapper>
)

export default Banner

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const HeaderWrapper = styled.header`
  background-color: #231B17;
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const LayeredImage = styled.div`
  position: relative;
  top: 0;
  left: 0;
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
const BackDrop = styled.img`
  position: relative;
  top: 0px;
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;
  height: 70%;
  opacity: 1;
`

const Ban = styled.img`
  position: absolute;
  top: 188px;
  left: 50px;
  width: 100%;
  height: 100%;
  mix-blend-mode: hard-light;
  opacity: 1;
`

const Watermark = styled.img`
  position: absolute;
  top: 362px;
  left: 761px;
  width: 398px;
  height: 344px;
  mix-blend-mode: color-dodge;
  opacity: 0.38;
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
