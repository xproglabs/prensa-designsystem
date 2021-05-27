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
        mt={3}
      />
    </Block>
  );
};

Intertitle.defaultProps = {
  color: 'neutral2',
  element: 'h3',
  fontFamily: 'primary',
  fontSize: ['32px', '32px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: ['3', '3'],
  value: 'Assunto'
};

Intertitle.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

export default Intertitle;