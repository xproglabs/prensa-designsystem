import React from 'react';
import { version } from '../package.json';

const Forms = () => {
  console.log('form ' + version);
  return (
    <p>form.loaded</p>
  );
}

export default Forms;