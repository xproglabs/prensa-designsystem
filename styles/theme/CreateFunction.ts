import { IPrensaThemeProps } from '@prensa_tokens'
import { merge } from 'lodash'

import { PrensaDefaultTheme } from './default_theme'

/**
 * Prensa | CreateTheme
 * @param {object} props - An object that defines/overrides properties in theme
 */
function CreateTheme(props: IPrensaThemeProps | Object) {
  return merge(PrensaDefaultTheme, props)
}

export const theme = CreateTheme({})
export default CreateTheme