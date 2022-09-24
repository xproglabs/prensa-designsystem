import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'
import { TeaserTypes as t } from '../../../types'
import {
  slotLayoutArray,
  templatesArray
} from '../../../providers/LayoutProvider/data'

const getArgsTableForTeaser = (components) => {
  <>
    <Title />
    <ArgsTable components={components} />
  </>
}

const getArgTypesForTeaser = {
  argTypes: {
    slotTemplate: {
      control: {
        type: 'select',
        options: templatesArray
      }
    },
    slotLeftLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotCenterLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotRightLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotLeftItems: {
      control: {
        type: 'range',
        min: 0,
        max: 8
      }
    },
    slotCenterItems: {
      control: {
        type: 'range',
        min: 0,
        max: 8
      }
    },
    slotRightItems: {
      control: {
        type: 'range',
        min: 0,
        max: 8
      }
    }
  }
}

export {
  getArgsTableForTeaser,
  getArgTypesForTeaser
}