import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const MainTopbar = ({LeftContent, CenterContent, RightContent}) =>
  <Block custom="xp-topbar" 
    alignBetween
    alignMiddle
    bgColor="primary-1" 
    p="0" 
    row
    width="full">
    <Block>
      <LeftContent />
    </Block>
    <Block>
      <CenterContent />
    </Block>
    <Block>
      <RightContent />
    </Block>
  </Block>;

const LeftContentMockup = () => 
  <Block custom="xp-mockup" 
    bgColor="neutral-6" 
    p="sm">
    LeftContent
  </Block>;

const CenterContentMockup = () => 
  <Block custom="xp-mockup" 
    bgColor="neutral-4" 
    p="sm">
    CenterContent
  </Block>;

const RightContentMockup = () => 
  <Block custom="xp-mockup" 
    bgColor="neutral-6" 
    p="sm">
    RightContent
  </Block>;

MainTopbar.propTypes = {
  LeftContent: PropTypes.node,
  CenterContent: PropTypes.node,
  RightContent: PropTypes.node
};

MainTopbar.defaultProps = {
  LeftContent: LeftContentMockup,
  CenterContent: CenterContentMockup,
  RightContent: RightContentMockup
};

export default MainTopbar;