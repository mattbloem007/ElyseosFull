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

const SUB_ITEMS_DOCS = [{name: "Litepaper", suburl:"/litepaper"}, {name: "Token & Roadmap", suburl: "/token-timelines"}, {name: "Deck", suburl: "/deck"}]
const SUB_ITEMS_HOME = [{name: "Team", suburl:"/team"}]
const SUB_ITEMS_DAO = [{name: "Events", suburl: "/events"}]
//[{name: "Governance", suburl: "/governance"}]

const NAV_ITEMS = [{name: "About Elyseos", url: "/", subItems: SUB_ITEMS_HOME}, {name: "Docs", url:"/litepaper", subItems: SUB_ITEMS_DOCS}, {name: "Elys Token", url: "/elys-token", subItems: null}, {name: "DAO", url: "/events", subItems: SUB_ITEMS_DAO}, {name: "Roadmap", url:"/roadmap", subItems: null}, {name: "Epochs", url:"/epochs", subItems: null},{name: "Blog", url:"/blog", subItems: null}]

export default class Navigation extends Component {

  constructor(props){
		super(props);
		this.isMountedVal = 0;

		this.state = {
      mobileMenuOpen: false,
      hasScrolled: false,
      displayMenuDocs: false,
      displayMenuHome: false,
      isSelected: 'Home',
      visibility: "visible",
      show: false,
      show1: false,
      show2: false
    }

	}

  componentDidMount() {
    this.isMountedVal = 1;
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount(){
		this.isMountedVal = 0;
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

  renderSubMenu = (navItem) => {
    return (
      <Submenu>
      <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
        <NavItem value={navItem.name} onMouseEnter={(e) => this.showDropdownMenu(e, navItem.name)} onMouseLeave={() => this.showHide()} style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
      </Link>
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
      </Submenu>
    )
  }

  showDropdownMenu = (event, menu) => {
      event.preventDefault();
      if (menu == "About Elyseos") {
        this.setState({ displayMenuHome: true }, () => {
        document.addEventListener('mouseenter', this.hideDropdownMenu);
        });
      }
      else {
        this.setState({ displayMenuDocs: true }, () => {
        document.addEventListener('mouseenter', this.hideDropdownMenu);
        });
      }

    }

    hideDropdownMenu = () => {
      this.setState({ displayMenuDocs: false }, () => {
        document.removeEventListener('mouseout', this.hideDropdownMenu);
      });

    }

    handleClick = (e) => {

      if(this.isMountedVal){
        this.setState({
          isSelected: e.currentTarget.textContent
        })
      }
    }

    showHide = () => {
       const { show } = this.state;
       this.setState( { show : !show})
   }

   showHide1 = () => {
      const { show1 } = this.state;
      this.setState( { show1 : !show1})
  }

  showHide2 = () => {
     const { show2 } = this.state;
     this.setState( { show2 : !show2})
 }


  getNavAnchorLink = item => (
    <AnchorLink href={`/${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => {
    let hid = this.state.visibility


    let style= {}
    /*
    {
      border: "1px solid #ffffff"
    }
    */
    if (mobile == false) {
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
                let navItemPath = navItem.url
                let windowPath = "/home"
                if (navItem.url == "/") {
                    navItemPath = "/home"
                }

                if (typeof window !== `undefined`){
                  windowPath = window.location.pathname // Window call
                }
                return (
                  <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
                  {
                    navItemPath === windowPath ? <NavItem style={{color:"white", borderBottom: "3px solid rgb(237, 111, 27)", paddingBottom: "5px"}} key={navItem.name}>
                    {navItem.name}
                    </NavItem> : <NavItem style={{color:"white"}} key={navItem.name}>
                    {navItem.name}
                    </NavItem>
                  }
                  </Link>
                )
              }
              else {
                if (navItem.name == "About Elyseos") {
                  return (
                      <Submenu>
                      <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
                        <NavItem onMouseEnter={() => this.showHide()} style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
                      </Link>
                        { this.state.show &&
                        <MenuList onMouseLeave={() => this.showHide()} style={{display: "flex", flexDirection: "column", backgroundColor:"#231B17"}}>
                        {
                          navItem.subItems.map(item => {
                            console.log("item", item)
                            return (
                              <List><ListLink style={{color: "white"}} href={`${item.suburl}`}>{item.name}</ListLink></List>
                            )
                          })
                        }
                        </MenuList>
                      }
                      </Submenu>
                  )
                }
                else {
                  if (navItem.name == "Docs") {
                    return (
                        <Submenu>
                        <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
                          <NavItem onMouseEnter={() => this.showHide2()} style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
                        </Link>
                          { this.state.show2 &&
                          <MenuList onMouseLeave={() => this.showHide2()} style={{display: "flex", flexDirection: "column", backgroundColor:"#231B17"}}>
                          {
                            navItem.subItems.map(item => {
                              console.log("item", item)
                              return (
                                <List><ListLink style={{color: "white"}} href={`${item.suburl}`}>{item.name}</ListLink></List>
                              )
                            })
                          }
                          </MenuList>
                        }
                        </Submenu>
                    )
                  }
                else {
                  return (
                      <Submenu>
                      <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
                        <NavItem onMouseEnter={() => this.showHide1()} style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
                      </Link>
                        { this.state.show1 &&
                        <MenuList onMouseLeave={() => this.showHide1()} style={{display: "flex", flexDirection: "column", backgroundColor:"#231B17"}}>
                        {
                          navItem.subItems.map(item => {
                            console.log("item", item)
                            return (
                              <List><ListLink style={{color: "white"}} href={`${item.suburl}`}>{item.name}</ListLink></List>
                            )
                          })
                        }
                        </MenuList>
                      }
                      </Submenu>
                  )
                }

              }
            }
            })}
          </Scrollspy>
        </NavListWrapper>
      )
    }
    else {
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
                let navItemPath = navItem.url
                let windowPath = "/home"
                if (navItem.url == "/") {
                    navItemPath = "/home"
                }

                if (typeof window !== `undefined`){
                  windowPath = window.location.pathname // Window call
                }
                return (
                  <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none', paddingBottom: "5px"}}>
                  {
                    navItemPath === windowPath ? <NavItem style={{color:"white", borderBottom: "3px solid rgb(237, 111, 27)", paddingBottom: "5px"}} key={navItem.name}>
                    {navItem.name}
                    </NavItem> : <NavItem style={{color:"white"}} key={navItem.name}>
                    {navItem.name}
                    </NavItem>
                  }
                  </Link>
                )
              }
              else {
                return (
                <NavListWrapper>
                <Link to={`${navItem.url}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none'}}>
                  <NavItem style={{color:"white"}} key={navItem.name}>{navItem.name}</NavItem>
                </Link>
                {
                  navItem.subItems.map(item => {
                    console.log("item", item)
                    return (
                      <Link to={`${item.suburl}`} onClick={(e) => this.handleClick(e)} style={{textDecoration: 'none', paddingBottom: "5px"}}>
                        <NavItem style={{color:"white", paddingLeft: "12px", paddingBottom: "5px"}} key={item.name}>
                        {item.name}
                        </NavItem>
                      </Link>
                    )
                  })
                }
                </NavListWrapper>
              )
              }
            })}
          </Scrollspy>
        </NavListWrapper>
      )
    }

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
                <X stroke="white" size={24} alt="close menu" />
              ) : (
                <Menu stroke="white" size={24} alt="open menu" />
              )}
            </StyledButton>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
          <ActionsContainer>
          {/**  <Link to="/wallet"><StyledButton>Connect Wallet</StyledButton></Link>*/}
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
