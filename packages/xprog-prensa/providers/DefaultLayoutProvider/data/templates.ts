import { TemplateLayout } from '../../../news/PageBlock/types/TemplateLayout'

const Template100: TemplateLayout = {
  customCss: {
    container: {
      backgroundColor: 'rgba(0,0,0,0.04)',
      pt: '$3',
      mb: '$8'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      }
    }
  }
}

const Template7030: TemplateLayout = {
  customCss: {
    container: {
      backgroundColor: 'rgba(2000,200,0,0.4)',
      pt: '$3',
      width: '100%'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      }
    },
    column: {
      backgroundColor: '$basicError600'
    }
  }
}

export const templates = {
  Template100,
  Template7030
}

export const templatesArray: string[] = Object.keys(templates)

export type templatesTypes = typeof templatesArray
