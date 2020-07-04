import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const Topbar = ({content, functions}) => {
  const {LeftContent, CenterContent, RightContent} = content;
  return (
    <Block custom="xp-topbar" 
      alignBetween
      alignMiddle
      bgColor="primary-1" 
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
      fColor="neutral-8" 
      functions={{handleClick: functions.handleMenuClick}}
      pl="md">
      MENU
    </Block>
  );
};

LeftMenuIcon.propTypes = {
  functions: PropTypes.shape({
    handleMenuClick: PropTypes.func
  })
};

Topbar.propTypes = {
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    handleMenuClick: PropTypes.func
  })
};
Topbar.defaultProps = {
  content: {
    LeftContent: LeftMenuIcon
  }
};
export default Topbar;