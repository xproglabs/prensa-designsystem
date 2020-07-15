import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const Topbar = ({content, functions}) => {
  const {LeftContent, CenterContent, RightContent} = content;
  return (
    <Block 
      align="row middle between"
      bg="primary-1" 
      color="white" 
      custom="topbar" 
      width="100p">
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
    <Block 
      custom="menu-left-icon" 
      cursor="pointer"
      fc="neutral-8" 
      pl="4"
      onClick={functions.handleMenuClick}>
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