import { LayoutProps } from 'prensa'

type SubjectProps = LayoutProps['subject']

export const SUBJECT_DEFAULT: SubjectProps = {
  bg_color: 'white',
  color: 'primary.main',
  enabled: true,
  font_size: ['12px', '12px'],
  line_height: ['16px', '16px'],
  mb: ['4px', '4px'],
  variant: 'default'
}
export const SUBJECT_DEFAULT_FEATURED: SubjectProps = {
  bg_color: 'white',
  color: 'primary.main',
  enabled: true,
  font_size: ['12px', '16px'],
  line_height: ['16px', '16px'],
  mb: [1, 1],
  variant: 'default'
}
export const SUBJECT_FILLED: SubjectProps = {
  bg_color: 'primary.main',
  color: 'white',
  enabled: true,
  font_size: ['16px', '16px'],
  line_height: ['18px', '18px'],
  mb: [1, 1],
  variant: 'default'
}
