import PropTypes from 'prop-types'
import React from 'react'

import { Content, StyledContainer } from './styled'

const AmpMenu = ({ backgroundColor, children, id, layout, menuAnchor, px, py }) => {
  return (
    <StyledContainer $backgroundColor={backgroundColor}>
      <amp-sidebar id={id} layout={layout} side={menuAnchor}>
        <Content px={px} py={py}>
          {children}
        </Content>
      </amp-sidebar>
    </StyledContainer>
  )
}

AmpMenu.defaultProps = {
  backgroundColor: 'white',
  layout: 'nodisplay',
  menuAnchor: 'left'
}

AmpMenu.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  layout: PropTypes.string,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default AmpMenu