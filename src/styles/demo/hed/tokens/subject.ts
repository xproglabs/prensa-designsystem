import { LayoutProps } from '../../../../types'

type SubjectProps = LayoutProps['subject']

export const SUBJECT_DEFAULT: SubjectProps = {
  color: 'primary1',
  enabled: true,
  font_size: ['12px', '12px'],
  line_height: ['16px', '16px'],
  mb: ['4px', '4px'],
  variant: 'default'
}
export const SUBJECT_DEFAULT_FEATURED: SubjectProps = {
  color: 'primary1',
  enabled: true,
  font_size: ['12px', '16px'],
  line_height: ['16px', '16px'],
  mb: [1, 1],
  variant: 'default'
}
export const SUBJECT_FILLED: SubjectProps = {
  color: 'white',
  enabled: true,
  font_size: ['16px', '16px'],
  line_height: ['18px', '18px'],
  mb: [1, 1],
  variant: 'filled'
}
