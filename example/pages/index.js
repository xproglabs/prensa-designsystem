import React from 'react';
import {Form, Panel} from '../../';

const Example = () => {
  const [fullname, setFullName] = React.useState(``)
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState(``)
  const [password, setPassword] = React.useState(``)
  const [email, setEmail] = React.useState(``)
  const [invalidFields, setInvalidField] = React.useState(``)
  const checkInvalidFields = () => {
    if(fullname.length < 3) return setInvalidField(`fullname`)
    if(email.length < 3) return setInvalidField(`email`)
    if(message.length < 3) return setInvalidField(`message`)
    if(password.length < 3) return setInvalidField(`password`)
    setInvalidField(``)
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }
  const handleClick = () => checkInvalidFields()
  return (
    <Panel.Body>
      <Form.Input
        disabled={loading}
        label={`Nome completo`}
        invalid={invalidFields === `fullname`}
        onEnter={handleClick}
        setValue={setFullName} 
        value={fullname} 
        warning={`Escreva seu nome`}
      />
      <Form.Input
        disabled={loading}
        label={`E-mail`}
        invalid={invalidFields === `email`}
        onEnter={handleClick}
        setValue={setEmail} 
        value={email} 
        warning={`Escreva seu e-mail`}
      />
      <Form.Input
        disabled={loading}
        label={`Mensagem`}
        invalid={invalidFields === `message`}
        setValue={setMessage} 
        type={`textarea`}
        value={message} 
        warning={`Escreva uma mensagem`}
      />
      <Form.Input
        disabled={loading}
        label={`Senha`}
        invalid={invalidFields === `password`}
        onEnter={handleClick}
        setValue={setPassword} 
        type={`password`}
        value={password} 
        warning={`Escreva uma senha`}
      />
    </Panel.Body>
  );
}

export default Example;