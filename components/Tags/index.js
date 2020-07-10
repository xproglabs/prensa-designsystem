import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';


const Tags = props => {
  const {content, onClick} = props;

  const renderTag = (tag, k) => (
    <div key={k} className='tag' onClick={() => onClick(tag)}>
      <Typography tokenVariant='article-tag'>{tag}</Typography>
    </div>
  );

  return (
    <Block row custom='wrap'>
      {map(content, (item, k) => renderTag(item, k))}
    </Block>
  );
};

Tags.propTypes = {
  content: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tags;