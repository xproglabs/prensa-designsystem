import {html2json} from 'html2json';
import {filter, map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Image from './Image';
import Link from './Link';
import Paragraph from './Paragraph';
import Tweet from './Tweet';

const TextBody = ({content}) => {
  
  if(!content) return null;
  
  const bodyItems = [];
  const switchNode = ({attr, child, node, tag, text}) => {
    
    node === 'element' && tag !== 'a' &&
      map(child, (item) => switchNode(item));

    node === 'text' &&
      bodyItems.push({type: 'Paragraph', value: text});
    
    node === 'p' && null;
    // console.log('P', attr, child, text)

    tag === 'a' && attr.class && attr.class === 'p-smartembed' &&
      bodyItems.push({type: 'Image', value: attr['data-onecms-id']});
      
    if(tag === 'a' && attr.href && !attr.class && attr.href !== '') {
      if(attr['href'].indexOf('twitter.com')) {
        bodyItems.push({type: 'Tweet', value: attr['href']});
      } else {
        bodyItems.push({type: 'Link', value: attr['href']});
      }
    }
  };
  // convert html
  const parsed = html2json(content);
  const elements = filter(parsed.child, ({node: 'element'}));

  // parse elements
  map(elements, (item) => switchNode(item));

  // render elements
  return map(bodyItems, ({type, value}, key) => {
    switch(type) {
      case 'Image':
        return <Image key={key} value={value} />;
      case 'Link':
        return <Link key={key} value={value} />;
      case 'Paragraph':
        return <Paragraph key={key} value={value} />;
      case 'Tweet':
        return <Tweet key={key} value={value} />;
    }
  });
};

TextBody.propTypes = {
  content: PropTypes.string.isRequired
};

TextBody.defaultProps = {
  content: {}
};

export default TextBody;
