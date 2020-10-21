import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';
import MostRead from './MostRead';
import colors from '../../styles/variables/colors.json'

const Latest = ({content, domain, lazy, ReadMore, Title, status, theme}) => {
  const {color} = theme;
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
              subjectColor={color}
              titleSize={3}
              titleColor='neutral-2'
              dateColor='neutral-4'
              titleWeight='bold'
            />
          )}
        </Block>
        {ReadMore && <ReadMore />}
      </Block>
      <Block {...propsPageRight}>
        <SectionTitle weight='bold' gutter={3} color={color}>MAIS LIDAS</SectionTitle>
        <MostRead content={content['items-mostread']} status={status} titleSize={2} titleColor='neutral-2' titleWeight='bold' circleColor={color} />
      </Block>
    </Block>
  );
};
Latest.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  ReadMore: PropTypes.func,
  Title: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  }),
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  })
};
export default Latest;