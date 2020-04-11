import React from 'react'
import PropTypes from 'prop-types'

const Input = ({disabled, onEnter, setValue, value}) => {
  const handleKeyDown = ({key}) => key === `Enter` && onEnter && onEnter()
  return (
    <div className={`input-field`}>
      <input 
        defaultValue={value} 
        disabled={disabled ? disabled : false}
        onChange={({target}) => setValue(target.value)} 
        onKeyDown={handleKeyDown} 
        type={`text`} 
      />
    </div>
  )
}
Input.propTypes = {
  disabled: PropTypes.bool,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default {Input}