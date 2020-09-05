import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../components/Block';
import SearchForm from '../components/Menus/SearchForm';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Search',
  component: SearchForm,
  decorators: [withKnobs, sassWrapper]
};

export const Search = () => {
  return (
    <Block bg="color-neutral-10" p="4" w="100p-8">
      <SearchForm />
    </Block>
  );
};