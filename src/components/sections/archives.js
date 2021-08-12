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
        <PostsContainer>
        {data.wpgraphql.posts.edges.map(post => {
          let ex = post.node.excerpt.indexOf("<a class=");
          let newEx = post.node.excerpt.slice(0, ex);
          console.log(newEx)
          return (
            <PostCard>
            {
              post.node.featuredImage.sourceUrl ? <Thumbnail href={post.node.slug} className="post-thumbnail" style={{backgroundImage: `url(${post.node.featuredImage.sourceUrl})`, }}/> : null
            }
            <PostContent>
              <PostTitle>
                <Link to={"/" + post.node.slug}>{post.node.title}</Link>
                <p dangerouslySetInnerHTML={{
                    __html: newEx
                }}/>
              </PostTitle>
            </PostContent>
            </PostCard>

          )

        })}
        </PostsContainer>
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
}


const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: #231B17;
`

const PostContent = styled.div`
padding: 1rem;
width: 70%;

@media (max-width: ${props => props.theme.screen.sm}) {
   width: 100%;
}
`

const PostsContainer = styled.div`
margin-left: auto;
  margin-right: auto;
  max-width: 780px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
`

const Thumbnail = styled.a`
    width: 30%;
    max-width: 100%;
    min-height: 11rem;
    background-size: cover;
    background-position: 50% 50%;

    @media (max-width: ${props => props.theme.screen.sm}) {
       width: 100%;
    }
`

const PostTitle = styled.h2`
margin: 0 0 10px;
    font-size: 30px;
    font-weight: 400;
    a {
      font-family: 'PT Serif', serif;
      text-decoration: none;
      color: $dark-blue;
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
      margin: 0 0 5px;
      font-size: 30px;
    }
`

const PostCard = styled.article`

  width: 100%;
  max-width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 11rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all .3s ease;
  box-shadow: 0 1px 1px 0 #ED6F1B;

   &:hover {
     transform: translate(0px, -2px);
    box-shadow: 0 15px 45px -10px #ED6F1B;
   }

   @media (max-width: ${props => props.theme.screen.sm}) {
     flex-direction: column;
      margin: 10%;
      max-width: 100%;
      width: 98%;
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
