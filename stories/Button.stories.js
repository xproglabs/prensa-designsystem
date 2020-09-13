import React from 'react';

import Button from '../components/Button';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Button',
  component: Button,
  decorators: [sassWrapper]
};

export const Primary = () => {
  return (
    <div style={{padding: 8}}>
      <Button color='primary' variant='filled'>Avançar</Button>
      <Button color='secondary' variant='filled'>Avançar</Button>
      <Button color='primary' variant='outlined'>Avançar</Button>
      <Button color='secondary' variant='outlined'>Avançar</Button>
      <br/>
      <Button fullWidth color='secondary' variant='filled'>Avançar</Button>
    </div>
  );
};