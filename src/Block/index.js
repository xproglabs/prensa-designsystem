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
    m,
    mb,
    ml,
    mr,
    mt,
    p,
    pb,
    pl,
    pr,
    pt,
    row,
    height,
    width,
    style
  } = props;

  const getStyle = () => {
    switch(style) {
      case '3-col':
        return 'block-three-col';
      case '4-col':
        return 'block-four-col';
      default:
        return '';
    }
  };
  console.log(getStyle());

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
    [`xp-h-${height}`]: height,
    [`xp-m-${m}`]: m,
    [`xp-mb-${mb}`]: mb,
    [`xp-ml-${ml}`]: ml,
    [`xp-mr-${mr}`]: mr,
    [`xp-mt-${mt}`]: mt,
    [`xp-p-${p}`]: p,
    [`xp-pb-${pb}`]: pb,
    [`xp-pl-${pl}`]: pl,
    [`xp-pr-${pr}`]: pr,
    [`xp-pt-${pt}`]: pt,
    [`xp-w-${width}`]: width,
    [`${custom}`]: custom
  });
  return (
    <div className={classnames(classes, getStyle())}>
      {props.children}
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
    PropTypes.object
  ]).isRequired,
  custom: PropTypes.string,
  fitH: PropTypes.bool,
  fitW: PropTypes.bool,
  m: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mb: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  ml: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mr: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  mt: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  p: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pb: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pl: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pr: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  pt: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl'
  ]),
  row: PropTypes.bool,
  height: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  width: PropTypes.oneOf([
    'xs', 'sm', 'md', 'lg', 'xl', 'full'
  ]),
  style: PropTypes.oneOf([
    '3-col', '4-col'
  ])
};

Block.defaultProps = {
  p: 'md'
};

export default Block;