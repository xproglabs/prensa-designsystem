import get from 'lodash/get'

export const getColor = ({
  theme = {},
  $color = '',
}) => {
  const value = get(theme.colors, $color, '')
  return value
}