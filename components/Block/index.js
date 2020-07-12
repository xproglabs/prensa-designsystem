import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {
  const {
    custom,    
    xs,
    sm,
    md,
    lg,
    xl,
    onClick,
  } = props;

  const defProps = (prefix, media) => classnames({
    [`bg-${media && media.bg}${prefix}`]: media && media.bg,
    [`fc-${media && media.color}${prefix}`]: media && media.color,
    [`h-${media && media.h}${prefix}`]: media && media.h,
    [`m-${media && media.m}${prefix}`]: media && media.m,
    [`mt-${media && media.mt}${prefix}`]: media && media.mt,
    [`mr-${media && media.mr}${prefix}`]: media && media.mr,
    [`mb-${media && media.mb}${prefix}`]: media && media.mb,
    [`ml-${media && media.ml}${prefix}`]: media && media.ml,
    [`p-${media && media.p}${prefix}`]: media && media.p,
    [`pt-${media && media.pt}${prefix}`]: media && media.pt,
    [`pr-${media && media.pr}${prefix}`]: media && media.pr,
    [`pb-${media && media.pb}${prefix}`]: media && media.pb,
    [`pl-${media && media.pl}${prefix}`]: media && media.pl,
    [`w-${media && media.w}${prefix}`]: media && media.w,
    [`${custom}`]: custom,
  });

  const dProps = defProps('', props);
  const xsProps = defProps('--xs', xs);
  const smProps = defProps('--sm', sm);
  const mdProps = defProps('--md', md);
  const lgProps = defProps('--lg', lg);
  const xlProps = defProps('--xl', xl);

  const classProps = [dProps, xsProps, smProps, mdProps, lgProps, xlProps];

  return (
    <div className={classnames(...classProps)} onClick={onClick}>
      {props.children && props.children}
    </div>
  );
};

Block.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node
  ]),
  custom: PropTypes.string, 
  style: PropTypes.oneOf([
    'article', '3-col', '4-col'
  ]),
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  onClick: PropTypes.func
};

Block.defaultProps = {
  p: null
};

export default Block;