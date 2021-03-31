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
  return (
    <ThemeProvider theme={theme}>
      <Field placeholder="Digite alguma coisa" value={state} onChange={setState} />
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