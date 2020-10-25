import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';
import {SectionTitle} from '../Typography';

const Subjects = ({
  content,
  domain,
  customLeftTitle,
  customCenterTitle,
  customRightTitle,
  leftActionButtonProps,
  centerActionButtonProps,
  rightActionButtonProps,
  RenderSlot,
  renderType
}) => {

  const {leftColumnOptions, centerColumnOptions, rightColumnOptions} = content;
  const leftColor = content['style-color-left'];
  const centerColor = content['style-color-center'];
  const rightColor = content['style-color-right'];
  const leftType = content['style-type-left'];
  const centerType = content['style-type-center'];
  const rightType = content['style-type-right'];

  const titleLeft = content['title-left'];
  const titleCenter = content['title-center'];
  const titleRight = content['title-right'];
  const showTitleLeft = content['title-left-show'] && content['title-left-show'] == 'true';
  const showTitleCenter = content['title-center-show'] && content['title-center-show'] == 'true';
  const showTitleRight = content['title-right-show'] && content['title-right-show'] == 'true';
  
  const pqueue_left = content['items-left-pqueue'];
  const pqueue_center = content['items-center-pqueue'];
  const pqueue_right = content['items-right-pqueue'];

  const items_left = pqueue_left.length > 0 ? pqueue_left : content['items-left'];
  const items_center = pqueue_center.length > 0 ? pqueue_center : content['items-center'];
  const items_right = pqueue_right.length > 0 ? pqueue_right : content['items-right'];

  const renderSectionTitle = (customComponent, customColor, customTitle) => {
    if (customComponent) return React.cloneElement(customComponent, {children: customTitle, color: customColor});
    return <SectionTitle weight='bold' gutter={3} color={rightColor}>{customTitle}</SectionTitle>;
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
      <Block custom='Prensa-Templates-Subjects' lg={{align: 'row between'}}>
        <Block custom='col left'>
          <Block custom='col-section'>
            {showTitleLeft && renderSectionTitle(customLeftTitle, leftColor, titleLeft)}
          </Block>
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_left} 
              subjectColor={leftColor} 
              teaserProps={renderType(leftType)}
            />}
          {renderActionButton(leftColumnOptions, leftColor, leftActionButtonProps)}
        </Block>
        <Block custom='col center'>
          <Block custom='col-section'>
            {showTitleCenter && renderSectionTitle(customCenterTitle, centerColor, titleCenter)}
          </Block>
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_center} 
              subjectColor={centerColor} 
              teaserProps={renderType(centerType)}
            />}
          {renderActionButton(centerColumnOptions, centerColor, centerActionButtonProps)}
        </Block>
        <Block custom='col right'>
          <Block custom='col-section'>
            {showTitleRight && renderSectionTitle(customRightTitle, rightColor, titleRight)}
          </Block>
          {RenderSlot && 
            <RenderSlot 
              domain={domain}
              items={items_right} 
              subjectColor={rightColor} 
              teaserProps={renderType(rightType)}
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
    ['style-color-left']: PropTypes.string,
    ['style-color-center']: PropTypes.string,
    ['style-color-right']: PropTypes.string,
    ['style-type-left']: PropTypes.string,
    ['style-type-center']: PropTypes.string,
    ['style-type-right']: PropTypes.string,
    ['title-left']: PropTypes.string,
    ['title-center']: PropTypes.string,
    ['title-right']: PropTypes.string,
    ['title-left-show']: PropTypes.string,
    ['title-center-show']: PropTypes.string,
    ['title-right-show']: PropTypes.string,
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
  RenderSlot: PropTypes.func,
  renderType: PropTypes.func
};

export default Subjects;