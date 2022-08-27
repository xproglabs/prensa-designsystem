import { ReactNode } from 'react'

import { PrensaEngineThemeType } from '../../types'

export interface PrensaThemeProviderProps {
  children?: ReactNode;
  theme?: PrensaEngineThemeType;
}