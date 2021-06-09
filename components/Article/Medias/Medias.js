import PropTypes from 'prop-types';
import React from 'react';

// import {theme} from '../../../styles/theme';
import Block from '../../Block';
import SvgIcFacebook from './IcFacebook';
import SvgIcTwitter from './IcTwitter';
import SvgIcWhats from './IcWhatsapp';

const Medias = ({color}) => {
  return (
    <Block
      align='row'
      aligny='middle'
      custom={`
        svg {
          fill: ${color};
          margin-right: 32px;
          g {
            fill: transparent;
          }
          path {
            &.face {
              fill: ${color};
            }
            &.twitter { 
              fill: ${color};
            }
          }
          &.whatsapp { 
            path {
              fill: ${color};
            }
          }
        }
      `}
      md={{
        mt: '1',
        mb: '2'
      }}>
      <Block>
        <SvgIcFacebook />
      </Block>
      <Block>
        <SvgIcTwitter />
      </Block>
      <Block>
        <SvgIcWhats />
      </Block>
    </Block>
  );
};

Medias.defaultProps = {
  color: '#999999'
};

Medias.propTypes = {
  /**
   * Medias
   */
  color: PropTypes.string
};

export default Medias;