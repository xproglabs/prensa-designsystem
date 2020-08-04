import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import MostReadItem from '../Templates/MostReadItem';


const MostRead = props => {
  const {content, status} = props;
  const propsTemplate = {custom: 'templates-most-read', lg:{align: 'row between'}};
  return (
    <Block {...propsTemplate} > 
      {map(content, (item, key) =>
        <MostReadItem content={item} key={key} status={status} number={key} />)}
    </Block>
  );
};
MostRead.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};

export default MostRead;