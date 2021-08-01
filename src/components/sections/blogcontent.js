import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Section, Container } from "../global"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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

export default function BlogContent({ data }) {
  console.log("DATA :" , data)
  if (data.contentfulBlogPost) {
    return (
      <Section>
        <StyledSection>
        <SectionTitle style={{color: "white"}}>{data.contentfulBlogPost.postTitle}</SectionTitle>
        <IntroContainer>
          <IntroText>
            {documentToReactComponents(JSON.parse(data.contentfulBlogPost.postBody.raw, options))}
          </IntroText>
        </IntroContainer>
        </StyledSection>
      </Section>
    )
  }
  else {
    return (
      <Section>
        <StyledSection>
        </StyledSection>
      </Section>
    )
  }

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

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;
`

const FeatureText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.background.white};
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
