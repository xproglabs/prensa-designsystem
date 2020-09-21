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
  return (
    <>
      {title && title !== ''&& <SectionTitle name={title} />}
      <Block {...propsTemplate} > 
        <Block custom={`col left ${content['style-left']}`}>
          <SectionTitle>{content['title-left']}</SectionTitle>
          {map(content['items-left'], (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />)}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col center ${content['style-center']}`}>
          <SectionTitle>{content['title-center']}</SectionTitle>
          {map(content['items-center'], (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />)}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col right ${content['style-right']}`}>
          <SectionTitle>{content['title-right']}</SectionTitle>
          {map(content['items-right'], (item, key) =>
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} />)}
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