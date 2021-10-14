import { CreateTeaser } from './CreateFunction'
import { SUBJECT_DEFAULT } from '../subject'

export const TEASER_DEFAULT = CreateTeaser({
  box: {
    align: ['column', 'row']
  },
  title: {
    enabled: true,
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})