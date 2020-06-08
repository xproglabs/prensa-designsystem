import React from 'react';

import Subject from '../src/Subject';
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