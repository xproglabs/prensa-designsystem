import React from 'react';

const goToPage = (location) => window.location = location

const Block = props => {
  return (
    <div className={`fr-block ${props.class}`}>
      {props.children}
    </div>
  )
}
const ButtonPrimary = ({children, goTo}) => {
  const handeClick = () => goTo ? goToPage(goTo) : false
  return <div className={`fr-button-primary`} onClick={handeClick}>{children}</div>
}
const ButtonSecondary = ({children, goTo}) => {
  const handeClick = () => goTo ? goToPage(goTo) : false
  return <div className={`fr-button-secondary`} onClick={handeClick}>{children}</div>
}
const Card = props => {
  const handeClick = () => goToPage('/frames/page')
  return (
    <div className={`fr-card`} onClick={handeClick}>
      <div className={`fr-card-image`}>
        {props.image}
      </div>
      <div className={`fr-card-text`}>
        {props.children ? props.children : (
          <>
            <Line class='card-title' />
            <Line class='card-title' />
            <Line class='card-lead' />
            <FlexBtwn>
              <Line class='card-author' />
              <Line class='card-date' />
            </FlexBtwn>
          </>
          )}
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
const Grid = props => {
  return (
    <div className={`fr-grid`}>
      {props.children}
    </div>
  )
}
const ListView = props => {
  return (
    <div className={`fr-listview`}>
      {props.children}
    </div>
  )
}
const Line = props => <p className={`fr-line ${props.class}`}>{props.children}</p>
const Logo = ({children, goTo}) => {
  const handeClick = () => goTo ? goToPage(goTo) : false
  return <div className={`fr-logo`} onClick={handeClick}>{children}</div>
}
const Slide = props => <div className={`fr-slide ${props.class}`}>{props.children}</div>
const SlideLead = props => <div className={`fr-slide-lead`}>{props.children}</div>
const SlideText = props => {
  return (
    <div className={`fr-slide-text`}>
      {props.children ? props.children : (
        <>
        <Line class='home-lead' />
        <Line class='home-lead' />
        <Line class='home-lead' />
        </>
      )}
    </div>
  )
}
const SlideTitle = props => {
  return (
    <div className={`fr-slide-title`}>
      {props.value ? <Text class='home-title' value={props.value} /> : <Line class='home-title mkp' />}
    </div>
  )
}
const Text = props => <p className={`fr-text ${props.value ? props.class : `mkp`}`}>{props.value}</p>
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
  Grid,
  Line,
  ListView,
  Logo,
  Slide,
  SlideText,
  SlideTitle,
  SlideLead,
  Text,
  Topbar
};
