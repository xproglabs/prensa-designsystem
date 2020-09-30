import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import TeaserMostRead from '../Teasers/MostRead';
import colors from '../../styles/variables/colors.json';

const MostRead = ({content, domain, status, titleSize, titleColor, numberColor}) => { 
  const propsTemplate = {custom: 'templates-most-read'};
  return (
    <Block {...propsTemplate} > 
      {map(content, (item, key) =>
        <TeaserMostRead content={item} domain={domain} key={key} status={status} number={key} titleSize={titleSize} titleColor={titleColor} numberColor={numberColor} titleWeight='bold'/>
      )}
    </Block>
  );
};

MostRead.defaultProps = {
  numberColor: 'white'
};

MostRead.propTypes = {
  content: PropTypes.array,
  domain: PropTypes.string,
  status: PropTypes.object,
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  titleColor: PropTypes.oneOf(colors),
  numberColor: PropTypes.oneOf(colors)
};

export default MostRead;