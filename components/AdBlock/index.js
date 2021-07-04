import {get} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import {getColor} from '../../styled-system/color';
import Block from '../Block';

const parseWidth = param => {
  try {
    return JSON.parse(param);
  } catch(e) {
    return [300, 20];
  }
};

const AdBlock = ({amp, content, containerProps, itemProps, theme, type}) => {  

  if (!content) return null;
  const $color = get(itemProps, 'color', 'neutral10');

  let object_mobile = {
    code: content['gpt-mobile-code'], 
    name: content['gpt-mobile-name'], 
    size: parseWidth(content['gpt-mobile-size'])
  };
  let object_desktop = {
    code: content['gpt-desktop-code'], 
    name: content['gpt-desktop-name'], 
    size: parseWidth(content['gpt-desktop-size'])
  };

  if (content['gpt-mobile-status'] === 'true') {
    if (global.adsToMobile) {
      global.adsToMobile.push(object_mobile);
    }
  }
  if (content['gpt-desktop-status'] === 'true') {
    if (global.adsToDesktop) {
      global.adsToDesktop.push(object_desktop);
    }
  }

  const mobileHeight = object_mobile.size[1];
  const mobileWidth = object_mobile.size[0];
  const desktopHeight = object_desktop.size[1];
  const desktopWidth = object_desktop.size[0];

  const mobileItemCustomStyle = `
    background-color: ${getColor({theme, $color})};
    min-height: ${mobileHeight}px;
    min-width: ${mobileWidth}px;
    @media (min-width: ${theme.queries.lg}) {
      display: none;
    }
  `;
  const desktopItemCustomStyle = `
    background-color: ${getColor({theme, $color})};
    min-height: ${desktopHeight}px;
    min-width: ${desktopWidth}px;
    @media (max-width: ${theme.queries.lg}) {
      display: none;
    }
  `;

  return (
    <Block alignx='center' width='100%' mb={3} {...containerProps}>
      <Block align='row' alignx='center' aligny='middle' {...itemProps} custom={mobileItemCustomStyle}>
        {amp === true ?
          <amp-ad data-slot={object_mobile.name} height={mobileHeight} width={mobileWidth} type={type} />
          : <div id={object_mobile.code} />
        }
      </Block>
      <Block align='row' alignx='center' aligny='middle' {...itemProps} custom={desktopItemCustomStyle}>
        {amp === true ? 
          <amp-ad data-slot={object_desktop.name} height={desktopHeight} width={desktopWidth} type={type} />
          : <div id={object_desktop.code} />
        }
      </Block>
    </Block>
  );
};

AdBlock.propTypes = {
  amp: PropTypes.bool,
  content: PropTypes.object,
  containerProps: PropTypes.object,
  itemProps: PropTypes.object,
  theme: PropTypes.object,
  type: PropTypes.string
};

AdBlock.defaultProps = {
  type: 'doubleclick'
};

export default withTheme(AdBlock);