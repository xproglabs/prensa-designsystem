import React from 'react';
import {ThemeProvider} from 'styled-components';

import {IcMenu} from '../../icons/IcMenu';
import {theme} from '../../styles/theme';
import ChevronRight from '../AccordionEditorial/assets/ChevronRight';

export default {
  title: 'Icons',
  component: IcMenu,
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <IcMenu/>
    <ChevronRight/>
    <IcMenu width='32' height='32' color='primary1' />
    <ChevronRight width='32' height='32' color='editorial4' />
  </ThemeProvider>
);