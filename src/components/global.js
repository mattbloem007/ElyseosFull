import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 0px;


  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 100%;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 100%;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 0px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return props.theme.color.white.dark
      case "main":
        return props.theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`
