import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {SectionTitle} from '../Typography';
import Teaser from '../Teasers';

const Subjects = props => {
  const {content, domain, lazy, ReadMore, status} = props;
  const {title} = content;
  const propsTemplate = {custom: 'templates-subjects', lg:{align: 'row between'}};
  let pqueue_left = content['items-left-pqueue'];
  let pqueue_center = content['items-center-pqueue'];
  let pqueue_right = content['items-right-pqueue'];
  let items_left =  pqueue_left && pqueue_left.length > 0 ? pqueue_left : content['items-left'];
  let items_center =  pqueue_center && pqueue_center.length > 0 ? pqueue_center : content['items-center'];
  let items_right =  pqueue_right && pqueue_right.length > 0 ? pqueue_right : content['items-right'];
  return (
    <>
      {title && title !== ''&& <SectionTitle name={title} />}
      <Block {...propsTemplate} > 
        <Block custom={`col left ${content['style-left']}`}>
          <SectionTitle>{content['title-left']}</SectionTitle>
          {map(items_left, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />
          )}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col center ${content['style-center']}`}>
          <SectionTitle>{content['title-center']}</SectionTitle>
          {map(items_center, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />
          )}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col right ${content['style-right']}`}>
          <SectionTitle>{content['title-right']}</SectionTitle>
          {map(items_right, (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />
          )}
          {ReadMore && <ReadMore />}
        </Block>
      </Block>
    </>
  );
};
Subjects.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  ReadMore: PropTypes.func,
  status: PropTypes.object
};
export default Subjects;