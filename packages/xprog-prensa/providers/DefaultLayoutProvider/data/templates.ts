import { TemplateProps } from '../../../news/PageBlock/types'

const Template100: TemplateProps = {
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

const Template7030: TemplateProps = {
  customCss: {
    container: {
      pt: '$3',
      width: '100%'
    },
    columnHolder: {
      backgroundColor: 'rgba(2000,100,0,0.1)',
      '@lg': {
        align: ['row', 'between', 'top'],
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      }
    },
    column: {},
    item: {
      backgroundColor: 'rgba(2000,100,0,0.3)'
    }
  },
  customProps: {
    container: {
      className: 'Template7030Container'
    }
  }
}

export const templates = {
  Template100,
  Template7030
}

export const templatesArray: string[] = Object.keys(templates)

export type templatesTypes = typeof templatesArray
