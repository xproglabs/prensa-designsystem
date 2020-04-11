import PropTypes from 'prop-types';
import React from 'react';

const Input = ({disabled, invalid, label, onEnter, setValue, type, value, warning}) => {
  
  const KeyDown = ({key}) => key === 'Enter' && onEnter && onEnter();
  
  const Label = () => <p className={'label'}>{label && label}</p>;
  
  const Warning = () => <p className={`warning`}>{warning && invalid ? warning : ` `}</p>

  return (
    <div className={`form-field ${invalid ? 'invalid' : ''} ${type ? type : ''}`}>
      <Label />
      {type === 'textarea' ? (
        <textarea
          defaultValue={value} 
          disabled={disabled ? disabled : false}
          onChange={({target}) => setValue(target.value)} 
          onKeyDown={KeyDown} 
        ></textarea>
      ) : (
        <input 
          defaultValue={value} 
          disabled={disabled}
          onChange={({target}) => setValue(target.value)} 
          onKeyDown={KeyDown} 
          type={type ? type : 'text'} 
        />
      )
      }
      <Warning />
    </div>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
};

export default {Input};