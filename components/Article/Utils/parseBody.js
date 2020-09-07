import {html2json} from 'html2json';
import {find, filter, map} from 'lodash';

const parseBody = (content) => {

  let bodyItems = [];
  let tagItems = [];

  const renderChildValue = (child) => child && child.length > 0 && child[0].text;

  const switchNode = (obj) => {
    
    const {attr, child, node, tag, text} = obj;

    if(tag === 'p' || tag === 'br') {
      tagItems.push({'type': 'p', 'value': ''});
    }

    // if(tag === 'span') {}

    if(tag === 'strong') {
      tagItems.push({'type': 'text', 'value': `<strong>${renderChildValue(child)}</strong>`});
      return true;
    }

    if(tag === 'em') {
      tagItems.push({'type': 'text', 'value': `<em>${renderChildValue(child)}</em>`});
      return true;
    }

    if(node === 'text') {
      if(text && text != '') {
        tagItems.push({'type': 'text', 'value': text});
      }
    }
    // render image
    if(tag === 'a' && attr.class && attr.class === 'p-smartembed') {

      const childImage = find(child, {tag: 'img'});
      
      if(childImage) {
        let subtitle = 
          childImage && 
            childImage.attr && 
              childImage.attr['alt'] ?
                childImage.attr['alt'].toString() : '';

        subtitle = subtitle && subtitle !== undefined && subtitle !== 'undefined' ? subtitle : 'Reprodução';

        const propsImage = {
          'image-contentId': attr['data-onecms-id'].replace('policy:', ''),
          'image-subtitle': subtitle,
          'image-byline': ''
        };
        tagItems.push({type: 'Image', value: propsImage});
        return true;
      }
    // embeds
    } else if(tag === 'img' && attr && attr.src && attr.src.startsWith('/legacy/image')) {
      // let source = attr.src.startsWith('/legacy/image')
      // if(source) {
      tagItems.push({type: 'ImageLegacy', value: {'image-legacy': attr.src}});
      return true;
      // }
    } else if(tag === 'a' && attr.href && !attr.class && attr.href !== '') {
      
      if(attr['href'].indexOf('facebook.com') > -1) {
        tagItems.push({type: 'Facebook', value: attr['href']});
        return true;
        
      } else if(attr['href'].indexOf('docs.google.com/forms') > -1) {
        tagItems.push({type: 'GoogleForm', value: attr['href']});
        return true;
      
      } else if(attr['href'].indexOf('instagram.com') > -1) {
        tagItems.push({type: 'Instagram', value: attr['href']});
        return true;
      
      } else if(attr['href'].indexOf('twitter.com') > -1) {
        tagItems.push({type: 'Tweet', value: attr['href']});
        return true;
        
      } else if(attr['href'].indexOf('youtube.com') > -1) {
        tagItems.push({type: 'Youtube', value: attr['href']});
        return true;

      } else {
        let child_string = renderChildValue(child) || attr.href;
        tagItems.push({'type': 'text', 'value': `<a href="${attr.href}" target="_blank" alt="${child_string}">${child_string}</a>`});
        return true;
      }
    }
    
    let child_len = child && child.length;
    if(child && child_len > 0) {
      map(child, item => {
        switchNode(item);
      });
    }
  };
  // convert html
  const parsed = html2json(content);
  const elements = filter(parsed.child, ({node: 'element'}));
  // parse elements
  map(elements, (item) => switchNode(item));
  
  let p_text = '';

  map(tagItems, ({type, value}) => {
    switch(type) {
      case 'p':
        // insert if exist and clean
        if(p_text && p_text !== '') {
          bodyItems.push({type: 'Paragraph', value: p_text});
          p_text = '';
        }
        break;
      case 'text':
        p_text = `${p_text}${value}`;
        break;
      default:
        bodyItems.push({type, value});
        break;
    }
  });
  if(p_text && p_text !== '') {
    bodyItems.push({type: 'Paragraph', value: p_text});
    p_text = '';
  }
  return bodyItems;
};
export default parseBody;