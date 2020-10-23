import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';
import Teaser from '../Teasers';
import {SectionTitle} from '../Typography';

const Template7030 = ({
  content,
  domain,
  lazy,
  status,
  theme,
  customTitle,
  customLeftTitle,
  customCenterTitle,
  customRightTitle,
  leftActionButtonProps,
  centerActionButtonProps,
  rightActionButtonProps,
  leftTeaserProps,
  centerTeaserProps,
  rightTeaserProps
}) => {

  const {
    title,
    titleLeft,
    titleCenter,
    titleRight,
    styleLeft,
    styleCenter,
    styleRight,
    leftContent,
    centerContent,
    rightContent,
    leftQueue,
    centerQueue,
    rightQueue,
    leftColumnOptions,
    centerColumnOptions,
    rightColumnOptions,
    customClassLeft,
    customClassCenter,
    customClassRight,
  } = content;

  const {color} = theme;

  const leftItems = leftQueue.length > 0 ? leftQueue : leftContent;
  const centerItems = centerQueue.length > 0 ? centerQueue : centerContent;
  const rightItems = rightQueue.length > 0 ? rightQueue : rightContent;

  const renderBlockTitle = () => {
    if (!title) return null;
    if (customTitle) return React.cloneElement(customTitle, {children: title});
    return <SectionTitle weight='bold' gutter={3} color={color}>{title}</SectionTitle>;
  };

  const renderLeftTitle = () => {
    if (!titleLeft) return null;
    if (customLeftTitle) return React.cloneElement(customLeftTitle, {children: title, color: styleLeft});
    return <SectionTitle weight='bold' gutter={3} color={styleLeft}>{titleLeft}</SectionTitle>;
  };

  const renderCenterTitle = () => {
    if (!titleCenter) return null;
    if (customCenterTitle) return React.cloneElement(customCenterTitle, {children: title, color: styleCenter});
    return <SectionTitle weight='bold' gutter={3} color={styleCenter}>{titleCenter}</SectionTitle>;
  };

  const renderRightTitle = () => {
    if (!titleRight) return null;
    if (customRightTitle) return React.cloneElement(customRightTitle, {children: title, color: styleRight});
    return <SectionTitle weight='bold' gutter={3} color={styleRight}>Anúncios</SectionTitle>;
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
    <React.Fragment>
      {renderBlockTitle()}      
      <Block custom='Prensa-Templates-7030' lg={{align: 'row between'}}>
        <Block custom={`col left ${customClassLeft}`}>
          {renderLeftTitle()}
          {map(leftItems, (item, key) => (
            <Teaser key={key}
              content={item}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={styleLeft}
              {...leftTeaserProps}
            />
          ))}
          {renderActionButton(leftColumnOptions, styleLeft, leftActionButtonProps)}
        </Block>
        <Block custom={`col center ${customClassCenter}`}>
          {renderCenterTitle()}
          {map(centerItems, (item, key) => (
            <Teaser key={key}
              content={item}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={styleCenter}
              {...centerTeaserProps}
            />
          ))}
          {renderActionButton(centerColumnOptions, styleCenter, centerActionButtonProps)}
        </Block>
        <Block custom={`col right ${customClassRight}`}>
          {renderRightTitle()}
          {map(rightItems, (item, key) => (
            <Teaser key={key}
              content={item}
              domain={domain}
              lazy={lazy}
              status={status}
              subjectColor={styleRight}
              {...rightTeaserProps}
            />
          ))}
          {renderActionButton(rightColumnOptions, styleRight, rightActionButtonProps)}
        </Block>
      </Block>
    </React.Fragment>
  );
};

Template7030.propTypes = {
  customTitle: PropTypes.element,
  customLeftTitle: PropTypes.element,
  customCenterTitle: PropTypes.element,
  customRightTitle: PropTypes.element,
  content: PropTypes.shape({
    title: PropTypes.string,
    titleLeft: PropTypes.string,
    titleCenter: PropTypes.string,
    titleRight: PropTypes.string,
    styleLeft: PropTypes.string,
    styleCenter: PropTypes.string,
    styleRight: PropTypes.string,
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
    rightColumnOptions: PropTypes.shape({
      hasActionButton: PropTypes.string,
      actionButtonPath: PropTypes.string,
      actionButtonTitle: PropTypes.string
    }),
    customClassLeft: PropTypes.string,
    customClassCenter: PropTypes.string,
    customClassRight: PropTypes.string,
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.string
  }),
  leftActionButtonProps: PropTypes.object,
  centerActionButtonProps: PropTypes.object,
  rightActionButtonProps: PropTypes.object,
  leftTeaserProps: PropTypes.object,
  centerTeaserProps: PropTypes.object,
  rightTeaserProps: PropTypes.object
};

export default Template7030;