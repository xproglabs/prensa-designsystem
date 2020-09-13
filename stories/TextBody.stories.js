import {map} from 'lodash';
import React from 'react';

import Paragraph from '../components/Article/Paragraph';
import {parseBody} from '../components/Article/Utils';
import article from '../mockup/article.json';

export default {
  title: 'TextBody',
  component: Default
};

export const Default = () => {
  const content = article['page-content']['text'];
  const bodyItems = parseBody(content);
  return map(bodyItems, ({type, value}, key) => {
    switch(type) {
      case 'Paragraph': 
        return <Paragraph key={key} value={value} />;
      default:
        return null;
    }
  });
};