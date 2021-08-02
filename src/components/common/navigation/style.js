import styled from "styled-components"
import logo from "../../../images/Elyseos Logo.png"
import { Section, Container } from "../../global"

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  width: 100%;
  height: 23%;
  top: 0;
  z-index: 1000;
  background-color: #231B17;
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledSection = styled(Section)`
  background-color: #231B17;
`


export const StyledButton = styled.button`
  width: 142px;
  height: 30px;
  float: right;
  color: #ED6F1B;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 45px;
  
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: baseline;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.medium};
  ${props => props.theme.font_size.xsmall};
  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.background.white};
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Logo = styled.div`
top: 86px;
left: 140px;
width: 133px;
height: 140px;
background-image: url(${logo});
opacity: 1;
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin-left: 220px;

  height: 110px;   //this is a rough fix for now
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-left: 0px;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }


`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
