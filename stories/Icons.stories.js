import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import {Accessibility24Px as _Accessibility24Px} from '../icons';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Icons',
  decorators: [withKnobs, sassWrapper]
};

export const Accessibility24Px = () => <_Accessibility24Px width={40} height={40} fill='red'/>;