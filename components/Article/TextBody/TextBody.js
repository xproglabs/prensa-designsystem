import {find, get, map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../../Block';
import Citation from '../Citation/Citation';
import Heading2 from '../Headings/Heading2';
import Heading3 from '../Headings/Heading3';
import Heading4 from '../Headings/Heading4';
import Paragraph from '../Paragraph/Paragraph';
import Tags from '../Tags/Tags';
import TopImage from '../TopImage/TopImage';
import * as S from './TextBody.styled';
import {parse_content} from './TextBodyParser';

const TextBody = (props) => {
  const {
    bodyWidth,
    citation,
    content,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    paragraph,
    tags
  } = props;
  if (!content) return null;
  let readmore = [];
  let intervention_amount = 3;
  // let intervention_readmore = false;
  let intervention_readmore_inserted = false;
  // let intervention_status = false;
  let paragraph_length = 0;
  const body_items = parse_content(content);
  const render_image = (key, value) => {
    if(!value)
      return null;

    const image_data = find(images.items, {contentId: value.contentId});
    if(!image_data)
      return null;
    
    return (
      <Block mb={3} key={key} width="100%">
        <TopImage
          caption={{
            fontFamily: 'secondary',
            fontSize: ['14px', '14px'],
            lineHeight: ['130%', '130%'],
            show: true,
            value: image_data.caption
          }}
          featured={false}
          image={true}
          value={image_data.value}
        />
      </Block>
    );
  };
  const render_paragraph = (key, value) => {
    // intervention_readmore = false;
    // intervention_status = false;
    if(value.length > 50) {
      paragraph_length++;
      if (paragraph_length === intervention_amount) {
        paragraph_length = 0;
        if(!intervention_readmore_inserted && readmore.length > 0) {
          // intervention_readmore = true;
          intervention_readmore_inserted = true;
        } else {
          // intervention_status = true;
        }
      }
    }
    {/* {intervention_readmore && 
      <ArticleReadMore config={config} item={readmore} cache={readmorecache} />}
    {intervention_status && 
      <AdsPlaceholder />} */}
    return (
      <Paragraph {...paragraph} key={key} value={value} />
    );
  };

  const get_hyperlink_color = (color = 'primary1') => 
    get(props, `theme.colors.${color}`, '');
  
  return (
    <S.Body
      bodyWidth={bodyWidth}
      hyperlinkColor={get_hyperlink_color(hyperlink)}
    >
      {(
        map(body_items, ({type, value}, key) => {
          switch(type) {
            case 'Cite': 
              return (
                <Citation
                  {...citation}
                  key={key}
                  value={value}
                />
              );
            case 'Image': 
              return render_image(key, value);
            case 'Heading2': 
              return (
                <Heading2
                  {...heading2}
                  key={key}
                  value={value}
                />
              );
            case 'Heading3': 
              return (
                <Heading3
                  {...heading3}
                  key={key}
                  value={value}
                />
              );
            case 'Heading4': 
              return (
                <Heading4
                  {...heading4}
                  key={key}
                  value={value}
                />
              );
            case 'Paragraph': 
              return render_paragraph(key, value);
          }
        })
      )}
      <Tags
        {...tags}
      />
    </S.Body>
  );
};

TextBody.propTypes = {
  bodyWidth: PropTypes.string,
  content: PropTypes.string,
  citation: PropTypes.object,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  tags: PropTypes.object
};

export default withTheme(TextBody);