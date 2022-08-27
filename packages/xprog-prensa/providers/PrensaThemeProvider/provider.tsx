import { createStitches } from '@stitches/react'
import Stitches from '@stitches/react/types/stitches'
import ThemeTokens from '@stitches/react/types/stitches'
import React, { createContext } from 'react'

import { PrensaEngine, PrensaEngineDefaultConfig } from '../../prensa.default.config'
import { PrensaThemeProviderProps } from './props'

type EngineType = typeof PrensaEngine;

interface ThemeContextInterface extends Partial<EngineType>{
  // theme: TModel; //ThemeTokens<"", {}, TModel>;
  // styled: Record<string, unknown>;
  // createTheme: Record<string, unknown>;
  // prensaTheme: ThemeTokens<"", {}, TModel>; //Record<string, unknown>;
}

const defaultProps: ThemeContextInterface = {
  theme: PrensaEngine.theme
}

export const ThemeContext = createContext<ThemeContextInterface | null>(defaultProps)

export const PrensaThemeProvider = (props: PrensaThemeProviderProps) => {
  const { children, theme: themeProps = {}, ...otherProps } = props
  const stitchesProps = createStitches({
    prefix: 'custom-pds',
    ...PrensaEngineDefaultConfig,
    theme: {
      ...PrensaEngineDefaultConfig.theme,
      ...themeProps,
    }
  })
  
  // const prensaTheme = stitchesProps.createTheme({})

  // const sampleThemeContext: ThemeContextInterface<typeof stitchesProps.theme> = {
  const sampleThemeContext: ThemeContextInterface = {
    // prensaTheme: prensaTheme as ThemeTokens,
    // ...stitchesProps,
    theme: stitchesProps.theme
  }

  return (
    <ThemeContext.Provider value={sampleThemeContext}>
      <div className={stitchesProps.theme.className}>
        {React.Children.map(children, (item: any) => React.cloneElement(item, otherProps))}
      </div>
    </ThemeContext.Provider>
  )
}
