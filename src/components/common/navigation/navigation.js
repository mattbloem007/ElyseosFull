import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { Link } from "gatsby"

import { Container } from "../../global"
import logo from '../../../images/Elyseos Logo.png'
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
  Logo,
  StyledButton
} from "./style"

import {
  Submenu,
  MenuList,
  ListLink,
  List,

} from './dropdownStyle'

const SUB_ITEMS_DOCS = [{name: "Litepaper", suburl:"/litepaper"}, {name: "Token/timelines", suburl: "token-timelines"}]

const NAV_ITEMS = [{name: "Elyseos Home", url: "/", subItems: null}, {name: "Docs", url:"/docs", subItems: SUB_ITEMS_DOCS}, {name: "Elys Token", url: "/elys-token", subItems: null}, {name: "Pre-Sale", url:"/pre-sale", subItems: null}, {name: "Roadmap", url:"/roadmap", subItems: null}, {name: "Blog", url:"/blog", subItems: null}]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    displayMenu: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  showDropdownMenu = (event) => {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('mouseenter', this.hideDropdownMenu);
      });
    }

    hideDropdownMenu = () => {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('mouseout', this.hideDropdownMenu);
      });

    }


  getNavAnchorLink = item => (
    <AnchorLink href={`/${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => {

    let style= {}
    /*
    {
      border: "1px solid #ffffff"
    }
    */
    return  (
      <NavListWrapper mobile={mobile} style={style}>
        <Scrollspy
          items={NAV_ITEMS.map(item => item.name.toLowerCase())}
          currentClassName="active"
          mobile={mobile}
          offset={-64}
        >
          {NAV_ITEMS.map(navItem => {
            if (navItem.subItems == null) {
              //added style to Link - a bit of a hack to get rid of underline
              return (
                <Link to={`${navItem.url}`} onClick={this.closeMobileMenu} style={{textDecoration: 'none'}}>
                  <NavItem style={{color:"white"}} key={navItem.name}>
                  {navItem.name}

                  </NavItem>
                </Link>
              )
            }
            else {
              return (
                  <Submenu>
                    <NavItem onMouseEnter={(e) => this.showDropdownMenu(e)} style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
                    { this.state.displayMenu ? (
                    <MenuList style={{display: "flex", flexDirection: "column", backgroundColor:"#231B17"}}>
                    {
                      navItem.subItems.map(item => {
                        console.log("item", item)
                        return (
                          <List><ListLink style={{color: "white"}} href={`${item.suburl}`}>{item.name}</ListLink></List>
                        )
                      })
                    }
                    </MenuList>
                  ):
                  (
                    null
                  )
                  }
                  </Submenu>
              )
            }
          })}
        </Scrollspy>
      </NavListWrapper>
    )
      }

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="/" onClick={this.closeMobileMenu}>
                <img src={logo}/>
              </AnchorLink>
            </Scrollspy>
          </Brand>
          <Mobile>
            <StyledButton
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </StyledButton>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
            <StyledButton>Connect Wallet</StyledButton>
          </ActionsContainer>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    )
  }
}
