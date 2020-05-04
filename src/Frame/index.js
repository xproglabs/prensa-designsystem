import React from 'react';

const Block = props => {
  return (
    <div className={`fr-block`}>
      {props.children}
    </div>
  )
}
const ButtonPrimary = props => <div className={`fr-button-primary`}>{props.children}</div>
const ButtonSecondary = props => <div className={`fr-button-secondary`}>{props.children}</div>
const Card = props => {
  return (
    <div className={`fr-card`}>
      <div className={`fr-card-image`}></div>
      <div className={`fr-card-text`}>
        {props.children}
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    </div>
  )
}
const Container = props => <div className={`fr-container`}>{props.children}</div>
const FX = props => <div className={`fr-fx`}>{props.children}</div>
const FY = props => <div className={`fr-fy`}>{props.children}</div>
const FlexBtwn = props => <div className={`fr-flex-btwn`}>{props.children}</div>
const FlexEnd = props => <div className={`fr-flex-end`}>{props.children}</div>
const FlexStart = props => <div className={`fr-flex-start`}>{props.children}</div>
const Footer = props => {
  return (
    <div className={`fr-footer`}>
      {props.children}
    </div>
  )
}
const FooterLead = props => {
  return (
    <div className={`fr-footer-lead`}>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}
const Line = props => <p className={`fr-line`}>{props.children}</p>
const Logo = props => <div className={`fr-logo`}>{props.children}</div>
const Slide = props => <div className={`fr-slide`}>{props.children}</div>
const SlideTitle = props => {
  return (
    <div className={`fr-slide-title`}>
      <p></p>
    </div>
  )
}
const SlideText = props => {
  return (
    <div className={`fr-slide-text`}>
      <p></p> 
      <p></p>
      <p></p>
    </div>
  )
}
const SlideLead = props => <div className={`fr-slide-lead`}>{props.children}</div>
const Topbar = props => <div className={`fr-topbar`}>{props.children}</div>

export default {
  Block,
  ButtonPrimary,
  ButtonSecondary,
  Card,
  Container,
  FX, FY,
  FlexBtwn,
  FlexEnd,
  FlexStart,
  Footer,
  FooterLead,
  Line,
  Logo,
  Slide,
  SlideText,
  SlideTitle,
  SlideLead,
  Topbar
};
