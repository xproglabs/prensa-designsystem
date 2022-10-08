import { PageBlockTypes } from '../../../types'

const Template100: PageBlockTypes.PageBlockProps = {
  css: {
    container: {
      backgroundColor: '$basicBlackAlpha100',
      py: '$3',
      width: '100%'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        backgroundColor: '$basicBlackAlpha100',
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      },
      '.Column:nth-child(2)': {
        display: 'none'
      },
      '.Column:nth-child(3)': {
        display: 'none'
      }
    }
  }
}

const Template7030: PageBlockTypes.PageBlockProps = {
  css: {
    container: {
      backgroundColor: '$basicBlackAlpha100',
      py: '$3',
      width: '100%'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        backgroundColor: '$basicBlackAlpha100',
        maxWidth: '1280px',
        width: 'calc(100% - $8)',
        '.Column:nth-child(1)': {
          width: 'calc(calc(calc(100% - $4) / 3) * 2)'
        },
        '.Column:nth-child(2)': {
          width: 'calc(calc(calc(100% - $4) / 3) * 1)'
        }
      },
      '.Column:nth-child(3)': {
        display: 'none'
      }
    }
  }
}

const Template30: PageBlockTypes.PageBlockProps = {
  css: {
    container: {
      backgroundColor: '$basicBlackAlpha100',
      py: '$3',
      width: '100%'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        backgroundColor: '$basicBlackAlpha100',
        maxWidth: '1280px',
        width: 'calc(100% - $8)',
        '.Column:nth-child(1)': {
          width: 'calc(calc(calc(100% - $8) / 3) * 1)'
        },
        '.Column:nth-child(2)': {
          width: 'calc(calc(calc(100% - $8) / 3) * 1)'
        },
        '.Column:nth-child(3)': {
          width: 'calc(calc(calc(100% - $8) / 3) * 1)'
        }
      }
    },
    column: {
      '@lg': {
        width: 'calc(calc(100% - $6) / 3)'
      }
    }
  },
  customProps: {
    container: {
      className: 'Template7030'
    }
  }
}

export const templates = { Template100, Template7030, Template30 }
export const templatesKeys = ['Template100', 'Template7030', 'Template30'] as const
export type TemplatesType = typeof templatesKeys[number]