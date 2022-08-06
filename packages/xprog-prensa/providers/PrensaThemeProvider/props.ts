import { ReactNode } from 'react'

import { PrensaThemeType } from '../../types'

export interface PrensaThemeProviderProps {
  children?: ReactNode;
  theme?: string | PrensaThemeType;
}