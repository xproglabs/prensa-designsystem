import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import SectionTitle from '../SectionTitle'

const Subjects = props => {
  const {content, domain, ReadMore, status} = props;
  const {title} = content
  const propsTemplate = {custom: 'templates-subjects', lg:{align: 'row between'}};
  return (
    <>
      {title && title !== ""&& <SectionTitle name={title} />}
      <Block {...propsTemplate} > 
        <Block custom={`col left ${content["style-left"]}`}>
          <SectionTitle name={content["title-left"]} />
          {map(content['items-left'], (item, key) =>
            <Teaser content={item} domain={domain} key={key} status={status} />)}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col center ${content["style-center"]}`}>
          <SectionTitle name={content["title-center"]} />
          {map(content['items-center'], (item, key) =>
            <Teaser content={item} domain={domain} key={key} status={status} />)}
          {ReadMore && <ReadMore />}
        </Block>
        <Block custom={`col right ${content["style-right"]}`}>
          <SectionTitle name={content["title-right"]} />
          {map(content['items-right'], (item, key) =>
            <Teaser content={item} domain={domain} key={key} status={status} />)}
          {ReadMore && <ReadMore />}
        </Block>
      </Block>
    </>
  );
};
Subjects.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  ReadMore: PropTypes.func,
  status: PropTypes.object
};
export default Subjects;