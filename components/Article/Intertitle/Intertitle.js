import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Intertitle = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block width='100%'>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element={element}
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1],
          mb: mb[1]
        }}
        mb={mb[0]}
      />
    </Block>
  );
};

Intertitle.defaultProps = {
  color: 'neutral2',
  element: 'h3',
  fontFamily: 'primary',
  fontWeight: 700,
  fontSize: ['18px', '30px'],
  lineHeight: ['22px', '36px'],
  mb: ['2', '3'],
  value: 'Assunto'
};

Intertitle.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.number,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

export default Intertitle;