import {find, get, map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {withTheme} from 'styled-components';

import Block from '../../Block';
import ImageGallery from '../../ImageGallery';
import Citation from '../Citation/Citation';
import FacebookEmbed from '../Embeds/Facebook';
import InstagramEmbed from '../Embeds/Instagram';
import TwitterEmbed from '../Embeds/Twitter';
import YouTubeEmbed from '../Embeds/YouTube';
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
    ads,
    AdPlaceholder,
    amp,
    bodyWidth,
    citation,
    content,
    gallery,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    paragraph,
    tags
  } = props;
  
  if (!content) return null;

  const adsContent = get(ads, 'content', {});
  
  let readmore = [];
  let intervention_amount = get(ads, 'interventionAmount', 3);
  let intervention_readmore_inserted = false;
  let intervention_status = false;
  let paragraph_length = 0;
  let ad_counter = 0;
  // let intervention_readmore = false;

  const AdBlock = (props) => AdPlaceholder(props);
  const body_items = parse_content(content);

  const render_image = (value) => {
    if (!value) return null;
    const image_data = find(images.items, {contentId: value.contentId});
    if (!image_data) return null;
    
    return (
      <Block mb={3} maxWidth={bodyWidth} width="100%">
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

  const render_paragraph = (value) => {
    // intervention_readmore = false;
    intervention_status = false;
    if (value.length > 50) {
      paragraph_length++;
      if (paragraph_length === intervention_amount) {
        paragraph_length = 0;
        if (!intervention_readmore_inserted && readmore.length > 0) {
          // intervention_readmore = true;
          intervention_readmore_inserted = true;
        } else {
          ad_counter++;
          if (ad_counter > adsContent.length) {
            intervention_status = false;
          } else {
            intervention_status = true;
          }
        }
      }
    }
    // {intervention_readmore && <ArticleReadMore config={config} item={readmore} cache={readmorecache} />}
    const ad_data_key = ad_counter - 1;
    return (
      <React.Fragment>
        <Paragraph {...paragraph} maxWidth={bodyWidth} value={value} />
        {intervention_status && <AdBlock amp={amp} content={adsContent[ad_data_key]} />}
      </React.Fragment>
    );
  };

  const get_hyperlink_color = () => {
    let color = 'primary1';
    if (hyperlink) color = hyperlink;
    return get(props, `theme.colors.${color}`);
  };

  const switch_component = (type, value) => {
    switch(type) {
      case 'Cite': 
        return <Citation {...citation} maxWidth={bodyWidth} value={value} />;
      case 'Facebook': 
        return <FacebookEmbed maxWidth={bodyWidth} url={value} />;
      case 'Instagram': 
        return <InstagramEmbed maxWidth={bodyWidth} url={value} />;            
      case 'Tweet': 
        return <TwitterEmbed maxWidth={bodyWidth} url={value} />;
      case 'Youtube': 
        return <YouTubeEmbed maxWidth={bodyWidth} url={value} />;
      case 'Image': 
        return render_image(value);
      case 'Heading2': 
        return <Heading2 {...heading2} maxWidth={bodyWidth} value={value} />;
      case 'Heading3': 
        return <Heading3 {...heading3} maxWidth={bodyWidth} value={value} />;
      case 'Heading4': 
        return <Heading4 {...heading4} maxWidth={bodyWidth} value={value} />;
      case 'Paragraph': 
        return render_paragraph(value);
      default:
        return <pre>erro no parse do conteúdo</pre>;
    }
  };
  
  return (
    <S.Body hyperlinkColor={get_hyperlink_color()}>
      {map(body_items, ({type, value}, key) => {
        return (
          <React.Fragment key={key}>
            {switch_component(type, value)}
          </React.Fragment>
        );
      })}
      {gallery && gallery.length > 0 && (
        <ImageGallery items={gallery} />
      )}
      <Tags {...tags} maxWidth={bodyWidth} />
    </S.Body>
  );
};

TextBody.propTypes = {
  ads: PropTypes.shape({
    content: PropTypes.object,
    interventionAmount: PropTypes.number
  }),
  AdPlaceholder: PropTypes.func,
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  content: PropTypes.string,
  citation: PropTypes.object,
  gallery: PropTypes.array,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  tags: PropTypes.object
};

export default withTheme(TextBody);