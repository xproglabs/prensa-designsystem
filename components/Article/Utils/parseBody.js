import {html2json} from 'html2json';
import {find, filter, replace, map} from 'lodash';

const parseBody = (content) => {

  const bodyItems = [];
  const switchNode = ({attr, child, node, tag}) => {
    
    node === 'element' && tag !== 'a' &&
      map(child, (item) => switchNode(item));

    const enabledTags = ['p', 'em', 'h2'];
    const embedTags = ['facebook.com', 'youtube.com', 'twitter.com', 'instagram.com'];
    
    if(enabledTags.indexOf(tag) > -1) {

      let contentText = '';

      map(child, (children) => {

        // render h2, em and pure text
        if(children.node === 'text' && tag === 'h2') {
          contentText = `${contentText}<span class="paragraph-title">${children.text}</span>`;

        } else if(children.node === 'text' && tag === 'em') {
          contentText = `${contentText}<i>${children.text}</i>`;

        } else if(children.node === 'text') {
          contentText = `${contentText}${children.text}`;
        }

        // render a
        if(children.tag === 'a' && children.attr.class !== 'p-smartembed') {
          
          let text = children.child && children.child.length > 0 ? 
            children.child[0].text : 
            children.attr['aria-label'];

          // check if is not an embed
          let isEmbed = false;
          map(embedTags, (tag) => {
            if(text.indexOf(tag) > -1) {
              isEmbed = true;
            }
          });
          
          if(!isEmbed) {
            let attr = '';
            map(children.attr, (value, key) => {
              attr = `${attr} ${key}=${value}`;
            });
            contentText = `${contentText}<a ${attr}>${text}</a>`;
          }
        }
      });

      // add paragraph
      if(contentText && contentText !== '') {
        bodyItems.push({type: 'Paragraph', value: contentText});
      }
    }

    // render image
    if(tag === 'a' && attr.class && attr.class === 'p-smartembed') {
      const childImage = find(child, {tag: 'img'});
      if(childImage) {
        let subtitle = childImage && childImage.attr && childImage.attr['alt'] && childImage.attr['alt'].toString();
        subtitle = replace(subtitle, new RegExp(',', 'g'), ' ');
        const propsImage = {
          'image-contentId': attr['data-onecms-id'].replace('policy:', ''),
          'image-subtitle': subtitle,
          'image-byline': ''
        };
        bodyItems.push({type: 'Image', value: propsImage});
      }
    }
      
    // render embed
    if(tag === 'a' && attr.href && !attr.class && attr.href !== '') {
      
      if(attr['href'].indexOf('facebook.com') > -1) {
        bodyItems.push({type: 'Facebook', value: attr['href']});
      
      } else if(attr['href'].indexOf('instagram.com') > -1) {
        bodyItems.push({type: 'Instagram', value: attr['href']});
      
      } else if(attr['href'].indexOf('twitter.com') > -1) {
        bodyItems.push({type: 'Tweet', value: attr['href']});
        
      } else if(attr['href'].indexOf('youtube.com') > -1) {
        bodyItems.push({type: 'Youtube', value: attr['href']});
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