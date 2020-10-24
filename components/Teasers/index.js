import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';
import Block from '../Block';
import ImageBackground from '../Image/Background';
import Subject from '../Subject';
import {NewsTitle, Subtitle, Date} from '../Typography';
import utils from '../Util';

const Teaser = ({customClass, content, datePublished, disableImage, domain, hasImageTop, hasSubjectFilled, hasSubtitle, hasDate, lazy, subjectColor, subjectSize, subjectWeight, titleSize, subtitleSize, dateSize, titleColor, subtitleColor, dateColor, titleWeight, subtitleWeight, dateWeight}) => {
  const {image, name, path, subject, subtitle} = content;

  const hasImage = image['image-path'];

  const propsTeaser = {align: hasImageTop ? 'col' : 'row left', custom: `teaser-default ${customClass ? customClass : ''}`, mb: '2'};
  const propsImage = {align: 'row',custom: `teaser-image ${hasImageTop ? 'image-top' : 'image-left'}`};
  const propsContent = {custom: 'teaser-content', align: 'col', mb: '3', ml: !hasImage ? '0' : '2', mr: '2', mt: '3', w: '100p-4'};
  const propsSubTitle = {mb: '2',lg:{mb: '8'}}; 
  const propsDateContainer = {h: '100p', align: 'bottom'};
  const propsDate = {custom: 'teaser-date',w: '100p'};
  const propsSubject = {custom: 'teaser-subject',mb: '1'};
  const propsTitle = {custom: 'teaser-title'};

  if(!content['time-published'])
    return false;

  let dateValue = 
    !datePublished && content['time-modifiedDate'] ? 
      utils.dateDistance(content['time-modifiedDate'], 2880) :
      utils.datePtBrFull(content['time-published']);
  
  dateValue = datePublished ? 
    `Publicado em ${dateValue}` : 
    dateValue.startsWith('Há') ?
      dateValue.replace('Há', 'Atualizado há') :
      `Atualizado em ${dateValue}`;

  const path_split = path.split(':8080');
  const url_rewrite = path_split.length > 1 ? `${domain}${path_split[1]}` : path;

  const TeaserImage = () => { 
    return (
      <Block {...propsImage}>
        <a className='teaser-aria' href={url_rewrite} aria-label={`Imagem da matéria ${name}`}>
          <ImageBackground domain={domain} content={image} lazy={lazy} />
        </a>
      </Block>
    );
  };
  return (
    <Block {...propsTeaser}>
      {hasImage && !disableImage && 
        <TeaserImage />
      }
      <Block {...propsContent}>
        <Block>
          {subject && 
            <Block {...propsSubject}>
              <Subject size={subjectSize} color={subjectColor} filled={hasSubjectFilled} weight={subjectWeight}>{subject}</Subject>
            </Block>
          }
        </Block>
        <Block>
          <Block {...propsTitle}>
            <a className='teaser-aria' href={url_rewrite} aria-label={`Abrir matéria ${name}`}>
              <NewsTitle size={titleSize} color={titleColor} weight={titleWeight}>{name}</NewsTitle>
            </a>
          </Block >
          {subtitle && hasSubtitle &&
            <Block {...propsSubTitle}>
              <Subtitle size={subtitleSize} color={subtitleColor} weight={subtitleWeight}>{subtitle}</Subtitle>
            </Block>  
          }
        </Block>
        <Block {...propsDateContainer}>  
          {dateValue && hasDate &&
            <Block {...propsDate}>
              <Date size={dateSize} color={dateColor} weight={dateWeight}>{dateValue}</Date>
            </Block>
          }
        </Block>  
      </Block>
    </Block>
  );
};

Teaser.propTypes = {
  customClass: PropTypes.string,
  content: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    subtitle: PropTypes.string,
    subject: PropTypes.string,
    ['time-published']: PropTypes.string,
    ['time-modifiedDate']: PropTypes.string,
  }),
  datePublished: PropTypes.bool,
  domain: PropTypes.string,
  disableImage: PropTypes.bool,
  hasImageTop: PropTypes.bool,
  hasSubtitle: PropTypes.bool,
  hasDate: PropTypes.bool,
  hasSubjectFilled: PropTypes.bool,
  lazy: PropTypes.func,
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  }),
  subjectColor: PropTypes.oneOf(colors),
  subjectSize: PropTypes.oneOf([1, 2, 3]),
  titleSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  subtitleSize: PropTypes.oneOf([1]),
  dateSize: PropTypes.oneOf([1]),
  titleColor: PropTypes.oneOf(colors),
  subtitleColor: PropTypes.oneOf(colors),
  dateColor: PropTypes.oneOf(colors),
  titleWeight: PropTypes.oneOf(weight),
  subtitleWeight: PropTypes.oneOf(weight),
  dateWeight: PropTypes.oneOf(weight),
  subjectWeight: PropTypes.oneOf(weight),
};
Teaser.defaultProps = {
  hasSubjectFilled: false,
  hasImageTop: false,
  hasSubtitle: false,
  hasDate: true,
  subjectSize: 1,
  subjectColor: 'primary-1',
  disableImage: false,
};

export default Teaser;