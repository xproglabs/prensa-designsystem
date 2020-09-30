import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const Columnists = props => {
  const {content, domain, lazy, status} = props;
  const {title, color} = content;
  const propsTemplate = {custom: 'templates-columnists', mb: '6', lg: {align: 'row between wrap', mb: '3'}};
  return (
    <>
      {title && title !== '' && <SectionTitle weight='bold' color={color}>{title}</SectionTitle>}
      <Block {...propsTemplate}> 
        {map(content['items'], (item, key) =>
          <Teaser content={item} domain={domain} key={key} lazy={lazy} status={status} subjectSize={2} titleSize={2} titleWeight='bold' titleColor='neutral-2' dateColor='neutral-4' />
        )}
      </Block>
    </>
  );
};
Columnists.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
    items: PropTypes.array
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object
};
export default Columnists;