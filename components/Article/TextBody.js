import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Link from './Link';
import Paragraph from './Paragraph';
import {parseBody} from './Utils';

const TextBody = ({content, embeds}) => {
  
  if (!content) return null;
  
  const bodyItems = parseBody(content);
  return map(bodyItems, ({type, value}, key) => {
    switch(type) {
      case 'Link':
        return <Link key={key} value={value} />;
      case 'Paragraph':
        return <Paragraph key={key} value={value} />;
      case 'Image':
        return embeds && embeds.Image && <embeds.Image key={key} value={value} />;
      case 'Tweet':
        return embeds && embeds.Tweet && <embeds.Tweet key={key} value={value} />;
      case 'Youtube':
        return embeds && embeds.Youtube && <embeds.Youtube key={key} value={value} />;
    }
  });
};

TextBody.propTypes = {
  content: PropTypes.string.isRequired,
  embeds: PropTypes.object
};

TextBody.defaultProps = {
  content: {}
};

export default TextBody;
