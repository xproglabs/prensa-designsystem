import { LayoutProps } from 'styles/layouts'

type SubjectProps = LayoutProps['subject']

export const SUBJECT_DEFAULT: SubjectProps = {
  bg_color: 'transparent',
  color: 'primary1',
  enabled: true,
  font_size: ['12px', '12px'],
  line_height: ['16px', '16px'],
  mb: ['4px', '4px']
}
export const SUBJECT_DEFAULT_FEATURED: SubjectProps = {
  bg_color: 'transparent',
  color: 'primary1',
  enabled: true,
  font_size: ['12px', '16px'],
  line_height: ['16px', '16px'],
  mb: [1, 1]
}
export const SUBJECT_FILLED: SubjectProps = {
  bg_color: 'primary1',
  color: 'white',
  enabled: true,
  font_size: ['16px', '16px'],
  line_height: ['18px', '18px'],
  mb: [1, 1]
}
