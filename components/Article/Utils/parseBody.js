import {html2json} from 'html2json';
import {filter, map} from 'lodash';

const parseBody = (content) => {

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

  return bodyItems;
};
export default parseBody;