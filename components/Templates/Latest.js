import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import Block from '../Block';
import Button from '../Button';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';
import MostRead from './MostRead';

const Latest = ({
  content,
  domain,
  lazy,  
  status,
  theme,
  customTitle,
  customMostReadTitle,
  teaserProps,
  teaserMostReadProps,
  actionButtonProps,
}) => {

  const {color} = theme;
  const {title, contentOptions} = content;  
  const teasersContent = content['items-latest'];
  const mostReadContent = content['items-mostread'];

  const renderBlockTitle = () => {
    if (!title) return null;
    if (customTitle) return React.cloneElement(customTitle, {children: title, color: color});
    return <SectionTitle weight='bold' gutter={3} color={color}>{title}</SectionTitle>;
  };

  const renderMostReadBlockTitle = () => {
    if (!title) return null;
    if (customMostReadTitle) return React.cloneElement(customMostReadTitle, {children: 'Mais Lidas', color: color});
    return <SectionTitle weight='bold' gutter={3} color={color}>MAIS LIDAS</SectionTitle>;
  };

  const handleClick = (e, params) => {
    const {actionButtonPath} = params;
    if (actionButtonPath === '') return null;
    e.preventDefault();
    window.location.assign(actionButtonPath);
  };

  const renderActionButton = (columnOptions, style, props) => {
    const {hasActionButton, actionButtonTitle} = columnOptions;
    if (hasActionButton === 'false') return null;
    return (
      <Button fullWidth onClick={e => handleClick(e, columnOptions)} color={style} {...props}>
        {actionButtonTitle}
      </Button>
    );
  };

  return (
    <Block custom='Prensa-Templates-LatestNews' align='col left' w='100p' lg={{align: 'row between'}}>
      <Block custom='page-left'>
        {renderBlockTitle()}
        <Block custom='latest-news'>
          {map(teasersContent, (item, key) => 
            <Teaser 
              key={key}
              content={item}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={color}
              {...teaserProps}
            />
          )}
        </Block>
        {renderActionButton(contentOptions, color, actionButtonProps)}
      </Block>
      <Block custom='page-right'>
        {renderMostReadBlockTitle()}
        <MostRead content={mostReadContent} status={status} circleColor={color} {...teaserMostReadProps} />
      </Block>
    </Block>
  );
};

Latest.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  }),
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  }),
  customTitle: PropTypes.element,
  customMostReadTitle: PropTypes.element,
  teaserProps: PropTypes.object,
  teaserMostReadProps: PropTypes.object,
  actionButtonProps: PropTypes.object,
};

export default Latest;