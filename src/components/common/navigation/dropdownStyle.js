import styled from "styled-components"
import logo from "../../../images/Elyseos Logo.png"
import { Section, Container } from "../../global"

export const Submenu = styled.div`
   position: relative;

`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledSection = styled(Section)`
  background-color: #231B17;
`


export const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  top:20px;
  width: 200px;
  background-color: white;
  font-weight:bold;
  position: absolute;

  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

export const List = styled.li`
  padding: 8px 16px;
`

export const ListLink = styled.a`
    color: #000;
    text-decoration: none;

  :hover {
    border-bottom: 2px solid rgb(237, 111, 27)
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
  margin-left: 150px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
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
