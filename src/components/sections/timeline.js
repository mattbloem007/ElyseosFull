import React from 'react';
import styled from "styled-components"
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { useStaticQuery, graphql, Link } from "gatsby"

import { Section, Container } from "../global"

const TimeLine = ({ data }) => {
  console.log("Timeline Data : ", data)
  let sloganCol = "white";
  let titleCol = "#ED6F1B"
  let sectionCol = "#231B17"
  let itemCol = "white"
  if (data.contentfulRoadmap.colour == "white") {
    sloganCol = "#ED6F1B";
    titleCol = "#231B17";
    sectionCol = "white";
    itemCol = "#231B17"
  }
  return (
  <Section id="features">
    <StyledSection style={{backgroundColor: `${sectionCol}`}}>
      <SectionTitle style={{color: `${sloganCol}`}}>{data.contentfulRoadmap.slogan}</SectionTitle>
      <Subtitle style={{color: `${titleCol}`}}>{data.contentfulRoadmap.title}</Subtitle>
      <Timeline>
      {
        data.contentfulRoadmap.timelineNodes.map(node => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{color: "#ED6F1B", backgroundColor: "#ED6F1B"}} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{color: `${itemCol}`}}>{node.title}</TimelineContent>
            <TimelineContent style={{color: "#ED6F1B", alignSelf: "center"}}>{node.description}</TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
    </StyledSection>
  </Section>
  )
}

export default TimeLine

const StyledContainer = styled(Container)``

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
`

const SectionTitle = styled.h5`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 0px;
`

const Subtitle = styled.h1`
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
  font-style: italic;
`
