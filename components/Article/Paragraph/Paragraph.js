import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.tsx'
import Typography from '../../Typography'

const Paragraph = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return (
    <Block maxWidth={maxWidth} width='100%'>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={{ __html: value }}
        element={element}
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        mb={mb[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1],
          mb: mb[1]
        }}
      />
    </Block>
  )
}

Paragraph.defaultProps = {
  color: 'neutral2',
  element: 'p',
  fontFamily: 'primary',
  fontWeight: 400,
  fontSize: ['18px', '30px'],
  lineHeight: ['22px', '36px'],
  mb: [3, 3],
  value: 'Entre os familiares e amigos próximos, no sepultamento, estava o companehiro de infância, Mitiro Nagao, que destacou a boa vontade de Horii. "Só posso dizer que ele foi uma pessoa fantástica que contribuiu muito para a cidade. Era um grande empreendedor que só pensava em melhorar esse município. Era uma pessoa que enxergava para frente. ele gostava muito das pessoas, apesar de ser reservado. Se encontrasse uma pessoa que precisasse, ele realmente ajudava".'
}

Paragraph.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
}

export default Paragraph