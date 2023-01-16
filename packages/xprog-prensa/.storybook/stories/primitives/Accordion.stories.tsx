import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { Accordion, AccordionContent, AccordionGroup, AccordionItemGroup } from '../../../primitives/Accordion'
import { AccordionProps } from '../../../primitives/Accordion/types'
import { Block } from '../../../primitives/Block'
import { Link } from '../../../primitives/Link/component'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { StorybookTheme } from '../../StorybookTheme'

export default {
  title: 'Primitives/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable
            components={{
              Accordion,
              AccordionContent,
              AccordionGroup,
              AccordionItemGroup
            }}
          />
        </>
      )
    }
  }
}

const CustomLink = ({ children }) => {
  return (
    <Link href='https://google.com.br' css={{ backgroundColor: 'red', opacity: 0.5 }}>
      {children}
    </Link>
  )
}

const CircledArrowRightIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 48 48'>
      <path d='m24 31.3 7.3-7.3-7.3-7.3-2.1 2.1 3.7 3.7h-9.1v3h9.1l-3.7 3.7ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z' />
    </svg>
  )
}

const Template = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <Block css={{ align: ['column', 'center', 'middle'], px: '$2', py: '$10' }}>
        <Accordion {...args} />
      </Block>
    </div>
  )
}
const SizesTemplate = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <Block
        css={{
          align: ['column', 'center', 'middle'],
          px: '$2', py: '$10',
        }}
      >
        <Block css={{ mb: '$6' }}>
          maxContent
          <Accordion {...args} size='maxContent' />
        </Block>
        <Block css={{ mb: '$6' }}>
          sm
          <Accordion {...args} size='sm' />
        </Block>
        <Block css={{ mb: '$6' }}>
          md
          <Accordion {...args} size='md' />
        </Block>
        <Block css={{ mb: '$6' }}>
          lg
          <Accordion {...args} size='lg' />
        </Block>
        <Block css={{ mb: '$6', maxWidth: '600px', width: '100%' }}>
          fullWidth
          <Accordion {...args} size='fullWidth' />
        </Block>
      </Block>
    </div>
  )
}

export const Default: { args: AccordionProps } = Template.bind({})
Default.args = {
  items: [
    {
      id: 'foxOne',
      title: 'Fox one',
      expanded: false,
      children: <pre>The quick brown fox</pre>
    },
    {
      id: 'foxTwo',
      title: 'Fox two',
      expanded: false,
      children: <pre>The quick brown fox 2</pre>
    }
  ]
}

export const Sizes: { args: AccordionProps } = SizesTemplate.bind({})
Sizes.args = {
  items: [
    {
      id: 'foxOne',
      title: 'Fox one',
      expanded: false,
      children: <pre>The quick brown fox</pre>
    },
    {
      id: 'foxTwo',
      title: 'Fox two',
      expanded: false,
      children: <pre>The quick brown fox 2</pre>
    }
  ]
}

export const Responsive: { args: AccordionProps } = Template.bind({})
Responsive.args = {
  size: {
    '@initial': 'fullWidth',
    '@sm': 'sm',
    '@md': 'md',
    '@lg': 'lg',
  },
  items: [
    {
      id: 'foxOne',
      title: 'Fox one',
      expanded: false,
      children: <pre>The quick brown fox</pre>
    },
    {
      id: 'foxTwo',
      title: 'Fox two',
      expanded: false,
      children: <pre>The quick brown fox 2</pre>
    }
  ]
}

export const Customized: { args: AccordionProps } = Template.bind({})
Customized.args = {
  css: {
    accordionItemGroup: {
      accordionTitle: {
        title: {
          my: '$2',
          backgroundColor: '$brandNeutral300'
        }
      },
      accordionContent: {
        backgroundColor: '$brandNeutral300',
        height: '$20'
      },
      accordionItemGroupContainer: {
        borderBottomColor: '$basicBlackAlpha500',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px'
      }
    }
  },
  items: [
    {
      id: 'foxOne',
      title: 'Fox one',
      expanded: false,
      children: <pre>The quick brown fox</pre>
    },
    {
      id: 'foxTwo',
      title: 'Fox two',
      expanded: false,
      children: <pre>The quick brown fox 2</pre>
    },
    {
      id: 'withHrefAndChildren',
      title: 'Fox with HREF and Children',
      href: 'https://google.com',
      icon: <CircledArrowRightIcon />,
      children: <pre>The quick brown fox 3</pre>
    },
    {
      id: 'foxCustomized',
      title: 'Fox Customized',
      onClick: (e) => console.log(e),
      icon: <CircledArrowRightIcon />
    },
    {
      id: 'foxCustomized2',
      title: 'Fox Customized 2',
      href: 'https://google.com',
      onClick: (e) => console.log(e),
      icon: <CircledArrowRightIcon />
    },
    {
      id: 'foxLink',
      title: 'Fox Link',
      href: 'https://google.com',
      icon: <CircledArrowRightIcon />
    },
    {
      id: 'foxLink',
      customLink: CustomLink,
      customLinkProps: { id: 'custom-link-element', componentOptions: { renderOnlyCustomLink: true } },
      title: 'Fox custom Link component',
      href: 'https://google.com',
      icon: <CircledArrowRightIcon />
    }
  ]
}