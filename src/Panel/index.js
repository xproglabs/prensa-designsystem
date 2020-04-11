import React from 'react'
import PropTypes from 'prop-types'

const Panel = ({children, style}) => {
  return (
    <div className={`panel-body ${style ? style : ``}`}>
      {children && children}
    </div>
  )
}

Panel.propTypes = {
  style: PropTypes.string
}

export default Panel