import { get } from 'lodash'

import { theme } from '../theme'

const parseRadius = (props, propName) => {
  const propValue = get(props, propName)
  if (!propValue) return ''
  const selected = theme.radius[propValue]
  if (!selected) {
    console.error(`PRENSA :: Erro ao traduzir token "${propValue}" no parseRadius`)
    return ''
  }
  return `border-radius: ${selected}`
}

export { parseRadius }