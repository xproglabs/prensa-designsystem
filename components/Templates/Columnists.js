import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';

const Columnists = props => {
  const {content, status} = props;
  const propsTemplate = {custom: 'templates-columnists', lg:{align: 'row between wrap'}};
  return (
    <Block {...propsTemplate} > 
      {map(content['items'], (item, key) =>
        <Teaser content={item} key={key} status={status} />)}
    </Block>

  );
};
Columnists.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};
export default Columnists;