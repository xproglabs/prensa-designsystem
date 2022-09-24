import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'
import DefaultTokens from '@xprog/prensa-design-tokens/3-themes/default.json';

const getArgsTableForTeaser = (components) => {
  ;<>
    <Title />
    <ArgsTable components={components} />
  </>
}

const TokensVariants = Object.keys(DefaultTokens.fontSizes)

const getArgTypesForTeaser = {
  argTypes: {
    titleVariant: {
      control: {
        type: 'select',
        options: TokensVariants
      }
    }
  }
}

export { getArgsTableForTeaser, getArgTypesForTeaser }
