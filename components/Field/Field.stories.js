import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from '../../styles/theme';
import Field from './index';

export default {
  title: 'Field',
  component: Field,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Field
        value='Testando um valor dentro do input'
        onChange={value => console.log(value)}
        disabled={true}
      />
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