import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Grid = props => {

  const {xs, sm, md, columns} = props;

  const handlexs = () => {
    switch(xs) {
      case 25:
        return 'xs-25';
      case 33:
        return 'xs-33';
      case 50:
        return 'xs-50';
      case 75:
        return 'xs-75';
      case 100:
      default:
        return 'xs-100';
    }
  };
  const handlesm = () => {
    switch(sm) {
      case 25:
        return 'sm-25';
      case 33:
        return 'sm-33';
      case 50:
        return 'sm-50';
      case 75:
        return 'sm-75';
      case 100:
      default:
        return 'sm-100';
    }
  };
  const handlemd = () => {
    switch(md) {
      case 25:
        return 'md-25';
      case 33:
        return 'md-33';
      case 50:
        return 'md-50';
      case 75:
        return 'md-75';
      case 100:
      default:
        return 'md-100';
    }
  };

  const getColumns = () => {
    switch(columns) {
      case 1:
        return 'grid-1-col';
      case 2:
        return 'grid-2-col';
      case 3:
        return 'grid-3-col';
      case 4:
        return 'grid-4-col';
      case 5:
        return 'grid-5-col';
      case 6:
        return 'grid-6-col';
      case 7:
        return 'grid-7-col';
      case 8:
        return 'grid-8-col';
      case 9:
        return 'grid-9-col';
      case 10:
        return 'grid-10-col';
      case 11:
        return 'grid-11-col';
      case 12:
        return 'grid-12-col';
      default:
        return null;
    }
  };

  return (
    <div className={classnames(getColumns(), handlexs(), handlesm(), handlemd())}>
      {props.children}
    </div>  
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  columns: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]),
  xs: PropTypes.oneOf([
    25, 33, 50, 75, 100
  ]),
  sm: PropTypes.oneOf([
    25, 33, 50, 75, 100
  ]),
  md: PropTypes.oneOf([
    25, 33, 50, 75, 100
  ])
};

export default Grid;