import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weights from '../../styles/variables/weight.json';
import Block from '../Block';
import TeaserMostRead from '../Teasers/MostRead';

const MostRead = ({content, domain, status, titleSize, titleColor, titleWeight, numberColor, circleColor}) => { 
  const propsTemplate = {custom: 'templates-most-read'};
  return (
    <Block {...propsTemplate} > 
      {map(content, (item, key) =>
        <TeaserMostRead content={item} domain={domain} key={key} status={status} number={key} titleSize={titleSize} titleColor={titleColor} titleWeight={titleWeight} numberColor={numberColor} circleColor={circleColor} />
      )}
    </Block>
  );
};

MostRead.defaultProps = {
  numberColor: 'white'
};

MostRead.propTypes = {
  content: PropTypes.array,
  circleColor: PropTypes.oneOf(colors),
  domain: PropTypes.string,
  status: PropTypes.object,
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  titleColor: PropTypes.oneOf(colors),
  titleWeight: PropTypes.oneOf(weights),
  numberColor: PropTypes.oneOf(colors)
};

export default MostRead;