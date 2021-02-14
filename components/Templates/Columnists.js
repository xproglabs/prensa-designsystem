import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';
import colors from '../../styles/variables/colors.json'

const Columnists = ({content, domain, lazy, status, theme}) => {
  const {title} = content;
  const activeColor = theme.colors.deprecatedActiveColor;
  const propsTemplate = {custom: 'templates-columnists', mb: '6', lg: {align: 'row between wrap', mb: '3'}};
  return (
    <React.Fragment>
      {title && title !== '' && <SectionTitle weight='bold' gutter={3} color={activeColor}>{title}</SectionTitle>}
      <Block {...propsTemplate}> 
        {map(content['items'], (item, key) =>
          <Teaser content={item} domain={domain} key={key} lazy={lazy} status={status} subjectSize={2} titleSize={2} titleWeight='bold' titleColor='neutral-2' dateColor='neutral-4' subjectColor={activeColor}/>
        )}
      </Block>
    </React.Fragment>
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
  status: PropTypes.object,
  theme: PropTypes.shape({
    activeColor: PropTypes.oneOf(colors)
  })
};
export default Columnists;