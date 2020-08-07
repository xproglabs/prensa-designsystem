import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import {ArrowCircleDownBlack18Dp, CompareArrows24Px, ArrowCircleUp24Px, DoneOutline24Px} from '../icons';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Icons',
  decorators: [withKnobs, sassWrapper]
};

export const _ArrowCircleDownBlack18Dp = () => <ArrowCircleDownBlack18Dp width={40} height={40} />;
export const _CompareArrows24Px = () => <CompareArrows24Px width={40} height={40} />;
export const _ArrowCircleUp24Px = () => <ArrowCircleUp24Px width={40} height={40} />;
export const _DoneOutline24Px = () => <DoneOutline24Px />;