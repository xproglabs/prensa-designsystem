import PropTypes from 'prop-types';
import React from 'react';
import {FacebookShareButton as Facebook, TwitterShareButton as Twitter, WhatsappShareButton as Whatsapp} from 'react-share';
import styled, {css} from 'styled-components';

import {margin} from '../../../styled-system/margin';
import Block from '../../Block';
import FacebookIcon from './IcFacebook';
import TwitterIcon from './IcTwitter';
import WhatsappIcon from './IcWhatsapp';


const getShareButtonSize = ({size}) => {
  return `${size}px`;
};

const getHoverStyle = () => {
  return css`
    &:hover {
      opacity: 0.8;
    }
  `;
};

const FacebookShareButton = styled(Facebook)`
  width: ${getShareButtonSize};
  height: ${getShareButtonSize};
  ${getHoverStyle};
  ${margin};
`;
const TwitterShareButton = styled(Twitter)`
  width: ${getShareButtonSize};
  height: ${getShareButtonSize};
  ${getHoverStyle};
  ${margin};
`;
const WhatsappShareButton = styled(Whatsapp)`
  width: ${getShareButtonSize};
  height: ${getShareButtonSize};
  ${getHoverStyle};
`;

const itemDefaultProps = {
  size: 24,
  mr: 4
};

const Share = props => {
  const {itemProps, facebookProps, twitterProps, whatsappProps, ...otherProps} = props;
  return (
    <Block align='row' width='100%' alignx='right' {...otherProps}>
      <FacebookShareButton url={location.href} {...itemDefaultProps} {...itemProps} {...facebookProps}>
        <FacebookIcon/>
      </FacebookShareButton>
      <TwitterShareButton url={location.href} {...itemDefaultProps} {...itemProps} {...twitterProps}>
        <TwitterIcon/>
      </TwitterShareButton>
      <WhatsappShareButton url={location.href} {...itemDefaultProps} {...itemProps} {...whatsappProps}>
        <WhatsappIcon/>
      </WhatsappShareButton>
    </Block>
  );
};

Share.defaultProps = {
  align: 'row',
  size: '24'
};

Share.propTypes = {
  size: PropTypes.string,
  itemProps: PropTypes.object,
  facebookProps: PropTypes.object,
  twitterProps: PropTypes.object,
  whatsappProps: PropTypes.object
};

export default Share;