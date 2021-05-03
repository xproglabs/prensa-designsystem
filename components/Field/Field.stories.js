import React, {useRef} from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from '../../styles/theme';
import Field from './index';

export default {
  title: 'Field',
  component: Field,
};

export const Default = () => {
  const [state, setState] = React.useState('');
  const [text, setText] = React.useState('');

  return (
    <ThemeProvider theme={theme}>
      <div style={{margin: 20}}>
        <Field placeholder="Digite alguma coisa" onEnterKey={() => setText('click enter key')} value={state} onChange={setState} validation={false} validationMessage="Teste"/>
        <pre>{text}</pre>
      </div>
    </ThemeProvider>
  );
};

export const ScrollIntoView = () => {
  const [state, setState] = React.useState('');
  const [text, setText] = React.useState('');
  const fieldRef = useRef();

  const scrollToField = () => {
    fieldRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
  };

  return (
    <ThemeProvider theme={theme}>      
      <div style={{margin: 20, height: 3000, border: '1px solid black'}}>
        <Field ref={fieldRef} placeholder="Digite alguma coisa" onEnterKey={() => setText('click enter key')} value={state} onChange={setState} validation={false} validationMessage="Teste"/>
        <pre>{text}</pre>
      </div>
      <button onClick={scrollToField}>scroll to field</button>
    </ThemeProvider>
  );
};