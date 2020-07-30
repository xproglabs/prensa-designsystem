import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';


const Subjects = props => {
  const {content, status} = props;
  const propsTemplate = {custom: 'templates-subjects', lg:{align: 'row between'}};
  return (
    <Block {...propsTemplate} > 
      <Block custom='col left'>
        {map(content['items-left'], (item, key) =>
          <Teaser content={item} key={key} status={status} />)}
      </Block>
      <Block custom='col center'>
        {map(content['items-center'], (item, key) =>
          <Teaser content={item} key={key} status={status} />)}
      </Block>
      <Block custom='col right'>
        {map(content['items-right'], (item, key) =>
          <Teaser content={item} key={key} status={status} />)}
      </Block>
    </Block>

  );
};
Subjects.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};
export default Subjects;