import React from 'react'
import PropTypes from 'prop-types'

const Body = ({children}) => {
  return (
    <div className={`panel-body`}>
      {children && children}
    </div>
  )
}

Body.propTypes = {}

export default {Body}