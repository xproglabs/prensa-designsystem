import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'
import DefaultTokens from '@xprog/prensa-design-tokens/3-themes/default.json';
import { TeaserProps } from '../../../news/Teaser/types';

const getArgsTableForTeaser = (components) => {
  <>
    <Title />
    <ArgsTable components={components} />
  </>
}

const getDataForTeaser: TeaserProps = {
  subject: '🍀 Sorteio é hoje 🍀',
  subtitle: 'Apostas podem ser feitas até as 19h em lotéricas ou pela internet. Valor da aposta mínima é de R$ 4,50.',
  title: 'Mega-Sena pode pagar R$ 170 milhões hoje, um dos maiores prêmios do ano',
  path: 'https://g1.globo.com/loterias/noticia/2022/09/24/mega-sena-pode-pagar-r-170-milhoes-neste-sabado.ghtml'
}

const TokensVariants = Object.keys(DefaultTokens.fontSizes)

const getArgTypesForTeaser = {
  argTypes: {
    subjectVariant: {
      control: {
        type: 'select',
        options: TokensVariants
      }
    },
    subtitleVariant: {
      control: {
        type: 'select',
        options: TokensVariants
      }
    },
    titleVariant: {
      control: {
        type: 'select',
        options: TokensVariants
      }
    }
  }
}

export { getArgsTableForTeaser, getArgTypesForTeaser, getDataForTeaser }
