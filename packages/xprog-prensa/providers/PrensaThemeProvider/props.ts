import { ReactNode } from 'react'

import { PrensaEngineTypeof } from '@xprog/prensa-system'

export interface PrensaThemeProviderProps {
  children?: ReactNode;
  theme?: PrensaEngineTypeof['config']['theme'];
}