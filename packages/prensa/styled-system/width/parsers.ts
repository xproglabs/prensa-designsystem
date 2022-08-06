export function generateWidth(value, factor) {
  if (typeof value === 'string') return `width: ${value};`
  if (typeof value === 'number') return `width: ${value * factor};`
}