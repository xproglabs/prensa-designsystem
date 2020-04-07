import React from 'react';
import { version } from '../package.json';

const Version = () => {
  console.log('version ' + version);
  return (
    <p>version: {version}</p>
  );
}

export default Version;