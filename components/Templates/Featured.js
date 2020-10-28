import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import Block from '../Block';
import Teaser from '../Teasers';

const Featured = ({
  content,
  domain,
  lazy,
  status,
  theme,
  featuredTeaserProps,
  rightTeaserOneProps,
  rightTeaserTwoProps
}) => {

  const {color} = theme;
  const {items} = content;

  switch(items.length) {
    case 1:
      return (
        <Block custom='Prensa-Templates-Featured one'>
          <Teaser 
            content={items[0]}
            domain={domain}
            lazy={lazy}
            status={status}
            subjectColor={color}
            {...featuredTeaserProps}
          />
        </Block>
      );
    case 3:
      return (
        <Block custom='Prensa-Templates-Featured three' lg={{align: 'row between'}}>
          <Block custom='block-left'>
            <Teaser 
              content={items[0]}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={color}
              {...featuredTeaserProps}
            />
          </Block>
          <Block custom='block-right'>
            <Teaser 
              content={items[1]}
              domain={domain}
              lazy={lazy}
              status={status}            
              subjectColor={color}
              {...rightTeaserOneProps}
            />
            <Teaser 
              content={items[2]}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={color}
              {...rightTeaserTwoProps}
            />
          </Block>
        </Block>
      );
    default:
      return null;
  }
};

Featured.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  }),
  featuredTeaserProps: PropTypes.object,
  rightTeaserOneProps: PropTypes.object,
  rightTeaserTwoProps: PropTypes.object,
};

export default Featured;