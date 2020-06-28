import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const MainTopbar = ({content, functions}) => {
  const {LeftContent, CenterContent, RightContent} = content;
  return (
    <Block custom="xp-topbar" 
      alignBetween
      alignMiddle
      bgColor="primary-1" 
      p="0" 
      row
      width="full">
      <Block>
        {LeftContent && <LeftContent functions={functions} />}
      </Block>
      <Block>
        {CenterContent && <CenterContent />}
      </Block>
      <Block>
        {RightContent && <RightContent />}
      </Block>
    </Block>
  );
};

const LeftMenuIcon = ({functions}) => {
  return (
    <Block custom="xp-menu-left-icon" 
      bgColor="neutral-6" 
      functions={{handleClick: functions.onLeftIcon}}
      p="sm">
      ICON
    </Block>
  );
};
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

/* required props */
LeftMenuIcon.propTypes = {
  functions: PropTypes.objectOf(
    PropTypes.shape({
      onLeftIcon: PropTypes.func
    })
  )
};

MainTopbar.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.objectOf(
    PropTypes.shape({
      onLeftIcon: PropTypes.func
    })
  )
};
MainTopbar.defaultProps = {
  content: {
    LeftContent: LeftMenuIcon,
    CenterContent: CenterContentMockup,
    RightContent: RightContentMockup,
  }
};
export default MainTopbar;