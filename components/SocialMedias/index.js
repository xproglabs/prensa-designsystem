import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const SocialMedias = props => {
  const {content} = props;

  if (!content) return null;

  return (
    <Block row>
      {map(content, (item, k) => (
        <a href={item.path} key={k}>
          <div className='social-circle' >
            {item.icon}
          </div>
        </a>
      ))}
    </Block>
  );
};

SocialMedias.propTypes = {
  content: PropTypes.array.isRequired
};

export default SocialMedias;