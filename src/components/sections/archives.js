import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'

import { Section, Container } from "../global"


export default function Archives({ data }) {
  console.log("DATA :" , data)
  return (
    <Section>
      <StyledSection>
      <SectionTitle style={{color: "white"}}>Elyseos Blog</SectionTitle>
      <Subtitle>Ancient Plant Stories</Subtitle>
      <IntroContainer>
        <SacramentSymbolsContainer>
          <SacramentSymbol src={ti} />
          <SacramentSymbol src={sp} />
          <SacramentSymbol src={am} />
          <SacramentSymbol src={cacao} />
        </SacramentSymbolsContainer>
        <IntroText style={{color: "white"}}>
          Coming soon...
        </IntroText>
        <SacramentSymbolsContainer>
          <SacramentSymbol src={aya} />
          <SacramentSymbol src={canna} />
          <SacramentSymbol src={psilo} />
          <SacramentSymbol src={salvia} />
        </SacramentSymbolsContainer>
      </IntroContainer>
        {/*<FeaturesGrid>
        {data.allContentfulBlogPost.edges.map(post => {
          console.log(post)
          return (
            <FeatureItem style={{backgroundImage: `url(${post.node.featuredImage.file.url})`}}>
              <Link to={post.node.slug} style={{flex: "1 1 auto", display: "block"}}>
                <ImageandTitle>
                  <SacramentSymbol src={post.node.featuredImage.file.url} />
                  <FeatureTitle style={{color: "white"}}>{post.node.postTitle}</FeatureTitle>
                </ImageandTitle>
              </Link>
            </FeatureItem>

          )

        })}
        </FeaturesGrid>*/}

      </StyledSection>
    </Section>
  )
}


const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const PostContent = styled.div`
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #fff;
    background: rgba(0,0,0,0.1);
    opacity: 1;
    transition: opacity 0.5s cubic-bezier(.33,0,.2,1);
`

const PostTitle = styled.h2`
  color: ${props => props.theme.color.primary};
  margin: 0;
  display: inline-block;
  font-size: 3.4rem;
  max-width: 70%;
  text-align: center;
  transition: all 0.3s cubic-bezier(.33,0,.2,1);
`

const PostCard = styled.article`

  position: relative;
   flex: 1 1 50%;
   display: flex;
   position: relative;
   height: 35vw;
   background: linear-gradient(135deg, #1f1f1f 0%, #111 100%) center center;
   background-size: cover;
   overflow: hidden;
   counter-increment: posts;

   &:hover #postContent {
     opacity: 1;
     transition: opacity 0.3s cubic-bezier(.33,0,.2,1);
   }
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
  float: right;
  color: #ED6F1B;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 45px;
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

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
  }
`
