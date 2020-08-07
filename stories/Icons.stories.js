import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import {ArrowCircleDownBlack18Dp} from '../icons';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Icons',
  decorators: [withKnobs, sassWrapper]
};

export const _ArrowCircleDownBlack18Dp = () => <ArrowCircleDownBlack18Dp width={40} height={40} />;