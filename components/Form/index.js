import PropTypes from 'prop-types'
import React from 'react'

const Input = ({ autoFocus, disabled, invalid, label, onEnter, setValue, type, value, warning }) => {
  
  const KeyDown = ({ key }) => key === 'Enter' && onEnter && onEnter()
  
  const Label = () => <p className={'label'}>{label && label}</p>
  
  const Warning = () => <p className={'warning'}>{warning && invalid ? warning : ' '}</p>

  const props = {
    autoFocus,
    defaultValue: value,
    disabled,
    onChange: ({ target }) => setValue(target.value),
    onKeyDown: KeyDown,
    type
  }
  return (
    <div className={`form-field ${invalid ? 'invalid' : ''} ${type}`}>
      <Label />
      {type === 'textarea' && (<textarea {...props}></textarea>)}
      {type !== 'textarea' && (<input {...props} />)}
      <Warning />
    </div>
  )
}

Input.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
}

Input.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
}

export default { Input }