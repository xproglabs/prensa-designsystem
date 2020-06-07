import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Grid = props => {

  const {columns} = props;

  let colSize;

  switch(columns) {
    case 1:
      colSize = 'xp-1-col';
      break;
    case 2:
      colSize = 'xp-2-col';
      break;
    case 3:
      colSize = 'xp-3-col';
      break;
    case 4:
      colSize = 'xp-4-col';
      break;
    case 5:
      colSize = 'xp-5-col';
      break;
    case 6:
      colSize = 'xp-6-col';
      break;
    case 7:
      colSize = 'xp-7-col';
      break;
    case 8:
      colSize = 'xp-8-col';
      break;
    case 9:
      colSize = 'xp-9-col';
      break;
    case 10:
      colSize = 'xp-10-col';
      break;
    case 11:
      colSize = 'xp-11-col';
      break;
    case 12:
      colSize = 'xp-12-col';
      break;
    default:
      return null;
  }

  return (
    <div className={classnames(colSize)}>
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
  ])
};

export default Grid;