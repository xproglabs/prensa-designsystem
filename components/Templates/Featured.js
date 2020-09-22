import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';

const Featured = props => {
  const {content, domain, lazy, status} = props;
  const {items} = content;
  if(items.length === 1) {
    return (
      <Block custom='templates-featured one'>
        <Teaser 
          content={items[0]}
          domain={domain}
          hasSubjectFilled={true}
          hasSubtitle={true}
          lazy={lazy}
          status={status}
          subjectSize={2}
          titleSize={6}
        />
      </Block>
    );
  }
  if(items.length === 3) {
    const propsTemplate = {custom: 'templates-featured three', mb:'6', md: {align: 'row between', mb:'5'}};
    return (
      <Block {...propsTemplate}>
        <Block custom='block-left'>
          <Teaser 
            content={items[0]}
            domain={domain}
            hasSubjectFilled={true}
            hasSubtitle={true}
            lazy={lazy}
            status={status}
            subjectSize={2}
            titleSize={6}
            titleColor='neutral-2'
            subtitleColor='neutral-4'
            dateColor='neutral-4'
          />
        </Block>
        <Block custom='block-right'>
          <Teaser 
            content={items[1]}
            domain={domain}
            lazy={lazy}
            status={status}
            subjectSize={2}
            titleSize={3}
            titleColor='neutral-2'
            subtitleColor='neutral-4'
            dateColor='neutral-4'
          />
          <Teaser 
            content={items[2]}
            domain={domain}
            lazy={lazy}
            status={status}
            subjectSize={2}
            titleSize={3}
            titleColor='neutral-2'
            subtitleColor='neutral-4'
            dateColor='neutral-4'
          />
        </Block>
      </Block>
    );
  }
  return null;
};
Featured.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object
};
export default Featured;