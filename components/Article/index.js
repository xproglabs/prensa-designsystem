import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';

const Article = () => {
  return (
    <Block 
      custom="xp-article">
      Article
    </Block>
  );
};
/* required props */
Article.propTypes = {
  content: PropTypes.object
};
Article.defaultProps = {
  content: {}
};
export default Article;