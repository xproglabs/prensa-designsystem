import React from 'react'

const Input = ({onEnter, setValue, value}) => {
  const handleKeyDown = ({key}) => key === `Enter` && onEnter()
  return (
    <div className={`form`}>
      <div className={`input-field`}>
        <input 
          defaultValue={value} 
          onChange={({target}) => setValue(target.value)} 
          onKeyDown={handleKeyDown} 
          type={`text`} 
        />
      </div>
    </div>
  )
}

export default {Input}