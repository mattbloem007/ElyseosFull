import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { Link } from "gatsby"

import { Section, Container } from "../../global"
import logo from '../../../images/Elyseos Logo.png'
import ti from '../../../images/iboga-white-icon.png'
import sp from '../../../images/sanpedro-white-icon.png'
import am from '../../../images/amanita-icon-white-1.png'
import cacao from '../../../images/cacao-white-icon.png'
import aya from '../../../images/aya-white-icon.png'
import canna from '../../../images/cannabis-white-icon.png'
import psilo from '../../../images/psilocybin-trans-white.png'
import salvia from '../../../images/salvia-white-icon.png'

import TimeLine from '../../sections/timeline'

import {
  MenuWrapper,
  LinkListLi,
  LinkList,
  LinksWrapper,
  FeaturesGrid,
  TimeLineContainer,
  LinkItem,
  SacramentSymbol,
  IntroContainer,
  IntroText,
  StyledSection,
  FeatureText,
  ActiveItem
} from "./style"

const SUB_ITEMS_DOCS = [{name: "Litepaper", url:""}, {name: "Token/timelines", url: ""}]

const NAV_ITEMS = [{name: "Muti Market", url: "/", symbol: canna}, {name: "Wings & Roots", url:"", symbol: psilo}, {name: "Thou Art", url: "", symbol: sp}, {name: "ELYS Token", url:"", symbol: ti}, {name: "Thokosa Bokaye", url:"", symbol: cacao}, {name: "Medicine Basket", url:"", symbol: am}, {name: "Wisdom Holders", url:"", symbol: aya}, {name: "Elyseos Foundation", url:"", symbol: salvia}]

export default class RoadNav extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
    isSelected: 'Home'
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

  handleClick = (e) => {
    console.log(e.currentTarget.textContent)
    this.setState({
      isSelected: e.currentTarget.textContent
    })
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink href={`/${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
        NAV_ITEMS.map(navItem => {
            return (
              <LinkItem onClick={e => this.handleClick(e)}>
                <SacramentSymbol src={navItem.symbol} />
                <LinkListLi style={{color:"#ED6F1B"}} key={navItem.name}>{navItem.name}</LinkListLi>
              </LinkItem>
            )
        })
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Section id="features">
        <StyledSection>
      <FeaturesGrid>
        <LinksWrapper>
          <LinkList>
            {this.getNavList({})}
          </LinkList>
        </LinksWrapper>
        <TimeLineContainer>
          <TimeLine />
        </TimeLineContainer>
      </FeaturesGrid>
      <IntroContainer>
      <IntroText>
        <FeatureText style={{color: "white"}}>Wings & Roots is our crowdsale, launchpad and studio of service providers. As few shamanic medicine projects understand or are active in a global crypto space W&R is a key component to getting these projects off the ground and plugged into the Elyseos ecosystem. </FeatureText>
        <FeatureText style={{color: "white"}}>Initially we will be finding excellent artists, course architects, video editors and mentors and having them offer their skills in the studio. The support scaffolding will be in place long before we start launching.</FeatureText>
      </IntroText>
      </IntroContainer>
      </StyledSection>
    </Section>
    )
  }
}
