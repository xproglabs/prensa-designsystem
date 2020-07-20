import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Image from '../components/Image';
import ImageTeaser from '../components/Image/Teaser';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Image',
  component: Readme,
  decorators: [withKnobs, sassWrapper]
};

export const Readme = () => {
  return (
    <p>
      <h3>Image</h3>
    </p>
  );
};

export const Default = () => {
  const props = {
    value: {
      'image-byline': 'Carlos Delgado',
      'image-contentId': '1.125.1595196595',
      'image-subtitle': '',
      'image-subtitle-original': 'Diego Costa and Angel Trujillo1' 
    }
  };
  return <Image {...props} />;
};

export const Background = () => {
  const props = {
    value: {
      'image-byline': 'Carlos Delgado',
      'image-contentId': '1.125.1595196595',
      'image-subtitle': '',
      'image-subtitle-original': 'Diego Costa and Angel Trujillo1' 
    }
  };
  return <ImageTeaser {...props} />;
};
