import React from 'react';
import {Frame} from '../../..';

const Footer = () => {
  const {
    Block,
    FlexBtwn,
    Footer,
    Line,
    Logo
  } = Frame
  return (
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
  )
}
export default Footer