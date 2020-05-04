import React from 'react';
import {Frame} from '../../';

const Example = () => {
  const {
    Container,
    ButtonPrimary,
    ButtonSecondary,
    Block,
    Card,
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
  } = Frame

  return (
    <Container>
      <Topbar>
        <FlexBtwn>
          <FlexStart>
            <Logo />
          </FlexStart>
          <FlexEnd>
            <ButtonSecondary />
            <ButtonSecondary />
            <ButtonPrimary />
          </FlexEnd>
        </FlexBtwn>
      </Topbar>
      <Slide>
        <FY>
          <FY>
            <SlideTitle />
            <SlideText />
            <ButtonPrimary />
          </FY>
          <Block>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Block>
          <FlexEnd>
            <ButtonPrimary />
          </FlexEnd>
        </FY>
      </Slide>
      <Footer>
        <FlexBtwn>
          <Block>
            <Line />
            <Logo />
          </Block>
          <Block>
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
          </Block>
        </FlexBtwn>
      </Footer>
    </Container>
  )
}

export default Example;