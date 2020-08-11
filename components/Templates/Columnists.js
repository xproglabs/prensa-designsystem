import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {Teaser} from '../Teasers';
import SectionTitle from '../SectionTitle'

const Columnists = props => {
  const {content, domain, status} = props;
  const {title} = content
  const propsTemplate = {custom: 'templates-columnists', mb:'4', lg:{align: 'row between wrap'}};
  return (
    <>
      {title && title !== ""&& <SectionTitle name={title} />}
      <Block {...propsTemplate} > 
        {map(content['items'], (item, key) =>
          <Teaser content={item} domain={domain} key={key} status={status} />)}
      </Block>
    </>
  );
};
Columnists.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  status: PropTypes.object
};
export default Columnists;