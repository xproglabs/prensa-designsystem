import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from '../../styles/theme';
import Field from './index';

export default {
  title: 'Field',
  component: Field,
};

export const Primary = () => {
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

Primary.args = {
  children: 'Avançar',
};

Primary.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['primary', 'secondary']
    }
  }
};