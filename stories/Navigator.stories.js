import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Topbar from '../src/Navigator/MainTopbar';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Modules | Navigator',
  component: Readme,
  decorators: [withKnobs, sassWrapper]
};

export const Readme = () => {
  return (
    <p>
      <h3>Modelo de payload JSON</h3><br />
      <a href="https://pastebin.com/MqNVQ6uR" 
        rel="noopener noreferrer"
        target="_blank">
        https://pastebin.com/MqNVQ6uR
      </a>
    </p>
  );
};

export const MainMenu = () => 
  <Topbar data={null} />;

export const MainTopbar = () => {
  const content = {};
  const status = {
    loading: boolean('loading', false),
    error: boolean('loading', false)
  };
  const data = {
    content: content,
    status: status
  };
  return (
    <Topbar data={data} />
  );
};