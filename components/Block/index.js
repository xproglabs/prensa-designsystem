import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Block = (props) => {
  const {
    alignBetween,
    alignBottom,
    alignCenter,
    alignEvenly,
    alignLeft,
    alignMiddle,
    alignRight,
    alignTop,
    custom,    
    fitH,
    fitW,
    row,
    height,
    width,
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
    [`m-${media && media.m}${prefix}`]: media && media.m,
    [`mt-${media && media.mt}${prefix}`]: media && media.mt,
    [`mr-${media && media.mr}${prefix}`]: media && media.mr,
    [`mb-${media && media.mb}${prefix}`]: media && media.mb,
    [`ml-${media && media.ml}${prefix}`]: media && media.ml,
    [`p-${media && media.p}${prefix}`]: media && media.p,
    [`pt-${media && media.pt}${prefix}`]: media && media.pt,
    [`pr-${media && media.pr}${prefix}`]: media && media.pr,
    [`pb-${media && media.pb}${prefix}`]: media && media.pb,
    [`pl-${media && media.pl}${prefix}`]: media && media.pl
  });

  const dProps = defProps('', props);
  const xsProps = defProps('--xs', xs);
  const smProps = defProps('--sm', sm);
  const mdProps = defProps('--md', md);
  const lgProps = defProps('--lg', lg);
  const xlProps = defProps('--xl', xl);

  const classProps = [dProps, xsProps, smProps, mdProps, lgProps, xlProps];

  const classes = classnames({
    'ds-block': true,
    'fx-align-between': !row && alignBetween,
    'fx-align-bottom': !row && alignBottom,
    'fx-align-center': !row && alignCenter,
    'fx-align-evenly': !row && alignEvenly,
    'fx-align-left': !row && alignLeft,
    'fx-align-middle': !row && alignMiddle,
    'fx-align-right': !row && alignRight,
    'fx-align-top': !row && alignTop,
    'fy-align-between': row && alignBetween,
    'fy-align-bottom': row && alignBottom,
    'fy-align-center': row && alignCenter,
    'fy-align-evenly': row && alignEvenly,
    'fy-align-left': row && alignLeft,
    'fy-align-middle': row && alignMiddle,
    'fy-align-right': row && alignRight,
    'fy-align-top': row && alignTop,
    'fx-dir-col': !row,
    'fx-dir-row': row,
    'fx-fit-h': fitH,
    'fx-fit-w': fitW,
    [`h-${height}`]: height,
    [`w-${width}`]: width,
    [`${custom}`]: custom
  });

  return (
    <div className={classnames(classes, ...classProps)} onClick={onClick}>
      {props.children && props.children}
    </div>
  );
};

Block.propTypes = {
  alignBetween: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignEvenly: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  alignRight: PropTypes.bool,
  alignTop: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.node
  ]),
  custom: PropTypes.string, 
  fColor: PropTypes.string,
  fitH: PropTypes.bool,
  fitW: PropTypes.bool,
  row: PropTypes.bool,
  height: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  width: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  style: PropTypes.oneOf([
    'article', '3-col', '4-col'
  ]),
  onClick: PropTypes.func,
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object
};

Block.defaultProps = {
  p: null
};

export default Block;