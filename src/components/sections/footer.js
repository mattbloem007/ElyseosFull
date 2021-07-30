import React from "react"
import styled from "styled-components"
import {Link} from 'gatsby'

import { Container } from "../global"
import twitter from "../../images/twitter-black-icon.png"
import github from "../../images/github-black-icon.png"
import medium from "../../images/medium-black-icon.png"
import email from "../../images/email-icon.png"
import discord from "../../images/discord-black-icon.png"
import telegram from "../../images/telegram-black-icon.png"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>General</span>
        <ul>
          <Link to="/about"><li>About</li></Link>
          <Link to="/faq"><li>FAQ</li></Link>
          <li>Support</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Technology</span>
        <ul>
          <li>Roadmap</li>
          <li>Token</li>
          <li>Lightpaper</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Community</span>
        <ul>
          <li>Roadmap</li>
          <li>Governance</li>
          <li>Lightpaper</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
      <SocialContainer>
        <a target="_blank" href="https://t.me/joinchat/kJCUkY1WacpkZTVk">
          <SocialSymbol src={telegram}/>
        </a>
        <a target="_blank" href="https://discord.gg/YKJsDyHDkc">
          <SocialSymbol src={discord} />
        </a>
        <a target="_blank" href="">
          <SocialSymbol src={twitter} />
        </a>
        <a target="_blank" href="https://github.com/nuwrldnf8r/Elyseos">
          <SocialSymbol src={github} />
        </a>
        <a target="_blank" href="">
          <SocialSymbol src={medium} />
        </a>
        <a target="_blank" href="">
          <SocialSymbol src={email} />
        </a>
      </SocialContainer>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: #FACBAC;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-right: 50px;
`

const SocialSymbol = styled.img`
  height: 30px;
  margin-bottom: 10px;
  padding-right: 30px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  padding-top: 10px;
  margin-left: 50px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
