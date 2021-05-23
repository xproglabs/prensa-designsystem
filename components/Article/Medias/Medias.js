import PropTypes from 'prop-types';
import React from 'react';

import {theme} from '../../../styles/theme';
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
          fill: ${theme.colors[color]};
          margin-right: 32px;
          g {
            fill: transparent;
          }
          path {
            &.face {
              fill: ${theme.colors[color]};
            }
            &.twitter { 
              fill: ${theme.colors[color]};
            }
          }
          &.whatsapp { 
            path {
              fill: ${theme.colors[color]};
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
  color: 'primary1'
};

Medias.propTypes = {
  /**
   * Medias
   */
  color: PropTypes.string
};

export default Medias;