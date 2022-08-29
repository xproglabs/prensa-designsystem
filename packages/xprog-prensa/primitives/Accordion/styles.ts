import PropTypes from 'prop-types'

import { PrensaEngine } from '../../prensa.default.config'

export const AccordionGroup = PrensaEngine.styled('div', {
  borderColor: '$brandNeutral500',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '$alternative',

  variants: {
    size: {
      maxContent: { width: '$accordion$sizeMaxContent' },
      sm: { width: '$accordion$sizeSm' },
      md: { width: '$accordion$sizeMd' },
      lg: { width: '$accordion$sizeLg' },
      fullWidth: { width: '$accordion$sizeFullWidth' }
    }
  }
})

AccordionGroup.propTypes = {
  size: PropTypes.any
}

export const AccordionContent = PrensaEngine.styled('section', {
  variants: {
    innerSpace: {
      sm: { p: '$4' },
      md: { p: '$6' },
      lg: { p: '$8' }
    }
  }
})

AccordionContent.propTypes = {
  innerSpace: PropTypes.any
}

export type AccordionGroupType = typeof AccordionGroup
export type AccordionContentType = typeof AccordionContent