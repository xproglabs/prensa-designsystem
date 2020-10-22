import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const Template7030 = ({customTitle, content, domain, lazy, status, theme, leftActionButtonProps, centerActionButtonProps}) => {
  const {
    title,
    titleLeft,
    titleCenter,
    styleLeft,
    styleCenter,
    leftContent,
    centerContent,
    // rightContent,
    leftQueue,
    centerQueue,
    // rightQueue,
    leftColumnOptions,
    centerColumnOptions
  } = content;

  const {color} = theme;

  const leftItems = leftQueue.length > 0 ? leftQueue : leftContent;
  const centerItems = centerQueue.length > 0 ? centerQueue : centerContent;
  // const rightItems = rightQueue.length > 0 ? rightQueue : rightContent;

  const renderBlockTitle = () => {
    if (!title) return null;
    if (customTitle) return customTitle;
    return <SectionTitle weight='bold' gutter={3} color={color}>{title}</SectionTitle>;
  };

  const handleClick = (e, params) => {
    const {actionButtonPath} = params;
    if (actionButtonPath === '') return null;
    e.preventDefault();
    window.location.assign(actionButtonPath);
  };

  const renderLeftActionButton = () => {
    const {hasActionButton, actionButtonTitle} = leftColumnOptions;
    if (hasActionButton === 'false') return null;
    return (
      <Block>
        <Button fullWidth onClick={e => handleClick(e, leftColumnOptions)} color={styleLeft} {...leftActionButtonProps}>
          {actionButtonTitle}
        </Button>
      </Block>
    );
  };

  const renderCenterActionButton = () => {
    const {hasActionButton, actionButtonTitle} = centerColumnOptions;
    if (hasActionButton === 'false') return null;
    return (
      <Block>
        <Button fullWidth onClick={e => handleClick(e, centerColumnOptions)} color={styleCenter} {...centerActionButtonProps}>
          {actionButtonTitle}
        </Button>
      </Block>
    );
  };
  
  return (
    <React.Fragment>
      {renderBlockTitle()}
      <Block custom='Prensa-Templates-7030' lg={{align: 'row between'}}>
        <Block custom='col left'>
          <SectionTitle weight='bold' gutter={3} color={styleLeft}>{titleLeft}</SectionTitle>
          {map(leftItems, (item, key) => (
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={styleLeft} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          ))}
          {renderLeftActionButton()}
        </Block>
        <Block custom='col center'>
          <SectionTitle weight='bold' gutter={3} color={styleCenter}>{titleCenter}</SectionTitle>
          {map(centerItems, (item, key) => (
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={styleCenter} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          ))}
          {renderCenterActionButton()}
        </Block>
        <Block custom='col right'>
          {/* <SectionTitle weight='bold' gutter={3} color={color}>Anúncios</SectionTitle> */}
          {/* {map(rightItems, (item, key) => (
            <Teaser content={item} domain={domain} lazy={lazy} key={key} status={status} subjectSize={2} subjectColor={rightColor} titleSize={2} titleColor='neutral-2' dateColor='neutral-4' titleWeight='bold'/>
          ))} */}
          {/* {readMoreButton && readMoreButton} */}
        </Block>
      </Block>
    </React.Fragment>
  );
};

Template7030.propTypes = {
  customTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.element]),
  content: PropTypes.shape({
    title: PropTypes.string,
    titleLeft: PropTypes.string,
    titleCenter: PropTypes.string,
    styleLeft: PropTypes.string,
    styleCenter: PropTypes.string,
    leftContent: PropTypes.array,
    centerContent: PropTypes.array,
    rightContent: PropTypes.array,
    leftQueue: PropTypes.array,
    centerQueue: PropTypes.array,
    rightQueue: PropTypes.array,
    leftColumnOptions: PropTypes.shape({
      hasActionButton: PropTypes.string,
      actionButtonPath: PropTypes.string,
      actionButtonTitle: PropTypes.string
    }),
    centerColumnOptions: PropTypes.shape({
      hasActionButton: PropTypes.string,
      actionButtonPath: PropTypes.string,
      actionButtonTitle: PropTypes.string
    }),
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.string
  }),
  leftActionButtonProps: PropTypes.object,
  centerActionButtonProps: PropTypes.object
};

export default Template7030;