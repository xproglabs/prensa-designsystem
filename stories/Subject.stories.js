import React from 'react';

import Subject from '../components/Subject';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Subject',
  component: Subject,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 40}}>
      <Subject>
        The quick fox
      </Subject>
    </div>
  );
};
export const Filled = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 40}}>
      <Subject filled>
        The quick fox
      </Subject>
    </div>
  );
};