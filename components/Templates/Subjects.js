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

  const itemsLeft =  pqueue_left && pqueue_left.length > 0 ? pqueue_left : content['items-left'];
  const itemsCenter =  pqueue_center && pqueue_center.length > 0 ? pqueue_center : content['items-center'];
  const itemsRight =  pqueue_right && pqueue_right.length > 0 ? pqueue_right : content['items-right'];
  return (
    <>
      {title && title !== ''&& <SectionTitle name={title} />}
      <Block {...propsTemplate}> 
        <Block custom='col left'>
          <SectionTitle color={leftColor}>{titleLeft}</SectionTitle>
          {map(itemsLeft, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={leftColor} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' />
          )}
          {readMoreButton && readMoreButton}
        </Block>
        <Block custom='col center'>
          <SectionTitle color={centerColor}>{titleCenter}</SectionTitle>
          {map(itemsCenter, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={centerColor} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' />
          )}
          {readMoreButton && readMoreButton}
        </Block>
        <Block custom='col right'>
          <SectionTitle color={rightColor}>{titleRight}</SectionTitle>
          {map(itemsRight, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={rightColor} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' />
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