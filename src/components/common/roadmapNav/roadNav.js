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
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

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


const SUB_ITEMS_DOCS = [{name: "Litepaper", url:""}, {name: "Token/timelines", url: ""}]

const NAV_ITEMS = [{name: "Muti Market", url: "muti-market", symbol: canna}, {name: "Wings & Roots", url:"wings-roots", symbol: psilo}, {name: "Thou Art", url: "thou-art", symbol: sp}, {name: "ELYS Token", url:"elys-token", symbol: ti}, {name: "Thokosa Bokaye", url:"thokosa", symbol: cacao}, {name: "Medicine Basket", url:"medicine-basket", symbol: am}, {name: "Wisdom Holders", url:"wisdom-holders", symbol: aya}, {name: "Elyseos Foundation", url:"foundation", symbol: salvia}]

export default class RoadNav extends Component {

  constructor(props){
		super(props);
		this.isMountedVal = 0;
		this.state = {
      count: 1,
      mobileMenuOpen: false,
      hasScrolled: false,
      isSelected: 'Home'};
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

  handleClick = (e) => {
    console.log(e.currentTarget.textContent)
    if(this.isMountedVal){
      this.setState({
        isSelected: e.currentTarget.textContent
      })
    }
  }

  toggleMobileMenu = () => {
    if(this.isMountedVal){
      this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
    }
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      if(this.isMountedVal){
        this.setState({ mobileMenuOpen: false })
      }
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
              <LinkItem>
                <Link to={`/${navItem.url}`}>
                  <SacramentSymbol src={navItem.symbol} />
                  <LinkListLi style={{color:"#ED6F1B"}} key={navItem.name}>{navItem.name}</LinkListLi>
                </Link>
              </LinkItem>
            )
        })
  )

  render() {
    const { mobileMenuOpen } = this.state
    console.log("Data rm ", this.props.data)
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
          <TimeLine data={this.props.data}/>
        </TimeLineContainer>
      </FeaturesGrid>
      <IntroContainer>
      <IntroText>
        {this.props.data.contentfulRoadmap.description ? documentToReactComponents(JSON.parse(this.props.data.contentfulRoadmap.description.raw, options)) : null}
      </IntroText>
      </IntroContainer>
      </StyledSection>
    </Section>
    )
  }
}
