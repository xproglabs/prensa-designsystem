import { LayoutProps } from 'prensa/components/styles/layouts'

type SubjectProps = LayoutProps['subject']

export const SUBJECT_DEFAULT: SubjectProps = {
  bg_color: 'white',
  color: 'primary1',
  enabled: true,
  font_size: ['14px', '14px'],
  line_height: ['16px', '16px']
}
export const SUBJECT_FILLED: SubjectProps = {
  bg_color: 'primary1',
  color: 'white',
  enabled: true,
  font_size: ['16px', '16px'],
  line_height: ['18px', '18px']
}
