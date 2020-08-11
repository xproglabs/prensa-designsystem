import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';

import Block from '../components/Block';
import ImageGallery from '../components/ImageGallery';
import image_data from '../mockup/imagegallery'
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | ImageGallery',
  component: DefaultComponent,
  decorators: [withKnobs, sassWrapper]
};

export const DefaultComponent = () => {
  const propsBlock = {align: 'center', mb: '4', w: '80p'}
  return (
    <Block {...propsBlock}>
      <ImageGallery items={image_data} />
    </Block>
  );
};
