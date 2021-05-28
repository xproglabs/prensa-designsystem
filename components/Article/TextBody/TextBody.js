import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Citation from '../Citation/Citation';
import Intertitle from '../Intertitle/Intertitle';
import Paragraph from '../Paragraph/Paragraph';
import Tags from '../Tags/Tags';
import * as S from './TextBody.styled';
import {parse_content} from './TextBodyParser';

const TextBody = ({
  bodyWidth,
  citation,
  content,
  intertitle,
  paragraph,
  tags
}) => {
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
    return (
      <Block custom="max-width: 726px;" mb={3} key={key} width="100%">
        {/* <Image image={[value]} /> */}
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
  const render_cite = (key, value) =>
    <Citation {...citation} key={key} value={value} />;

  const render_intertitle = (key, value) =>
    <Intertitle {...intertitle} key={key} value={value} />;

  return (
    <S.Body bodyWidth={bodyWidth}>
      {(
        map(body_items, ({type, value}, key) => {
          switch(type) {
            case 'Cite': 
              return render_cite(key, value);
            case 'Image': 
              return render_image(key, value);
            case 'Intertitle': 
              return render_intertitle(key, value);
            case 'Paragraph': 
              return render_paragraph(key, value);
            default:
              return <pre>{type}</pre>;
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
  intertitle: PropTypes.object,
  paragraph: PropTypes.object,
  tags: PropTypes.object
};

export default TextBody;