import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const Subjects = ({content, domain, lazy, readMoreButton, status}) => {
  const {title} = content;

  const leftColor = content['style-left'];
  const centerColor = content['style-center'];
  const rightColor = content['style-right'];

  const titleLeft = content['title-left'];
  const titleCenter = content['title-center'];
  const titleRight = content['title-right'];

  const propsTemplate = {custom: 'templates-subjects', lg: {align: 'row between'}};
  
  const pqueue_left = content['items-left-pqueue'];
  const pqueue_center = content['items-center-pqueue'];
  const pqueue_right = content['items-right-pqueue'];

  const items_left =  pqueue_left && pqueue_left.length > 0 ? pqueue_left : content['items-left'];
  const items_center =  pqueue_center && pqueue_center.length > 0 ? pqueue_center : content['items-center'];
  const items_right =  pqueue_right && pqueue_right.length > 0 ? pqueue_right : content['items-right'];

  //PARSER FOR BACKEND DEPRECATED
  const parseColor = color => {
    console.log('subjects', color);
    switch(color) {
      case 'yellow':
        return 'editorial-1';
      case 'blue':
        return 'editorial-2';
      case 'black':
        return 'editorial-3';
      case 'green':
        return 'editorial-4';
      case 'red':
        return 'editorial-5';
      case 'default':
        return 'primary-1';
      default:
        return color;
    }
  };
  
  return (
    <>
      {title && title !== ''&& <SectionTitle weight='bold' gutter={3} name={title} />}
      <Block {...propsTemplate}> 
        <Block custom='col left'>
          <SectionTitle weight='bold' gutter={3} color={parseColor(leftColor)}>{titleLeft}</SectionTitle>
          {map(items_left, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={parseColor(leftColor)} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          )}
          {readMoreButton && readMoreButton}
        </Block>
        <Block custom='col center'>
          <SectionTitle weight='bold' gutter={3} color={parseColor(centerColor)}>{titleCenter}</SectionTitle>
          {map(items_center, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={parseColor(centerColor)} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          )}
          {readMoreButton && readMoreButton}
        </Block>
        <Block custom='col right'>
          <SectionTitle weight='bold' gutter={3} color={parseColor(rightColor)}>{titleRight}</SectionTitle>
          {map(items_right, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={parseColor(rightColor)} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          )}
          {readMoreButton && readMoreButton}
        </Block>
      </Block>
    </>
  );
};

Subjects.propTypes = {
  content: PropTypes.shape({
    contentId: PropTypes.string,
    name: PropTypes.string,
    template: PropTypes.string,
    title: PropTypes.string,
    ['input-template']: PropTypes.string,
    ['items-center']: PropTypes.object,
    ['items-center-pqueue']: PropTypes.object,
    ['items-left']: PropTypes.object,
    ['items-left-pqueue']: PropTypes.object,
    ['items-right']: PropTypes.object,
    ['items-right-pqueue']: PropTypes.object,
    ['style-center']: PropTypes.string,
    ['style-left']: PropTypes.string,
    ['style-right']: PropTypes.string,
    ['title-center']: PropTypes.string,
    ['title-left']: PropTypes.string,
    ['title-right']: PropTypes.string,
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  readMoreButton: PropTypes.oneOf([PropTypes.object, PropTypes.element]),
  status: PropTypes.object
};

export default Subjects;