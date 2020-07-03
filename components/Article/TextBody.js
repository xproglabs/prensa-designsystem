import {html2json} from 'html2json';
import {filter, map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Image from './Image';
import Link from './Link';
import Paragraph from './Paragraph';

const TextBody = ({content, embeds}) => {
  
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
      
      if(attr['href'].indexOf('twitter.com') > -1) {
        bodyItems.push({type: 'Tweet', value: attr['href']});
        
      } else if(attr['href'].indexOf('youtube.com') > -1) {
        bodyItems.push({type: 'Youtube', value: attr['href']});

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

  console.log('bodyItems', bodyItems);
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
