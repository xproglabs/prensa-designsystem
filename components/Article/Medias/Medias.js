import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import SvgIcFacebook from './IcFacebook';
import SvgIcTwitter from './IcTwitter';
import SvgIcWhats from './IcWhatsapp';
import {IconLink} from './styled';

const Medias = ({color, facebookUrl, twitterUrl, whatsappUrl}) => {
  return (
    <Block align='row'>
      <IconLink href={facebookUrl} target='_blank' mr={2}>
        <SvgIcFacebook color={color} />
      </IconLink>
      <IconLink href={twitterUrl} target='_blank' mr={2}>
        <SvgIcTwitter color={color} />
      </IconLink>
      <IconLink href={whatsappUrl} target='_blank'>
        <SvgIcWhats color={color} />
      </IconLink>
    </Block>
  );
};

Medias.defaultProps = {
  color: '#999999'
};

Medias.propTypes = {
  color: PropTypes.string,
  facebookUrl: PropTypes.string.isRequired,
  twitterUrl: PropTypes.string.isRequired,
  whatsappUrl: PropTypes.string.isRequired,
};

export default Medias;