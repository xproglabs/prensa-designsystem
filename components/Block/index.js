import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {

  const {children, xs, sm, md, lg, xl, onClick} = props;

  const defProps = (prefix, props) => {

    const checkAttr = (_props, name) => 
      _props.align && 
        _props.align.indexOf(name) > -1;
    
    const direction = 
      props && 
        props.align && 
          (props.align.indexOf('row') > -1 ?
            'row' : 'col');
    
    return classnames({
      [`fx-col${prefix}`]: direction === 'col',
      [`fx-row${prefix}`]: direction === 'row',
      [`${direction}-between${prefix}`]: checkAttr(props, 'between'),
      [`${direction}-bottom${prefix}`]: checkAttr(props, 'bottom'),
      [`${direction}-center${prefix}`]: checkAttr(props, 'center'),
      [`${direction}-evenly${prefix}`]: checkAttr(props, 'evenly'),
      [`${direction}-left${prefix}`]: checkAttr(props, 'left'),
      [`${direction}-middle${prefix}`]: checkAttr(props, 'middle'),
      [`${direction}-right${prefix}`]: checkAttr(props, 'right'),
      [`${direction}-top${prefix}`]: checkAttr(props, 'top'),
      [`${direction}-wrap${prefix}`]: checkAttr(props, 'wrap'),
      [`bg-${props.bg}${prefix}`]: props.bg,
      [`cursor-${props.cursor}${prefix}`]: props.cursor,
      [`fc-${props.fc}${prefix}`]: props.fc,
      [`h-${props.h}${prefix}`]: props.h,
      [`m-${props.m}${prefix}`]: props.m,
      [`mt-${props.mt}${prefix}`]: props.mt,
      [`mr-${props.mr}${prefix}`]: props.mr,
      [`mb-${props.mb}${prefix}`]: props.mb,
      [`ml-${props.ml}${prefix}`]: props.ml,
      [`p-${props.p}${prefix}`]: props.p,
      [`pt-${props.pt}${prefix}`]: props.pt,
      [`pr-${props.pr}${prefix}`]: props.pr,
      [`pb-${props.pb}${prefix}`]: props.pb,
      [`pl-${props.pl}${prefix}`]: props.pl,
      [`w-${props.w}${prefix}`]: props.w,
      [`${props.custom}`]: props.custom,
    });
  };

  const dProps = defProps('', props);
  const xsProps = xs && defProps('--xs', xs);
  const smProps = sm && defProps('--sm', sm);
  const mdProps = md && defProps('--md', md);
  const lgProps = lg && defProps('--lg', lg);
  const xlProps = xl && defProps('--xl', xl);

  const classProps = {
    className: classnames(dProps, xsProps, smProps, mdProps, lgProps, xlProps) || 'block', 
    children, 
    onClick
  };
  return <div {...classProps}></div>;
};

const propTypesSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const colorTokens = [
  'color-white',
  'color-black',
  'color-primary-1',
  'color-primary-2',
  'color-primary-3',
  'color-secondary-1',
  'color-secondary-2',
  'color-secondary-3',
  'color-neutral-1',
  'color-neutral-2',
  'color-neutral-3',
  'color-neutral-4',
  'color-neutral-5',
  'color-neutral-6',
  'color-neutral-7',
  'color-neutral-8',
  'color-neutral-9',
  'color-neutral-10',
  'color-neutral-11',
];

Block.propTypes = {
  align: PropTypes.string,
  bg: PropTypes.oneOf(colorTokens),
  fc: PropTypes.oneOf(colorTokens),
  cursor: PropTypes.string, 
  m: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  mt: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  mr: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  mb: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  ml: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  p: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  pt: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  pr: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  pb: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  pl: PropTypes.oneOf([
    ...propTypesSizes
  ]), 
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node
  ]),
  custom: PropTypes.string, 
  onClick: PropTypes.func,
  w: PropTypes.string,
  h: PropTypes.string,
};

Block.defaultProps = {};

export default Block;