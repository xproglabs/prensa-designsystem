import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Subject = ({
  bgColor,
  color,
  value
}) => {
  const propsSubject = {
    bgColor,
    custom: `
      border-radius: 3px;
    `,
    mb: 1,
    pb: '4px',
    pt: '4px',
    px: 2,
    lg: {
      mb: 2
    }
  };
  return (
    <Block {...propsSubject}>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='p'
        fontSize='14px'
        fontFamily='secondary'
        fontWeight={700}
        lineHeight='20px'
      />
    </Block>
  );
};

Subject.defaultProps = {
  bgColor: 'primary1',
  color: 'white',
  value: 'MÍDIA DIGITAL'
};

Subject.propTypes = {
  /**
   * Background do Subject
   */
  bgColor: PropTypes.string,
  /**
   * Cor do Subject
   */
  color: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default Subject;