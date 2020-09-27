import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import {SectionTitle} from '../Typography';
import Teaser from '../Teasers';
import MostRead from './MostRead';

const Latest = ({content, domain, lazy, ReadMore, Title, status}) => {
  const propsContainer = {custom: 'templates-latest-news', align: 'col left', w: '100p', md: {align: 'row between'}};
  const propsPageLeft = {custom: 'page-left', mb: '6'};
  const propsPageRight = {custom: 'page-right'};
  return (
    <Block {...propsContainer}>
      <Block {...propsPageLeft}>
        {Title && <Title />}
        <Block custom="latest-news">
          {map(content['items-latest'], (item, key) => 
            <Teaser 
              content={item}
              datePublished={true}
              domain={domain}
              hasSubjectFilled={true}
              hasImageTop={true}
              key={key}
              lazy={lazy}
              status={status}
              subjectSize={2}
              titleSize={3}
              titleColor='neutral-2'
              dateColor='neutral-4'
            />
          )}
        </Block>
        {ReadMore && <ReadMore />}
      </Block>
      <Block {...propsPageRight}>
        <SectionTitle>MAIS LIDAS</SectionTitle>
        <MostRead content={content['items-mostread']} status={status} titleSize={2} titleColor='neutral-2' />
      </Block>
    </Block>
  );
};
Latest.propTypes = {
  content: PropTypes.object,
  lazy: PropTypes.func,
  ReadMore: PropTypes.func,
  Title: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};
export default Latest;