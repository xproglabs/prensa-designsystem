import React from 'react';
import {Form} from '../../';

const Example = () => {
  const [value, setValue] = React.useState()
  const handleClick = () => console.log(`click`)
  console.log(`value`, value)
  return (
    <div>
      <p>forms.example</p>
      <Form.Input
        setValue={setValue} 
        onEnter={handleClick}
        value={value} 
      />
    </div>
  );
}

export default Example;