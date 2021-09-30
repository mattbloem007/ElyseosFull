import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import { Formik, Field, Form, ErrorMessage, Input } from "formik"

import { Section, Container } from "../global"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import ti from '../../images/iboga-white-icon.png'
import sp from '../../images/sanpedro-white-icon.png'
import am from '../../images/amanita-icon-white-1.png'
import cacao from '../../images/cacao-white-icon.png'
import aya from '../../images/aya-white-icon.png'
import canna from '../../images/cannabis-white-icon.png'
import psilo from '../../images/psilocybin-trans-white.png'
import salvia from '../../images/salvia-white-icon.png'

const Bold = ({ children }) => <span style={{color: "#ED6F1B", fontWeight:"bold"}}>{children}</span>
const Text = ({ children }) => <p style={{color: "white"}}>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => {
      console.log("text", text)
      return(
        <Bold>{text}</Bold>
      )},
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      console.log("INLINES NODE", node)
      if (node.data.uri.indexOf('youtube.com') >= 0) {
        return (
          <iframe width="340" height="315" src={node.data.uri} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        )
      }
      else {
        return (
          <a href={node.data.uri}>{children}</a>
        )
      }
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      console.log(node)
      return (
        <Text>{children}</Text>
      )
    },
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

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }

const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

// const encode = (data) => {
//   const formData = new FormData()
//   Object.keys(data)
//     .map(key => {
//       if (key === 'art') {
//         console.log("Inside art")
//       //  for (let file in data[key]) {
//           let file = data[key]
//           console.log("file in loop", key, file, file.name)
//           formData.append(key, file, file.name);
//           console.log("after", formData)
//         //}
//       } else {
//         console.log("Appending data")
//         formData.append(key, data[key])
//       }
//       console.log("GETT", formData.get(key))
//     })
//     console.log("ENCOde formdata", formData)
//   return formData
// }

export default function EventContent({ data }) {
  console.log("DATA :" , data)


  if (data) {
    return (
      <Section>
      <HeaderWrapper>
          <StyledContainer>
            <BackDrop src={data.contentfulEventsPage.featuredImage.file.url} />
          </StyledContainer>
      </HeaderWrapper>
        <StyledSection>
        <SectionTitle style={{color: "white"}}>{data.contentfulEventsPage.title}</SectionTitle>
        <IntroContainer>
          <IntroText>
          {data.contentfulEventsPage.featureText1 ? documentToReactComponents(JSON.parse(data.contentfulEventsPage.featureText1.raw), options) : null}
          </IntroText>
        </IntroContainer>

        {
          data.contentfulEventsPage.form ? <GetStartedContainer>
            <FeaturesGrid>
            <FeatureItem>

          <Formik
            initialValues={{ artistName: "", email: "", telegram: "", mediums: [], art: null }}

            onSubmit={(data, {resetForm}) => {
              fetch("/", {
                method: "POST",
              //  headers: { "Content-Type": 'multipart/form-data' },
                body: encode({
                  "form-name": "art-event",
                  ...data,
                })
              })
                .then((res) => {
                  resetForm();
                  console.log("res", res)
                  navigate('/thanks')
                })
                .catch(error => alert(error));
                // fetch("/", {
                //   method: "POST",
                //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
                //   body: encode({
                //     "form-name": "art-event",
                //     ...data,
                //   }),
                // })
                //   .then(() => {
                //     resetForm();
                //     navigate('/thanks')
                //   })
                //   .catch(error => alert(error))

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
                <Flex style={{marginBottom: "30px"}}>
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
              <br />

              <Flex style={{marginBottom: "50px"}}>
                <Label>Upload your Art</Label>
                <Field
                as="input"
                type="file"
                name="file"
                onChange={(event) =>{
                  formik.setFieldValue("art", event.target.files[0]);
                }}
              />
              </Flex>
              <br />

              <Submit style={{color: "white"}} type="submit">Submit form</Submit>
            </Form>
            )}
          </Formik>
          </FeatureItem>
          </FeaturesGrid>
        </GetStartedContainer>
        :
        null
        }

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

const BackDrop = styled.img`
  padding-right: 50px;
  padding-left: 50px;
  width: 100%;
  height: 50%;
  opacity: 1;
  z-index: 1;

  @media (max-width: 570px) {
    padding: 0px 0;
  }
`

const HeaderWrapper = styled.div`
  background-color: #231B17;

  @media (max-width: 570px) {
  }
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

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
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
  height: 700px;
  margin-bottom: 300px;
  background: #ED6F1B00 0% 0% no-repeat padding-box;
  border: 1px solid #ED6F1B;

  @media (max-width: ${props => props.theme.screen.md}) {
    height: 800px
  }
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

const SacramentSymbol = styled.img`
  height: 40px;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-right: 30px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-right: 5px;
  }
`
