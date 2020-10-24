import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';
import {SectionTitle} from '../Typography';

const Subjects = ({
  content,
  domain,
  customTitle,
  customLeftTitle,
  customCenterTitle,
  customRightTitle,
  leftActionButtonProps,
  centerActionButtonProps,
  rightActionButtonProps,
  leftTeaserProps,
  centerTeaserProps,
  rightTeaserProps,
  RenderSlot
}) => {

  const {title, leftColumnOptions, centerColumnOptions, rightColumnOptions} = content;
  const leftColor = content['style-left'];
  const centerColor = content['style-center'];
  const rightColor = content['style-right'];

  const titleLeft = content['title-left'];
  const titleCenter = content['title-center'];
  const titleRight = content['title-right'];
  
  const pqueue_left = content['items-left-pqueue'];
  const pqueue_center = content['items-center-pqueue'];
  const pqueue_right = content['items-right-pqueue'];

  const items_left = pqueue_left.length > 0 ? pqueue_left : content['items-left'];
  const items_center = pqueue_center.length > 0 ? pqueue_center : content['items-center'];
  const items_right = pqueue_right.length > 0 ? pqueue_right : content['items-right'];

  const renderBlockTitle = () => {
    if (!title) return null;
    if (customTitle) return React.cloneElement(customTitle, {children: title});
    return <SectionTitle weight='bold' gutter={3} color={leftColor}>{title}</SectionTitle>;
  };

  const renderLeftTitle = () => {
    if (!titleLeft) return null;
    if (customLeftTitle) return React.cloneElement(customLeftTitle, {children: titleLeft, color: leftColor});
    return <SectionTitle weight='bold' gutter={3} color={leftColor}>{titleLeft}</SectionTitle>;
  };

  const renderCenterTitle = () => {
    if (!titleCenter) return null;
    if (customCenterTitle) return React.cloneElement(customCenterTitle, {children: titleCenter, color: centerColor});
    return <SectionTitle weight='bold' gutter={3} color={centerColor}>{titleCenter}</SectionTitle>;
  };

  const renderRightTitle = () => {
    if (!titleRight) return null;
    if (customRightTitle) return React.cloneElement(customRightTitle, {children: titleRight, color: rightColor});
    return <SectionTitle weight='bold' gutter={3} color={rightColor}>{titleRight}</SectionTitle>;
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
      <Block custom='Prensa-Templates-Subjects' lg={{align: 'row between'}}>
        <Block custom='col left'>
          {renderLeftTitle()}
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_left} 
              subjectColor={leftColor} 
              teaserProps={leftTeaserProps} 
            />}
          {renderActionButton(leftColumnOptions, leftColor, leftActionButtonProps)}
        </Block>
        <Block custom='col center'>
          {renderCenterTitle()}
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_center} 
              subjectColor={centerColor} 
              teaserProps={centerTeaserProps} 
            />}
          {renderActionButton(centerColumnOptions, centerColor, centerActionButtonProps)}
        </Block>
        <Block custom='col right'>
          {renderRightTitle()}
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_right} 
              subjectColor={rightColor} 
              teaserProps={rightTeaserProps} 
            />}
          {renderActionButton(rightColumnOptions, rightColor, rightActionButtonProps)}
        </Block>
      </Block>
    </React.Fragment>
  );
};

Subjects.propTypes = {
  content: PropTypes.shape({
    contentId: PropTypes.string,
    name: PropTypes.string,
    template: PropTypes.string,
    title: PropTypes.string,
    leftColumnOptions: PropTypes.object,
    centerColumnOptions: PropTypes.object,
    rightColumnOptions: PropTypes.object,
    ['input-template']: PropTypes.string,
    ['items-left']: PropTypes.array,
    ['items-left-pqueue']: PropTypes.array,
    ['items-center']: PropTypes.array,
    ['items-center-pqueue']: PropTypes.array,
    ['items-right']: PropTypes.array,
    ['items-right-pqueue']: PropTypes.array,
    ['style-left']: PropTypes.string,
    ['style-center']: PropTypes.string,
    ['style-right']: PropTypes.string,
    ['title-left']: PropTypes.string,
    ['title-center']: PropTypes.string,
    ['title-right']: PropTypes.string,
  }),
  domain: PropTypes.string,
  lazy: PropTypes.func,
  status: PropTypes.object,
  theme: PropTypes.shape({
    color: PropTypes.string
  }),
  customTitle: PropTypes.element,
  customLeftTitle: PropTypes.element,
  customCenterTitle: PropTypes.element,
  customRightTitle: PropTypes.element,
  leftActionButtonProps: PropTypes.object,
  centerActionButtonProps: PropTypes.object,
  rightActionButtonProps: PropTypes.object,
  leftTeaserProps: PropTypes.object,
  centerTeaserProps: PropTypes.object,
  rightTeaserProps: PropTypes.object,
  RenderSlot: PropTypes.func
};

export default Subjects;