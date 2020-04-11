import React from 'react';
import {Form} from '../../';

const Example = () => {
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState(``)
  const handleClick = () => console.log(`click`)
  console.log(`value`, value)
  return (
    <div>
      <p>forms.example</p>
      <Form.Input
        disabled={loading}
        invalid={true}
        setValue={setValue} 
        value={value} 
      />
    </div>
  );
}

export default Example;