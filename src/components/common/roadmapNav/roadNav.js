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
import lotus from '../../../images/lotuswhite-trans.png'

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
  ActiveItem,
  Divimage
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

const NAV_ITEMS = [{name: "Muti Market", url: "muti-market", symbol: canna}, {name: "Wings & Roots", url:"wings-roots", symbol: psilo}, {name: "Thou Art", url: "thou-art", symbol: sp}, {name: "ELYS Token", url:"elys-token", symbol: ti}, {name: "Thokoza Bokayé", url:"thokoza", symbol: cacao}, {name: "Medicine Basket", url:"medicine-basket", symbol: am}, {name: "Wisdom Holders", url:"wisdom-holders", symbol: aya}, {name: "Elyseos Foundation", url:"foundation", symbol: salvia}, {name: "Elyseos Dao", url:"dao", symbol: lotus}]

export default class RoadNav extends Component {

  constructor(props){
		super(props);
		this.isMountedVal = 0;
    this.currentData = props.data
    props.data.allContentfulRoadmap.edges.map(roadmap => {
      if (roadmap.node.title == "Muti Market") {
        this.currentData = roadmap
        return;
      }
    })
    console.log("Current data", this.currentData)
		this.state = {
      count: 1,
      mobileMenuOpen: false,
      hasScrolled: false,
      isSelected: 'Muti Market',
      data: this.currentData
    };
    console.log("data", this.state.data)

	}

  componentDidMount() {
    this.isMountedVal = 1;
    this.props.data.allContentfulRoadmap.edges.map(roadmap => {
      if (roadmap.node.title == this.state.isSelected) {
        this.setState({data: roadmap})
        return;
      }
    })

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
    console.log(this.props.data, "", e.currentTarget.textContent)
    this.props.data.allContentfulRoadmap.edges.map(roadmap => {
      console.log(roadmap.node.title, " ", e.currentTarget.textContent)
      if (roadmap.node.title == e.currentTarget.textContent) {
        console.log("SEtting: ", roadmap)
        this.setState({data: roadmap})
        return;
      }
    })
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

  getNavList = ({ mobile = false }) => {
      console.log("isSelected: ", this.state.isSelected)

      return (
        this.props.data.allContentfulRoadmap.edges.map(navItem => {
          console.log("nac", navItem)
            return (
              <LinkItem>
                <div style={{display: "flex", flexWrap: "wrap"}} onClick={(e) => this.handleClick(e)}>
                  <Divimage>
                    <SacramentSymbol src={navItem.node.symbol.file.url} />
                  </Divimage>
                  {
                    navItem.node.title === this.state.isSelected ? <LinkListLi style={{color:"#ED6F1B", borderBottom: "2px solid rgb(237, 111, 27)"}} key={navItem.node.title}>{navItem.node.title}</LinkListLi> : <LinkListLi style={{color:"#ED6F1B"}} key={navItem.node.title}>{navItem.node.title}</LinkListLi>
                  }
                </div>
              </LinkItem>
            )
        })
      )
  }

  render() {
    const { mobileMenuOpen, data } = this.state
    console.log("Data rm ", this.state.data)
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
          <TimeLine data={data.node}/>
        </TimeLineContainer>
      </FeaturesGrid>
      <IntroContainer>
      <IntroText>
        {data.node.description ? documentToReactComponents(JSON.parse(data.node.description.raw, options)) : null}
      </IntroText>
      </IntroContainer>
      </StyledSection>
    </Section>
    )
  }
}
