import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Formik, Field, Form, ErrorMessage } from "formik"

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

//


const pluginOptions = {
  wordPressUrl: 'http://blog.elyseos.com/',
  uploadsUrl: 'http://blog.elyseos.com/wp-content/uploads/'
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function EventContent({ data }) {
  console.log("DATA :" , data)

  if (data) {
    return (
      <Section>
        <StyledSection>
        <SectionTitle style={{color: "white"}}>{data.contentfulEventsPage.title}</SectionTitle>
        <IntroContainer>
          <IntroText>
          {data.contentfulEventsPage.featureText1 ? documentToReactComponents(JSON.parse(data.contentfulEventsPage.featureText1.raw, options)) : null}
          </IntroText>
        </IntroContainer>
        <GetStartedContainer>
          <FeaturesGrid>
          <FeatureItem>
        <Formik
          initialValues={{ artistName: "", email: "", telegram: "", mediums: [] }}
          onSubmit={(data, {resetForm}) => {
            console.log(data)
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                  "form-name": "art-event",
                  ...data,
                }),
              })
                .then(() => {
                  resetForm();
                  //navigate('/email-success')
                })
                .catch(error => alert(error))

          }}
        >
        {(formik) => (
          <Form
            name="art-event"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <Field type="hidden" name="form-name" />
            <Field type="hidden" name="bot-field" />

            <Flex style={{marginBottom: "50px"}}>
              <Label htmlFor="artistName">Nom de Art (Artist Name):</Label>
                <Field name="artistName" placeholder="Enter your name" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
              <ErrorMessage name="artistName" />
            </Flex>
            <br />
            <Flex style={{marginBottom: "50px"}}>
              <Label htmlFor="email">Email Address</Label>
                <Field name="email" placeholder="We will contact you here" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
              <ErrorMessage name="email" />
            </Flex>
            <br />
            <Flex style={{marginBottom: "50px"}}>
              <Label htmlFor="telegram">Telegram Number</Label>
                <Field name="telegram" placeholder="We will contact you here" type="text" style={{background: "#FACBAC 0% 0% no-repeat padding-box", border: "2px solid #ED6F1B", borderRadius: "30px", width: "223px", height: "33px", paddingLeft: "10px"}}/>
              <ErrorMessage name="telegram" />
            </Flex>
            <br />
            <SacramentSymbolsContainer>
              <Flex>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Visual art" />
                  Visual art
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Music" />
                  Music
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Dance" />
                  Dance
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Sculpture" />
                  Sculpture
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Poetry" />
                  Poetry
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Storytelling" />
                  Storytelling
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Photography" />
                  Photography
                </Label>
                <Label>
                  <Field style={{marginBottom: "10px"}} type="checkbox" name="mediums" value="Other" />
                  Other
                </Label>
              </Flex>
            </SacramentSymbolsContainer>
            <br />
            <Submit style={{color: "white"}} type="submit">Submit form</Submit>
          </Form>
          )}
        </Formik>
        </FeatureItem>
        </FeaturesGrid>
      </GetStartedContainer>
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

const SacramentSymbolsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;


  @media (max-width: 570px) {
    padding-right: 5px;
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

const IntroContainer = styled.div`
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

`

const IntroText = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 780px;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
  }
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

const Submit = styled.button`
width: 167px;
height: 32px;
float: right;
background: #ED6F1B 0% 0% no-repeat padding-box;
border-radius: 45px;
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const Label = styled.label`
width: 100%;
text-align: left;
letter-spacing: 0px;
color: #FFFFFF;
`

const GetStartedContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 0px 0 40px;
  width: 1094px;
  height: 500px;
  margin-bottom: 300px;
  background: #ED6F1B00 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  padding-top: 50px;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`
